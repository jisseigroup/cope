import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { TextReveal } from "@/components/TextReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact COPE Clothing LLC — 250 West 39th Street, Suite 304, New York, NY 10018. contact@cope.clothing",
};

export default function ContactPage() {
  return (
    <>
      <article>
        <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/lounge.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div aria-hidden className="absolute inset-0 bg-ink/70" />
          <div className="site-shell relative z-10">
            <Reveal>
              <p className="text-[0.6875rem] tracking-[0.24em] text-white/40 uppercase">
                Contact
              </p>
            </Reveal>
            <TextReveal
              as="h1"
              className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-medium text-white"
              text="Let's build\nsomething lasting."
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-base font-light text-white/65 sm:text-lg">
                Reach us for brand partnerships, licensing, and development
                inquiries.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-line py-20 sm:py-28">
          <div className="site-shell grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow">Email</p>
              <a
                href="mailto:contact@cope.clothing"
                className="focus-ring mt-4 inline-block font-display text-2xl text-ink transition hover:opacity-70 sm:text-4xl"
              >
                contact@cope.clothing
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">Studio</p>
              <p className="mt-4 text-lg font-light leading-relaxed text-ink-soft sm:text-xl">
                250 West 39th Street, Suite 304
                <br />
                New York, NY 10018
              </p>
            </Reveal>
          </div>
        </section>
      </article>
      <SiteFooter />
    </>
  );
}
