import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "COPE Clothing LLC is home to the Brands We Love—COPE and Petticoat Alley.",
};

const BRANDS = [
  {
    name: "COPE",
    body: "One of the Brands We Love—developed and managed by COPE Clothing LLC through thoughtful design, innovation, and exceptional quality.",
  },
  {
    name: "Petticoat Alley",
    body: "One of the Brands We Love—developed and managed by COPE Clothing LLC alongside COPE, through thoughtful design, innovation, and exceptional quality.",
  },
] as const;

export default function BrandsPage() {
  return (
    <>
      <article className="page-hero">
        <div className="site-shell">
          <p className="text-[0.6875rem] tracking-[0.22em] text-muted uppercase">
            Brands
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.1] font-medium text-ink">
            Home to the Brands We Love
          </h1>
          <p className="mt-6 max-w-xl text-base font-light text-ink-soft sm:text-lg">
            COPE Clothing LLC develops and manages modern apparel brands—COPE
            and Petticoat Alley.
          </p>

          <ul className="mt-16 divide-y divide-line border-y border-line">
            {BRANDS.map((brand) => (
              <li
                key={brand.name}
                className="grid gap-4 py-12 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-12"
              >
                <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  {brand.name}
                </h2>
                <p className="max-w-xl text-base font-light leading-relaxed text-ink-soft sm:text-lg">
                  {brand.body}
                </p>
              </li>
            ))}
          </ul>

          <Link
            href="/capabilities"
            className="focus-ring link-text mt-12 inline-block text-ink"
          >
            How we build brands
          </Link>
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
