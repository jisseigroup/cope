import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

/** Matches logo wordmark "Cope." — high-contrast Didone / modern serif */
const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

/** Matches logo subline "Clothing LLC" — light geometric sans */
const body = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "COPE Clothing LLC",
    template: "%s · COPE Clothing LLC",
  },
  description:
    "The Crossroads of Luxury & Responsibility. Home to the Brands We Love—COPE and Petticoat Alley.",
  metadataBase: new URL("https://cope.clothing"),
  openGraph: {
    title: "COPE Clothing LLC",
    description:
      "The Crossroads of Luxury & Responsibility. Home to the Brands We Love—COPE and Petticoat Alley.",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans font-light antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
