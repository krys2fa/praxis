import type { Metadata } from "next";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Settings" };

const sections = [
  {
    title: "Platform",
    fields: [
      { label: "Platform Name", value: "Praxis", type: "text" },
      { label: "Support Email", value: "support@praxis.com", type: "email" },
      { label: "Primary Currency", value: "GHS", type: "text" },
    ],
  },
  {
    title: "Paystack",
    fields: [
      {
        label: "Public Key",
        value: "pk_live_••••••••••••••••",
        type: "password",
      },
      {
        label: "Secret Key",
        value: "sk_live_••••••••••••••••",
        type: "password",
      },
      { label: "Webhook Secret", value: "••••••••••••••••", type: "password" },
    ],
  },
  {
    title: "Notifications",
    fields: [
      { label: "Admin Email", value: "admin@praxis.com", type: "email" },
      {
        label: "Telegram Bot Token",
        value: "••••••••••••••••",
        type: "password",
      },
      { label: "Telegram Chat ID", value: "-100•••••••", type: "text" },
    ],
  },
];

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
          <Settings className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground">
            Configure platform-wide settings and integrations.
          </p>
        </div>
      </div>

      {sections.map((section) => (
        <section
          key={section.title}
          aria-labelledby={`section-${section.title}`}
          className="space-y-4"
        >
          <h2
            id={`section-${section.title}`}
            className="text-base font-semibold text-foreground"
          >
            {section.title}
          </h2>
          <div className="rounded-xl border border-border bg-card divide-y divide-border">
            {section.fields.map((field) => (
              <div
                key={field.label}
                className="flex items-center gap-4 px-5 py-4"
              >
                <label className="w-48 shrink-0 text-sm font-medium text-foreground">
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
