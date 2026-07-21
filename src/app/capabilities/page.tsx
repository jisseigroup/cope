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
        <section className="bg-paper-deep pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="site-shell max-w-4xl">
            <Reveal>
              <p className="eyebrow">Capabilities</p>
            </Reveal>
            <TextReveal
              as="h1"
              className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-medium text-ink"
              text={"Brand development,\nend to end"}
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-ink-soft sm:text-lg">
                COPE Clothing LLC develops and manages the brands it builds—COPE
                and Petticoat Alley—as a leader in brand strategy, product design,
                licensing, product development, sourcing, and global manufacturing
                partnerships.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-line py-16 sm:py-24">
          <div className="site-shell">
            <ol className="grid gap-0 sm:grid-cols-2">
              {CAPABILITIES.map((item, index) => (
                <Reveal as="li" key={item.title} delay={0.05 * index}>
                  <div className="group border-t border-line py-10 pr-8 sm:min-h-[13rem]">
                    <span className="text-[0.6875rem] tracking-[0.16em] text-muted transition duration-500 group-hover:text-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-4 font-display text-2xl font-medium text-ink transition duration-500 group-hover:translate-x-1.5 sm:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-ink-soft sm:text-base">
                      {item.body}
                    </p>
                    <span
                      aria-hidden
                      className="mt-6 block h-px w-0 bg-ink transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-14"
                    />
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.2}>
              <Link
                href="/contact"
                className="focus-ring link-text mt-16 inline-block text-ink"
              >
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
