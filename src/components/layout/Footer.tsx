import Link from "next/link";
import Container from "./Container";

import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Mail } from "lucide-react";

const footerNavigation = [
  { href: "/work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-content">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            iris & oak
          </Link>

          <p className="footer-copyright">
            © {new Date().getFullYear()} Iris & Oak
          </p>
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
          <a href="https://www.linkedin.com/company/irisandoak" aria-label="LinkedIn">
            <FaLinkedinIn size={20} strokeWidth={1.5} />
          </a>

          <a href="https://www.instagram.com/irisoakdev/" aria-label="Instagram">
            <FaInstagram size={20} strokeWidth={1.5} />
          </a>

          <a href="mailto:iris@irisoak.dev" aria-label="Email me">
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>
      </Container>
    </footer>
  );
}