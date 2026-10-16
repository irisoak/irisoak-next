import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

/*
  Clears the homepage canonical and sharing URL inherited from the root
  layout, so missing pages never point search engines at the homepage.
*/
export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you’re looking for could not be found.",
  alternates: {
    canonical: null,
  },
  openGraph: null,
  twitter: null,
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="not-found">
      <Container>
        <p className="not-found__eyebrow">404</p>

        <h1>Page not found</h1>

        <p className="not-found__text">
          The page you’re looking for may have moved or no longer exists.
        </p>

        <div className="not-found__actions">
          <Link className="not-found__primary" href="/">
            Back to the homepage
          </Link>

          <Link className="not-found__secondary" href="/work">
            View my work
          </Link>

          <Link className="not-found__secondary" href="/#contact">
            Get in touch
          </Link>
        </div>
      </Container>
    </div>
  );
}
