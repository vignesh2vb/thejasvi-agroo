import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9786622633",
    href: "tel:+919786622633",
    cta: "Call now",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919786622633",
    cta: "Open WhatsApp",
    accent: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "thejasviagro@gmail.com",
    href: "mailto:thejasviagro@gmail.com",
    cta: "Send email",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tamil Nadu, India",
    href: "https://maps.google.com/?q=Tamil+Nadu+India",
    cta: "View on map",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Contact Us
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary-deep">
            We'd love to hear from you
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            For orders or enquiries, reach us anytime — we usually reply within
            minutes on WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map(({ icon: Icon, label, value, href, cta, accent }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group rounded-3xl p-7 transition-all hover:-translate-y-1 ${
                accent
                  ? "bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] shadow-[var(--shadow-elegant)]"
                  : "bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)]"
              }`}
            >
              <span
                className={`grid place-items-center size-12 rounded-2xl ${
                  accent
                    ? "bg-white/20 text-[var(--whatsapp-foreground)]"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <Icon className="size-6" />
              </span>
              <p
                className={`mt-5 text-xs font-semibold uppercase tracking-wider ${
                  accent ? "text-[var(--whatsapp-foreground)]/80" : "text-muted-foreground"
                }`}
              >
                {label}
              </p>
              <p
                className={`mt-1 font-display text-xl font-bold ${
                  accent ? "" : "text-primary-deep"
                }`}
              >
                {value}
              </p>
              <p
                className={`mt-4 text-sm font-semibold inline-flex items-center gap-1 ${
                  accent ? "" : "text-primary"
                }`}
              >
                {cta}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
