import type { Metadata } from "next";
import Link from "next/link";
import { Search, SlidersHorizontal, Clock, Star, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse our library of expert-led video courses. Learn at your own pace and earn certificates.",
};

const categories = [
  "All",
  "Programming",
  "Design",
  "Business",
  "Marketing",
  "Photography",
  "Music",
  "Personal Development",
];

const courses = [
  {
    slug: "fullstack-nextjs",
    title: "Full-Stack Development with Next.js",
    instructor: "Sarah Mensah",
    rating: 4.9,
    students: 1240,
    duration: "18h 30m",
    lessons: 48,
    level: "Intermediate",
    category: "Programming",
    price: 299,
    image: null,
    description: "Master Next.js App Router, Prisma, and PostgreSQL to build production-grade web apps.",
  },
  {
    slug: "ui-design-figma",
    title: "UI/UX Design with Figma",
    instructor: "Kofi Asante",
    rating: 4.8,
    students: 930,
    duration: "12h 15m",
    lessons: 36,
    level: "Beginner",
    category: "Design",
    price: 199,
    image: null,
    description: "Learn modern UI/UX design principles and build stunning interfaces using Figma.",
  },
  {
    slug: "python-data-science",
    title: "Python for Data Science",
    instructor: "Ama Boateng",
    rating: 4.7,
    students: 2100,
    duration: "22h 45m",
    lessons: 60,
    level: "Beginner",
    category: "Programming",
    price: 249,
    image: null,
    description: "From pandas to machine learning — a complete Python data science bootcamp.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Mastery",
    instructor: "Kwame Darko",
    rating: 4.6,
    students: 750,
    duration: "10h 00m",
    lessons: 30,
    level: "Beginner",
    category: "Marketing",
    price: 149,
    image: null,
    description: "SEO, social media, paid ads, and email marketing — grow any business online.",
  },
  {
    slug: "react-native-mobile",
    title: "React Native: Build Mobile Apps",
    instructor: "Sarah Mensah",
    rating: 4.8,
    students: 680,
    duration: "16h 20m",
    lessons: 42,
    level: "Intermediate",
    category: "Programming",
    price: 279,
    image: null,
    description: "Ship iOS and Android apps with a single codebase using React Native and Expo.",
  },
  {
    slug: "entrepreneurship-101",
    title: "Entrepreneurship 101",
    instructor: "Esi Owusu",
    rating: 4.9,
    students: 1580,
    duration: "8h 30m",
    lessons: 24,
    level: "Beginner",
    category: "Business",
    price: 129,
    image: null,
    description: "Turn your idea into a viable business — from validation to launch.",
  },
];

const levelColor: Record<string, string> = {
  Beginner: "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-rose-100 text-rose-700",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero strip */}
      <section className="border-b border-border/50 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Courses
          </h1>
          <p className="mt-2 text-muted-foreground">
            {courses.length} courses · Expert instructors · Lifetime access
          </p>

          {/* Search bar */}
          <div className="mt-6 flex gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search courses, topics, instructors…"
                className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                cat === "All"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover-lift transition-all"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-primary/40" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                {/* Category + Level */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary">{course.category}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${levelColor[course.level]}`}>
                    {course.level}
                  </span>
                </div>

                <h2 className="font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                  {course.description}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  by <span className="font-medium text-foreground">{course.instructor}</span>
                </p>

                {/* Stats */}
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {course.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {course.students.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-lg font-bold text-primary">
                    GHS {course.price}
                  </span>
                  <span className="text-xs text-muted-foreground">{course.lessons} lessons</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            Load more courses
          </Button>
        </div>
      </div>
    </div>
  );
}
