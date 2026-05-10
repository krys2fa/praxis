import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Users, Globe, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Praxis",
  description:
    "Learn about the Praxis platform — our mission, team, and the story behind the product.",
};

const values = [
  {
    icon: BookOpen,
    title: "Learning first",
    description:
      "Every decision we make is guided by whether it makes learning better, easier, or more accessible.",
  },
  {
    icon: Globe,
    title: "Built for Africa",
    description:
      "Praxis is designed from the ground up for Ghanaian and African learners — local currency, relevant content, local context.",
  },
  {
    icon: Users,
    title: "Community-driven",
    description:
      "We believe learning happens best together. Our community is a core part of the product, not an afterthought.",
  },
  {
    icon: Heart,
    title: "Quality over quantity",
    description:
      "We curate every course. We'd rather have 20 great courses than 2,000 mediocre ones.",
  },
];

const team = [
  {
    name: "Kofi Asante",
    role: "CEO & Co-founder",
    bio: "Previously built EdTech products across West Africa. Passionate about skills development.",
  },
  {
    name: "Ama Mensah",
    role: "CTO & Co-founder",
    bio: "Full-stack engineer with experience at top-tier startups. Leads engineering at Praxis.",
  },
  {
    name: "Kwame Darko",
    role: "Head of Content",
    bio: "Former curriculum developer with 8 years designing learning experiences.",
  },
  {
    name: "Efua Boateng",
    role: "Head of Community",
    bio: "Community builder who grew Praxis Telegram from 0 to 1,200+ engaged members.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            We're on a mission to make{" "}
            <span className="text-primary">
              world-class education accessible
            </span>{" "}
            in Africa
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Praxis was founded in Accra, Ghana with a simple belief: talent is
            evenly distributed but opportunity is not. We're here to change that
            with expert-led courses, a vibrant community, and tools that
            actually work in the African context.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-labelledby="stats-heading" className="py-16 bg-muted/20">
        <h2 id="stats-heading" className="sr-only">
          Platform stats
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { label: "Students enrolled", value: "5,000+" },
              { label: "Courses published", value: "18" },
              { label: "Instructors", value: "12+" },
              { label: "Community members", value: "1,200+" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <p className="text-4xl font-extrabold text-primary">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our values */}
      <section aria-labelledby="values-heading" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2
              id="values-heading"
              className="text-3xl font-extrabold text-foreground"
            >
              Our values
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
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

      {/* Team */}
      <section aria-labelledby="team-heading" className="py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2
              id="team-heading"
              className="text-3xl font-extrabold text-foreground"
            >
              Meet the team
            </h2>
            <p className="mt-3 text-muted-foreground">
              A small but mighty team building the future of learning in Africa.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(({ name, role, bio }) => (
              <div
                key={name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span
                    className="text-xl font-bold text-primary"
                    aria-hidden="true"
                  >
                    {name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{name}</h3>
                <p className="text-xs text-primary font-medium mt-0.5">
                  {role}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
