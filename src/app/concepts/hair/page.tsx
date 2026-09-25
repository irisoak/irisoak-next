import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import ConceptBar from "@/components/concepts/ConceptBar";

import styles from "./hair.module.css";
import Image from "next/image";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-atelier-display",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-atelier-body",
});

const team = [
  {
    name: "Amelia Hart",
    role: "Senior Stylist",
    specialism: "Precision cutting · Styling",
    image:
      "/images/concepts/atelier-rue/team-amelia.png",
  },
  {
    name: "Maya Ellis",
    role: "Colour Specialist",
    specialism: "Balayage · Lived-in colour",
    image:
      "/images/concepts/atelier-rue/team-maya.png",
  },
  {
    name: "Sofia Bennett",
    role: "Stylist",
    specialism: "Texture · Natural styling",
    image:
      "/images/concepts/atelier-rue/team-sofia.png",
  },
  {
    name: "Elena Moore",
    role: "Senior Colourist",
    specialism: "Creative colour · Tonal work",
    image:
      "/images/concepts/atelier-rue/team-elena.png",
  },
];

export default function HairConceptPage() {
  return (
    <main
      id="top"
      className={`${styles.page} ${cormorant.variable} ${manrope.variable}`}
    >
      <ConceptBar
        number="03"
        packageName="Refresh"
      />

      {/* ========================================
          Atelier Rue
      ======================================== */}

      <section className={styles.hero}>
        <nav className={styles.nav}>
          <Link
            href="/concepts/hair"
            className={styles.brand}
          >
            <span className={styles.brandName}>
              Atelier Rue
            </span>

            <span className={styles.brandDescriptor}>
              Hair · Colour · Care
            </span>
          </Link>

          <div className={styles.navLinks}>
            <a href="#services">
              Services
            </a>

            <Link href="#about">
              About
            </Link>

            <a href="#team">
              Team
            </a>

            <Link href="/concepts/hair/booking">
              Booking
            </Link>
          </div>

          <Link
            href="/concepts/hair/booking"
            className={styles.navCta}
          >
            Book an appointment
          </Link>
        </nav>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Modern hair · A calmer experience
            </p>

            <h1 className={styles.title}>
              <span>Hair,</span>
              <em>considered.</em>
            </h1>

            <p className={styles.intro}>
              Modern cuts, thoughtful colour and a more
              personal salon experience in the heart of
              the city.
            </p>

            <Link
              href="/concepts/hair/booking"
              className={styles.primaryButton}
            >
              Book an appointment
            </Link>

            <div className={styles.heroMeta}>
              <span>London</span>

              <span className={styles.metaLine} />

              <span>01</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src="/images/concepts/atelier-rue/hero.png"
                alt="Editorial hair portrait for Atelier Rue"
                fill
                priority
                unoptimized
                className={styles.heroPhoto}
                sizes="(max-width: 760px) 100vw, 55vw"
              />
            </div>

            <div className={styles.imageStatement}>
              <span>
                Confidence
              </span>

              <span>
                looks good
              </span>

              <span>
                on you
              </span>

              <div
                className={styles.statementLine}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
        Services
      ======================================== */}

      <section
        id="services"
        className={styles.services}
      >
        <div className={styles.servicesVisual}>
          <div className={styles.servicesImage}>
            <Image
              src="/images/concepts/atelier-rue/atelier-rue-services.png"
              alt="Stylist working with a client at Atelier Rue"
              fill
              className={styles.servicesPhoto}
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </div>

          <span>
            Hair styling / services image
          </span>

          <div className={styles.servicesImageLabel}>
            <span>Hair</span>
            <span>Colour</span>
            <span>Care</span>
            <span>Style</span>
          </div>
        </div>

        <div className={styles.servicesContent}>
          <div className={styles.servicesHeading}>
            <p className={styles.servicesEyebrow}>
              Our services
            </p>

            <h2>
              Expert care,
              <br />
              tailored <em>to you.</em>
            </h2>
          </div>

          <div className={styles.serviceList}>
            <Link
              href="/concepts/hair/booking"
              className={styles.serviceRow}
            >
              <span className={styles.serviceNumber}>
                01
              </span>

              <span className={styles.serviceName}>
                Cut &amp; Style
              </span>

              <span className={styles.servicePrice}>
                From £55
              </span>

              <span
                className={styles.serviceArrow}
                aria-hidden="true"
              >
                𓍼
              </span>
            </Link>

            <Link
              href="/concepts/hair/booking"
              className={styles.serviceRow}
            >
              <span className={styles.serviceNumber}>
                02
              </span>

              <span className={styles.serviceName}>
                Colour
              </span>

              <span className={styles.servicePrice}>
                From £85
              </span>

              <span
                className={styles.serviceArrow}
                aria-hidden="true"
              >
                𓍼
              </span>
            </Link>

            <Link
              href="/concepts/hair/booking"
              className={styles.serviceRow}
            >
              <span className={styles.serviceNumber}>
                03
              </span>

              <span className={styles.serviceName}>
                Treatments
              </span>

              <span className={styles.servicePrice}>
                From £40
              </span>

              <span
                className={styles.serviceArrow}
                aria-hidden="true"
              >
                𓍼
              </span>
            </Link>

            <Link
              href="/concepts/hair/booking"
              className={styles.serviceRow}
            >
              <span className={styles.serviceNumber}>
                04
              </span>

              <span className={styles.serviceName}>
                Occasion Styling
              </span>

              <span className={styles.servicePrice}>
                From £65
              </span>

              <span
                className={styles.serviceArrow}
                aria-hidden="true"
              >
                𓍼
              </span>
            </Link>
          </div>

          <p className={styles.servicesNote}>
            Prices shown are starting prices. Final pricing may vary
            depending on hair length, service and consultation.
          </p>
        </div>
      </section>

      {/* ========================================
        Team / Meet the Stylists
      ======================================== */}

      <section
        id="team"
        className={styles.team}
      >
        <div className={styles.teamCopy}>
          <p className={styles.studioEyebrow}>
            The Team
          </p>

          <h2>
            The people
            <br />
            behind <em>the chair.</em>
          </h2>

          <p className={styles.studioIntro}>
            A small team of stylists and colourists who take
            the time to listen, understand your hair and create
            something that suits the way you live.
          </p>
        </div>

        <ul className={styles.teamGrid}>
          {team.map((member) => (
            <li
              key={member.name}
              className={styles.teamMember}
            >
              <div className={styles.teamImage}>
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  fill
                  className={styles.teamPhoto}
                  sizes="(max-width: 760px) 100vw, 25vw"
                />
                <span>
                  Portrait / {member.name.split(" ")[0]}
                </span>
              </div>

              <h3 className={styles.teamName}>
                {member.name}
              </h3>

              <p className={styles.teamRole}>
                {member.role}
              </p>

              <p className={styles.teamSpecialism}>
                {member.specialism}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ========================================
        Visit / Booking
      ======================================== */}

      <section
        id="visit"
        className={styles.visit}
      >
        <div className={styles.visitCopy}>
          <p className={styles.visitEyebrow}>
            Visit Atelier Rue
          </p>

          <h2>
            Your next appointment,
            <br />
            <em>made simple.</em>
          </h2>

          <p className={styles.visitIntro}>
            Find us in central London for considered cuts,
            thoughtful colour and a more personal salon experience.
          </p>

          <div className={styles.visitActions}>
            <Link
              href="/concepts/hair/booking"
              className={styles.visitPrimary}
            >
              Book an appointment
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href="https://instagram.com"
              className={styles.visitSecondary}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className={styles.visitDetails}>
          <div className={styles.visitRow}>
            <span className={styles.visitLabel}>
              Address
            </span>

            <p>
              18 Example Street
              <br />
              London
              <br />
              W1 4AB
            </p>
          </div>

          <div className={styles.visitRow}>
            <span className={styles.visitLabel}>
              Opening hours
            </span>

            <p>
              Tuesday · 09:00–18:00
              <br />
              Wednesday · 09:00–18:00
              <br />
              Thursday · 09:00–20:00
              <br />
              Friday · 09:00–18:00
              <br />
              Saturday · 09:00–16:00
              <br />
              Sun–Mon · Closed
            </p>
          </div>

          <div className={styles.visitRow}>
            <span className={styles.visitLabel}>
              Contact
            </span>

            <a href="mailto:hello@atelierrue.example">
              hello@atelierrue.example
            </a>
            <br />
            <p>
                +351 912 345 678
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
        Footer
      ======================================== */}

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Link
            href="/concepts/hair"
            className={styles.footerLogo}
          >
            Atelier Rue
          </Link>

          <p>
            Hair · Colour · Care
          </p>
        </div>

        <div className={styles.footerLinks}>
          <a href="#services">
            Services
          </a>

          <Link href="#team">
            Team
          </Link>

          <a href="#visit">
            Visit
          </a>

          <Link href="/concepts/hair/booking">
            Booking
          </Link>
        </div>

        <div className={styles.footerMeta}>
          <span>
            Iris & Oak · Refresh Concept
          </span>

          <a href="#top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}