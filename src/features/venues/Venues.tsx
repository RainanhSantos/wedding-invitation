import { motion } from "framer-motion";
import { Church, GlassWater, MapPin, Clock } from "lucide-react";
import type { ComponentType } from "react";
import { Section } from "@/shared/components/Section";
import { VENUES, type VenueIconName } from "./venues.model";

const ICON_MAP: Record<VenueIconName, ComponentType<{ className?: string }>> = {
  Church,
  GlassWater,
};

export function Venues() {
  return (
    <Section id="cerimonia" eyebrow="Onde nos celebraremos" title="Cerimônia & Recepção">
      <div className="grid gap-8 md:grid-cols-2">
        {VENUES.map((v, i) => {
          const Icon = ICON_MAP[v.iconName];
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${v.place}, ${v.address}`)}`;
          return (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--blue-mist)] opacity-60 transition-transform duration-700 group-hover:scale-125" />
              <div className="relative">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero text-white shadow-soft">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--blue-deep)]">{v.label}</p>
                <h3 className="mt-2 font-serif text-3xl text-ink">{v.place}</h3>
                <div className="mt-5 space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--blue-deep)]" />
                    <span>{v.address}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-[var(--blue-deep)]" />
                    <span>{v.time}</span>
                  </p>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm uppercase tracking-widest text-white transition hover:bg-[var(--blue-deep)]"
                >
                  <MapPin className="h-4 w-4" /> Ver no mapa
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
