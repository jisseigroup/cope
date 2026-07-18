"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
  { href: "/capabilities", label: "Capabilities" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    panelRef.current
      ?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')[0]
      ?.focus();

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open || !isHome
          ? "border-b border-line bg-white/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="site-shell grid h-20 grid-cols-[1fr_auto_1fr] items-center sm:h-24">
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`focus-ring text-[0.6875rem] font-normal tracking-[0.22em] uppercase transition hover:opacity-60 ${
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
            className={`absolute h-px w-5 bg-ink transition ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            aria-hidden
            className={`absolute h-px w-5 bg-ink transition ${open ? "opacity-0" : ""}`}
          />
          <span
            aria-hidden
            className={`absolute h-px w-5 bg-ink transition ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>

        <Link href="/" className="focus-ring justify-self-center">
          <span className="relative block h-[4.235rem] w-[16.94rem] sm:h-[4.84rem] sm:w-[21.78rem]">
            <Image
              src="/logo.png"
              alt="Cope Clothing LLC"
              fill
              priority
              sizes="349px"
              className="object-contain"
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

      <div
        id={menuId}
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <nav className="site-shell flex flex-col py-4" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring min-h-11 py-3 text-sm tracking-[0.16em] uppercase"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="focus-ring min-h-11 py-3 text-sm tracking-[0.16em] uppercase"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
