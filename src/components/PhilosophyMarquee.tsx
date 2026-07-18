"use client";

import { useReducedMotion } from "framer-motion";

const PHRASES = [
  "Buy better",
  "Wear longer",
  "Mend",
  "Swap",
  "Share",
  "Pass it on",
] as const;

export function PhilosophyMarquee() {
  const reduce = useReducedMotion();
  const loop = [...PHRASES, ...PHRASES];

  return (
    <div className="overflow-hidden border-y border-white/15 py-5" aria-hidden>
      <div
        className={`flex w-max gap-10 ${reduce ? "" : "animate-marquee"}`}
      >
        {loop.map((phrase, i) => (
          <span
            key={`${phrase}-${i}`}
            className="inline-flex items-center gap-10 font-display text-2xl font-medium tracking-wide text-white/90 sm:text-3xl"
          >
            {phrase}
            <span className="text-sm text-white/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
