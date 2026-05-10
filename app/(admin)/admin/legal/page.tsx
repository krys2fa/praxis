import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Users,
  ReceiptText,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Legal Product" };

const stats = [
  {
    label: "Active Cases",
    value: "—",
    icon: Briefcase,
    href: "/legal/dashboard",
  },
  { label: "Total Clients", value: "—", icon: Users, href: "/legal/dashboard" },
  {
    label: "Invoices Sent",
    value: "—",
    icon: ReceiptText,
    href: "/legal/dashboard",
  },
  { label: "Hours Billed", value: "—", icon: Clock, href: "/legal/dashboard" },
];

export default function AdminLegalPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Legal Product</h1>
          <p className="text-sm text-muted-foreground">
            Overview of the Praxis Legal practice management module.
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/legal/dashboard">
            Open Legal App
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {label}
                </p>
                <p className="mt-1.5 text-3xl font-bold text-foreground">
                  {value}
                </p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <section aria-labelledby="legal-activity-heading">
        <h2
          id="legal-activity-heading"
          className="text-base font-semibold text-foreground mb-4"
        >
          Recent Legal Activity
        </h2>
        <div className="rounded-xl border border-border bg-card px-5 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Legal activity will appear here as the platform collects data.
          </p>
        </div>
      </section>

      <section aria-labelledby="legal-config-heading">
        <h2
          id="legal-config-heading"
          className="text-base font-semibold text-foreground mb-4"
        >
          Configuration
        </h2>
        <div className="rounded-xl border border-border bg-card divide-y divide-border">
          {[
            { label: "Billing Currency", value: "GHS (Ghanaian Cedi)" },
            { label: "Default Hourly Rate", value: "GHS 250 / hr" },
            { label: "Invoice Payment Terms", value: "Net 30" },
            { label: "Client Portal", value: "Disabled" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between px-5 py-3.5"
            >
              <span className="text-sm text-foreground">{label}</span>
              <span className="text-sm text-muted-foreground">{value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
