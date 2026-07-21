import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TextReveal } from "@/components/TextReveal";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Brand strategy, product design, licensing, product development, sourcing, and global manufacturing partnerships.",
};

const CAPABILITIES = [
  {
    title: "Brand strategy",
    body: "Positioning, narrative, and long-term brand architecture for modern apparel labels.",
  },
  {
    title: "Product design",
    body: "Thoughtful design with longevity built into silhouette, material, and detail.",
  },
  {
    title: "Licensing",
    body: "Partnerships that extend brands with care, clarity, and cultural fit.",
  },
  {
    title: "Product development",
    body: "From concept to finished goods—guided by exceptional quality at every step.",
  },
  {
    title: "Sourcing",
    body: "Materials and makers aligned to quality, responsibility, and consistency.",
  },
  {
    title: "Global manufacturing partnerships",
    body: "Trusted production networks that scale without compromising craft.",
  },
] as const;

export default function CapabilitiesPage() {
  return (
    <>
      <article>
        <section className="border-b border-line bg-paper-deep pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="site-shell">
            <Reveal>
              <p className="eyebrow">Capabilities</p>
            </Reveal>
            <TextReveal
              as="h1"
              className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.02] font-medium text-ink"
              text={"Brand development,\nend to end"}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ink-soft sm:text-lg">
                We develop and manage the brands we build—from first positioning
                through design, licensing, product development, sourcing, and
                global manufacturing partnerships.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="site-shell">
            <ol className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map((item, index) => (
                <Reveal as="li" key={item.title} delay={0.04 * index}>
                  <div className="group border-t border-line py-8 pr-6 sm:min-h-[12.5rem] lg:pr-8">
                    <span className="text-[0.6875rem] tracking-[0.16em] text-muted transition duration-500 group-hover:text-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-4 font-display text-xl font-medium text-ink transition duration-500 group-hover:translate-x-1.5 sm:text-2xl">
                      {item.title}
                    </h2>
                    <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-ink-soft">
                      {item.body}
                    </p>
                    <span
                      aria-hidden
                      className="mt-5 block h-px w-0 bg-ink transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-12"
                    />
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-line bg-paper-deep py-16 sm:py-20">
          <div className="site-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <p className="eyebrow">Partner with us</p>
              <p className="mt-3 max-w-md font-display text-2xl font-medium text-ink sm:text-3xl">
                Ready to build something lasting?
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/contact" className="focus-ring link-text text-ink">
                Get in touch
              </Link>
            </Reveal>
          </div>
        </section>
      </article>
      <SiteFooter />
    </>
  );
}
