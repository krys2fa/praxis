import type { Metadata } from "next";
import { Clock, Plus, MoreHorizontal, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Time Entries" };

type EntryStatus = "Billed" | "Unbilled";

const statusStyles: Record<EntryStatus, string> = {
  Billed: "bg-emerald-100 text-emerald-700",
  Unbilled: "bg-amber-100 text-amber-700",
};

const entries = [
  {
    id: "t1",
    description: "Drafting statement of claim",
    case: "PL-2026-0001",
    client: "Kweku Mensah",
    date: "May 8, 2026",
    hours: 3.5,
    rate: 250,
    status: "Unbilled" as EntryStatus,
  },
  {
    id: "t2",
    description: "Client consultation — estate planning",
    case: "PL-2026-0002",
    client: "Ama Boateng",
    date: "May 7, 2026",
    hours: 1.0,
    rate: 250,
    status: "Unbilled" as EntryStatus,
  },
  {
    id: "t3",
    description: "Review title deed & survey plan",
    case: "PL-2026-0003",
    client: "Kofi Asante",
    date: "May 6, 2026",
    hours: 2.0,
    rate: 250,
    status: "Billed" as EntryStatus,
  },
  {
    id: "t4",
    description: "Telephone conference — opposing counsel",
    case: "PL-2026-0001",
    client: "Kweku Mensah",
    date: "May 5, 2026",
    hours: 0.5,
    rate: 250,
    status: "Billed" as EntryStatus,
  },
  {
    id: "t5",
    description: "Drafting NDA — employment dispute",
    case: "PL-2026-0004",
    client: "Ekow Darko",
    date: "May 5, 2026",
    hours: 1.5,
    rate: 250,
    status: "Unbilled" as EntryStatus,
  },
];

const totalHours = entries.reduce((acc, e) => acc + e.hours, 0);
const unbilledAmount = entries
  .filter((e) => e.status === "Unbilled")
  .reduce((acc, e) => acc + e.hours * e.rate, 0);

export default function LegalTimePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Time Entries</h1>
          <p className="text-sm text-muted-foreground">
            Log and manage billable hours for all cases.
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Timer className="h-4 w-4 mr-1.5" aria-hidden="true" />
            Start Timer
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1.5" aria-hidden="true" />
            Log Entry
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {[
          {
            label: "Total Hours (May)",
            value: `${totalHours}h`,
            sub: `${entries.length} entries`,
          },
          {
            label: "Unbilled Amount",
            value: `GHS ${unbilledAmount.toLocaleString()}`,
            sub: "Pending invoicing",
          },
          { label: "Default Hourly Rate", value: "GHS 250", sub: "Per hour" },
        ].map(({ label, value, sub }) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-card p-5"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {label}
            </p>
            <p className="mt-1.5 text-3xl font-bold text-foreground">{value}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Description
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                Client
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden lg:table-cell">
                Date
              </th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                Hours
              </th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground hidden md:table-cell">
                Amount
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Status
              </th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {entries.map((entry) => (
              <tr
                key={entry.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-start gap-2">
                    <Clock
                      className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-foreground">
                        {entry.description}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {entry.case}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                  {entry.client}
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                  {entry.date}
                </td>
                <td className="px-4 py-3 text-right font-medium text-foreground">
                  {entry.hours}h
                </td>
                <td className="px-4 py-3 text-right font-medium text-foreground hidden md:table-cell">
                  GHS {(entry.hours * entry.rate).toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[entry.status]}`}
                  >
                    {entry.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label={`Actions for entry: ${entry.description}`}
                  >
                    <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
