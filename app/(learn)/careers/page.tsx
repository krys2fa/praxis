import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Praxis team and help us build the future of education in Africa.",
};

type JobType = "Full-time" | "Part-time" | "Contract";
type Department =
  | "Engineering"
  | "Content"
  | "Design"
  | "Marketing"
  | "Operations";

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering" as Department,
    type: "Full-time" as JobType,
    location: "Accra, Ghana (Hybrid)",
    description:
      "Help us build and scale the Praxis platform using Next.js, Prisma, and PostgreSQL.",
  },
  {
    title: "Curriculum Developer",
    department: "Content" as Department,
    type: "Full-time" as JobType,
    location: "Accra, Ghana (Remote-friendly)",
    description:
      "Design structured learning pathways and work with instructors to produce high-quality course content.",
  },
  {
    title: "Product Designer (UI/UX)",
    department: "Design" as Department,
    type: "Full-time" as JobType,
    location: "Remote",
    description:
      "Own the design language of Praxis — from user research and wireframes to polished, accessible UI.",
  },
  {
    title: "Community & Social Media Manager",
    department: "Marketing" as Department,
    type: "Full-time" as JobType,
    location: "Accra, Ghana (Hybrid)",
    description:
      "Grow and manage the Praxis community on Telegram, Instagram, and LinkedIn. Build campaigns that resonate with African learners.",
  },
  {
    title: "Video Editor (Contract)",
    department: "Content" as Department,
    type: "Contract" as JobType,
    location: "Remote",
    description:
      "Edit and produce polished course videos. Experience with DaVinci Resolve or Premiere Pro required.",
  },
];

const perks = [
  "Competitive salary benchmarked to market",
  "Flexible & remote-friendly work culture",
  "Learning budget — free access to all Praxis courses",
  "Healthcare benefits",
  "Annual company retreat",
  "Meaningful equity in an early-stage startup",
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-muted/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Build the future of African education
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We're a small team with a big mission. If you're passionate about
            education, technology, and Africa's potential, we want to meet you.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section aria-labelledby="perks-heading" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="perks-heading"
            className="text-2xl font-extrabold text-foreground mb-8"
          >
            Why work at Praxis?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => (
              <div
                key={perk}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 shrink-0 mt-0.5">
                  <div
                    className="h-2.5 w-2.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm text-foreground">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section aria-labelledby="roles-heading" className="py-20 bg-muted/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="roles-heading"
            className="text-2xl font-extrabold text-foreground mb-8"
          >
            Open roles
          </h2>
          <div className="space-y-4">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-medium">
                        <Briefcase className="h-3 w-3" aria-hidden="true" />
                        {role.department}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-border text-muted-foreground px-2.5 py-0.5 text-xs">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {role.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" aria-hidden="true" />
                        {role.location}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {role.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="shrink-0"
                  >
                    <Link href="/contact">
                      Apply
                      <ArrowRight
                        className="ml-1.5 h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't see a role that fits?{" "}
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              Send us an open application
            </Link>{" "}
            — we love meeting talented people.
          </p>
        </div>
      </section>
    </>
  );
}
