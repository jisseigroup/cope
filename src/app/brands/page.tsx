import type { Metadata } from "next";
import Link from "next/link";
import { BrandPanel } from "@/components/BrandPanel";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TextReveal } from "@/components/TextReveal";

export const metadata: Metadata = {
  title: "Brand Portfolio",
  description:
    "COPE Clothing LLC is home to the Brands We Love—COPE and Petticoat Alley.",
};

const BRANDS = [
  {
    name: "Cope",
    body: "Modern apparel through thoughtful design, innovation, and exceptional quality—built to be worn on repeat and made to last.",
    image: "/images/hero-model-white.jpg",
    imagePosition: "object-top",
  },
  {
    name: "Petticoat Alley",
    body: "A brand we love—developed and managed alongside COPE with the same care for design, quality, and lasting style.",
    image: "/images/sweatshirt.jpg",
    imagePosition: "object-[center_18%]",
  },
] as const;

export default function BrandsPage() {
  return (
    <>
      <article>
        <section className="border-b border-line bg-paper-deep pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Brand portfolio</p>
            </Reveal>
            <TextReveal
              as="h1"
              className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.02] font-medium text-ink"
              text="Home to the Brands We Love"
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ink-soft sm:text-lg">
                COPE Clothing LLC develops and manages modern apparel
                brands—COPE and Petticoat Alley.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="site-shell">
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {BRANDS.map((brand, i) => (
                <BrandPanel
                  key={brand.name}
                  name={brand.name}
                  line={brand.body}
                  href="/contact"
                  image={brand.image}
                  index={i}
                  imagePosition={brand.imagePosition}
                  cta="Inquire"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
          <div className="site-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <p className="eyebrow">Next</p>
              <p className="mt-3 max-w-md font-display text-2xl font-medium text-ink sm:text-3xl">
                How we build brands
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link
                href="/capabilities"
                className="focus-ring link-text text-ink"
              >
                View capabilities
              </Link>
            </Reveal>
          </div>
        </section>
      </article>
      <SiteFooter />
    </>
  );
}
