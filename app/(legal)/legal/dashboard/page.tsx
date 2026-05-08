import type { Metadata } from "next";
import { Briefcase, Users, ReceiptText, Clock, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Dashboard" };

const stats = [
  {
    label: "Active Cases",
    value: "—",
    icon: Briefcase,
    description: "Currently open",
    href: "/legal/cases",
  },
  {
    label: "Clients",
    value: "—",
    icon: Users,
    description: "Total on record",
    href: "/legal/clients",
  },
  {
    label: "Invoices Due",
    value: "—",
    icon: ReceiptText,
    description: "Awaiting payment",
    href: "/legal/invoices",
  },
  {
    label: "Hours This Month",
    value: "—",
    icon: Clock,
    description: "Billable time logged",
    href: "/legal/time",
  },
];

export default function LegalDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm">
            Good morning — here's your practice overview.
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild size="sm">
            <Link href="/legal/cases/new">
              <Plus className="h-4 w-4 mr-1.5" aria-hidden="true" />
              New case
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/legal/clients/new">
              <Plus className="h-4 w-4 mr-1.5" aria-hidden="true" />
              New client
            </Link>
          </Button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4" role="list">
        {stats.map(({ label, value, icon: Icon, description, href }) => (
          <Link
            key={label}
            href={href}
            className="group rounded-xl border border-border bg-card p-5 hover-lift hover:border-primary/30 focus-visible:outline-2 focus-visible:outline-primary"
            role="listitem"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {label}
                </p>
                <p className="mt-1.5 text-3xl font-bold text-foreground">
                  {value}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {description}
                </p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon
                  className="h-4.5 w-4.5 text-primary"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Two-column layout: recent cases + upcoming court dates */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Cases */}
        <section aria-labelledby="recent-cases-heading">
          <div className="flex items-center justify-between mb-4">
            <h2
              id="recent-cases-heading"
              className="text-base font-semibold text-foreground"
            >
              Recent Cases
            </h2>
            <Link
              href="/legal/cases"
              className="text-sm text-primary hover:underline underline-offset-2"
            >
              View all
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-card divide-y divide-border">
            <div className="px-5 py-8 text-center">
              <p className="text-sm text-muted-foreground">
                No cases yet.{" "}
                <Link
                  href="/legal/cases/new"
                  className="text-primary underline underline-offset-2"
                >
                  Create your first case
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Court Dates */}
        <section aria-labelledby="court-dates-heading">
          <div className="flex items-center justify-between mb-4">
            <h2
              id="court-dates-heading"
              className="text-base font-semibold text-foreground"
            >
              Upcoming Court Dates
            </h2>
            <Link
              href="/legal/calendar"
              className="text-sm text-primary hover:underline underline-offset-2"
            >
              Full calendar
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-card divide-y divide-border">
            <div className="px-5 py-8 text-center">
              <p className="text-sm text-muted-foreground">
                No upcoming court dates scheduled.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
