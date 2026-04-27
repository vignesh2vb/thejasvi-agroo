import { Quote } from "lucide-react";

const REVIEWS = [
  {
    text: "Best quality ghee I've ever used! The aroma is incredible and you can tell it's 100% pure.",
    name: "Priya S.",
  },
  {
    text: "Fresh paneer and fast delivery. My family loved it. Will definitely order again!",
    name: "Karthik R.",
  },
  {
    text: "Pure coconut oil with amazing aroma. Reminds me of my grandmother's homemade oil.",
    name: "Lakshmi M.",
  },
  {
    text: "The curd is thick and creamy, just like traditional homemade curd. Highly recommend!",
    name: "Suresh V.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28"
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary-deep">
            What our customers say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Trusted by hundreds of families across Tamil Nadu.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="relative rounded-3xl bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <Quote
                className="absolute top-6 right-6 size-10 text-primary/15"
                aria-hidden
              />
              <blockquote className="text-lg leading-relaxed text-foreground/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 font-semibold text-primary-deep">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
