"use client";

import { motion, useReducedMotion } from "framer-motion";

const LINES = ["Practice Mending.", "Swapping.", "Sharing."] as const;

export function PhilosophyHeadline() {
  const reduce = useReducedMotion();

  return (
    <h2 className="font-display text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.05] font-medium text-white">
      {LINES.map((line, i) => (
        <motion.span
          key={line}
          className="block"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            delay: 0.08 * i,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {line}
        </motion.span>
      ))}
    </h2>
  );
}
