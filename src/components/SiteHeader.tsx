"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brand Portfolio" },
  { href: "/capabilities", label: "Capabilities" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-line bg-white/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="site-shell grid h-16 grid-cols-[1fr_auto_1fr] items-center sm:h-20">
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`focus-ring text-[0.6875rem] font-normal tracking-[0.22em] uppercase transition hover:opacity-55 ${
                pathname === l.href ? "text-ink" : "text-ink-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="focus-ring relative flex h-11 w-11 items-center justify-center justify-self-start lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            aria-hidden
            className={`absolute h-px w-5 bg-ink transition duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            aria-hidden
            className={`absolute h-px w-5 bg-ink transition duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            aria-hidden
            className={`absolute h-px w-5 bg-ink transition duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>

        <Link href="/" className="focus-ring justify-self-center">
          <span className="relative block h-7 w-[10rem] sm:h-8 sm:w-[11.5rem]">
            <Image
              src="/cope-light.svg"
              alt="Cope Clothing LLC"
              fill
              priority
              sizes="184px"
              className="object-contain"
              unoptimized
            />
          </span>
        </Link>

        <Link
          href="/contact"
          className="focus-ring hidden justify-self-end text-[0.6875rem] font-normal tracking-[0.22em] text-ink uppercase lg:inline"
        >
          Contact
        </Link>
        <span className="justify-self-end lg:hidden" aria-hidden />
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <nav className="site-shell flex flex-col py-6" aria-label="Mobile">
              {[...NAV_LINKS, { href: "/contact", label: "Contact" }].map(
                (l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      href={l.href}
                      className="focus-ring block min-h-11 py-3 font-display text-2xl font-medium"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ),
              )}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
