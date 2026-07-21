import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TextReveal } from "@/components/TextReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "COPE Clothing LLC is a creative brand development company. Practice Mending. Swapping. Sharing.",
};

export default function AboutPage() {
  return (
    <>
      <article>
        <section className="relative overflow-hidden bg-paper-deep pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="site-shell max-w-4xl">
            <Reveal>
              <p className="eyebrow">About</p>
            </Reveal>
            <TextReveal
              as="h1"
              className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-medium text-ink"
              text={"The Crossroads of\nLuxury & Responsibility."}
            />
          </div>
        </section>

        <section className="border-t border-line py-20 sm:py-28">
          <div className="site-shell grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-deep">
                <Image
                  src="/images/hero-model-white.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="lg:pt-8">
              <Reveal>
                <p className="eyebrow">Who we are</p>
                <div className="mt-6 space-y-6 text-base font-light leading-relaxed text-ink-soft sm:text-lg">
                  <p>
                    COPE Clothing LLC is home to the Brands We Love—COPE and
                    Petticoat Alley.
                  </p>
                  <p>
                    We are a creative brand development company focused on
                    building modern apparel brands through thoughtful design,
                    innovation, and exceptional quality.
                  </p>
                  <p>
                    We believe the best pieces become part of your everyday
                    life—not just your closet—designed to be worn on repeat,
                    loved longer, and made to last.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-ink py-20 text-white sm:py-28">
          <div className="site-shell max-w-3xl">
            <Reveal>
              <p className="text-[0.6875rem] tracking-[0.24em] text-white/40 uppercase">
                Philosophy
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] font-medium">
                Practice Mending.
                <br />
                Swapping. Sharing.
              </h2>
              <p className="mt-8 text-base font-light leading-relaxed text-white/65 sm:text-lg">
                Our philosophy is simple: buy better, wear longer, mend, swap,
                share, and pass it on. By creating timeless products with purpose
                and longevity in mind, we&apos;re encouraging a more thoughtful
                way to enjoy fashion—where great design, quality, and lasting
                style outlive trends and every piece has the opportunity for a
                second story.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-12 flex flex-wrap gap-8">
                <Link href="/brands" className="focus-ring link-text text-white">
                  Brand portfolio
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
