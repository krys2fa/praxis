import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { db } from "@/lib/db";
import type { UserJSON } from "@clerk/nextjs/server";

type ClerkWebhookEvent = {
  type: string;
  data: UserJSON;
};

export async function POST(request: Request) {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  const headersList = await headers();
  const svixId = headersList.get("svix-id");
  const svixTimestamp = headersList.get("svix-timestamp");
  const svixSignature = headersList.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json(
      { error: "Missing svix headers" },
      { status: 400 }
    );
  }

  const rawBody = await request.text();
  const wh = new Webhook(webhookSecret);

  let event: ClerkWebhookEvent;
  try {
    event = wh.verify(rawBody, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as ClerkWebhookEvent;
  } catch (err) {
    console.error("[clerk-webhook] signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const { type, data } = event;

  try {
    switch (type) {
      case "user.created": {
        const primaryEmail = data.email_addresses?.find(
          (e) => e.id === data.primary_email_address_id
        )?.email_address;

        const fullName = [data.first_name, data.last_name].filter(Boolean).join(" ") || (primaryEmail ?? "");
        await db.user.create({
          data: {
            clerkId: data.id,
            email: primaryEmail ?? "",
            name: fullName,
            avatarUrl: data.image_url ?? null,
            role: "STUDENT",
          },
        });

        console.info("[clerk-webhook] user.created", { clerkId: data.id, email: primaryEmail });
        break;
      }

      case "user.updated": {
        const primaryEmail = data.email_addresses?.find(
          (e) => e.id === data.primary_email_address_id
        )?.email_address;

        const updatedName = [data.first_name, data.last_name].filter(Boolean).join(" ") || undefined;
        await db.user.updateMany({
          where: { clerkId: data.id },
          data: {
            email: primaryEmail ?? undefined,
            name: updatedName,
            avatarUrl: data.image_url ?? null,
          },
        });

        console.info("[clerk-webhook] user.updated", { clerkId: data.id });
        break;
      }

      case "user.deleted": {
        // Soft-delete: mark inactive rather than cascade-delete
        await db.user.updateMany({
          where: { clerkId: data.id },
          data: { isActive: false },
        });

        console.info("[clerk-webhook] user.deleted", { clerkId: data.id });
        break;
      }

      default:
        break;
    }
  } catch (err) {
    console.error("[clerk-webhook] handler error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
