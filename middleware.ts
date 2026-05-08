import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Public routes that do not require authentication
const isPublicLearnRoute = createRouteMatcher([
  "/",
  "/courses(.*)",
  "/pricing",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
]);

const isPublicLegalRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const host = req.headers.get("host") ?? "";

  // Determine which product based on subdomain or path prefix
  const isLegalRoute =
    host.startsWith("legal.") ||
    pathname.startsWith("/legal/") ||
    pathname.startsWith("/(legal)/");

  const isAdminRoute =
    host.startsWith("admin.") ||
    pathname.startsWith("/admin/");

  // Protect legal and admin routes — always require auth
  if (isLegalRoute || isAdminRoute) {
    await auth.protect();
    return NextResponse.next();
  }

  // Learn routes — protect everything except public pages
  if (!isPublicLearnRoute(req)) {
    await auth.protect();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
