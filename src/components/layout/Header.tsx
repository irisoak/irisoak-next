import Link from "next/link";
import Container from "./Container";

const navigation = [
  { href: "/work", label: "WORK" },
  { href: "/#services", label: "SERVICES" },
];

export default function Header() {
  return (
    <header className="site-header">
      <Container className="header-content">
        <Link href="/" className="site-logo">
          iris & oak
        </Link>

        <nav
          className="site-nav"
          aria-label="Primary navigation"
        >
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="header-cta"
        >
          WORK WITH ME
        </Link>
      </Container>
    </header>
  );
}