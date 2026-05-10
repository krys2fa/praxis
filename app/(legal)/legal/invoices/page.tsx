import type { Metadata } from "next";
import Link from "next/link";
import { Plus, ReceiptText, MoreHorizontal, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Invoices" };

type InvoiceStatus = "Paid" | "Sent" | "Draft" | "Overdue";

const statusStyles: Record<InvoiceStatus, string> = {
  Paid: "bg-emerald-100 text-emerald-700",
  Sent: "bg-blue-100 text-blue-700",
  Draft: "bg-amber-100 text-amber-700",
  Overdue: "bg-rose-100 text-rose-700",
};

const invoices = [
  {
    id: "INV-2026-001",
    client: "Kweku Mensah",
    case: "PL-2026-0001",
    amount: 2500,
    issued: "Apr 30, 2026",
    due: "May 30, 2026",
    status: "Sent" as InvoiceStatus,
  },
  {
    id: "INV-2026-002",
    client: "Ama Boateng",
    case: "PL-2026-0002",
    amount: 1800,
    issued: "Apr 20, 2026",
    due: "May 20, 2026",
    status: "Paid" as InvoiceStatus,
  },
  {
    id: "INV-2026-003",
    client: "Kofi Asante",
    case: "PL-2026-0003",
    amount: 3200,
    issued: "Apr 15, 2026",
    due: "May 15, 2026",
    status: "Overdue" as InvoiceStatus,
  },
  {
    id: "INV-2026-004",
    client: "Ekow Darko",
    case: "PL-2026-0004",
    amount: 950,
    issued: "May 1, 2026",
    due: "May 31, 2026",
    status: "Draft" as InvoiceStatus,
  },
  {
    id: "INV-2026-005",
    client: "Adwoa Osei",
    case: "PL-2026-0005",
    amount: 4100,
    issued: "Mar 31, 2026",
    due: "Apr 30, 2026",
    status: "Paid" as InvoiceStatus,
  },
];

const totalPaid = invoices
  .filter((i) => i.status === "Paid")
  .reduce((a, i) => a + i.amount, 0);
const totalOutstanding = invoices
  .filter((i) => i.status !== "Paid")
  .reduce((a, i) => a + i.amount, 0);
const totalOverdue = invoices
  .filter((i) => i.status === "Overdue")
  .reduce((a, i) => a + i.amount, 0);

export default function LegalInvoicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Invoices</h1>
          <p className="text-sm text-muted-foreground">
            Create and manage client invoices.
          </p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1.5" aria-hidden="true" />
          New Invoice
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {[
          {
            label: "Collected (All Time)",
            value: `GHS ${totalPaid.toLocaleString()}`,
            color: "text-emerald-600",
          },
          {
            label: "Outstanding",
            value: `GHS ${totalOutstanding.toLocaleString()}`,
            color: "text-amber-600",
          },
          {
            label: "Overdue",
            value: `GHS ${totalOverdue.toLocaleString()}`,
            color: "text-rose-600",
          },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-card p-5"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {label}
            </p>
            <p className={`mt-1.5 text-3xl font-bold ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Invoice
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                Client
              </th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                Amount
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden lg:table-cell">
                Due
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
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <ReceiptText
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground font-mono">
                        {inv.id}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {inv.case}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                  {inv.client}
                </td>
                <td className="px-4 py-3 text-right font-medium text-foreground">
                  GHS {inv.amount.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                  {inv.due}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[inv.status]}`}
                  >
                    {inv.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    {inv.status === "Draft" && (
                      <button
                        className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        aria-label={`Send ${inv.id}`}
                      >
                        <Send className="h-4 w-4" aria-hidden="true" />
                      </button>
                    )}
                    <button
                      className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      aria-label={`More actions for ${inv.id}`}
                    >
                      <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
