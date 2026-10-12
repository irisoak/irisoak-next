import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteAnalytics from "@/components/analytics/SiteAnalytics";

import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
    default: "Websites & Digital Products | Iris & Oak Digital Studio",
    template: "%s | Iris & Oak",
  },

  description:
    "Professional websites and digital products from focused website launches and refreshes, to ongoing care and custom development.",

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
    title: "Websites & Digital Products | Iris & Oak Design Studio",
    description:
      "Professional websites and digital products for independent businesses.",
    images: [
      {
        url: "/images/iris-oak-logo.png",
        width: 1200,
        height: 630,
        alt: "Iris & Oak Digital Studio — websites and digital products for independent businesses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Websites & Digital Products for Independent Businesses | Iris & Oak Digital Studio",
    description:
      "Professional websites and digital products for independent businesses.",
    images: ["/images/iris-oak-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SiteAnalytics />
      </body>
    </html>
  );
}