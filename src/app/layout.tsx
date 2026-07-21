import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

/** UI / body — light geometric sans */
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
    <html lang="en" className={`${body.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans font-light antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
