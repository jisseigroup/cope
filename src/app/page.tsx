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
      {/* Hero — brand first, MAG-scale presence */}
      <section
        aria-label="Hero"
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-4 pt-32 pb-16 sm:px-8 sm:pb-20 lg:px-10"
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

      {/* What We Do — MAG structure + image */}
      <section
        id="what-we-do"
        className="scroll-mt-28 border-t border-line bg-paper-deep py-24 sm:py-32"
      >
        <div className="site-shell grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">What we do</p>
              <TextReveal
                as="h2"
                className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] font-medium text-ink"
                text={"Design. Develop.\nBuild brands."}
                delay={0.05}
              />
            </Reveal>
            <Reveal delay={0.15} className="mt-10">
              <MediaFrame
                src="/images/tee-white.jpg"
                alt="Apparel design detail"
                className="aspect-[4/5] w-full max-w-md"
              />
            </Reveal>
          </div>
          <Reveal delay={0.12} className="lg:pt-16">
            <p className="text-lg font-light leading-relaxed text-ink-soft sm:text-xl">
              COPE Clothing LLC is a creative brand development company focused
              on building modern apparel brands through thoughtful design,
              innovation, and exceptional quality.
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-muted sm:text-lg">
              We develop and manage the brands we build—guiding strategy,
              design, licensing, product development, sourcing, and global
              manufacturing partnerships.
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

      {/* Philosophy — Practice Mending. Swapping. Sharing. */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 opacity-30">
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
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/65"
        />

        <div className="site-shell relative z-10 py-24 sm:py-32">
          <Reveal>
            <p className="text-[0.6875rem] tracking-[0.24em] text-white/40 uppercase">
              Philosophy
            </p>
            <p className="mt-4 max-w-lg text-sm font-light text-white/50 sm:text-base">
              How we think about clothing—and the life of every piece after it
              leaves the studio.
            </p>
          </Reveal>
          <div className="mt-12 max-w-3xl">
            <PhilosophyHeadline />
          </div>
          <Reveal delay={0.3}>
            <p className="mt-14 max-w-xl text-base font-light leading-relaxed text-white/65 sm:text-lg">
              Buy better, wear longer, mend, swap, share, and pass it on.
              Timeless products with purpose and longevity—where great design,
              quality, and lasting style outlive trends.
            </p>
          </Reveal>
        </div>
        <div className="relative z-10">
          <PhilosophyMarquee />
        </div>
      </section>

      {/* Brand Portfolio — MAG “Our Brands” */}
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
        </div>

        <div className="mt-14 grid md:grid-cols-2">
          <BrandPanel
            name="COPE"
            line="Modern apparel through thoughtful design, innovation, and exceptional quality."
            href="/brands"
            image="/images/hero-model-white.jpg"
            index={0}
          />
          <BrandPanel
            name="Petticoat Alley"
            line="A brand we love—built and managed alongside COPE."
            href="/brands"
            image="/images/crew-black.jpg"
            index={1}
          />
        </div>
      </section>

      {/* Spotlight — MAG “In Proud Partnership” style */}
      <section className="border-t border-line bg-paper-deep py-24 sm:py-32">
        <div className="site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal preset="scale">
            <MediaFrame
              src="/images/lounge.jpg"
              alt="Studio atmosphere"
              className="aspect-[4/5]"
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
