import { motion } from "framer-motion";
import { Section } from "@/shared/components/Section";
import { STORY_EVENTS } from "./story.model";

export function Story() {
  return (
    <Section id="historia" eyebrow="Nossa Jornada" title="Nossa História">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--blue-deep)]/40 to-transparent sm:left-1/2" />
        {STORY_EVENTS.map((e, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, x: left ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05 * i }}
              className={`relative mb-14 pl-12 sm:w-1/2 sm:pl-0 ${
                left ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
              }`}
            >
              <span
                className={`absolute top-2 h-3 w-3 rounded-full bg-[var(--blue-deep)] ring-4 ring-[var(--blue-mist)] ${
                  "left-3 sm:left-auto " + (left ? "sm:-right-1.5" : "sm:-left-1.5")
                }`}
              />
              <p className="font-script text-3xl text-[var(--blue-deep)]">{e.year}</p>
              <h3 className="mt-1 font-serif text-2xl text-ink">{e.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{e.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
