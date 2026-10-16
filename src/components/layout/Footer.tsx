import Link from "next/link";
import Container from "./Container";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa6";

const footerNavigation = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/care", label: "Care" },
];

const footerSecondaryNavigation = [
  { href: "/portfolio-partnership", label: "Portfolio Partnership" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="iofooter">
      <Container className="iofooter__row">
        <Link
          className="iofooter__logo"
          href="/"
          aria-label="Iris & Oak Digital Studio home"
        >
          <span className="ionav__brandName">Iris &amp; Oak</span>
          <span className="ionav__brandDescription">Digital Studio</span>
        </Link>

        <nav aria-label="Footer navigation">
          <ul className="iofooter__nav">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="iofooter__socials" aria-label="Social links">
          <a
            href="https://www.linkedin.com/company/irisandoak"
            aria-label="Iris & Oak on LinkedIn"
          >
            <FaLinkedinIn size={20} aria-hidden="true" />
          </a>

          <a
            href="https://www.instagram.com/irisoakdev/"
            aria-label="Iris & Oak on Instagram"
          >
            <FaInstagram size={20} aria-hidden="true" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61593802392943"
            aria-label="Iris & Oak on Facebook"
          >
            <FaFacebook size={20} aria-hidden="true" />
          </a>

          <a
            href="https://github.com/irisoak/irisoak-next"
            aria-label="Iris & Oak on GitHub"
          >
            <FaGithub size={20} aria-hidden="true" />
          </a>
        </div>
      </Container>

      <Container className="iofooter__bottom">
        <p className="iofooter__copyright">
          © {new Date().getFullYear()} Iris &amp; Oak. All rights reserved.
        </p>

        <nav aria-label="Additional footer links">
          <ul className="iofooter__secondary-nav">
            {footerSecondaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}