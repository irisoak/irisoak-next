import type { Metadata } from "next";
import type { ReactNode } from "react";

/*
  Concept pages are demonstration work rather than public service
  pages, so they are kept out of search results and the sitemap.
*/
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function ConceptsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
