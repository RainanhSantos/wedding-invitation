import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Section } from "@/shared/components/Section";
import { useGallery } from "./useGallery";

export function Gallery() {
  const { photos, activePhoto, openPhoto, closePhoto } = useGallery();

  return (
    <Section id="galeria" eyebrow="Pré-Casamento" title="Nossos Momentos" className="bg-gradient-soft">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.src}
            type="button"
            onClick={() => openPhoto(photo.src)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg shadow-soft"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[var(--blue-deep)]/0 transition-colors duration-500 group-hover:bg-[var(--blue-deep)]/40" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Fechar"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              key={activePhoto}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={activePhoto}
              alt=""
              className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
