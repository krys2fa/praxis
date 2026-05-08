import type { Metadata } from "next";
import { BarChart2, Users, BookOpen, TrendingUp } from "lucide-react";

export const metadata: Metadata = { title: "Admin Dashboard" };

const stats = [
  { label: "Monthly Active Users", value: "—", icon: Users, sub: "Both products" },
  { label: "Learn Revenue (MTD)", value: "GHS —", icon: TrendingUp, sub: "Subscriptions" },
  { label: "Legal Revenue (MTD)", value: "GHS —", icon: BarChart2, sub: "Invoices paid" },
  { label: "Active Courses", value: "—", icon: BookOpen, sub: "Published" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Platform Overview</h1>
        <p className="text-sm text-muted-foreground">
          Praxis Learn + Praxis Legal — consolidated metrics.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, sub }) => (
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
                <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <section aria-labelledby="activity-heading">
        <h2 id="activity-heading" className="text-base font-semibold text-foreground mb-4">
          Recent Activity
        </h2>
        <div className="rounded-xl border border-border bg-card px-5 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Activity log will appear here once users start interacting with the platform.
          </p>
        </div>
      </section>
    </div>
  );
}
