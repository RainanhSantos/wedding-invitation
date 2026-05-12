import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "@/controllers/useCountdown";
import type { TimeRemaining } from "@/controllers/useCountdown";

const LABELS: Record<keyof TimeRemaining, string> = {
  days: "Dias",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos",
};

export function Countdown() {
  const time = useCountdown();

  return (
    <section id="contagem" className="relative overflow-hidden bg-[var(--blue-deep)] py-24 text-white sm:py-28">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs uppercase tracking-[0.4em] text-white/80"
        >
          Faltam apenas
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-3 font-serif text-4xl sm:text-5xl"
        >
          Para o nosso grande dia
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {(Object.keys(LABELS) as Array<keyof TimeRemaining>).map((key) => (
            <div key={key} className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/20">
              <div className="relative h-20 overflow-hidden sm:h-24">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={time[key]}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-serif text-6xl tabular-nums sm:text-7xl"
                  >
                    {String(time[key]).padStart(2, "0")}
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/80">{LABELS[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
