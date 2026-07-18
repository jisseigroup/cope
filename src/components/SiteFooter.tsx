import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-white">
      <div className="site-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href="/" className="focus-ring relative block h-12 w-48">
            <Image
              src="/logo.png"
              alt="Cope Clothing LLC"
              fill
              sizes="192px"
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm text-muted">
            The Crossroads of Luxury &amp; Responsibility.
          </p>
        </div>

        <div>
          <p className="text-[0.6875rem] tracking-[0.2em] text-muted uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li>
              <Link href="/about" className="focus-ring hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link href="/brands" className="focus-ring hover:text-ink">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/capabilities" className="focus-ring hover:text-ink">
                Capabilities
              </Link>
            </li>
            <li>
              <Link href="/contact" className="focus-ring hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.6875rem] tracking-[0.2em] text-muted uppercase">
            Studio
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            250 West 39th Street, Suite 304
            <br />
            New York, NY 10018
          </p>
          <a
            href="mailto:contact@cope.clothing"
            className="focus-ring mt-3 inline-block text-sm text-ink underline underline-offset-4"
          >
            contact@cope.clothing
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="site-shell py-5 text-xs text-muted">
          © {new Date().getFullYear()} COPE Clothing LLC
        </div>
      </div>
    </footer>
  );
}
