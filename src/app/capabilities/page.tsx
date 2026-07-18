import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Brand strategy, product design, licensing, product development, sourcing, and global manufacturing partnerships.",
};

const CAPABILITIES = [
  "Brand strategy",
  "Product design",
  "Licensing",
  "Product development",
  "Sourcing",
  "Global manufacturing partnerships",
] as const;

export default function CapabilitiesPage() {
  return (
    <>
      <article className="page-hero">
        <div className="site-shell max-w-3xl">
          <p className="text-[0.6875rem] tracking-[0.22em] text-muted uppercase">
            Capabilities
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.1] font-medium text-ink">
            Brand development, end to end
          </h1>
          <p className="mt-6 text-base font-light leading-relaxed text-ink-soft sm:text-lg">
            COPE Clothing LLC develops and manages the brands it builds—COPE and
            Petticoat Alley—as a leader in brand strategy, product design,
            licensing, product development, sourcing, and global manufacturing
            partnerships.
          </p>

          <ol className="mt-14 space-y-0">
            {CAPABILITIES.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline gap-6 border-t border-line py-6"
              >
                <span className="w-8 shrink-0 text-[0.6875rem] tracking-[0.16em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-2xl font-medium text-ink sm:text-3xl">
                  {item}
                </p>
              </li>
            ))}
          </ol>

          <Link
            href="/contact"
            className="focus-ring link-text mt-12 inline-block text-ink"
          >
            Get in touch
          </Link>
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
