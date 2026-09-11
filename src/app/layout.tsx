import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.irisoak.dev"),

  title: {
    default: "Websites & Digital Products for Independent Businesses | Iris & Oak",
    template: "%s | Iris & Oak",
  },

  description:
    "Iris & Oak designs and builds professional websites and digital products for independent businesses, from focused website launches to refreshes, ongoing care and custom development.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.irisoak.dev",
    siteName: "Iris & Oak",
    title: "Websites & Digital Products for Independent Businesses | Iris & Oak",
    description:
      "Professional websites and digital products for independent businesses.",
    images: [
      {
        url: "/images/iris-oak-og.png",
        width: 1200,
        height: 630,
        alt: "Iris & Oak — websites and digital products for independent businesses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Websites & Digital Products for Independent Businesses | Iris & Oak",
    description:
      "Professional websites and digital products for independent businesses.",
    images: ["/images/iris-oak-og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
        
        <MobileNav />

        <Analytics />
      </body>
    </html>
  );
}