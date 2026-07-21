import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TextReveal } from "@/components/TextReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "COPE Clothing LLC is a creative brand development company. The Crossroads of Luxury & Responsibility.",
};

export default function AboutPage() {
  return (
    <>
      <article>
        <section className="border-b border-line bg-paper-deep pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">About</p>
            </Reveal>
            <TextReveal
              as="h1"
              className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.02] font-medium text-ink"
              text={"The Crossroads of\nLuxury & Responsibility."}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ink-soft sm:text-lg">
                A creative brand development company building modern apparel
                brands through thoughtful design, innovation, and exceptional
                quality.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[25/24] overflow-hidden bg-paper-deep sm:aspect-[10/9]">
                <Image
                  src="/images/hero-model-white.jpg"
                  alt="Model in sweatshirt and sweatpants"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow">Who we are</p>
              <div className="mt-5 space-y-5 text-base font-light leading-relaxed text-ink-soft sm:text-lg">
                <p>
                  COPE Clothing LLC is home to the Brands We Love—COPE and
                  Petticoat Alley.
                </p>
                <p>
                  We develop and manage the brands we build, guiding them from
                  strategy and design through licensing, product development,
                  sourcing, and global manufacturing partnerships.
                </p>
                <p>
                  Based in New York, we believe the best pieces become part of
                  everyday life—worn on repeat, loved longer, and made to last.
                </p>
              </div>
              <Link
                href="/brands"
                className="focus-ring link-text mt-10 inline-block text-ink"
              >
                Brand portfolio
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-line bg-ink py-16 text-white sm:py-24">
          <div className="site-shell">
            <Reveal className="max-w-3xl">
              <p className="text-[0.6875rem] tracking-[0.24em] text-white/45 uppercase">
                Philosophy
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] font-medium">
                Practice Mending.
                <br />
                Swapping. Sharing.
              </h2>
              <p className="mt-6 text-base font-light leading-relaxed text-white/65 sm:text-lg">
                Buy better, wear longer, mend, swap, share, and pass it on.
                Timeless products with purpose and longevity—where great design,
                quality, and lasting style outlive trends, and every piece has
                the opportunity for a second story.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-wrap gap-8">
                <Link
                  href="/capabilities"
                  className="focus-ring link-text text-white"
                >
                  Capabilities
                </Link>
                <Link href="/contact" className="focus-ring link-text text-white">
                  Contact
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </article>
      <SiteFooter />
    </>
  );
}
