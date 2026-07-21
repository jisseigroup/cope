import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brand Portfolio" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
] as const;

/** Update hrefs when official Cope profiles are confirmed. */
const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.6A3 3 0 0 0 .5 7.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-4.8ZM9.8 15.5v-7l6.2 3.5-6.2 3.5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.1V23h-4v-6.7c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V23h-4V8.5z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-white">
      <div className="site-shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href="/" className="focus-ring relative block h-12 w-48">
            <Image
              src="/cope-dark.svg"
              alt="Cope Clothing LLC"
              fill
              sizes="192px"
              className="object-contain object-left"
              unoptimized
            />
          </Link>
          <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-white/55">
            The Crossroads of Luxury &amp; Responsibility.
          </p>
          <ul className="mt-6 flex items-center gap-4">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="focus-ring flex h-11 w-11 items-center justify-center text-white transition hover:opacity-70"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.6875rem] tracking-[0.22em] text-white/40 uppercase">
            Explore
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="focus-ring transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.6875rem] tracking-[0.22em] text-white/40 uppercase">
            Studio
          </p>
          <p className="mt-5 text-sm font-light leading-relaxed text-white/75">
            250 West 39th Street, Suite 304
            <br />
            New York, NY 10018
          </p>
          <a
            href="mailto:contact@cope.clothing"
            className="focus-ring mt-4 inline-block text-sm text-white underline underline-offset-4"
          >
            contact@cope.clothing
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-shell flex flex-col gap-2 py-5 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="font-display">Cope Clothing LLC</span>
          </span>
          <p className="sm:text-center">
            Designed and developed by{" "}
            <a
              href="https://auotam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring font-semibold transition hover:opacity-70"
            >
              AUOTAM
            </a>
          </p>
          <span>New York</span>
        </div>
      </div>
    </footer>
  );
}
