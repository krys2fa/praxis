import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Abena Osei",
    role: "Finance Analyst, Accra",
    rating: 5,
    quote:
      "The financial modelling course completely transformed how I approach my work. The Ghanaian context and examples made everything click.",
  },
  {
    name: "Emmanuel Darko",
    role: "Software Developer, Kumasi",
    rating: 5,
    quote:
      "I completed the Python Data Analysis course in three weeks. Already got a promotion. The certificate looks great on my LinkedIn.",
  },
  {
    name: "Efua Mensah",
    role: "Law Student, KNUST",
    rating: 5,
    quote:
      "The Company Law course is taught by a real practitioner. Far better than any textbook I've read. Worth every pesewa.",
  },
];

export default function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            What our students say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-border bg-card p-6 flex flex-col"
            >
              <Quote
                className="h-6 w-6 text-primary/40 mb-4"
                aria-hidden="true"
              />
              <blockquote className="flex-1">
                <p className="text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div
                  className="flex gap-0.5"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-primary text-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
