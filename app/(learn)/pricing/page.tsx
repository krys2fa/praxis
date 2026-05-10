import type { Metadata } from "next";
import PricingSection from "@/components/learn/pricing-section";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Praxis Learn. Choose the plan that fits your goals.",
};

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no lock-in contracts. You can cancel your subscription at any time from your account settings.",
  },
  {
    q: "What currency are prices in?",
    a: "All prices are in Ghanaian Cedis (GHS) and are charged monthly.",
  },
  {
    q: "Is there a free trial?",
    a: "The Free plan lets you access 5 courses indefinitely with no credit card required.",
  },
  {
    q: "Do I keep my certificates after cancelling?",
    a: "Yes. Any certificates you earned remain accessible and downloadable even after you cancel.",
  },
  {
    q: "Can I switch plans?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at your next billing date.",
  },
  {
    q: "Are there discounts for students or teams?",
    a: "Yes — reach out to our support team for student discounts and team/corporate pricing.",
  },
];

const comparison = [
  { feature: "Access to free courses", free: true, basic: true, pro: true },
  { feature: "Unlimited courses", free: false, basic: true, pro: true },
  { feature: "Downloadable resources", free: false, basic: true, pro: true },
  { feature: "Certificates", free: false, basic: true, pro: true },
  { feature: "Live Q&A sessions", free: false, basic: false, pro: true },
  { feature: "1-on-1 mentorship", free: false, basic: false, pro: true },
  { feature: "Priority support", free: false, basic: false, pro: true },
];

export default function PricingPage() {
  return (
    <>
      <PricingSection />

      {/* Feature comparison */}
      <section aria-labelledby="comparison-heading" className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="comparison-heading"
            className="text-2xl font-extrabold text-center text-foreground mb-10"
          >
            Compare Plans
          </h2>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-5 py-4 text-left font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="px-5 py-4 text-center font-semibold text-foreground">
                    Free
                  </th>
                  <th className="px-5 py-4 text-center font-semibold text-primary">
                    Basic
                  </th>
                  <th className="px-5 py-4 text-center font-semibold text-foreground">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map(({ feature, free, basic, pro }) => (
                  <tr
                    key={feature}
                    className="hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-5 py-3.5 text-foreground">{feature}</td>
                    <td className="px-5 py-3.5 text-center">
                      {free ? (
                        <Check
                          className="mx-auto h-4 w-4 text-primary"
                          aria-label="Included"
                        />
                      ) : (
                        <span className="text-muted-foreground/40">—</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      {basic ? (
                        <Check
                          className="mx-auto h-4 w-4 text-primary"
                          aria-label="Included"
                        />
                      ) : (
                        <span className="text-muted-foreground/40">—</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      {pro ? (
                        <Check
                          className="mx-auto h-4 w-4 text-primary"
                          aria-label="Included"
                        />
                      ) : (
                        <span className="text-muted-foreground/40">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        aria-labelledby="faq-heading"
        className="py-16 sm:py-20 bg-muted/20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="text-2xl font-extrabold text-center text-foreground mb-10"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-sm font-semibold text-foreground">{q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
