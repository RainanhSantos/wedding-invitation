import { motion, AnimatePresence } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Section } from "@/shared/components/Section";
import { useRSVP } from "./useRSVP";
import { GUEST_OPTIONS } from "./rsvp.model";

export function RSVP() {
  const { sent, form, handleSubmit, handleChange } = useRSVP();

  return (
    <Section id="rsvp" eyebrow="RSVP" title="Confirme sua Presença">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-soft sm:p-12"
      >
        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-ink/70">
                  Nome completo
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-ink outline-none transition focus:border-[var(--blue-deep)] focus:ring-2 focus:ring-[var(--blue-soft)]"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-ink/70">
                  Acompanhantes
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => handleChange("guests", e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-ink outline-none transition focus:border-[var(--blue-deep)] focus:ring-2 focus:ring-[var(--blue-soft)]"
                >
                  {GUEST_OPTIONS.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-ink/70">
                  Mensagem para os noivos
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-ink outline-none transition focus:border-[var(--blue-deep)] focus:ring-2 focus:ring-[var(--blue-soft)]"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--blue-deep)] px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-ink hover:shadow-elegant"
              >
                Enviar confirmação
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="py-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-hero text-white shadow-elegant"
              >
                <Check className="h-10 w-10" strokeWidth={3} />
              </motion.div>
              <h3 className="mt-6 font-serif text-3xl text-ink">Obrigado!</h3>
              <p className="mt-3 text-muted-foreground">
                Sua presença foi confirmada. Mal podemos esperar para celebrar com você.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
