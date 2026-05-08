import type { Metadata } from "next";
import { Search, Shield, Mail, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Users" };

type UserRole = "STUDENT" | "INSTRUCTOR" | "ATTORNEY" | "ADMIN" | "SUPER_ADMIN";

const roleStyles: Record<UserRole, string> = {
  STUDENT: "bg-slate-100 text-slate-600",
  INSTRUCTOR: "bg-blue-100 text-blue-700",
  ATTORNEY: "bg-amber-100 text-amber-700",
  ADMIN: "bg-purple-100 text-purple-700",
  SUPER_ADMIN: "bg-rose-100 text-rose-700",
};

const users = [
  { id: "1", name: "Adwoa Sarpong", email: "adwoa@praxislegal.com", role: "ATTORNEY" as UserRole, product: "Legal", joined: "Jan 5, 2026", active: true },
  { id: "2", name: "Samuel Quaye", email: "samuel@praxislegal.com", role: "ATTORNEY" as UserRole, product: "Legal", joined: "Jan 5, 2026", active: true },
  { id: "3", name: "Kweku Mensah", email: "kweku.mensah@example.com", role: "STUDENT" as UserRole, product: "Learn", joined: "Jan 10, 2026", active: true },
  { id: "4", name: "Ama Boateng", email: "ama.boateng@example.com", role: "STUDENT" as UserRole, product: "Learn", joined: "Feb 3, 2026", active: true },
  { id: "5", name: "Kofi Asante", email: "k.asante@example.com", role: "INSTRUCTOR" as UserRole, product: "Learn", joined: "Feb 14, 2026", active: true },
  { id: "6", name: "Yaa Darko", email: "yaa.darko@example.com", role: "STUDENT" as UserRole, product: "Learn", joined: "Apr 2, 2026", active: true },
  { id: "7", name: "Emmanuel Owusu", email: "e.owusu@example.com", role: "STUDENT" as UserRole, product: "Learn", joined: "Sep 12, 2025", active: false },
];

export default function AdminUsersPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Users</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {users.length} total · {users.filter((u) => u.active).length} active
          </p>
        </div>
        <Button className="gap-2">
          <Shield className="h-4 w-4" />
          Invite User
        </Button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search users by name or email…"
            className="w-full rounded-lg border border-border bg-background pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2">
          {(["All", "Learn", "Legal"] as const).map((p) => (
            <button
              key={p}
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                p === "All"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {p}
            </button>
          ))}
          <button className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
            Role <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Users table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">User</th>
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Role</th>
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Product</th>
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Joined</th>
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Status</th>
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                        {user.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${roleStyles[user.role]}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{user.product}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {user.joined}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${user.active ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                      {user.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-xs h-7 px-2">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-rose-600 hover:text-rose-700 hover:bg-rose-50">
                        {user.active ? "Suspend" : "Restore"}
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
