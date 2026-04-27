import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid place-items-center size-9 rounded-full bg-primary-foreground/15">
              <Leaf className="size-5" />
            </span>
            <span className="font-display text-xl font-bold">
              Thejasvi Agro
            </span>
          </a>
          <p className="text-sm text-primary-foreground/70 text-center">
            Pure. Fresh. Natural. Delivered with love from Tamil Nadu.
          </p>
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Thejasvi Agro Products
          </p>
        </div>
      </div>
    </footer>
  );
}
