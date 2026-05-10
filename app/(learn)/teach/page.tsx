import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  DollarSign,
  Users,
  BarChart2,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Teach on Praxis",
  description:
    "Share your expertise and earn revenue by creating courses on Praxis Learn.",
};

const benefits = [
  {
    icon: DollarSign,
    title: "Earn every month",
    description:
      "Receive a revenue share on every subscription and direct course sale. Get paid monthly via mobile money or bank transfer.",
  },
  {
    icon: Users,
    title: "Reach thousands",
    description:
      "Your course is visible to all Praxis learners across Ghana and beyond from day one.",
  },
  {
    icon: BarChart2,
    title: "Track your impact",
    description:
      "Access a personal instructor dashboard with student progress, ratings, and earnings in real time.",
  },
  {
    icon: GraduationCap,
    title: "We support you",
    description:
      "Get access to our course creation guide, video production tips, and a dedicated instructor community.",
  },
];

const steps = [
  {
    step: "01",
    title: "Apply",
    description:
      "Fill out the instructor application form. We review every application within 3 business days.",
  },
  {
    step: "02",
    title: "Create your course",
    description:
      "Use our course builder to add videos, quizzes, resources, and milestones.",
  },
  {
    step: "03",
    title: "Submit for review",
    description:
      "Our team checks your course for quality and accuracy before it goes live.",
  },
  {
    step: "04",
    title: "Publish & earn",
    description:
      "Once approved, your course is live. You start earning immediately as students enroll.",
  },
];

const requirements = [
  "Expert-level knowledge in your subject area",
  "Ability to record clear, high-quality video lessons",
  "Willingness to engage with student questions",
  "Commitment to keeping course content up to date",
];

export default function TeachPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Teach what you know.{" "}
                <span className="text-primary">Earn what you deserve.</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Join our growing community of instructors sharing expertise in
                programming, design, business, and more. Build your audience and
                earn passive income doing what you love.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/contact">
                    Apply to Teach
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/courses">See Existing Courses</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Active Instructors", value: "12+" },
                { label: "Students Taught", value: "5,000+" },
                { label: "Courses Published", value: "18" },
                { label: "Avg Instructor Rating", value: "4.7★" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <p className="text-3xl font-extrabold text-primary">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section aria-labelledby="benefits-heading" className="py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="benefits-heading"
            className="text-3xl font-extrabold text-center text-foreground mb-12"
          >
            Why teach on Praxis?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        aria-labelledby="how-it-works-heading"
        className="py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="how-it-works-heading"
            className="text-3xl font-extrabold text-center text-foreground mb-12"
          >
            How it works
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-sm mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section
        aria-labelledby="requirements-heading"
        className="py-20 bg-muted/20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="requirements-heading"
            className="text-3xl font-extrabold text-foreground mb-6"
          >
            What we look for
          </h2>
          <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-left space-y-4">
            {requirements.map((req) => (
              <div key={req} className="flex items-start gap-3">
                <Check
                  className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-foreground">{req}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/contact">
                Start Your Application
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
