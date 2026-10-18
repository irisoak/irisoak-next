"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/care", label: "Website Care" },
];

const MOBILE_MENU_ID = "mobile-navigation";

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
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
              onClick={onNavigate}
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = () => setIsMenuOpen(false);

  /* Escape closes the menu and returns focus to its button. */
  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  return (
    <header className="ionav">
      <Container className="ionav__row">
        <Link
          className="ionav__logo"
          href="/"
          aria-label="Iris & Oak Digital Studio home"
        >
          <span className="ionav__brandName">Iris &amp; Oak</span>
          <span className="ionav__brandDescription">Digital Studio</span>
        </Link>

        <nav className="ionav__links" aria-label="Primary navigation">
          <NavigationLinks />
        </nav>

        <Link href="/#contact" className="ionav__cta">
          Get in touch
        </Link>

        <div
          className="ionav__mobile"
          data-open={isMenuOpen}
          onKeyDown={handleMenuKeyDown}
        >
          <button
            ref={menuButtonRef}
            type="button"
            className="ionav__menu-button"
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Navigation menu</span>
            <span className="ionav__menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <nav
            className="ionav__mobile-panel"
            id={MOBILE_MENU_ID}
            aria-label="Mobile navigation"
            hidden={!isMenuOpen}
          >
            <NavigationLinks onNavigate={closeMobileMenu} />

            <Link
              href="/#contact"
              className="ionav__mobile-cta"
              onClick={closeMobileMenu}
            >
              Get in touch
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
