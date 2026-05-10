import type { Metadata } from "next";
import { FileText, Plus, Search, Download, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Documents" };

type DocType =
  | "Contract"
  | "Court Filing"
  | "Agreement"
  | "Correspondence"
  | "Evidence";
type DocStatus = "Final" | "Draft" | "Under Review";

const statusStyles: Record<DocStatus, string> = {
  Final: "bg-emerald-100 text-emerald-700",
  Draft: "bg-amber-100 text-amber-700",
  "Under Review": "bg-blue-100 text-blue-700",
};

const documents = [
  {
    id: "d1",
    name: "Mensah v GCB — Statement of Claim",
    case: "PL-2026-0001",
    type: "Court Filing" as DocType,
    status: "Final" as DocStatus,
    size: "248 KB",
    updated: "May 2, 2026",
  },
  {
    id: "d2",
    name: "Boateng Estate — Last Will & Testament",
    case: "PL-2026-0002",
    type: "Agreement" as DocType,
    status: "Final" as DocStatus,
    size: "185 KB",
    updated: "Apr 30, 2026",
  },
  {
    id: "d3",
    name: "Asante Property — Sale Agreement",
    case: "PL-2026-0003",
    type: "Contract" as DocType,
    status: "Under Review" as DocStatus,
    size: "310 KB",
    updated: "May 5, 2026",
  },
  {
    id: "d4",
    name: "Darko Employment — NDA Draft",
    case: "PL-2026-0004",
    type: "Contract" as DocType,
    status: "Draft" as DocStatus,
    size: "95 KB",
    updated: "May 7, 2026",
  },
  {
    id: "d5",
    name: "Client Correspondence — Kweku Mensah",
    case: "PL-2026-0001",
    type: "Correspondence" as DocType,
    status: "Final" as DocStatus,
    size: "42 KB",
    updated: "May 1, 2026",
  },
];

export default function LegalDocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Documents</h1>
          <p className="text-sm text-muted-foreground">
            Manage case files, contracts, and correspondence.
          </p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1.5" aria-hidden="true" />
          Upload Document
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search documents..."
            className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="Search documents"
          />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Document
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                Type
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden lg:table-cell">
                Case
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                Updated
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
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <FileText
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {doc.size}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                  {doc.type}
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell font-mono text-xs">
                  {doc.case}
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                  {doc.updated}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[doc.status]}`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      aria-label={`Download ${doc.name}`}
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      aria-label={`More actions for ${doc.name}`}
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
