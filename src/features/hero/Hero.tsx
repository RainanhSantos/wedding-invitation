import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.jpg";
import { WEDDING_DATE_LABEL } from "@/shared/models/wedding.config";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[var(--blue-mist)]/60" aria-hidden />

      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-white/70 animate-float"
          style={{
            left: `${(i * 83) % 100}%`,
            top: `${(i * 47) % 100}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}
          aria-hidden
        />
      ))}

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.4em] text-ink/70"
        >
          Convidamos você para o nosso casamento
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
          className="mt-8"
        >
          <h1 className="font-burgues text-6xl leading-[0.95] text-ink sm:text-7xl md:text-8xl lg:text-9xl">
            Rainanh
          </h1>
          <div className="my-4 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-ink/40 sm:w-24" />
            <Heart className="h-6 w-6 text-[var(--blue-deep)] animate-heartbeat" fill="currentColor" />
            <span className="h-px w-16 bg-ink/40 sm:w-24" />
          </div>
          <h1 className="font-burgues text-6xl leading-[0.95] text-ink sm:text-7xl md:text-8xl lg:text-9xl">
            Neyriellen
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 font-serif text-2xl italic text-ink/80 sm:text-3xl"
        >
          {WEDDING_DATE_LABEL}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12"
        >
          <a
            href="#rsvp"
            className="inline-block rounded-full border border-ink/20 bg-white/70 px-8 py-3 text-sm uppercase tracking-widest text-ink backdrop-blur-sm transition hover:bg-white hover:shadow-soft"
          >
            Confirmar presença
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-ink/50"
      >
        Role para conhecer
      </motion.div>
    </section>
  );
}
