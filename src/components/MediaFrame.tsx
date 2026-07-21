"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Framed media with optional scroll parallax + hover zoom. */
export function MediaFrame({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  fit = "cover",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  /** "contain" shows the full image without cropping */
  fit?: "cover" | "contain";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const contain = fit === "contain";
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce || contain ? ["0%", "0%"] : ["0%", "5%"],
  );

  return (
    <div
      ref={ref}
      className={`group/media relative ${contain ? "" : "overflow-hidden"} ${className}`}
    >
      <motion.div
        className={contain ? "absolute inset-0" : "absolute inset-x-0 top-0 bottom-[-5%]"}
        style={{ y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={
            contain
              ? `object-contain object-center transition duration-[1.15s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-[1.02] ${imageClassName}`
              : `object-cover object-top transition duration-[1.15s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-[1.03] ${imageClassName}`
          }
        />
      </motion.div>
    </div>
  );
}
