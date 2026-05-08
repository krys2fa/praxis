import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Search, Mail, Phone, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Clients" };

const clients = [
  {
    id: "CL-001",
    name: "Kweku Mensah",
    email: "kweku.mensah@example.com",
    phone: "+233 24 000 1111",
    company: "Mensah & Sons Ltd",
    activeCases: 1,
    totalCases: 2,
    joinedDate: "Jan 10, 2026",
    status: "Active",
  },
  {
    id: "CL-002",
    name: "Ama Boateng",
    email: "ama.boateng@example.com",
    phone: "+233 50 222 3333",
    company: null,
    activeCases: 1,
    totalCases: 1,
    joinedDate: "Feb 3, 2026",
    status: "Active",
  },
  {
    id: "CL-003",
    name: "Kofi Asante",
    email: "k.asante@example.com",
    phone: "+233 27 444 5555",
    company: "Asante Real Estate",
    activeCases: 1,
    totalCases: 1,
    joinedDate: "Mar 15, 2026",
    status: "Active",
  },
  {
    id: "CL-004",
    name: "Yaa Darko",
    email: "yaa.darko@example.com",
    phone: "+233 20 666 7777",
    company: null,
    activeCases: 0,
    totalCases: 1,
    joinedDate: "Apr 2, 2026",
    status: "Active",
  },
  {
    id: "CL-005",
    name: "Emmanuel Owusu",
    email: "e.owusu@example.com",
    phone: "+233 55 888 9999",
    company: "Owusu Construction",
    activeCases: 0,
    totalCases: 1,
    joinedDate: "Sep 12, 2025",
    status: "Inactive",
  },
];

export default function ClientsPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Clients</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {clients.length} clients · {clients.filter((c) => c.activeCases > 0).length} with active matters
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Client
        </Button>
      </div>

      {/* Search */}
      <div className="mb-6 flex gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search by name, email, company…"
            className="w-full rounded-lg border border-border bg-background pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Client cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {clients.map((client) => (
          <div
            key={client.id}
            className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors group"
          >
            {/* Avatar + name */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                  {client.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold leading-tight">{client.name}</p>
                  {client.company && (
                    <p className="text-xs text-muted-foreground">{client.company}</p>
                  )}
                </div>
              </div>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                  client.status === "Active"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {client.status}
              </span>
            </div>

            {/* Contact */}
            <div className="mt-4 space-y-1.5">
              <a
                href={`mailto:${client.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{client.email}</span>
              </a>
              <a
                href={`tel:${client.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                {client.phone}
              </a>
            </div>

            {/* Cases */}
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Briefcase className="h-3.5 w-3.5" />
                <span>
                  {client.activeCases} active · {client.totalCases} total
                </span>
              </div>
              <Link
                href={`/legal/cases?client=${client.id}`}
                className="flex items-center gap-0.5 text-xs text-primary hover:underline"
              >
                View cases
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Footer */}
            <p className="mt-2 text-xs text-muted-foreground">
              Client since {client.joinedDate}
            </p>
          </div>
        ))}

        {/* Add client card */}
        <button className="rounded-xl border-2 border-dashed border-border p-5 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors min-h-[200px]">
          <div className="h-10 w-10 rounded-full border-2 border-current flex items-center justify-center">
            <Plus className="h-5 w-5" />
          </div>
          <span className="text-sm font-medium">Add New Client</span>
        </button>
      </div>
    </div>
  );
}
