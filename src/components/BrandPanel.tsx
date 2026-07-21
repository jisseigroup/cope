"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function BrandPanel({
  name,
  line,
  href,
  image,
  index = 0,
  imagePosition = "object-top",
}: {
  name: string;
  line: string;
  href: string;
  image: string;
  index?: number;
  /** Tailwind object-position class so faces stay in frame */
  imagePosition?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative min-h-[28rem] overflow-hidden bg-ink sm:min-h-[34rem]"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover opacity-80 transition duration-[1.25s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:opacity-95 ${imagePosition}`}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/15"
      />
      <div className="relative z-10 flex h-full min-h-[28rem] flex-col justify-end p-8 sm:min-h-[34rem] sm:p-10 lg:p-12">
        <p className="text-[0.6875rem] tracking-[0.22em] text-white/50 uppercase">
          Brand {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-display text-[clamp(2.5rem,5vw,3.5rem)] font-medium text-white transition duration-500 group-hover:translate-x-1">
          {name}
        </h3>
        <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/70 sm:text-base">
          {line}
        </p>
        <Link
          href={href}
          className="focus-ring link-text mt-8 inline-block w-fit text-white"
        >
          View brand
        </Link>
      </div>
    </motion.article>
  );
}
