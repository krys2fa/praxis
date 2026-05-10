import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tutorials, and updates from the Praxis team.",
};

type Category = "Tutorial" | "News" | "Career" | "Design" | "Programming";

const categoryStyles: Record<Category, string> = {
  Tutorial: "bg-blue-100 text-blue-700",
  News: "bg-emerald-100 text-emerald-700",
  Career: "bg-purple-100 text-purple-700",
  Design: "bg-pink-100 text-pink-700",
  Programming: "bg-amber-100 text-amber-700",
};

const posts = [
  {
    slug: "how-to-get-started-with-nextjs-app-router",
    title: "How to Get Started with the Next.js App Router",
    excerpt:
      "The App Router changed how we think about routing in Next.js. Here's a practical guide to understanding layouts, loading states, and server components.",
    author: "Sarah Mensah",
    date: "May 5, 2026",
    readTime: "8 min read",
    category: "Tutorial" as Category,
  },
  {
    slug: "5-career-tips-for-new-developers",
    title: "5 Career Tips Every New Developer in Ghana Needs to Hear",
    excerpt:
      "Breaking into tech in Ghana is more achievable than ever. Here are five practical pieces of advice from developers who did it.",
    author: "Kofi Asante",
    date: "Apr 28, 2026",
    readTime: "5 min read",
    category: "Career" as Category,
  },
  {
    slug: "figma-shortcuts-that-will-transform-your-workflow",
    title: "Figma Shortcuts That Will Transform Your Workflow",
    excerpt:
      "Speed up your design process with these essential Figma keyboard shortcuts and techniques used by professional designers.",
    author: "Ama Boateng",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    category: "Design" as Category,
  },
  {
    slug: "introducing-praxis-legal",
    title:
      "Introducing Praxis Legal — Practice Management for Ghanaian Lawyers",
    excerpt:
      "Today we're launching Praxis Legal, a purpose-built case management and billing tool for law firms in Ghana.",
    author: "Praxis Team",
    date: "Apr 10, 2026",
    readTime: "4 min read",
    category: "News" as Category,
  },
  {
    slug: "python-for-beginners-where-to-start",
    title: "Python for Beginners: Where to Start in 2026",
    excerpt:
      "Python is still one of the best first languages to learn. Here's a structured path to go from zero to job-ready.",
    author: "Ama Boateng",
    date: "Mar 30, 2026",
    readTime: "7 min read",
    category: "Programming" as Category,
  },
  {
    slug: "digital-marketing-basics-for-african-businesses",
    title: "Digital Marketing Basics Every African Business Needs",
    excerpt:
      "A no-nonsense guide to building an online presence for small and medium businesses in Africa.",
    author: "Kwame Darko",
    date: "Mar 15, 2026",
    readTime: "6 min read",
    category: "Career" as Category,
  },
];

const featured = posts[0];
const rest = posts.slice(1);

export default function BlogPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-foreground">Blog</h1>
          <p className="mt-3 text-muted-foreground">
            Insights, tutorials, and updates from the Praxis team.
          </p>
        </div>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors mb-10"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryStyles[featured.category]}`}
              >
                {featured.category}
              </span>
              <h2 className="mt-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {featured.readTime}
                </span>
              </div>
            </div>
            <ArrowRight
              className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
              aria-hidden="true"
            />
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium self-start ${categoryStyles[post.category]}`}
              >
                {post.category}
              </span>
              <h2 className="mt-3 font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                <span>{post.author}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
