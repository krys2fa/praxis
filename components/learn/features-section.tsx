import {
  Video,
  Award,
  Globe,
  MessageSquare,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Expert video lessons",
    description:
      "HD video content hosted securely. Stream on demand with no downloads — we protect creator content so quality stays high.",
  },
  {
    icon: Award,
    title: "Verifiable certificates",
    description:
      "Complete a course and receive a certificate you can share on LinkedIn, email, or download as PDF.",
  },
  {
    icon: Globe,
    title: "Learn in your language",
    description:
      "Courses with captions and multilingual notes. Our growing library covers Africa-specific contexts and case studies.",
  },
  {
    icon: MessageSquare,
    title: "Community & discussion",
    description:
      "Ask questions in-course, join live sessions, and connect with peers and instructors in your Telegram community.",
  },
  {
    icon: Smartphone,
    title: "Any device, anytime",
    description:
      "Fully responsive. Watch on phone, tablet, or desktop. Bookmark where you left off and pick up seamlessly.",
  },
  {
    icon: TrendingUp,
    title: "Track your progress",
    description:
      "Visual progress bars, streaks, and quiz scores keep you motivated and on track to complete every course.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className="py-20 sm:py-28 bg-muted/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Everything you need to{" "}
            <span className="text-gradient-amber">grow fast</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One subscription. Unlimited access. Built for serious learners.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-card p-6 hover-lift transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
