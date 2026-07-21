import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandPanel } from "@/components/BrandPanel";
import { HeroVideo } from "@/components/HeroVideo";
import { MediaFrame } from "@/components/MediaFrame";
import { PhilosophyHeadline } from "@/components/PhilosophyHeadline";
import { PhilosophyMarquee } from "@/components/PhilosophyMarquee";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TextReveal } from "@/components/TextReveal";

export const metadata: Metadata = {
  title: "COPE Clothing LLC",
  description:
    "The Crossroads of Luxury & Responsibility. Home to the Brands We Love—COPE and Petticoat Alley.",
};

const CAPABILITIES = [
  {
    title: "Brand strategy",
    body: "Positioning, narrative, and long-term brand architecture.",
  },
  {
    title: "Product design",
    body: "Thoughtful design with longevity built into every decision.",
  },
  {
    title: "Licensing",
    body: "Partnerships that extend brands with care and clarity.",
  },
  {
    title: "Product development",
    body: "From concept to finished goods with exceptional quality.",
  },
  {
    title: "Sourcing",
    body: "Materials and makers aligned to quality and responsibility.",
  },
  {
    title: "Global manufacturing",
    body: "Trusted partnerships that scale without compromising craft.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero — brand first */}
      <section
        aria-label="Hero"
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32 pb-16 sm:pb-20"
      >
        <HeroVideo />

        <div className="site-shell relative z-10 w-full">
          <p className="animate-fade-up eyebrow text-ink/70">
            Creative brand development
          </p>
          <h1 className="animate-fade-up delay-1 mt-5 max-w-5xl font-display text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.95] font-medium tracking-tight text-ink text-balance">
            COPE Clothing LLC
          </h1>
          <p className="animate-fade-up delay-2 mt-6 max-w-xl text-base font-light tracking-wide text-ink-soft sm:text-lg">
            The Crossroads of Luxury &amp; Responsibility. Home to the Brands We
            Love—COPE and Petticoat Alley.
          </p>
          <div className="animate-fade-up delay-3 mt-10 flex flex-wrap items-center gap-8">
            <Link href="/brands" className="focus-ring link-text text-ink">
              Brand portfolio
            </Link>
            <Link href="/about" className="focus-ring link-text text-ink">
              About the company
            </Link>
          </div>
        </div>

        <a
          href="#what-we-do"
          className="focus-ring absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.625rem] tracking-[0.28em] text-ink/50 uppercase"
          aria-label="Scroll to What we do"
        >
          <span
            aria-hidden
            className="animate-scroll-cue h-10 w-px origin-top bg-ink"
          />
          Scroll
        </a>
      </section>

      {/* What We Do */}
      <section
        id="what-we-do"
        className="scroll-mt-28 border-t border-line bg-paper-deep py-16 sm:py-24"
      >
        <div className="site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md overflow-hidden bg-paper-deep aspect-[25/24] sm:max-w-lg lg:mx-0 lg:max-w-none lg:aspect-[10/9]">
              <Image
                src="/images/hero-model-white.jpg"
                alt="Model in sweatshirt and sweatpants"
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover object-top transition duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 max-w-md font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-medium text-ink">
              Design. Develop. Build brands.
            </h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ink-soft sm:text-lg">
              A creative brand development company building modern apparel
              brands through thoughtful design, innovation, and exceptional
              quality.
            </p>
            <Link
              href="/about"
              className="focus-ring link-text mt-10 inline-block text-ink"
            >
              Read more
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/sweatshirt.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[center_20%]"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-ink/80"
        />

        <div className="site-shell relative z-10 py-16 sm:py-20">
          <p className="text-[0.6875rem] tracking-[0.24em] text-white/45 uppercase">
            Philosophy
          </p>
          <div className="mt-6 max-w-4xl">
            <PhilosophyHeadline />
          </div>
          <div className="mt-12">
            <PhilosophyMarquee />
          </div>
        </div>
      </section>

      {/* Brand Portfolio */}
      <section className="border-t border-line bg-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <p className="eyebrow">Brand portfolio</p>
              </Reveal>
              <TextReveal
                as="h2"
                className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] font-medium text-ink"
                text="The Brands We Love"
                delay={0.05}
              />
              <Reveal delay={0.15}>
                <p className="mt-5 text-base font-light leading-relaxed text-ink-soft sm:text-lg">
                  Our portfolio is home to brands we develop and manage—built
                  with thoughtful design, innovation, and exceptional quality.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link href="/brands" className="focus-ring link-text text-ink">
                View brands
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
            <BrandPanel
              name="COPE"
              line="Modern apparel through thoughtful design, innovation, and exceptional quality."
              href="/brands"
              image="/images/hero-model-white.jpg"
              index={0}
              imagePosition="object-top"
            />
            <BrandPanel
              name="Petticoat Alley"
              line="A brand we love—built and managed alongside COPE."
              href="/brands"
              image="/images/sweatshirt.jpg"
              index={1}
              imagePosition="object-[center_20%]"
            />
          </div>
        </div>
      </section>

      {/* Spotlight — MAG “In Proud Partnership” style */}
      <section className="border-t border-line bg-paper-deep py-24 sm:py-32">
        <div className="site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal preset="scale">
            <MediaFrame
              src="/images/lounge.jpg"
              alt="Studio atmosphere"
              className="aspect-[4/5] bg-paper-deep"
              imageClassName="!object-[92%_center]"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">In focus</p>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] font-medium text-ink">
                Building brands with lasting style
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base font-light leading-relaxed text-ink-soft sm:text-lg">
                COPE Clothing LLC develops and manages modern apparel brands from
                New York—pairing luxury sensibility with responsible practice.
                Every brand we build is meant to be worn on repeat, loved longer,
                and made to last.
              </p>
              <div className="mt-10 flex flex-wrap gap-8">
                <Link href="/capabilities" className="focus-ring link-text text-ink">
                  Our capabilities
                </Link>
                <Link href="/contact" className="focus-ring link-text text-ink">
                  Partner with us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities — MAG partners analogue */}
      <section className="border-t border-line bg-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <Reveal>
                <p className="eyebrow">Capabilities</p>
                <h2 className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium text-ink">
                  How we build
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/capabilities" className="focus-ring link-text text-ink">
                View all
              </Link>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((item, i) => (
              <Reveal as="li" key={item.title} delay={0.05 * i}>
                <div className="group border-t border-line py-8 pr-6 sm:min-h-[11rem]">
                  <span className="text-[0.6875rem] tracking-[0.16em] text-muted transition duration-500 group-hover:text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-medium text-ink transition duration-500 group-hover:translate-x-1.5 sm:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-ink-soft transition duration-500 group-hover:text-ink-soft/80">
                    {item.body}
                  </p>
                  <span
                    aria-hidden
                    className="mt-5 block h-px w-0 bg-ink transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-12"
                  />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden border-t border-line bg-ink py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div aria-hidden className="absolute inset-0 bg-ink/75" />
        <div className="site-shell relative z-10">
          <Reveal>
            <p className="text-[0.6875rem] tracking-[0.24em] text-white/40 uppercase">
              Studio
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-medium">
              New York
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/65 sm:text-lg">
              250 West 39th Street, Suite 304
              <br />
              New York, NY 10018
            </p>
            <a
              href="mailto:contact@cope.clothing"
              className="focus-ring mt-8 inline-block font-display text-2xl transition hover:opacity-70 sm:text-3xl"
            >
              contact@cope.clothing
            </a>
            <div className="mt-10">
              <Link href="/contact" className="focus-ring link-text text-white">
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
