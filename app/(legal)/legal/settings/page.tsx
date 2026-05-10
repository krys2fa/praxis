import type { Metadata } from "next";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Settings" };

const sections = [
  {
    title: "Firm Details",
    fields: [
      { label: "Firm Name", value: "Praxis Legal", type: "text" },
      { label: "Contact Email", value: "legal@praxis.com", type: "email" },
      { label: "Phone Number", value: "+233 24 000 0000", type: "tel" },
      { label: "Address", value: "Accra, Ghana", type: "text" },
    ],
  },
  {
    title: "Billing",
    fields: [
      { label: "Default Hourly Rate (GHS)", value: "250", type: "number" },
      { label: "Currency", value: "GHS", type: "text" },
      { label: "Invoice Payment Terms", value: "Net 30", type: "text" },
      { label: "Invoice Prefix", value: "INV-2026-", type: "text" },
    ],
  },
  {
    title: "Notifications",
    fields: [
      { label: "Deadline Reminder (days before)", value: "3", type: "number" },
      { label: "Invoice Overdue Reminder", value: "Enabled", type: "text" },
      {
        label: "New Case Alert Email",
        value: "alerts@praxis.com",
        type: "email",
      },
    ],
  },
];

export default function LegalSettingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
          <Settings className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground">
            Configure your legal practice preferences.
          </p>
        </div>
      </div>

      {sections.map((section) => (
        <section
          key={section.title}
          aria-labelledby={`legal-section-${section.title}`}
          className="space-y-4"
        >
          <h2
            id={`legal-section-${section.title}`}
            className="text-base font-semibold text-foreground"
          >
            {section.title}
          </h2>
          <div className="rounded-xl border border-border bg-card divide-y divide-border">
            {section.fields.map((field) => (
              <div
                key={field.label}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-5 py-4"
              >
                <label className="sm:w-52 shrink-0 text-sm font-medium text-foreground">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  defaultValue={field.value}
                  className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  aria-label={field.label}
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="flex justify-end">
        <Button size="sm">Save Changes</Button>
      </div>
    </div>
  );
}
