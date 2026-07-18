"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

type RevealTag = "div" | "li" | "article" | "section";

const motionTags = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  section: motion.section,
} as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motionTags[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      variants={variants}
      transition={{
        duration: reduce ? 0 : 0.85,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
