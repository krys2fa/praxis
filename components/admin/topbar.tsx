import { Bell } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function AdminTopbar() {
  return (
    <header
      className="flex h-16 items-center justify-between border-b border-border bg-card px-6 shrink-0"
      role="banner"
    >
      <div>
        <h1 className="text-sm font-semibold text-foreground">Admin Console</h1>
        <p className="text-xs text-muted-foreground">Praxis Platform Management</p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" aria-hidden="true" />
        </Button>
        <UserButton />
      </div>
    </header>
  );
}
