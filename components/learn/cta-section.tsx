import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-20 sm:py-28 bg-foreground text-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="text-3xl font-extrabold tracking-tight sm:text-4xl text-background"
        >
          Ready to start learning?
        </h2>
        <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
          Join 12,000+ professionals already growing with Praxis. Create your
          free account and browse the full course library today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 group"
          >
            <Link href="/sign-up">
              Create free account
              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-background/30 text-background hover:bg-background/10 gap-2"
          >
            <a
              href="https://t.me/praxislearn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Join Telegram community
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
