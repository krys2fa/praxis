import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Briefcase,
  Calendar,
  Clock,
  FileText,
  Plus,
  ArrowLeft,
  User,
  ReceiptText,
  MessageSquare,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ id: string }>;
}

const cases: Record<string, {
  id: string;
  title: string;
  client: string;
  type: string;
  status: string;
  priority: string;
  assignedTo: string;
  openedDate: string;
  description: string;
  courtDates: { date: string; type: string; court: string; notes: string }[];
  notes: { author: string; date: string; content: string }[];
  documents: { name: string; type: string; uploaded: string; size: string }[];
  timeEntries: { date: string; description: string; hours: number; rate: number; attorney: string }[];
}> = {
  "PL-2026-0001": {
    id: "PL-2026-0001",
    title: "Mensah v. Ghana Commercial Bank",
    client: "Kweku Mensah",
    type: "Civil Litigation",
    status: "Active",
    priority: "High",
    assignedTo: "Adwoa Sarpong",
    openedDate: "Jan 10, 2026",
    description: "Client is pursuing a claim against GCB for wrongful account closure and resulting financial loss. Bank closed the client's business account without notice, causing significant business disruption.",
    courtDates: [
      { date: "May 14, 2026", type: "Hearing", court: "High Court, Accra", notes: "Preliminary hearing on disclosure orders" },
      { date: "Jun 28, 2026", type: "Case Management", court: "High Court, Accra", notes: "Review progress and set trial date" },
    ],
    notes: [
      {
        author: "Adwoa Sarpong",
        date: "Apr 30, 2026",
        content: "Client provided bank statements from 2023–2025. Account closure appears to have no documented basis from the bank's side.",
      },
      {
        author: "Samuel Quaye",
        date: "Apr 20, 2026",
        content: "Reviewed precedent cases — Owusu v. Barclays Bank (2019) is highly relevant.",
      },
    ],
    documents: [
      { name: "Bank Statement 2023–2025.pdf", type: "Evidence", uploaded: "Apr 29, 2026", size: "2.4 MB" },
      { name: "Claim Form.pdf", type: "Court Filing", uploaded: "Jan 15, 2026", size: "340 KB" },
      { name: "GCB Notice of Closure.pdf", type: "Evidence", uploaded: "Jan 12, 2026", size: "115 KB" },
    ],
    timeEntries: [
      { date: "Apr 30, 2026", description: "Review bank statements, research precedent", hours: 3.5, rate: 400, attorney: "Adwoa Sarpong" },
      { date: "Apr 20, 2026", description: "Case strategy meeting with client", hours: 1.5, rate: 400, attorney: "Adwoa Sarpong" },
      { date: "Jan 15, 2026", description: "Draft and file claim form", hours: 4.0, rate: 400, attorney: "Adwoa Sarpong" },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const c = cases[id];
  if (!c) return { title: "Case Not Found" };
  return { title: `${c.id} — ${c.title}` };
}

const statusStyles: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Closed: "bg-slate-100 text-slate-600",
  "On Hold": "bg-rose-100 text-rose-700",
};

export default async function CaseDetailPage({ params }: Props) {
  const { id } = await params;
  const c = cases[id];
  if (!c) notFound();

  const totalHours = c.timeEntries.reduce((a, e) => a + e.hours, 0);
  const totalBilled = c.timeEntries.reduce((a, e) => a + e.hours * e.rate, 0);

  return (
    <div>
      {/* Back + header */}
      <div className="mb-6">
        <Link
          href="/legal/cases"
          className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Cases
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-sm text-muted-foreground">{c.id}</span>
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[c.status] ?? ""}`}>
                {c.status}
              </span>
              <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-600">
                {c.priority} Priority
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight">{c.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {c.type} · Opened {c.openedDate} · Assigned to {c.assignedTo}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Clock className="h-4 w-4" />
              Log Time
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Note
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-semibold mb-3 flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              Case Description
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
          </section>

          {/* Court Dates */}
          <section className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-semibold flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Court Dates
              </h2>
              <Button variant="outline" size="sm" className="gap-1">
                <Plus className="h-3.5 w-3.5" />
                Add
              </Button>
            </div>
            <div className="divide-y divide-border">
              {c.courtDates.map((d) => (
                <div key={d.date} className="px-5 py-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-bold leading-none">
                      <span>{d.date.split(" ")[1].replace(",", "")}</span>
                      <span className="text-[10px] font-normal opacity-70">{d.date.split(" ")[0].slice(0, 3)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{d.type}</p>
                      <p className="text-sm text-muted-foreground">{d.court}</p>
                      <p className="text-xs text-muted-foreground mt-1">{d.notes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Notes */}
          <section className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-semibold flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Case Notes
              </h2>
              <Button variant="outline" size="sm" className="gap-1">
                <Plus className="h-3.5 w-3.5" />
                Add Note
              </Button>
            </div>
            <div className="divide-y divide-border">
              {c.notes.map((note, i) => (
                <div key={i} className="px-5 py-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-7 w-7 rounded-full bg-primary/15 flex items-center justify-center text-xs font-semibold text-primary">
                      {note.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-sm font-medium">{note.author}</span>
                    <span className="text-xs text-muted-foreground">· {note.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{note.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Documents */}
          <section className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-semibold flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                Documents
              </h2>
              <Button variant="outline" size="sm" className="gap-1">
                <Upload className="h-3.5 w-3.5" />
                Upload
              </Button>
            </div>
            <div className="divide-y divide-border">
              {c.documents.map((doc) => (
                <div key={doc.name} className="flex items-center gap-3 px-5 py-3">
                  <FileText className="h-5 w-5 text-primary/60 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">{doc.type} · {doc.uploaded} · {doc.size}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs">Download</Button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Client info */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              Client
            </h3>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-primary">
                {c.client.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-medium">{c.client}</p>
                <Link
                  href={`/legal/clients`}
                  className="text-xs text-primary hover:underline"
                >
                  View profile →
                </Link>
              </div>
            </div>
          </div>

          {/* Time & Billing */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h3 className="font-semibold flex items-center gap-2">
                <ReceiptText className="h-4 w-4 text-primary" />
                Time & Billing
              </h3>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-2xl font-bold">{totalHours}h</p>
                  <p className="text-xs text-muted-foreground">Total hours</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">GHS {totalBilled.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Billed value</p>
                </div>
              </div>
              <div className="space-y-2">
                {c.timeEntries.map((entry, i) => (
                  <div key={i} className="text-xs border-t border-border pt-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{entry.date}</span>
                      <span className="font-medium">{entry.hours}h</span>
                    </div>
                    <p className="text-muted-foreground truncate mt-0.5">{entry.description}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-4 w-full gap-2" size="sm">
                <Clock className="h-3.5 w-3.5" />
                Log Time
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
