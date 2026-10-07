import Link from "next/link";
import Container from "./Container";
import Button from "@/components/ui/Button";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa6";

const footerNavigation = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="iofooter">
      <Container className="iofooter__partner">
        <p className="iofooter__eyebrow">
          Let&apos;s collaborate
        </p>

        <h2 className="iofooter__heading">
          Partner with me
        </h2>

        <Button
          href="mailto:iris@irisoak.dev"
          className="iofooter__cta"
        >
          iris@irisoak.dev <span aria-hidden="true">→</span>
        </Button>
      </Container>

      <Container className="iofooter__row">
        <div className="iofooter__brand">
          <Link href="/" className="iofooter__logo">
            iris & oak
          </Link>

          <div className="iofooter__legal">
            <p>
              © {new Date().getFullYear()} Iris & Oak. All rights reserved.
            </p>

            <Link href="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="iofooter__nav">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="iofooter__socials" aria-label="Social links">
          <a
            href="https://www.linkedin.com/company/irisandoak"
            aria-label="Iris & Oak on LinkedIn"
          >
            <FaLinkedinIn size={20} strokeWidth={1.5} />
          </a>

          <a
            href="https://www.instagram.com/irisoakdev/"
            aria-label="Iris & Oak on Instagram"
          >
            <FaInstagram size={20} strokeWidth={1.5} />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61593802392943"
            aria-label="Iris & Oak on Facebook"
          >
            <FaFacebook size={20} strokeWidth={1.5} />
          </a>

          <a
            href="https://github.com/irisoak/irisoak-next"
            aria-label="Iris & Oak GitHub"
          >
            <FaGithub size={20} strokeWidth={1.5} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
