"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "Community", href: "/community" },
];

const authedLinks = [
  { label: "My Learning", href: "/dashboard" },
];

export default function LearnNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border/50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tight"
          aria-label="Praxis Learn home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            Praxis{" "}
            <span className="text-gradient-amber font-extrabold">Learn</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth */}
        <div className="hidden md:flex items-center gap-3">
          {!isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm" className="font-semibold">
                  Get started
                </Button>
              </SignUpButton>
            </>
          ) : (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  My Learning
                </Button>
              </Link>
              <UserButton />
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border/50 bg-background px-4 py-4"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                    pathname === link.href
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full">
                    Sign in
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full font-semibold">Get started</Button>
                </SignUpButton>
              </>
            ) : (
              <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full">
                  My Learning
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
