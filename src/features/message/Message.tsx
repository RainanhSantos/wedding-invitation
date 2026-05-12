import { motion } from "framer-motion";
import { Section } from "@/shared/components/Section";

export function Message() {
  return (
    <Section id="mensagem" className="bg-gradient-soft">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--blue-deep)]">Aos nossos convidados</p>
        <p className="mt-8 font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
          Sua presença é o presente mais lindo que poderíamos receber. Que este dia seja eterno em
          nossas memórias e que o amor que nos une se estenda a cada um de vocês.
        </p>
        <div className="mx-auto mt-12 max-w-xl border-y border-[var(--blue-deep)]/30 py-8">
          <p className="font-script text-3xl leading-relaxed text-[var(--blue-deep)] sm:text-4xl">
            "O amor é paciente, o amor é bondoso. Tudo sofre, tudo crê, tudo espera, tudo suporta."
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">1 Coríntios 13</p>
        </div>
      </motion.div>
    </Section>
  );
}
