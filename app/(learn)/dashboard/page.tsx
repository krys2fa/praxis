"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {
  BookOpen,
  Play,
  Clock,
  Award,
  BarChart3,
  ChevronRight,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// In production these would come from the DB via server component or API
const enrolledCourses = [
  {
    slug: "fullstack-nextjs",
    title: "Full-Stack Development with Next.js",
    instructor: "Sarah Mensah",
    progress: 42,
    totalLessons: 48,
    completedLessons: 20,
    lastLesson: "Querying Data with Prisma",
    lastLessonSlug: "querying-data",
  },
  {
    slug: "ui-design-figma",
    title: "UI/UX Design with Figma",
    instructor: "Kofi Asante",
    progress: 100,
    totalLessons: 36,
    completedLessons: 36,
    lastLesson: "Completed",
    lastLessonSlug: null,
  },
];

const certificates = [
  {
    course: "UI/UX Design with Figma",
    issuedDate: "Apr 15, 2026",
    credentialId: "PX-2026-4521",
  },
];

const recommendedCourses = [
  {
    slug: "python-data-science",
    title: "Python for Data Science",
    category: "Programming",
    rating: 4.7,
    price: 249,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Mastery",
    category: "Marketing",
    rating: 4.6,
    price: 149,
  },
];

export default function StudentDashboard() {
  const { isSignedIn, isLoaded } = useAuth();

  if (isLoaded && !isSignedIn) {
    redirect("/");
  }

  const inProgress = enrolledCourses.filter((c) => c.progress < 100);
  const completed = enrolledCourses.filter((c) => c.progress === 100);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Learning</h1>
          <p className="mt-1 text-muted-foreground">Track your courses, progress, and certificates.</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-10">
          {[
            { label: "Enrolled", value: enrolledCourses.length, icon: BookOpen },
            { label: "In Progress", value: inProgress.length, icon: Play },
            { label: "Completed", value: completed.length, icon: Award },
            { label: "Hours Learned", value: "24h", icon: Clock },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-card p-5 flex items-center gap-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {/* In Progress */}
            {inProgress.length > 0 && (
              <section>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Continue Learning
                </h2>
                <div className="space-y-4">
                  {inProgress.map((course) => (
                    <div
                      key={course.slug}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/courses/${course.slug}`}
                            className="font-semibold hover:text-primary transition-colors line-clamp-1"
                          >
                            {course.title}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            by {course.instructor}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Last: <span className="text-foreground">{course.lastLesson}</span>
                          </p>

                          {/* Progress bar */}
                          <div className="mt-3">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="text-muted-foreground">
                                {course.completedLessons}/{course.totalLessons} lessons
                              </span>
                              <span className="font-medium text-primary">{course.progress}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full rounded-full bg-primary transition-all"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                        <Button size="sm" className="shrink-0 gap-1">
                          <Play className="h-3.5 w-3.5" />
                          Resume
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Completed */}
            {completed.length > 0 && (
              <section>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Completed
                </h2>
                <div className="space-y-4">
                  {completed.map((course) => (
                    <div
                      key={course.slug}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                          <Award className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/courses/${course.slug}`}
                            className="font-semibold hover:text-primary transition-colors line-clamp-1"
                          >
                            {course.title}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-0.5">by {course.instructor}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                            Completed
                          </span>
                          <Button variant="outline" size="sm">View Certificate</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Activity chart placeholder */}
            <section>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Learning Activity
              </h2>
              <div className="rounded-xl border border-border bg-card p-6 h-40 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Activity chart coming soon</p>
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Certificates */}
            <section>
              <h2 className="text-base font-bold mb-3">Certificates</h2>
              {certificates.length === 0 ? (
                <div className="rounded-xl border border-dashed border-border p-5 text-center text-sm text-muted-foreground">
                  Complete a course to earn your first certificate.
                </div>
              ) : (
                <div className="space-y-3">
                  {certificates.map((cert) => (
                    <div
                      key={cert.credentialId}
                      className="rounded-xl border border-border bg-card p-4"
                    >
                      <div className="flex items-center gap-3">
                        <Award className="h-8 w-8 text-amber-500 shrink-0" />
                        <div className="min-w-0">
                          <p className="font-medium text-sm line-clamp-1">{cert.course}</p>
                          <p className="text-xs text-muted-foreground">{cert.issuedDate}</p>
                          <p className="text-xs text-muted-foreground font-mono">{cert.credentialId}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">
                        Download PDF
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Recommended */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold">Recommended for You</h2>
                <Link href="/courses" className="text-sm text-primary hover:underline flex items-center gap-0.5">
                  See all <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="space-y-3">
                {recommendedCourses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                        {course.title}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        {course.rating}
                        <span>· GHS {course.price}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
