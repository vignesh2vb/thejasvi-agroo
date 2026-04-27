import { useState } from "react";
import { Minus, Plus, MessageCircle, Copy, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import coconutOil from "@/assets/product-coconut-oil.jpg";
import virginCoconutOil from "@/assets/product-virgin-coconut-oil.jpg";
import ghee from "@/assets/product-ghee.jpg";
import paneer from "@/assets/product-paneer.jpg";
import curd from "@/assets/product-curd.jpg";
import khova from "@/assets/product-khova.jpg";
import coconut from "@/assets/product-coconut.jpg";
import upiQr from "@/assets/upi-qr.jpeg";

type Product = {
  name: string;
  description: string;
  image: string;
  price?: number;
  unit: string;
  badge?: string;
  enquireOnly?: boolean;
};

const UPI_ID = "9342588529@nyes";
const UPI_NAME = "Vignesh V";

const PRODUCTS: Product[] = [
  {
    name: "Coconut Oil",
    description: "Cold-pressed, pure coconut oil. Courier included.",
    image: coconutOil,
    price: 400,
    unit: "bottle",
    badge: "₹400",
  },
  {
    name: "Virgin Coconut Oil",
    description: "Premium cold-extracted virgin coconut oil. Courier included.",
    image: virginCoconutOil,
    price: 1200,
    unit: "bottle",
    badge: "₹1200",
  },
  {
    name: "Ghee",
    description: "Traditional homemade ghee. Courier included.",
    image: ghee,
    price: 700,
    unit: "kg",
    badge: "₹700",
  },
  {
    name: "Paneer",
    description: "Fresh, soft paneer made from pure milk.",
    image: paneer,
    price: 350,
    unit: "per kg",
    badge: "₹350",
  },
  {
    name: "Curd",
    description: "Thick, creamy curd set in clay pots.",
    image: curd,
    price: 70,
    unit: "per litre",
    badge: "₹70",
  },
  {
    name: "Milk Khova",
    description: "Rich, dense milk khova for sweets.",
    image: khova,
    price: 250,
    unit: "per kg",
    badge: "₹250",
  },
  {
    name: "Fresh Coconut",
    description: "Farm-fresh coconuts, bulk orders available.",
    image: coconut,
    unit: "Contact for price",
    enquireOnly: true,
  },
];

function buildOrderUrl(product: Product, qty: number, paid = false) {
  const text = product.enquireOnly
    ? `Hi, I want to enquire about ${product.name} pricing.`
    : paid
      ? `Hi, I have paid for my order:\n• ${product.name} — ${qty} ${product.unit}\n• Total: ₹${(product.price ?? 0) * qty}\nPayment sent via UPI (${UPI_ID}). Please confirm and share delivery details.`
      : `Hi, I want to order:\n• ${product.name} — ${qty} ${product.unit}\nPlease confirm availability and total.`;
  return `https://wa.me/919786622633?text=${encodeURIComponent(text)}`;
}

function buildUpiLink(amount: number, productName: string) {
  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: UPI_NAME,
    am: String(amount),
    cu: "INR",
    tn: `Thejasvi Agro - ${productName}`,
  });
  return `upi://pay?${params.toString()}`;
}

function PaymentDialog({
  product,
  qty,
  open,
  onOpenChange,
}: {
  product: Product;
  qty: number;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [copied, setCopied] = useState(false);
  const total = (product.price ?? 0) * qty;

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-primary-deep">
            Pay ₹{total} to confirm order
          </DialogTitle>
          <DialogDescription>
            {product.name} — {qty} {product.unit}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4">
          <a
            href={buildUpiLink(total, product.name)}
            className="block rounded-2xl overflow-hidden border border-border bg-background"
            aria-label="Open UPI app to pay"
          >
            <img
              src={upiQr}
              alt={`UPI QR code for ${UPI_NAME}`}
              width={320}
              height={420}
              className="w-64 h-auto"
            />
          </a>

          <div className="w-full rounded-xl bg-muted/50 px-4 py-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">UPI ID</p>
              <p className="font-semibold text-sm truncate">{UPI_ID}</p>
            </div>
            <button
              type="button"
              onClick={copyUpi}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold hover:bg-accent transition-colors"
            >
              {copied ? (
                <>
                  <Check className="size-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="size-3.5" /> Copy
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Scan with GPay, PhonePe, Paytm or any UPI app. After paying, tap
            below to send your order details on WhatsApp.
          </p>
        </div>

        <DialogFooter className="sm:flex-col sm:gap-2">
          <a
            href={buildOrderUrl(product, qty, true)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onOpenChange(false)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] px-4 py-2.5 text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="size-4" />
            I&apos;ve paid — Send order on WhatsApp
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [payOpen, setPayOpen] = useState(false);

  const handleOrderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (product.enquireOnly) return; // let WhatsApp link open
    e.preventDefault();
    setPayOpen(true);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          width={800}
          height={800}
          loading="lazy"
          className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-4 right-4 rounded-full bg-primary text-primary-foreground px-3 py-1 text-sm font-bold shadow-[var(--shadow-soft)]">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-2xl font-bold text-primary-deep">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        <div className="mt-4 flex items-baseline gap-2">
          {product.price ? (
            <>
              <span className="text-2xl font-bold text-foreground">
                ₹{product.price}
              </span>
              <span className="text-sm text-muted-foreground">
                / {product.unit}
              </span>
            </>
          ) : (
            <span className="text-base font-semibold text-primary">
              {product.unit}
            </span>
          )}
        </div>

        <div className="mt-auto pt-5 flex items-center gap-3">
          {!product.enquireOnly && (
            <div className="inline-flex items-center rounded-full border border-border bg-background">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid place-items-center size-9 text-muted-foreground hover:text-primary"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-7 text-center text-sm font-semibold tabular-nums">
                {qty}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                className="grid place-items-center size-9 text-muted-foreground hover:text-primary"
              >
                <Plus className="size-4" />
              </button>
            </div>
          )}
          <a
            href={buildOrderUrl(product, qty)}
            onClick={handleOrderClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] px-4 py-2.5 text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="size-4" />
            {product.enquireOnly ? "Enquire" : "Order Now"}
          </a>
        </div>
      </div>

      {!product.enquireOnly && product.price && (
        <PaymentDialog
          product={product}
          qty={qty}
          open={payOpen}
          onOpenChange={setPayOpen}
        />
      )}
    </article>
  );
}

export function Products() {
  return (
    <section id="products" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Our Products
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary-deep">
            Fresh from our farm
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Handpicked dairy and coconut products, delivered to your doorstep.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
