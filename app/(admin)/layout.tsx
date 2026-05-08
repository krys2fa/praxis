import type { Metadata } from "next";
import AdminSidebar from "@/components/admin/sidebar";
import AdminTopbar from "@/components/admin/topbar";

export const metadata: Metadata = {
  title: { default: "Praxis Admin", template: "%s | Praxis Admin" },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminTopbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
