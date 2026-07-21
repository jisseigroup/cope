"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealTag = "div" | "li" | "article" | "section" | "h2" | "p";

const motionTags = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  section: motion.section,
  h2: motion.h2,
  p: motion.p,
} as const;

const presets = {
  up: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  clip: {
    hidden: { opacity: 0, y: 48, clipPath: "inset(12% 0 0 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 1.06 },
    visible: { opacity: 1, scale: 1 },
  },
} satisfies Record<string, Variants>;

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  preset = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
  preset?: keyof typeof presets;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motionTags[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -8% 0px" }}
      variants={presets[preset]}
      transition={{
        duration: reduce ? 0 : 0.95,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
