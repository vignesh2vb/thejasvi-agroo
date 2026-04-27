import { Phone, MessageCircle, Leaf } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#delivery", label: "Delivery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const WHATSAPP_URL =
  "https://wa.me/919786622633?text=Hi%2C%20I%20want%20to%20order%20from%20Thejasvi%20Agro%20Products";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className={`grid place-items-center size-9 rounded-full transition-colors ${scrolled ? "bg-primary text-primary-foreground" : "bg-white text-primary-deep"}`}>
            <Leaf className="size-5" />
          </span>
          <span className={`font-display text-xl sm:text-2xl font-bold transition-colors ${scrolled ? "text-primary-deep" : "text-white"}`}>
            Thejasvi Agro
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+919786622633"
            className={`hidden sm:inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary ${scrolled ? "text-primary-deep" : "text-white"}`}
          >
            <Phone className="size-4" />
            9786622633
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)] hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="size-4" />
            <span className="hidden sm:inline">WhatsApp Order</span>
            <span className="sm:hidden">Order</span>
          </a>
        </div>
      </div>
    </header>
  );
}
