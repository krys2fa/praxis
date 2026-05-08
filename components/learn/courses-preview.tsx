import Link from "next/link";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Static preview — replace with `prisma.course.findMany()` in a real Server Component
const previewCourses = [
  {
    id: "1",
    slug: "financial-modelling",
    title: "Financial Modelling for Professionals",
    instructor: "Kwame Mensah",
    category: "Finance",
    rating: 4.9,
    students: 1240,
    durationHours: 6.5,
    tier: "Pro",
    thumbnail: null,
  },
  {
    id: "2",
    slug: "company-law-ghana",
    title: "Company Law & Corporate Governance in Ghana",
    instructor: "Adwoa Asante",
    category: "Law",
    rating: 4.8,
    students: 870,
    durationHours: 8,
    tier: "Basic",
    thumbnail: null,
  },
  {
    id: "3",
    slug: "data-analysis-python",
    title: "Data Analysis with Python",
    instructor: "Kofi Acheampong",
    category: "Technology",
    rating: 4.7,
    students: 2100,
    durationHours: 10,
    tier: "Basic",
    thumbnail: null,
  },
];

const tierColour: Record<string, string> = {
  Basic: "bg-primary/10 text-primary",
  Pro: "bg-amber-100 text-amber-700",
  Enterprise: "bg-slate-100 text-slate-700",
};

export default function CoursesPreview() {
  return (
    <section aria-labelledby="courses-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2
              id="courses-heading"
              className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Popular courses
            </h2>
            <p className="mt-2 text-muted-foreground">
              Handpicked by our team to get you results faster.
            </p>
          </div>
          <Button asChild variant="ghost" className="shrink-0 hidden sm:flex gap-1">
            <Link href="/courses">
              View all
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group rounded-xl border border-border bg-card overflow-hidden hover-lift hover:border-primary/30 focus-visible:outline-2 focus-visible:outline-primary"
              aria-label={`${course.title} by ${course.instructor}`}
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-500 text-sm font-medium">
                    {course.category}
                  </span>
                </div>
                <div
                  className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-xs font-semibold ${
                    tierColour[course.tier]
                  }`}
                >
                  {course.tier}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  by {course.instructor}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" />
                    <strong className="text-foreground">{course.rating}</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" aria-hidden="true" />
                    {course.students.toLocaleString()} students
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {course.durationHours}h
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link href="/courses">View all courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
