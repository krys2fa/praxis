import type { Metadata } from "next";
import { Calendar, Plus, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Calendar" };

type EventType = "Hearing" | "Meeting" | "Deadline" | "Mediation" | "Review";

const eventColors: Record<EventType, string> = {
  Hearing: "bg-rose-100 border-rose-300 text-rose-700",
  Meeting: "bg-blue-100 border-blue-300 text-blue-700",
  Deadline: "bg-amber-100 border-amber-300 text-amber-700",
  Mediation: "bg-purple-100 border-purple-300 text-purple-700",
  Review: "bg-slate-100 border-slate-300 text-slate-600",
};

const upcomingEvents = [
  {
    id: "e1",
    title: "Mensah v GCB — Hearing",
    date: "May 14, 2026",
    time: "9:00 AM",
    type: "Hearing" as EventType,
    case: "PL-2026-0001",
  },
  {
    id: "e2",
    title: "Boateng Estate — Document Review",
    date: "May 20, 2026",
    time: "2:00 PM",
    type: "Review" as EventType,
    case: "PL-2026-0002",
  },
  {
    id: "e3",
    title: "Asante Property — Mediation",
    date: "Jun 1, 2026",
    time: "10:30 AM",
    type: "Mediation" as EventType,
    case: "PL-2026-0003",
  },
  {
    id: "e4",
    title: "Darko Employment — Client Meeting",
    date: "Jun 5, 2026",
    time: "3:00 PM",
    type: "Meeting" as EventType,
    case: "PL-2026-0004",
  },
  {
    id: "e5",
    title: "Osei Insurance — Filing Deadline",
    date: "Jun 15, 2026",
    time: "5:00 PM",
    type: "Deadline" as EventType,
    case: "PL-2026-0005",
  },
];

export default function LegalCalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Calendar</h1>
          <p className="text-sm text-muted-foreground">
            Track hearings, meetings, and deadlines.
          </p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1.5" aria-hidden="true" />
          Add Event
        </Button>
      </div>

      {/* Month header */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-foreground">May 2026</h2>
          <div className="flex items-center gap-1">
            <button
              className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 text-center text-xs font-medium text-muted-foreground mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid — May 2026 starts on Friday (day index 5) */}
        <div className="grid grid-cols-7 gap-px">
          {/* Empty cells before May 1 */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={`empty-${i}`} className="h-10" />
          ))}
          {/* May days 1-31 */}
          {Array.from({ length: 31 }).map((_, i) => {
            const day = i + 1;
            const hasEvent = upcomingEvents.some((e) => {
              const d = parseInt(e.date.split(" ")[1].replace(",", ""), 10);
              return d === day && e.date.includes("May");
            });
            const isToday = day === 9;
            return (
              <button
                key={day}
                aria-label={`May ${day}, 2026${hasEvent ? " — has events" : ""}`}
                className={[
                  "h-10 rounded-lg text-sm font-medium transition-colors",
                  isToday
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted",
                  hasEvent && !isToday ? "ring-2 ring-primary/40" : "",
                  !isToday ? "text-foreground" : "",
                ].join(" ")}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Upcoming events list */}
      <section aria-labelledby="upcoming-heading">
        <h2
          id="upcoming-heading"
          className="text-base font-semibold text-foreground mb-3"
        >
          Upcoming Events
        </h2>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className={`flex items-start gap-3 rounded-xl border p-4 ${eventColors[event.type]}`}
            >
              <Calendar
                className="h-5 w-5 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{event.title}</p>
                <p className="text-xs opacity-75 mt-0.5">Case {event.case}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-medium">{event.date}</p>
                <p className="text-xs opacity-75 flex items-center gap-1 justify-end mt-0.5">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {event.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
