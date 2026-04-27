import { Truck, PackageCheck, MapPin } from "lucide-react";

const ITEMS = [
  {
    icon: Truck,
    title: "Fast & Safe Delivery",
    desc: "We ensure your products reach fresh and on time.",
  },
  {
    icon: PackageCheck,
    title: "Courier Included",
    desc: "Selected products include free courier delivery.",
  },
  {
    icon: MapPin,
    title: "Pan India Delivery",
    desc: "Serving across Tamil Nadu and all over India.",
  },
];

export function Delivery() {
  return (
    <section id="delivery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Delivery
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary-deep">
            Reliable, fresh, on time
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-8 text-center"
            >
              <span className="inline-grid place-items-center size-14 rounded-full bg-primary/10 text-primary">
                <Icon className="size-7" />
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
