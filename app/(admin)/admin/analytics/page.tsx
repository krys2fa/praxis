import type { Metadata } from "next";
import {
  TrendingUp,
  Users,
  BookOpen,
  BarChart2,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export const metadata: Metadata = { title: "Analytics" };

const metrics = [
  {
    label: "Total Revenue (MTD)",
    value: "GHS 0",
    sub: "+0% vs last month",
    trend: "up",
    icon: TrendingUp,
  },
  {
    label: "New Sign-ups",
    value: "0",
    sub: "+0% vs last month",
    trend: "up",
    icon: Users,
  },
  {
    label: "Course Completions",
    value: "0",
    sub: "+0% vs last month",
    trend: "up",
    icon: BookOpen,
  },
  {
    label: "Avg Session Duration",
    value: "0m",
    sub: "—",
    trend: "neutral",
    icon: BarChart2,
  },
];

const topCourses = [
  {
    title: "Full-Stack Development with Next.js",
    revenue: "GHS 0",
    students: 1240,
  },
  { title: "Python for Data Science", revenue: "GHS 0", students: 2100 },
  { title: "UI/UX Design with Figma", revenue: "GHS 0", students: 930 },
  { title: "Digital Marketing Mastery", revenue: "GHS 0", students: 750 },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-sm text-muted-foreground">
          Platform-wide performance metrics and trends.
        </p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {metrics.map(({ label, value, sub, trend, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              {trend === "up" && (
                <ArrowUpRight
                  className="h-4 w-4 text-emerald-500"
                  aria-hidden="true"
                />
              )}
              {trend === "down" && (
                <ArrowDownRight
                  className="h-4 w-4 text-rose-500"
                  aria-hidden="true"
                />
              )}
            </div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {label}
            </p>
            <p className="mt-1 text-3xl font-bold text-foreground">{value}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <section aria-labelledby="revenue-heading">
        <h2
          id="revenue-heading"
          className="text-base font-semibold text-foreground mb-4"
        >
          Revenue Over Time
        </h2>
        <div className="rounded-xl border border-border bg-card px-5 py-16 text-center">
          <BarChart2
            className="mx-auto h-10 w-10 text-muted-foreground/30 mb-3"
            aria-hidden="true"
          />
          <p className="text-sm text-muted-foreground">
            Revenue chart will display once payment data is available.
          </p>
        </div>
      </section>

      {/* Top courses */}
      <section aria-labelledby="top-courses-heading">
        <h2
          id="top-courses-heading"
          className="text-base font-semibold text-foreground mb-4"
        >
          Top Courses by Enrollment
        </h2>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <table className="w-full text-sm" role="table">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Course
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Students
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground hidden md:table-cell">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {topCourses.map((course, i) => (
                <tr
                  key={course.title}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-muted-foreground w-5">
                        {i + 1}
                      </span>
                      <span className="font-medium text-foreground">
                        {course.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right text-muted-foreground">
                    {course.students.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right text-muted-foreground hidden md:table-cell">
                    {course.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
