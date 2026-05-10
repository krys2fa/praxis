"use client";

import { useState } from "react";
import { Mail, MessageSquare, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

// Metadata is exported from a separate file since this is a client component
// For SEO, wrap with a server layout or use generateMetadata in a parent

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "support@praxis.com",
    href: "mailto:support@praxis.com",
  },
  {
    icon: MessageSquare,
    label: "Telegram",
    value: "@praxislearn",
    href: "https://t.me/praxislearn",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 24 000 0000",
    href: "tel:+233240000000",
  },
  { icon: MapPin, label: "Location", value: "Accra, Ghana", href: null },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production this would call an API route
    setSubmitted(true);
  }

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question, partnership enquiry, or instructor application?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">
              Contact details
            </h2>
            <div className="space-y-4">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Response time
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We typically respond to emails within 1–2 business days. For
                urgent matters, reach us on Telegram for faster support.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Send a message
            </h2>

            {submitted ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <Send
                  className="mx-auto h-10 w-10 text-emerald-500 mb-3"
                  aria-hidden="true"
                />
                <h3 className="text-base font-semibold text-emerald-800">
                  Message sent!
                </h3>
                <p className="mt-1 text-sm text-emerald-700">
                  Thanks for reaching out. We'll get back to you within 1–2
                  business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Full name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Kwame Mensah"
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Email address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="kwame@example.com"
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <option value="" disabled>
                      Select a subject…
                    </option>
                    <option>General enquiry</option>
                    <option>Course support</option>
                    <option>Billing & subscription</option>
                    <option>Instructor application</option>
                    <option>Partnership</option>
                    <option>Legal product enquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help…"
                    className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full font-semibold"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
