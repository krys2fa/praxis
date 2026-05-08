import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { db } from "@/lib/db";

// Paystack sends a SHA-512 HMAC of the raw body signed with your secret key
function verifyPaystackSignature(rawBody: string, signature: string): boolean {
  const secret = process.env.PAYSTACK_WEBHOOK_SECRET;
  if (!secret) return false;
  const computed = createHmac("sha512", secret)
    .update(rawBody)
    .digest("hex");
  try {
    return timingSafeEqual(
      Buffer.from(computed, "hex"),
      Buffer.from(signature, "hex")
    );
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  const headersList = await headers();
  const signature = headersList.get("x-paystack-signature") ?? "";

  if (!verifyPaystackSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: { event: string; data: Record<string, unknown> };
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  try {
    switch (event.event) {
      case "charge.success": {
        const data = event.data;
        const reference = data.reference as string;
        const amountKobo = data.amount as number;
        const currency = (data.currency as string) ?? "GHS";
        const customerEmail = (data.customer as Record<string, string>)?.email;
        const meta = data.metadata as Record<string, string> | undefined;

        // Update payment record by provider reference
        await db.payment.updateMany({
          where: { providerRef: reference },
          data: { status: "COMPLETED" },
        });

        // Activate subscription if metadata present
        if (meta?.subscriptionId) {
          await db.subscription.updateMany({
            where: { id: meta.subscriptionId },
            data: { status: "ACTIVE" },
          });
        }

        // Activate enrollment if metadata present
        if (meta?.enrollmentId) {
          await db.enrollment.updateMany({
            where: { id: meta.enrollmentId },
            data: { status: "ACTIVE" },
          });
        }

        console.info("[paystack-webhook] charge.success processed", {
          reference,
          amountKobo,
          currency,
          customerEmail,
        });
        break;
      }

      case "subscription.disable": {
        const subscriptionCode = event.data.subscription_code as string;
        await db.subscription.updateMany({
          where: { providerSubId: subscriptionCode },
          data: { status: "CANCELLED", cancelAtPeriodEnd: true },
        });
        console.info("[paystack-webhook] subscription.disable", { subscriptionCode });
        break;
      }

      case "subscription.create": {
        const subscriptionCode = event.data.subscription_code as string;
        await db.subscription.updateMany({
          where: { providerSubId: subscriptionCode },
          data: { status: "ACTIVE" },
        });
        console.info("[paystack-webhook] subscription.create", { subscriptionCode });
        break;
      }

      default:
        // Acknowledge but ignore unknown events
        break;
    }
  } catch (err) {
    console.error("[paystack-webhook] handler error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
