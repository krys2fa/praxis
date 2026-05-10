import type { Metadata } from "next";
import { Users, BookOpen, Star, MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Instructors" };

type InstructorStatus = "Active" | "Pending" | "Suspended";

const statusStyles: Record<InstructorStatus, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Suspended: "bg-rose-100 text-rose-700",
};

const instructors = [
  {
    id: "i1",
    name: "Sarah Mensah",
    email: "sarah@example.com",
    specialty: "Programming",
    courses: 2,
    students: 1240,
    rating: 4.9,
    joined: "Dec 2025",
    status: "Active" as InstructorStatus,
  },
  {
    id: "i2",
    name: "Kofi Asante",
    email: "kofi@example.com",
    specialty: "Design",
    courses: 1,
    students: 930,
    rating: 4.8,
    joined: "Jan 2026",
    status: "Active" as InstructorStatus,
  },
  {
    id: "i3",
    name: "Ama Boateng",
    email: "ama.b@example.com",
    specialty: "Data Science",
    courses: 1,
    students: 2100,
    rating: 4.7,
    joined: "Jan 2026",
    status: "Active" as InstructorStatus,
  },
  {
    id: "i4",
    name: "Kwame Darko",
    email: "kwame@example.com",
    specialty: "Marketing",
    courses: 1,
    students: 750,
    rating: 4.6,
    joined: "Feb 2026",
    status: "Active" as InstructorStatus,
  },
  {
    id: "i5",
    name: "Abena Frimpong",
    email: "abena.f@example.com",
    specialty: "Mobile Dev",
    courses: 0,
    students: 0,
    rating: 0,
    joined: "Apr 2026",
    status: "Pending" as InstructorStatus,
  },
];

export default function AdminInstructorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Instructors</h1>
          <p className="text-sm text-muted-foreground">
            Manage the instructors publishing courses on the platform.
          </p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1.5" aria-hidden="true" />
          Invite Instructor
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {[
          { label: "Total Instructors", value: instructors.length.toString() },
          {
            label: "Active",
            value: instructors
              .filter((i) => i.status === "Active")
              .length.toString(),
          },
          {
            label: "Pending Review",
            value: instructors
              .filter((i) => i.status === "Pending")
              .length.toString(),
          },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-card p-5"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {label}
            </p>
            <p className="mt-1.5 text-3xl font-bold text-foreground">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Instructor
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                Specialty
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                Courses
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden lg:table-cell">
                Students
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden lg:table-cell">
                Rating
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
            {instructors.map((inst) => (
              <tr key={inst.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0">
                      <Users
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{inst.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {inst.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                  {inst.specialty}
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    {inst.courses}
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                  {inst.students.toLocaleString()}
                </td>
                <td className="px-4 py-3 hidden lg:table-cell">
                  {inst.rating > 0 ? (
                    <div className="flex items-center gap-1 text-amber-500 font-medium">
                      <Star
                        className="h-3.5 w-3.5 fill-amber-400"
                        aria-hidden="true"
                      />
                      {inst.rating}
                    </div>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[inst.status]}`}
                  >
                    {inst.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label={`Actions for ${inst.name}`}
                  >
                    <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
