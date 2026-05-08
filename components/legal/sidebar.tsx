"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Users,
  FileText,
  Calendar,
  Clock,
  ReceiptText,
  Settings,
  LayoutDashboard,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/legal/dashboard" },
  { icon: Briefcase, label: "Cases", href: "/legal/cases" },
  { icon: Users, label: "Clients", href: "/legal/clients" },
  { icon: FileText, label: "Documents", href: "/legal/documents" },
  { icon: Calendar, label: "Calendar", href: "/legal/calendar" },
  { icon: Clock, label: "Time Entries", href: "/legal/time" },
  { icon: ReceiptText, label: "Invoices", href: "/legal/invoices" },
  { icon: Settings, label: "Settings", href: "/legal/settings" },
];

export default function LegalSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden lg:flex w-60 flex-col bg-[var(--sidebar)] text-[var(--sidebar-foreground)] shrink-0"
      aria-label="Legal navigation"
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 px-5 border-b border-[var(--sidebar-border)]">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--sidebar-primary)] text-[var(--sidebar-primary-foreground)] shrink-0">
          <Briefcase className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-bold leading-none">Praxis</p>
          <p className="text-xs text-[var(--sidebar-accent-foreground)]/60 leading-none mt-0.5">
            Legal
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-0.5" role="list">
          {navItems.map(({ icon: Icon, label, href }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)]"
                      : "text-[var(--sidebar-foreground)]/70 hover:bg-[var(--sidebar-accent)]/50 hover:text-[var(--sidebar-accent-foreground)]"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {label}
                  {active && (
                    <ChevronRight
                      className="ml-auto h-3.5 w-3.5 opacity-50"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User footer */}
      <div className="border-t border-[var(--sidebar-border)] p-4 text-xs text-[var(--sidebar-foreground)]/50">
        Praxis Legal v1.0
      </div>
    </aside>
  );
}
