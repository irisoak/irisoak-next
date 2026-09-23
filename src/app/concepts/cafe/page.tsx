import { Fraunces, Manrope } from "next/font/google";
import {
  LuClock3,
  LuCoffee,
  LuInstagram,
  LuMail,
  LuMapPin,
} from "react-icons/lu";
import styles from "./cafe.module.css";
import ConceptBar from "@/components/concepts/ConceptBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-cafe-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-cafe-body",
});

export default function CafeConceptPage() {
  return (
    <main
      id="top"
      className={`${styles.page} ${fraunces.variable} ${manrope.variable}`}
    >
      <ConceptBar
        number="02"
        packageName="Starter Presence"
      />
      {/* ========================================
          Hero
      ======================================== */}

      <section className={styles.hero}>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>
            About
          </a>

          <a href="#top" className={styles.brand}>
            Marlow & Bean
          </a>

          <div className={styles.navRight}>
            <a href="#visit" className={styles.navLink}>
              Visit
            </a>

            <a
              href="https://instagram.com"
              className={styles.instagramLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Marlow & Bean on Instagram"
            >
              <LuInstagram aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </div>
        </nav>

        <div className={styles.heroStage}>
          <span className={`${styles.heroMeta} ${styles.heroMetaLeft}`}>
            Manchester · Independent café
          </span>

          <span className={`${styles.heroMeta} ${styles.heroMetaRight}`}>
            Coffee · Brunch · Good days
          </span>

          <div className={styles.heroCentre}>
            <div className={styles.coffeeMark}>
              <span className={styles.markTop}>
                GOOD COFFEE · GOOD FOOD
              </span>

              <div className={styles.iconCircle}>
                <LuCoffee aria-hidden="true" />
              </div>

              <span className={styles.markBottom}>
                MARLOW & BEAN · MANCHESTER
              </span>
            </div>

            <p className={styles.eyebrow}>
              Your neighbourhood coffee stop
            </p>

            <h1 className={styles.title}>
              Good coffee.
              <br />
              Better days.
            </h1>

            <p className={styles.heroIntro}>
              Thoughtful coffee, fresh brunch and an easy place to stay
              a little longer.
            </p>

            <div className={styles.heroActions}>
              <a href="#visit" className={styles.primaryButton}>
                Plan your visit →
              </a>

              <a
                href="https://instagram.com"
                className={styles.secondaryButton}
                target="_blank"
                rel="noreferrer"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          <a href="#about" className={styles.scrollCue}>
            Scroll
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* ========================================
          Overlapping Café Image
      ======================================== */}

      <div className={styles.photoWrap}>
        <figure className={styles.heroPhoto}>
          <div
            className={styles.photoPlaceholder}
            role="img"
            aria-label="Marlow & Bean café interior"
          >
            <span>CAFÉ INTERIOR / HERO IMAGE</span>
          </div>

          <figcaption>
            Slow mornings · quick coffees · long catch-ups
          </figcaption>
        </figure>
      </div>

      {/* ========================================
          About
      ======================================== */}

      <section id="about" className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutLabel}>
            <span>GOOD COFFEE</span>
            <span>•</span>
            <span>GOOD FOOD</span>
            <span>•</span>
            <span>GOOD COMPANY</span>
          </div>

          <h2 className={styles.aboutTitle}>
            A neighbourhood
            <br />
            favourite.
          </h2>

          <p className={styles.aboutCopy}>
            Marlow & Bean is made for slow mornings, quick coffees,
            brunch with friends and the days you do not want to rush.
            Simple food, thoughtful coffee and a warm welcome — every day.
          </p>

          <div className={styles.highlights}>
            <article className={styles.highlight}>
              <span className={styles.highlightNumber}>01</span>

              <h3>Coffee</h3>

              <p>
                Espresso, flat whites, filter coffee and rotating
                seasonal favourites.
              </p>
            </article>

            <article className={styles.highlight}>
              <span className={styles.highlightNumber}>02</span>

              <h3>Brunch</h3>

              <p>
                Fresh breakfast, simple lunches and weekend plates
                worth staying for.
              </p>
            </article>

            <article className={styles.highlight}>
              <span className={styles.highlightNumber}>03</span>

              <h3>Something sweet</h3>

              <p>
                Pastries, cakes and small treats for coffee breaks
                and catch-ups.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================
          Visit
      ======================================== */}

      <section id="visit" className={styles.visit}>
        <div className={styles.visitHeading}>
          <p className={styles.visitEyebrow}>
            Come and say hello
          </p>

          <h2>
            Find your
            <br />
            favourite corner.
          </h2>

          <p className={styles.visitIntro}>
            Coffee in, brunch out, or something to take with you.
            We are open seven days a week.
          </p>
        </div>

        <div className={styles.visitDetails}>
          <div className={styles.detailRow}>
            <div className={styles.detailIcon}>
              <LuMapPin aria-hidden="true" />
            </div>

            <div>
              <span className={styles.detailLabel}>
                Visit
              </span>

              <p>
                24 Example Street
                <br />
                Manchester
                <br />
                M1 2AB
              </p>
            </div>
          </div>

          <div className={styles.detailRow}>
            <div className={styles.detailIcon}>
              <LuClock3 aria-hidden="true" />
            </div>

            <div>
              <span className={styles.detailLabel}>
                Opening hours
              </span>

              <p>
                Mon–Fri · 08:00–17:00
                <br />
                Sat–Sun · 09:00–17:00
              </p>
            </div>
          </div>

          <div className={styles.detailRow}>
            <div className={styles.detailIcon}>
              <LuMail aria-hidden="true" />
            </div>

            <div>
              <span className={styles.detailLabel}>
                Contact
              </span>

              <a href="mailto:hello@marlowandbean.example">
                hello@marlowandbean.example
              </a>
            </div>
          </div>

          <div className={styles.visitActions}>
            <button
              type="button"
              className={styles.directionsButton}
            >
              Get directions →
            </button>

            <a
              href="https://instagram.com"
              className={styles.visitInstagram}
              target="_blank"
              rel="noreferrer"
            >
              <LuInstagram aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ========================================
          Footer
      ======================================== */}

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <strong>Marlow & Bean</strong>

          <span>
            Coffee · Brunch · Good company
          </span>
        </div>

        <span className={styles.conceptMark}>
          Iris & Oak · Starter Presence Concept
        </span>

        <a href="#top">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}