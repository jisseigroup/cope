import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About",
  description:
    "COPE Clothing LLC is a creative brand development company. Practice Mending. Swapping. Sharing.",
};

export default function AboutPage() {
  return (
    <>
      <article className="page-hero">
        <div className="site-shell max-w-3xl">
          <p className="text-[0.6875rem] tracking-[0.22em] text-muted uppercase">
            About
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.1] font-medium text-ink">
            The Crossroads of Luxury &amp; Responsibility.
          </h1>

          <div className="mt-10 space-y-6 text-base font-light leading-relaxed text-ink-soft sm:text-lg">
            <p>
              COPE Clothing LLC is home to the Brands We Love—COPE and Petticoat
              Alley.
            </p>
            <p>
              COPE Clothing LLC is a creative brand development company focused
              on building modern apparel brands through thoughtful design,
              innovation, and exceptional quality.
            </p>
            <p>
              We believe the best pieces become part of your everyday life—not
              just your closet—designed to be worn on repeat, loved longer, and
              made to last.
            </p>
          </div>

          <div className="mt-16 border-t border-line pt-12">
            <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
              Practice Mending.
              <br />
              Swapping. Sharing.
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-ink-soft sm:text-lg">
              Our philosophy is simple: buy better, wear longer, mend, swap,
              share, and pass it on. By creating timeless products with purpose
              and longevity in mind, we&apos;re encouraging a more thoughtful
              way to enjoy fashion—where great design, quality, and lasting
              style outlive trends and every piece has the opportunity for a
              second story.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <Link href="/brands" className="focus-ring link-text text-ink">
              Our brands
            </Link>
            <Link href="/contact" className="focus-ring link-text text-ink">
              Contact
            </Link>
          </div>
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
