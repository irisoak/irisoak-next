import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const navigation = [
  { href: "/work", label: "WORK" },
  { href: "/services", label: "SERVICES" },
];

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__panel" aria-hidden="true" />

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

        <Link href="/contact" className="header-cta">
          LET&apos;S BUILD TOGETHER
          <span aria-hidden="true">→</span>
        </Link>
      </Container>

      <Container className="home-hero__container">
        <div className="home-hero__content">
          <p className="hero__eyebrow">
            DESIGN · DEVELOPMENT · DIGITAL PRODUCTS
          </p>

          <h1 className="hero__title">
            Ideas into meaningful solutions
          </h1>

          <div className="hero__lower">
            <p className="hero__text">
              Thoughtfully designed websites and digital products,
              built around real people, businesses and ideas.
            </p>

            <div className="hero__actions">
              <Button href="/contact">
                START A PROJECT
              </Button>

              <Button
                href="/work"
                variant="text"
                className="hero__view-work"
              >
                VIEW MY WORK <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <span className="home-hero__oak" aria-hidden="true">
        Oak
      </span>
    </section>
  );
}
