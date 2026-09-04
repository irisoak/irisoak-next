import Link from "next/link";
import Container from "./Container";

import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa6";
import { Mail } from "lucide-react";

const footerNavigation = [
  { href: "/work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#client-journey", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-content">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            iris & oak
          </Link>

          <div className="footer-legal">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Iris & Oak. All rights reserved.
            </p>

            <Link href="/privacy" className="footer__privacy-link">
              Privacy Policy
            </Link>
          </div>
        </div>  

        <nav aria-label="Footer navigation">
          <ul className="footer-nav">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-socials" aria-label="Social links">
          <a href="https://www.linkedin.com/company/irisandoak" aria-label="Iris & Oak on LinkedIn">
            <FaLinkedinIn size={20} strokeWidth={1.5} />
          </a>

          <a href="https://www.instagram.com/irisoakdev/" aria-label="Iris & Oak on Instagram">
            <FaInstagram size={20} strokeWidth={1.5} />
          </a>

          <a href="mailto:iris@irisoak.dev" aria-label="Email me">
            <Mail size={20} strokeWidth={1.5} />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61593802392943" aria-label="Iris & Oak on Facebook">
            <FaFacebook size={20} strokeWidth={1.5} />
          </a>
        </div>
      </Container>
    </footer>
  );
}