import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { ParallaxImage } from "@/components/ParallaxImage";
import { PhilosophyHeadline } from "@/components/PhilosophyHeadline";
import { PhilosophyMarquee } from "@/components/PhilosophyMarquee";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "COPE Clothing LLC",
  description:
    "The Crossroads of Luxury & Responsibility. Home to the Brands We Love—COPE and Petticoat Alley.",
};

const CAPABILITIES = [
  "Brand strategy",
  "Product design",
  "Licensing",
  "Product development",
  "Sourcing",
  "Global manufacturing partnerships",
] as const;

export default function HomePage() {
  return (
    <>
      {/* 1. Parent-brand hero */}
      <section
        aria-label="Hero"
        className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-white px-4 pt-28 pb-20 text-center sm:pt-32"
      >
        <HeroVideo />

        <h1 className="animate-fade-up relative z-10 max-w-3xl font-display text-[clamp(1.75rem,4.5vw,2.75rem)] leading-[1.15] font-medium tracking-tight text-ink text-balance">
          The Crossroads of Luxury &amp; Responsibility.
        </h1>

        <p className="animate-fade-up delay-1 relative z-10 mt-5 max-w-md text-sm font-light tracking-wide text-ink-soft sm:text-base">
          Home to the Brands We Love—COPE and Petticoat Alley.
        </p>

        <div className="animate-fade-up delay-2 relative z-10 mt-10 flex flex-wrap items-center justify-center gap-8">
          <Link href="/brands" className="focus-ring link-text text-ink">
            Our brands
          </Link>
          <Link href="/about" className="focus-ring link-text text-ink">
            About
          </Link>
        </div>
      </section>

      {/* 2. Company */}
      <section className="border-t border-line bg-paper-deep py-20 sm:py-24">
        <div className="site-shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.6875rem] tracking-[0.22em] text-muted uppercase">
              The company
            </p>
            <p className="mt-6 text-lg font-light leading-relaxed text-ink-soft sm:text-xl">
              COPE Clothing LLC is a creative brand development company focused
              on building modern apparel brands through thoughtful design,
              innovation, and exceptional quality.
            </p>
            <Link
              href="/about"
              className="focus-ring link-text mt-8 inline-block text-ink"
            >
              Read more
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. Brands We Love — one image, two brand stories */}
      <section className="border-t border-line bg-white py-20 sm:py-28">
        <div className="site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ParallaxImage
              src="/images/hero-model-white.jpg"
              alt="Wardrobe essentials"
              className="aspect-[4/5] bg-paper-deep"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[0.6875rem] tracking-[0.22em] text-muted uppercase">
                Brands
              </p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium text-ink">
                The Brands We Love
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-ink-soft sm:text-lg">
                COPE Clothing LLC develops and manages the brands it builds.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-0">
              {[
                {
                  name: "COPE",
                  line: "Modern apparel through thoughtful design, innovation, and exceptional quality.",
                },
                {
                  name: "Petticoat Alley",
                  line: "A brand we love—built and managed alongside COPE.",
                },
              ].map((brand, i) => (
                <Reveal as="li" key={brand.name} delay={0.08 * (i + 1)}>
                  <div className="border-t border-line py-7">
                    <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                      {brand.name}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-ink-soft sm:text-base">
                      {brand.line}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <Link
                href="/brands"
                className="focus-ring link-text mt-4 inline-block text-ink"
              >
                Explore brands
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Philosophy — motion + one atmosphere image */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/sweatshirt.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[center_25%]"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70"
        />

        <div className="site-shell relative z-10 py-20 sm:py-28">
          <Reveal>
            <p className="text-[0.6875rem] tracking-[0.22em] text-white/45 uppercase">
              Philosophy
            </p>
          </Reveal>
          <div className="mt-6">
            <PhilosophyHeadline />
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/70 sm:text-lg">
              Our philosophy is simple: buy better, wear longer, mend, swap,
              share, and pass it on. Timeless products with purpose and
              longevity—where great design, quality, and lasting style outlive
              trends, and every piece has the opportunity for a second story.
            </p>
            <Link
              href="/about"
              className="focus-ring link-text mt-8 inline-block text-white"
            >
              Our philosophy
            </Link>
          </Reveal>
        </div>

        <div className="relative z-10">
          <PhilosophyMarquee />
        </div>
      </section>

      {/* 5. Capabilities preview */}
      <section className="border-t border-line bg-white py-20 sm:py-28">
        <div className="site-shell">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[0.6875rem] tracking-[0.22em] text-muted uppercase">
                Capabilities
              </p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium text-ink">
                How we build brands
              </h2>
            </div>
            <Link href="/capabilities" className="focus-ring link-text text-ink">
              View all
            </Link>
          </Reveal>

          <ol className="mt-14 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((item, i) => (
              <Reveal as="li" key={item} delay={0.05 * i}>
                <div className="border-t border-line py-6">
                  <span className="text-[0.6875rem] tracking-[0.14em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-display text-xl font-medium text-ink sm:text-2xl">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Studio / contact */}
      <section className="border-t border-line bg-paper-deep py-20 sm:py-28">
        <div className="site-shell grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-[0.6875rem] tracking-[0.22em] text-muted uppercase">
              Studio
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium text-ink">
              New York
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-ink-soft sm:text-lg">
              250 West 39th Street, Suite 304
              <br />
              New York, NY 10018
            </p>
            <a
              href="mailto:contact@cope.clothing"
              className="focus-ring mt-8 inline-block font-display text-2xl text-ink transition hover:opacity-70"
            >
              contact@cope.clothing
            </a>
            <div className="mt-8">
              <Link href="/contact" className="focus-ring link-text text-ink">
                Contact
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative aspect-[5/4] overflow-hidden bg-white lg:justify-self-end lg:w-full">
            <Image
              src="/images/lounge.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-90"
            />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
