import { Leaf, Tractor, ShieldCheck, Sparkles, IndianRupee } from "lucide-react";

const ITEMS = [
  {
    icon: Leaf,
    title: "100% Natural & Fresh",
    desc: "No artificial additives or chemicals in any product.",
  },
  {
    icon: Tractor,
    title: "Direct from Farm",
    desc: "Products sourced directly from our own farms.",
  },
  {
    icon: ShieldCheck,
    title: "No Preservatives",
    desc: "Pure and preservative-free, the way nature intended.",
  },
  {
    icon: Sparkles,
    title: "Hygienic Processing",
    desc: "Processed in clean, sanitized facilities.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Premium quality at farmer-friendly prices.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why"
      className="py-20 sm:py-28"
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary-deep">
            Quality you can taste
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We're committed to purity, freshness and trust in every drop.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl bg-card p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow"
            >
              <span
                className="grid place-items-center size-12 rounded-2xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-primary-deep">
                {title}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
