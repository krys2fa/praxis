import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Praxis platform privacy policy — how we collect, use, and protect your data.",
};

const lastUpdated = "May 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-sm prose-neutral max-w-none space-y-8 text-foreground">
          <section aria-labelledby="privacy-intro">
            <p className="text-muted-foreground leading-relaxed">
              Praxis Platform ("we", "our", or "us") is committed to protecting
              your personal information. This Privacy Policy explains what data
              we collect, how we use it, and your rights as a user of our
              platform.
            </p>
          </section>

          {[
            {
              id: "privacy-collect",
              title: "1. Information We Collect",
              content: [
                "Account information: When you register, we collect your name, email address, and password (stored securely via Clerk).",
                "Payment information: We use Paystack to process payments. We do not store your card details — Paystack handles this securely.",
                "Usage data: We collect information about how you interact with the platform, such as courses viewed, progress made, and features used.",
                "Communications: If you contact us, we retain those communications to help resolve any issues.",
              ],
            },
            {
              id: "privacy-use",
              title: "2. How We Use Your Information",
              content: [
                "To create and manage your account.",
                "To deliver and improve our learning platform and products.",
                "To process payments and issue receipts.",
                "To send important service notifications (e.g., password resets, billing alerts).",
                "To personalise your learning experience.",
                "To analyse platform usage and improve our services.",
              ],
            },
            {
              id: "privacy-share",
              title: "3. Sharing Your Information",
              content: [
                "We do not sell your personal data.",
                "We share data with trusted third-party service providers (Clerk for authentication, Paystack for payments, database hosting providers) strictly for operating the platform.",
                "We may disclose data if required by law or to protect the rights and safety of our users.",
              ],
            },
            {
              id: "privacy-cookies",
              title: "4. Cookies",
              content: [
                "We use cookies and similar technologies to maintain sessions, remember your preferences, and analyse platform usage.",
                "You can manage cookie preferences in your browser settings. See our Cookie Policy for more details.",
              ],
            },
            {
              id: "privacy-retention",
              title: "5. Data Retention",
              content: [
                "We retain your account data for as long as your account is active.",
                "You may request deletion of your account and associated data by contacting us at support@praxis.com.",
                "Some data may be retained for legal or accounting purposes after deletion.",
              ],
            },
            {
              id: "privacy-rights",
              title: "6. Your Rights",
              content: [
                "Access: Request a copy of the personal data we hold about you.",
                "Correction: Ask us to correct inaccurate or incomplete data.",
                "Deletion: Request that we delete your personal data.",
                "Portability: Request your data in a machine-readable format.",
                "To exercise any of these rights, email us at support@praxis.com.",
              ],
            },
            {
              id: "privacy-security",
              title: "7. Security",
              content: [
                "We use industry-standard security measures including HTTPS, encrypted storage, and access controls to protect your data.",
                "No method of transmission over the internet is 100% secure. We cannot guarantee absolute security but take all reasonable steps to protect your information.",
              ],
            },
            {
              id: "privacy-children",
              title: "8. Children's Privacy",
              content: [
                "Our platform is intended for users aged 16 and above. We do not knowingly collect personal data from children under 16.",
              ],
            },
            {
              id: "privacy-changes",
              title: "9. Changes to This Policy",
              content: [
                "We may update this policy from time to time. We will notify you of significant changes via email or a notice on the platform.",
                "Continued use of the platform after changes constitutes acceptance of the revised policy.",
              ],
            },
            {
              id: "privacy-contact",
              title: "10. Contact Us",
              content: [
                "If you have questions about this Privacy Policy or your data, contact us at: support@praxis.com",
              ],
            },
          ].map(({ id, title, content }) => (
            <section key={id} aria-labelledby={id}>
              <h2 id={id} className="text-lg font-bold text-foreground mb-3">
                {title}
              </h2>
              <ul className="space-y-2">
                {content.map((item) => (
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
