import type { Metadata } from "next";
import { Search, GraduationCap, MoreHorizontal, BookOpen } from "lucide-react";

export const metadata: Metadata = { title: "Students" };

type StudentStatus = "Active" | "Inactive";

const statusStyles: Record<StudentStatus, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Inactive: "bg-slate-100 text-slate-600",
};

const students = [
  {
    id: "s1",
    name: "Ama Owusu",
    email: "ama@example.com",
    courses: 3,
    completed: 1,
    joined: "Jan 5, 2026",
    status: "Active" as StudentStatus,
  },
  {
    id: "s2",
    name: "Kweku Mensah",
    email: "kweku@example.com",
    courses: 2,
    completed: 2,
    joined: "Jan 14, 2026",
    status: "Active" as StudentStatus,
  },
  {
    id: "s3",
    name: "Efua Darko",
    email: "efua@example.com",
    courses: 1,
    completed: 0,
    joined: "Feb 8, 2026",
    status: "Active" as StudentStatus,
  },
  {
    id: "s4",
    name: "Yaw Boateng",
    email: "yaw@example.com",
    courses: 4,
    completed: 3,
    joined: "Feb 20, 2026",
    status: "Active" as StudentStatus,
  },
  {
    id: "s5",
    name: "Abena Asante",
    email: "abena@example.com",
    courses: 1,
    completed: 1,
    joined: "Mar 3, 2026",
    status: "Inactive" as StudentStatus,
  },
  {
    id: "s6",
    name: "Kofi Annan",
    email: "kofi.a@example.com",
    courses: 2,
    completed: 0,
    joined: "Mar 18, 2026",
    status: "Active" as StudentStatus,
  },
];

export default function AdminStudentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Students</h1>
        <p className="text-sm text-muted-foreground">
          Manage learners enrolled on the platform.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {[
          { label: "Total Students", value: students.length.toString() },
          {
            label: "Active This Month",
            value: students
              .filter((s) => s.status === "Active")
              .length.toString(),
          },
          {
            label: "Avg Courses / Student",
            value: (
              students.reduce((a, s) => a + s.courses, 0) / students.length
            ).toFixed(1),
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

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search students..."
            className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="Search students"
          />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Student
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                Enrolled
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden lg:table-cell">
                Completed
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                Joined
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
            {students.map((student) => (
              <tr
                key={student.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0">
                      <GraduationCap
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {student.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {student.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    {student.courses}
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                  {student.completed}
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                  {student.joined}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[student.status]}`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label={`Actions for ${student.name}`}
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
