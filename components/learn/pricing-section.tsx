import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    tier: "Free",
    price: 0,
    description: "Dip your toes in. Access free previews and community discussions.",
    cta: "Start free",
    href: "/sign-up",
    popular: false,
    features: [
      "Access 5 free courses",
      "Community discussions",
      "Course previews",
      "Mobile app access",
    ],
  },
  {
    tier: "Basic",
    price: 59,
    description: "Full access to all standard courses. Best for individuals building their skills.",
    cta: "Start Basic",
    href: "/sign-up?plan=basic",
    popular: true,
    features: [
      "Everything in Free",
      "Unlimited Basic courses",
      "Downloadable resources",
      "Certificates of completion",
      "Telegram community access",
      "Email support",
    ],
  },
  {
    tier: "Pro",
    price: 119,
    description: "All courses including premium content, live sessions, and priority support.",
    cta: "Go Pro",
    href: "/sign-up?plan=pro",
    popular: false,
    features: [
      "Everything in Basic",
      "All Pro courses",
      "Live Q&A sessions",
      "1-on-1 mentorship sessions",
      "Early access to new courses",
      "Priority email & chat support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="py-20 sm:py-28 bg-muted/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-heading"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Billed monthly in GHS. Cancel anytime. No hidden fees.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.tier}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                plan.popular
                  ? "border-primary bg-card shadow-xl ring-2 ring-primary/20"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs">
                  Most popular
                </Badge>
              )}

              <div>
                <h3 className="text-lg font-bold text-foreground">{plan.tier}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  {plan.price === 0 ? (
                    <span className="text-4xl font-extrabold text-foreground">
                      Free
                    </span>
                  ) : (
                    <>
                      <span className="text-sm text-muted-foreground">GHS</span>
                      <span className="text-4xl font-extrabold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground">/mo</span>
                    </>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3" role="list">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-foreground">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`mt-8 w-full font-semibold ${
                  plan.popular ? "" : "variant-outline"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
