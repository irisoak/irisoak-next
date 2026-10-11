"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/care", label: "Care" },
];

function NavigationLinks() {
  const pathname = usePathname();

  return (
    <ul className="ionav__list">
      {navigation.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <li key={item.href}>
            <Link
              className="ionav__link"
              href={item.href}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Navbar() {
  return (
    <header className="ionav">
      <Container className="ionav__row">
        <Link href="/" className="ionav__logo" aria-label="Iris & Oak home">
          <span>iris ＆ oak</span>
        </Link>

        <nav className="ionav__links" aria-label="Primary navigation">
          <NavigationLinks />
        </nav>

        <Link href="/contact" className="ionav__cta">
          Get in touch
        </Link>

        <details className="ionav__mobile">
          <summary className="ionav__menu-button">
            <span className="sr-only">Toggle navigation menu</span>
            <span className="ionav__menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </summary>

          <nav className="ionav__mobile-panel" aria-label="Mobile navigation">
            <NavigationLinks />

            <Link href="/contact" className="ionav__mobile-cta">
              Get in touch
            </Link>
          </nav>
        </details>
      </Container>
    </header>
  );
}