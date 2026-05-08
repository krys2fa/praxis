import type { Metadata } from "next";
import LegalSidebar from "@/components/legal/sidebar";
import LegalTopbar from "@/components/legal/topbar";

export const metadata: Metadata = {
  title: { default: "Praxis Legal", template: "%s | Praxis Legal" },
  description: "Streamlined case management for modern law firms.",
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="legal" className="flex h-screen overflow-hidden bg-background">
      <LegalSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <LegalTopbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
