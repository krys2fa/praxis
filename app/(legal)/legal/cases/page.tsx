import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Search, SlidersHorizontal, Briefcase, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Cases" };

type CaseStatus = "Active" | "Pending" | "Closed" | "On Hold";
type CasePriority = "High" | "Medium" | "Low";

const statusStyles: Record<CaseStatus, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Closed: "bg-slate-100 text-slate-600",
  "On Hold": "bg-rose-100 text-rose-700",
};

const priorityStyles: Record<CasePriority, string> = {
  High: "bg-rose-50 text-rose-600 border-rose-200",
  Medium: "bg-amber-50 text-amber-600 border-amber-200",
  Low: "bg-slate-50 text-slate-500 border-slate-200",
};

const cases = [
  {
    id: "PL-2026-0001",
    title: "Mensah v. Ghana Commercial Bank",
    client: "Kweku Mensah",
    type: "Civil Litigation",
    status: "Active" as CaseStatus,
    priority: "High" as CasePriority,
    assignedTo: "Adwoa Sarpong",
    nextDate: "May 14, 2026",
    nextEvent: "Hearing",
    openedDate: "Jan 10, 2026",
  },
  {
    id: "PL-2026-0002",
    title: "Boateng Estate Planning",
    client: "Ama Boateng",
    type: "Probate & Estate",
    status: "Active" as CaseStatus,
    priority: "Medium" as CasePriority,
    assignedTo: "Samuel Quaye",
    nextDate: "May 20, 2026",
    nextEvent: "Document Review",
    openedDate: "Feb 3, 2026",
  },
  {
    id: "PL-2026-0003",
    title: "Asante Property Dispute",
    client: "Kofi Asante",
    type: "Real Estate",
    status: "Pending" as CaseStatus,
    priority: "High" as CasePriority,
    assignedTo: "Adwoa Sarpong",
    nextDate: "Jun 1, 2026",
    nextEvent: "Mediation",
    openedDate: "Mar 15, 2026",
  },
  {
    id: "PL-2026-0004",
    title: "Darko v. National Insurance Commission",
    client: "Yaa Darko",
    type: "Insurance Dispute",
    status: "On Hold" as CaseStatus,
    priority: "Medium" as CasePriority,
    assignedTo: "Samuel Quaye",
    nextDate: "—",
    nextEvent: "Awaiting Evidence",
    openedDate: "Apr 2, 2026",
  },
  {
    id: "PL-2025-0089",
    title: "Owusu Employment Tribunal",
    client: "Emmanuel Owusu",
    type: "Employment Law",
    status: "Closed" as CaseStatus,
    priority: "Low" as CasePriority,
    assignedTo: "Adwoa Sarpong",
    nextDate: "—",
    nextEvent: "Settled",
    openedDate: "Sep 12, 2025",
  },
];

export default function CasesPage() {
  const activeCases = cases.filter((c) => c.status === "Active").length;
  const pendingCases = cases.filter((c) => c.status === "Pending").length;

  return (
    <div>
      {/* Page header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Cases</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {activeCases} active · {pendingCases} pending · {cases.length} total
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Case
        </Button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search cases, clients, case numbers…"
            className="w-full rounded-lg border border-border bg-background pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2">
          {(["All", "Active", "Pending", "Closed"] as const).map((status) => (
            <button
              key={status}
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                status === "All"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {status}
            </button>
          ))}
          <Button variant="outline" size="icon" className="shrink-0">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Cases table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Case</th>
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Client</th>
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Type</th>
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Status</th>
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Priority</th>
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Next Event</th>
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Assigned To</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {cases.map((c) => (
                <tr
                  key={c.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="px-5 py-4">
                    <Link
                      href={`/legal/cases/${c.id}`}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {c.title}
                    </Link>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">{c.id}</p>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <User className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      {c.client}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{c.type}</td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${priorityStyles[c.priority]}`}>
                      {c.priority}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5 text-sm">
                      <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                      <div>
                        <p>{c.nextEvent}</p>
                        <p className="text-xs text-muted-foreground">{c.nextDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{c.assignedTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
