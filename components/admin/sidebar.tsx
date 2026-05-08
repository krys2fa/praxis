"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Users,
  BarChart2,
  Settings,
  Shield,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin/dashboard" },
  { icon: BookOpen, label: "Courses", href: "/admin/courses" },
  { icon: GraduationCap, label: "Students", href: "/admin/students" },
  { icon: Users, label: "Instructors", href: "/admin/instructors" },
  { icon: BarChart2, label: "Analytics", href: "/admin/analytics" },
  { icon: Shield, label: "Legal Product", href: "/admin/legal" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden lg:flex w-60 flex-col bg-sidebar text-sidebar-foreground shrink-0"
      aria-label="Admin navigation"
    >
      <div className="flex h-16 items-center gap-2 px-5 border-b border-sidebar-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground shrink-0">
          <Shield className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-bold leading-none">Praxis</p>
          <p className="text-xs text-sidebar-foreground/60 leading-none mt-0.5">
            Admin
          </p>
        </div>
      </div>

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
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
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

      <div className="border-t border-sidebar-border p-4 text-xs text-sidebar-foreground/50">
        Praxis Admin v1.0
      </div>
    </aside>
  );
}
