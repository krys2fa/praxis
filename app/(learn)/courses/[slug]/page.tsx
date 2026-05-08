import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Star,
  Users,
  BookOpen,
  Play,
  CheckCircle2,
  Award,
  ChevronDown,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

const courses: Record<string, {
  slug: string;
  title: string;
  instructor: string;
  instructorBio: string;
  rating: number;
  students: number;
  duration: string;
  lessons: number;
  level: string;
  category: string;
  price: number;
  description: string;
  longDescription: string;
  whatYouLearn: string[];
  requirements: string[];
  curriculum: { section: string; lessons: { title: string; duration: string; preview: boolean }[] }[];
}> = {
  "fullstack-nextjs": {
    slug: "fullstack-nextjs",
    title: "Full-Stack Development with Next.js",
    instructor: "Sarah Mensah",
    instructorBio: "Senior Software Engineer with 8+ years building scalable web applications. Previously at Andela and Paystack.",
    rating: 4.9,
    students: 1240,
    duration: "18h 30m",
    lessons: 48,
    level: "Intermediate",
    category: "Programming",
    price: 299,
    description: "Master Next.js App Router, Prisma, and PostgreSQL to build production-grade web apps.",
    longDescription: "This comprehensive course takes you from the fundamentals of Next.js to deploying a full production application. You'll learn the App Router, Server Components, Prisma ORM, PostgreSQL, authentication with Clerk, payments with Paystack, and deployment on Vercel.",
    whatYouLearn: [
      "Build full-stack applications with Next.js App Router",
      "Design and manage databases with Prisma ORM",
      "Implement authentication using Clerk",
      "Accept payments via Paystack (GHS)",
      "Deploy production apps to Vercel",
      "Write clean, type-safe TypeScript",
    ],
    requirements: [
      "Basic JavaScript knowledge",
      "Familiarity with HTML and CSS",
      "A computer with Node.js installed",
    ],
    curriculum: [
      {
        section: "Getting Started",
        lessons: [
          { title: "Course Overview & Setup", duration: "8:30", preview: true },
          { title: "Next.js Project Structure", duration: "12:15", preview: true },
          { title: "App Router Fundamentals", duration: "20:00", preview: false },
        ],
      },
      {
        section: "Database & Prisma",
        lessons: [
          { title: "Introduction to Prisma ORM", duration: "15:00", preview: false },
          { title: "Schema Design & Migrations", duration: "22:30", preview: false },
          { title: "Querying Data", duration: "18:00", preview: false },
        ],
      },
      {
        section: "Authentication",
        lessons: [
          { title: "Setting Up Clerk", duration: "10:00", preview: false },
          { title: "Protected Routes & Middleware", duration: "16:00", preview: false },
          { title: "User Profiles & Webhooks", duration: "14:30", preview: false },
        ],
      },
      {
        section: "Payments",
        lessons: [
          { title: "Paystack Integration", duration: "20:00", preview: false },
          { title: "Subscriptions & Webhooks", duration: "25:00", preview: false },
        ],
      },
    ],
  },
  "ui-design-figma": {
    slug: "ui-design-figma",
    title: "UI/UX Design with Figma",
    instructor: "Kofi Asante",
    instructorBio: "Lead Product Designer with experience designing for fintech and e-commerce products across Africa.",
    rating: 4.8,
    students: 930,
    duration: "12h 15m",
    lessons: 36,
    level: "Beginner",
    category: "Design",
    price: 199,
    description: "Learn modern UI/UX design principles and build stunning interfaces using Figma.",
    longDescription: "Master Figma from scratch and learn how to design user interfaces that are both beautiful and functional. This course covers design principles, component libraries, prototyping, and how to hand off designs to developers.",
    whatYouLearn: [
      "Navigate Figma's interface with confidence",
      "Apply core UI/UX design principles",
      "Build reusable component libraries",
      "Create interactive prototypes",
      "Conduct basic user research",
      "Hand off designs to developers",
    ],
    requirements: [
      "No prior design experience needed",
      "A free Figma account",
    ],
    curriculum: [
      {
        section: "Figma Basics",
        lessons: [
          { title: "Welcome to Figma", duration: "6:00", preview: true },
          { title: "Frames, Layers & Groups", duration: "14:00", preview: true },
          { title: "Typography in UI Design", duration: "16:30", preview: false },
        ],
      },
      {
        section: "Design Principles",
        lessons: [
          { title: "Color Theory for UI", duration: "20:00", preview: false },
          { title: "Spacing & Layout Systems", duration: "18:00", preview: false },
          { title: "Designing for Accessibility", duration: "15:00", preview: false },
        ],
      },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses[slug];
  if (!course) return { title: "Course Not Found" };
  return { title: course.title, description: course.description };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses[slug];
  if (!course) notFound();

  const totalLessons = course.curriculum.reduce((a, s) => a + s.lessons.length, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <nav className="mb-4 flex items-center gap-2 text-sm text-slate-400">
                <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
                <span>/</span>
                <span>{course.category}</span>
              </nav>

              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{course.title}</h1>
              <p className="mt-3 text-slate-300">{course.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-amber-400">{course.rating}</span>
                  <span className="text-slate-400">({course.students.toLocaleString()} students)</span>
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Clock className="h-4 w-4" /> {course.duration}
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <BookOpen className="h-4 w-4" /> {totalLessons} lessons
                </span>
                <span className="rounded-full bg-amber-500/20 px-3 py-0.5 text-xs font-medium text-amber-400">
                  {course.level}
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-400">
                Created by{" "}
                <span className="font-medium text-white">{course.instructor}</span>
              </p>
            </div>

            {/* Purchase card — desktop sticky */}
            <div className="hidden lg:block">
              <div className="rounded-xl border border-slate-700 bg-slate-800/80 p-6 shadow-xl">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-5">
                  <Play className="h-12 w-12 text-primary/60" />
                </div>
                <p className="text-3xl font-bold text-white">GHS {course.price}</p>
                <Button className="mt-4 w-full" size="lg">Enroll Now</Button>
                <Button variant="outline" className="mt-2 w-full border-slate-600 text-slate-300 hover:text-white" size="lg">
                  Try Free Preview
                </Button>
                <ul className="mt-5 space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Full lifetime access</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> {course.duration} of HD video</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Certificate of completion</li>
                  <li className="flex items-center gap-2"><Award className="h-4 w-4 text-amber-400" /> 30-day money-back guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {/* What you'll learn */}
            <section>
              <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
              <div className="rounded-xl border border-border p-6 grid sm:grid-cols-2 gap-3">
                {course.whatYouLearn.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-2">
                {course.requirements.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </section>

            {/* Description */}
            <section>
              <h2 className="text-xl font-bold mb-4">About this course</h2>
              <p className="text-muted-foreground leading-relaxed">{course.longDescription}</p>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-xl font-bold mb-1">Course curriculum</h2>
              <p className="text-sm text-muted-foreground mb-4">
                {course.curriculum.length} sections · {totalLessons} lessons · {course.duration} total
              </p>

              <div className="space-y-3">
                {course.curriculum.map((section) => (
                  <details key={section.section} className="group rounded-xl border border-border overflow-hidden" open>
                    <summary className="flex cursor-pointer items-center justify-between bg-muted/50 px-5 py-4 font-medium">
                      <span>{section.section}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{section.lessons.length} lessons</span>
                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </div>
                    </summary>
                    <div className="divide-y divide-border">
                      {section.lessons.map((lesson) => (
                        <div key={lesson.title} className="flex items-center gap-3 px-5 py-3 text-sm">
                          {lesson.preview ? (
                            <Play className="h-4 w-4 text-primary shrink-0" />
                          ) : (
                            <Lock className="h-4 w-4 text-muted-foreground shrink-0" />
                          )}
                          <span className="flex-1">{lesson.title}</span>
                          {lesson.preview && (
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary font-medium">
                              Preview
                            </span>
                          )}
                          <span className="text-muted-foreground">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section>
              <h2 className="text-xl font-bold mb-4">Your instructor</h2>
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary shrink-0">
                  {course.instructor.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-lg">{course.instructor}</p>
                  <p className="text-sm text-muted-foreground mt-1">{course.instructorBio}</p>
                  <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      {course.rating} instructor rating
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {course.students.toLocaleString()} students
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar — mobile purchase card */}
          <div className="lg:hidden">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-3xl font-bold text-primary">GHS {course.price}</p>
              <Button className="mt-4 w-full" size="lg">Enroll Now</Button>
              <Button variant="outline" className="mt-2 w-full" size="lg">Try Free Preview</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
