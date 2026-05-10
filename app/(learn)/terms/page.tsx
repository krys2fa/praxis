import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Praxis platform terms of service — rules and conditions for using our platform.",
};

const lastUpdated = "May 1, 2026";

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-foreground">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8 text-foreground">
          <section>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") govern your use of the Praxis
              platform, including Praxis Learn and Praxis Legal, operated by
              Praxis Platform. By accessing or using our services, you agree to
              these Terms. If you do not agree, do not use our platform.
            </p>
          </section>

          {[
            {
              id: "terms-accounts",
              title: "1. Accounts",
              items: [
                "You must be at least 16 years old to create an account.",
                "You are responsible for maintaining the security of your account credentials.",
                "You must not share your account or use another person's account.",
                "You must provide accurate information when registering.",
              ],
            },
            {
              id: "terms-content",
              title: "2. Platform Content",
              items: [
                "All course content, materials, and assets on Praxis are owned by Praxis Platform or the respective instructors and are protected by copyright.",
                "You may access content for personal, non-commercial use only.",
                "You may not copy, distribute, reproduce, or resell any course materials.",
                "Certificates issued on completion are for your personal use and may not be altered or misrepresented.",
              ],
            },
            {
              id: "terms-conduct",
              title: "3. Acceptable Use",
              items: [
                "You must not use the platform for any unlawful purpose.",
                "You must not attempt to gain unauthorised access to any part of the platform.",
                "You must not upload or share harmful, abusive, defamatory, or illegal content.",
                "You must not use automated tools to scrape or extract content from the platform.",
                "Violations may result in immediate suspension or termination of your account.",
              ],
            },
            {
              id: "terms-payments",
              title: "4. Payments & Subscriptions",
              items: [
                "Subscriptions are billed monthly in Ghanaian Cedis (GHS).",
                "Payments are processed securely through Paystack.",
                "All fees are non-refundable unless otherwise stated or required by law.",
                "You may cancel your subscription at any time; access continues until the end of the billing period.",
                "Praxis reserves the right to change pricing with 30 days' notice to existing subscribers.",
              ],
            },
            {
              id: "terms-instructors",
              title: "5. Instructors",
              items: [
                "Instructors must comply with our content guidelines when creating and publishing courses.",
                "Praxis reserves the right to remove or suspend courses that violate our policies.",
                "Revenue share terms are set out in the separate Instructor Agreement.",
              ],
            },
            {
              id: "terms-ip",
              title: "6. Intellectual Property",
              items: [
                "The Praxis name, logo, and platform design are trademarks of Praxis Platform.",
                "User-submitted content (such as forum posts or project uploads) remains owned by you, but you grant Praxis a non-exclusive licence to display it on the platform.",
              ],
            },
            {
              id: "terms-liability",
              title: "7. Limitation of Liability",
              items: [
                "Praxis provides its platform 'as is' without warranties of any kind.",
                "We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.",
                "Our total liability to you shall not exceed the amount you paid to us in the 12 months preceding the claim.",
              ],
            },
            {
              id: "terms-termination",
              title: "8. Termination",
              items: [
                "You may close your account at any time from your account settings.",
                "We may suspend or terminate your account for violations of these Terms.",
                "Upon termination, your access to paid content will end at the close of the current billing period.",
              ],
            },
            {
              id: "terms-law",
              title: "9. Governing Law",
              items: [
                "These Terms are governed by the laws of the Republic of Ghana.",
                "Any disputes shall be resolved in the courts of Accra, Ghana.",
              ],
            },
            {
              id: "terms-changes",
              title: "10. Changes to Terms",
              items: [
                "We may update these Terms at any time. We will notify you of material changes via email or platform notice.",
                "Continued use of the platform after changes constitutes acceptance.",
              ],
            },
            {
              id: "terms-contact",
              title: "11. Contact",
              items: [
                "For questions about these Terms, contact us at: support@praxis.com",
              ],
            },
          ].map(({ id, title, items }) => (
            <section key={id} aria-labelledby={id}>
              <h2 id={id} className="text-lg font-bold text-foreground mb-3">
                {title}
              </h2>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
