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
    name: "COPE",
    body: "One of the Brands We Love—developed and managed by COPE Clothing LLC through thoughtful design, innovation, and exceptional quality.",
    image: "/images/hero-model-white.jpg",
    imagePosition: "object-[center_8%]",
  },
  {
    name: "Petticoat Alley",
    body: "One of the Brands We Love—developed and managed by COPE Clothing LLC alongside COPE, through thoughtful design, innovation, and exceptional quality.",
    image: "/images/sweatshirt.jpg",
    imagePosition: "object-[center_20%]",
  },
] as const;

export default function BrandsPage() {
  return (
    <>
      <article>
        <section className="bg-paper-deep pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Brand portfolio</p>
            </Reveal>
            <TextReveal
              as="h1"
              className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-medium text-ink"
              text="Home to the Brands We Love"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-base font-light text-ink-soft sm:text-lg">
                COPE Clothing LLC develops and manages modern apparel
                brands—COPE and Petticoat Alley.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="site-shell">
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {BRANDS.map((brand, i) => (
              <BrandPanel
                key={brand.name}
                name={brand.name}
                line={brand.body}
                href="/capabilities"
                image={brand.image}
                index={i}
                imagePosition={brand.imagePosition}
              />
            ))}
          </div>
        </div>

        <section className="border-t border-line py-20 sm:py-24">
          <div className="site-shell">
            <Reveal>
              <Link href="/capabilities" className="focus-ring link-text text-ink">
                How we build brands
              </Link>
            </Reveal>
          </div>
        </section>
      </article>
      <SiteFooter />
    </>
  );
}
