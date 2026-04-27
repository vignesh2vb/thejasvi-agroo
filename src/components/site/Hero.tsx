import heroBanner from "@/assets/hero-banner.jpg";
import { MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919786622633?text=Hi%2C%20I%20want%20to%20order%20from%20Thejasvi%20Agro%20Products";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <img
        src={heroBanner}
        alt="Fresh dairy and coconut products from the farm"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur px-4 py-1.5 text-sm font-medium ring-1 ring-primary-foreground/25">
            <Sparkles className="size-4" />
            100% Natural & Farm Fresh
          </span>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Pure. Fresh.{" "}
            <span className="italic text-[oklch(0.85_0.16_125)]">Natural.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
            Delivering farm-fresh dairy and coconut products to your doorstep.
            Trusted by families across Tamil Nadu.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-base font-semibold shadow-[var(--shadow-elegant)] hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              Shop Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] px-7 py-3.5 text-base font-semibold shadow-[var(--shadow-elegant)] hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              <MessageCircle className="size-5" />
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
