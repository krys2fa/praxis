import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Users, BookOpen, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join thousands of learners in the Praxis community. Share, learn, and grow together.",
};

const channels = [
  {
    name: "General Chat",
    description: "Introductions, off-topic, and general discussion.",
    members: 1240,
    icon: MessageSquare,
  },
  {
    name: "Programming",
    description: "Questions and discussions on web dev, Python, and more.",
    members: 870,
    icon: BookOpen,
  },
  {
    name: "Design",
    description:
      "UI/UX, Figma tips, portfolio feedback, and design inspiration.",
    members: 530,
    icon: Zap,
  },
  {
    name: "Marketing",
    description: "Digital marketing, growth hacking, and campaign ideas.",
    members: 360,
    icon: Users,
  },
  {
    name: "Accountability Partners",
    description: "Find a study partner and stay on track together.",
    members: 295,
    icon: Users,
  },
  {
    name: "Job Board",
    description: "Post and find opportunities within the Praxis community.",
    members: 410,
    icon: ArrowRight,
  },
];

const testimonials = [
  {
    quote:
      "The community helped me land my first dev job. I learned more from peer discussions than I expected.",
    name: "Kweku M.",
    title: "Junior Developer",
  },
  {
    quote:
      "I love the accountability partner channel. Having someone to check in with every day made all the difference.",
    name: "Efua A.",
    title: "UX Designer",
  },
  {
    quote:
      "The instructors actively participate in discussions. It feels like a real school, not just a streaming service.",
    name: "Yaw B.",
    title: "Marketing Lead",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-muted/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
            <Users className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>1,200+ active members</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Learn better, together
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Join the Praxis Telegram community to connect with fellow learners,
            ask questions, share projects, and celebrate wins — all in real
            time.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="font-semibold">
              <a
                href="https://t.me/praxislearn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-4 w-4" aria-hidden="true" />
                Join on Telegram
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section aria-labelledby="channels-heading" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2
              id="channels-heading"
              className="text-3xl font-extrabold text-foreground"
            >
              Community channels
            </h2>
            <p className="mt-3 text-muted-foreground">
              Find your tribe in topic-specific groups.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map(({ name, description, members, icon: Icon }) => (
              <div
                key={name}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {members.toLocaleString()}
                      </span>{" "}
                      members
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="community-testimonials-heading"
        className="py-20 bg-muted/20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="community-testimonials-heading"
            className="text-3xl font-extrabold text-center text-foreground mb-12"
          >
            What members say
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map(({ quote, name, title }) => (
              <div
                key={name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{quote}"
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {name}
                  </p>
                  <p className="text-xs text-muted-foreground">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
