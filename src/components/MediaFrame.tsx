"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Framed media with scroll parallax + hover zoom (no card chrome). */
export function MediaFrame({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Only shift downward so top-anchored subjects (heads) stay in frame
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "5%"],
  );

  return (
    <div
      ref={ref}
      className={`group/media relative overflow-hidden bg-paper-deep ${className}`}
    >
      <motion.div
        className="absolute inset-x-0 top-0 bottom-[-5%]"
        style={{ y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover object-top transition duration-[1.15s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-[1.03] ${imageClassName}`}
        />
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-ink/0 transition duration-700 group-hover/media:bg-ink/10"
      />
    </div>
  );
}
