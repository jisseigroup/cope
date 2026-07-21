"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Company philosophy tenets — Practice Mending. Swapping. Sharing. */
const TENETS = [
  {
    title: "Practice Mending.",
    meaning: "Care for what you own—repair before you replace.",
  },
  {
    title: "Swapping.",
    meaning: "Circulate pieces that still have life left in them.",
  },
  {
    title: "Sharing.",
    meaning: "Pass it on so every garment can have a second story.",
  },
] as const;

export function PhilosophyHeadline() {
  const reduce = useReducedMotion();

  return (
    <ul className="space-y-10 sm:space-y-12">
      {TENETS.map((tenet, i) => (
        <li key={tenet.title} className="overflow-hidden">
          <motion.div
            initial={reduce ? false : { y: "1.1em", opacity: 0 }}
            whileInView={reduce ? undefined : { y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.9,
              delay: 0.06 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="font-display text-[clamp(2.25rem,6.5vw,4.5rem)] leading-[1.02] font-medium text-white">
              {tenet.title}
            </h2>
            <p className="mt-3 max-w-md text-sm font-light tracking-wide text-white/55 sm:text-base">
              {tenet.meaning}
            </p>
          </motion.div>
        </li>
      ))}
    </ul>
  );
}
