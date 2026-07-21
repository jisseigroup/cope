import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brand Portfolio" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-white">
      <div className="site-shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href="/" className="focus-ring relative block h-12 w-48">
            <Image
              src="/logo.png"
              alt="Cope Clothing LLC"
              fill
              sizes="192px"
              className="object-contain object-left brightness-0 invert"
            />
          </Link>
          <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-white/55">
            The Crossroads of Luxury &amp; Responsibility.
          </p>
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
        <div className="site-shell flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} COPE Clothing LLC</span>
          <span>New York</span>
        </div>
      </div>
    </footer>
  );
}
