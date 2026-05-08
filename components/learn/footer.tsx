import Link from "next/link";
import { BookOpen } from "lucide-react";

const footerLinks = {
  Learn: [
    { label: "Courses", href: "/courses" },
    { label: "Pricing", href: "/pricing" },
    { label: "Become an Instructor", href: "/teach" },
    { label: "Community", href: "/community" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export default function LearnFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-3.5 w-3.5" />
              </span>
              Praxis Learn
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Master your skills with expert-led courses. Learn at your own pace, earn certificates, and advance your career.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="mt-3 space-y-2" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Praxis Platform. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with care in Ghana 🇬🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
