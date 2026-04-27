import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919786622633?text=Hi%2C%20I%20want%20to%20order%20from%20Thejasvi%20Agro%20Products"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid place-items-center size-14 rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] shadow-[var(--shadow-elegant)] hover:scale-110 active:scale-95 transition-transform"
    >
      <MessageCircle className="size-7" />
      <span className="absolute inset-0 rounded-full ring-2 ring-[var(--whatsapp)]/40 animate-ping" />
    </a>
  );
}
