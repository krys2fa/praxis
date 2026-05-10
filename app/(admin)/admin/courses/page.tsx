import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Plus,
  Search,
  Users,
  Star,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Courses" };

type CourseStatus = "Published" | "Draft" | "Archived";

const statusStyles: Record<CourseStatus, string> = {
  Published: "bg-emerald-100 text-emerald-700",
  Draft: "bg-amber-100 text-amber-700",
  Archived: "bg-slate-100 text-slate-600",
};

const courses = [
  {
    id: "c1",
    title: "Full-Stack Development with Next.js",
    instructor: "Sarah Mensah",
    category: "Programming",
    students: 1240,
    rating: 4.9,
    price: 299,
    status: "Published" as CourseStatus,
    createdAt: "Jan 10, 2026",
  },
  {
    id: "c2",
    title: "UI/UX Design with Figma",
    instructor: "Kofi Asante",
    category: "Design",
    students: 930,
    rating: 4.8,
    price: 199,
    status: "Published" as CourseStatus,
    createdAt: "Jan 22, 2026",
  },
  {
    id: "c3",
    title: "Python for Data Science",
    instructor: "Ama Boateng",
    category: "Programming",
    students: 2100,
    rating: 4.7,
    price: 249,
    status: "Published" as CourseStatus,
    createdAt: "Feb 5, 2026",
  },
  {
    id: "c4",
    title: "Digital Marketing Mastery",
    instructor: "Kwame Darko",
    category: "Marketing",
    students: 750,
    rating: 4.6,
    price: 149,
    status: "Published" as CourseStatus,
    createdAt: "Feb 18, 2026",
  },
  {
    id: "c5",
    title: "Advanced React Patterns",
    instructor: "Sarah Mensah",
    category: "Programming",
    students: 0,
    rating: 0,
    price: 279,
    status: "Draft" as CourseStatus,
    createdAt: "Apr 30, 2026",
  },
];

export default function AdminCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Courses</h1>
          <p className="text-sm text-muted-foreground">
            Manage all courses on the platform.
          </p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1.5" aria-hidden="true" />
          New Course
        </Button>
      </div>

      {/* Search + filter bar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search courses..."
            className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="Search courses"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Course
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                Category
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden lg:table-cell">
                Students
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden lg:table-cell">
                Rating
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Price
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
            {courses.map((course) => (
              <tr
                key={course.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <BookOpen
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {course.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {course.instructor}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                  {course.category}
                </td>
                <td className="px-4 py-3 hidden lg:table-cell">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="h-3.5 w-3.5" aria-hidden="true" />
                    {course.students.toLocaleString()}
                  </div>
                </td>
                <td className="px-4 py-3 hidden lg:table-cell">
                  {course.rating > 0 ? (
                    <div className="flex items-center gap-1 text-amber-500 font-medium">
                      <Star
                        className="h-3.5 w-3.5 fill-amber-400"
                        aria-hidden="true"
                      />
                      {course.rating}
                    </div>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
                <td className="px-4 py-3 font-medium text-foreground">
                  GHS {course.price}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[course.status]}`}
                  >
                    {course.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    className="inline-flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label={`Actions for ${course.title}`}
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
