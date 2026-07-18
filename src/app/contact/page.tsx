import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact COPE Clothing LLC — 250 West 39th Street, Suite 304, New York, NY 10018. contact@cope.clothing",
};

export default function ContactPage() {
  return (
    <>
      <article className="page-hero">
        <div className="site-shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[0.6875rem] tracking-[0.22em] text-muted uppercase">
              Contact
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.1] font-medium text-ink">
              COPE Clothing LLC
            </h1>
            <p className="mt-6 max-w-md text-base font-light text-ink-soft sm:text-lg">
              Reach us for brand partnerships, licensing, and development
              inquiries.
            </p>
          </div>

          <address className="not-italic space-y-10">
            <div>
              <p className="text-[0.6875rem] tracking-[0.2em] text-muted uppercase">
                Email
              </p>
              <a
                href="mailto:contact@cope.clothing"
                className="focus-ring mt-3 inline-block font-display text-2xl text-ink transition hover:opacity-70 sm:text-3xl"
              >
                contact@cope.clothing
              </a>
            </div>
            <div>
              <p className="text-[0.6875rem] tracking-[0.2em] text-muted uppercase">
                Address
              </p>
              <p className="mt-3 text-lg font-light leading-relaxed text-ink-soft">
                250 West 39th Street, Suite 304
                <br />
                New York, NY 10018
              </p>
            </div>
          </address>
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
