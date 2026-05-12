import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            {eyebrow && (
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[var(--blue-deep)]">{eyebrow}</p>
            )}
            {title && (
              <h2 className="font-serif text-4xl text-ink sm:text-5xl md:text-6xl">{title}</h2>
            )}
            <div className="mx-auto mt-6 flex w-32 items-center gap-2">
              <span className="h-px flex-1 bg-ink/20" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[var(--blue-deep)]" />
              <span className="h-px flex-1 bg-ink/20" />
            </div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
