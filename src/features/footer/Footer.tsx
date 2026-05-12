import { Heart, Instagram } from "lucide-react";
import { HASHTAG } from "@/shared/models/wedding.config";

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-4 font-serif text-3xl sm:text-4xl">
          <span>Rainanh</span>
          <Heart className="h-6 w-6 text-[var(--blue-soft)]" fill="currentColor" />
          <span>Neyriellen</span>
        </div>
        <p className="mt-6 font-script text-2xl text-[var(--blue-soft)]">{HASHTAG}</p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="rounded-full border border-white/20 p-3 transition hover:bg-white/10"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-white/50">Feito com amor · 2026</p>
      </div>
    </footer>
  );
}
