import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Praxis uses cookies and similar technologies on our platform.",
};

const lastUpdated = "May 1, 2026";

type CookieType = "Essential" | "Functional" | "Analytics";

const cookieStyles: Record<CookieType, string> = {
  Essential: "bg-emerald-100 text-emerald-700",
  Functional: "bg-blue-100 text-blue-700",
  Analytics: "bg-amber-100 text-amber-700",
};

const cookies = [
  {
    name: "__session",
    purpose: "Clerk authentication session token",
    type: "Essential" as CookieType,
    duration: "Session",
    provider: "Clerk",
  },
  {
    name: "__client",
    purpose: "Identifies the browser client for Clerk authentication",
    type: "Essential" as CookieType,
    duration: "1 year",
    provider: "Clerk",
  },
  {
    name: "theme",
    purpose: "Stores your light/dark mode preference",
    type: "Functional" as CookieType,
    duration: "1 year",
    provider: "Praxis",
  },
  {
    name: "_ga",
    purpose: "Google Analytics — distinguishes users",
    type: "Analytics" as CookieType,
    duration: "2 years",
    provider: "Google",
  },
  {
    name: "_ga_*",
    purpose: "Google Analytics — persists session state",
    type: "Analytics" as CookieType,
    duration: "2 years",
    provider: "Google",
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-foreground">
            Cookie Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8 text-foreground">
          <section>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This Cookie Policy explains how Praxis Platform uses cookies and
              similar tracking technologies when you visit our platform. By
              continuing to use the platform, you consent to our use of cookies
              as described below.
            </p>
          </section>

          <section aria-labelledby="what-are-cookies">
            <h2
              id="what-are-cookies"
              className="text-lg font-bold text-foreground mb-3"
            >
              1. What are cookies?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device when you visit
              a website. They help the site remember information about your
              visit, such as your login status and preferences, making your next
              visit easier and the site more useful.
            </p>
          </section>

          <section aria-labelledby="how-we-use">
            <h2
              id="how-we-use"
              className="text-lg font-bold text-foreground mb-3"
            >
              2. How we use cookies
            </h2>
            <div className="space-y-3">
              {[
                {
                  type: "Essential" as CookieType,
                  desc: "Required for the platform to function. These cannot be disabled as they enable core features like authentication and security.",
                },
                {
                  type: "Functional" as CookieType,
                  desc: "Remember your preferences (e.g., dark mode) to improve your experience. Disabling these may affect functionality.",
                },
                {
                  type: "Analytics" as CookieType,
                  desc: "Help us understand how visitors interact with our platform so we can improve it. We use Google Analytics with IP anonymisation enabled.",
                },
              ].map(({ type, desc }) => (
                <div key={type} className="flex items-start gap-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium shrink-0 mt-0.5 ${cookieStyles[type]}`}
                  >
                    {type}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="cookie-table">
            <h2
              id="cookie-table"
              className="text-lg font-bold text-foreground mb-4"
            >
              3. Cookies we use
            </h2>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Cookie
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden lg:table-cell">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {cookies.map((cookie) => (
                    <tr
                      key={cookie.name}
                      className="hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-4 py-3 font-mono text-xs text-foreground">
                        {cookie.name}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                        {cookie.purpose}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${cookieStyles[cookie.type]}`}
                        >
                          {cookie.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                        {cookie.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="manage-cookies">
            <h2
              id="manage-cookies"
              className="text-lg font-bold text-foreground mb-3"
            >
              4. Managing cookies
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You can control and delete cookies through your browser settings.
              Please note that disabling cookies may affect the functionality of
              the platform, particularly authentication. For guidance on
              managing cookies in popular browsers, visit{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                aboutcookies.org
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="contact-cookies">
            <h2
              id="contact-cookies"
              className="text-lg font-bold text-foreground mb-3"
            >
              5. Contact
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you have questions about our use of cookies, contact us at{" "}
              <Link href="/contact" className="text-primary hover:underline">
                support@praxis.com
              </Link>
              . You can also review our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              for more details on how we handle your data.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
