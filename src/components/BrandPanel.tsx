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
}: {
  name: string;
  line: string;
  href: string;
  image: string;
  index?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 40 }}
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
        className="object-cover opacity-75 transition duration-[1.25s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:opacity-90"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25 transition duration-700 group-hover:from-ink group-hover:via-ink/45 group-hover:to-ink/10"
      />
      <div className="relative z-10 flex h-full min-h-[28rem] flex-col justify-end p-8 sm:min-h-[34rem] sm:p-10 lg:p-12">
        <p className="text-[0.6875rem] tracking-[0.22em] text-white/50 uppercase transition duration-500 group-hover:text-white/70">
          Brand {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium text-white transition duration-500 group-hover:translate-x-1">
          {name}
        </h3>
        <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/70 transition duration-500 group-hover:text-white/85 sm:text-base">
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
