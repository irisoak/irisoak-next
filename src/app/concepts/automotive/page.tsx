import styles from "./automotive.module.css";
import {
  LuClipboardCheck,
  LuSettings,
  LuScanSearch,
  LuWrench,
  LuUsers,
  LuReceipt,
  LuGauge,
} from "react-icons/lu";
import ConceptBar from "@/components/concepts/ConceptBar";
import Image from "next/image";

export default function AutomotiveConceptPage() {
  return (
   <main id="top" className={styles.page}>
    <ConceptBar
      number="01"
      packageName="Website Essentials"
    />

      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/concepts/northline-automotive/northline-hero.png"
            alt=""
            fill
            priority
            quality={95}
            className={styles.heroBackgroundImage}
            sizes="100vw"
          />
        </div>

        {/* existing Northline hero content */}
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <span className={styles.brandName}>Northline Automotive</span>
            <span className={styles.brandSub}>MOT · Service · Repair</span>
          </div>

          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className={styles.navCta}>
              Book an MOT
            </a>
          </div>
        </nav>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            Independent garage · MOT · Servicing
          </p>

          <h1 className={styles.title}>
            Straightforward
            <br />
            car care.
          </h1>

          <p className={styles.intro}>
            MOTs, servicing and repairs from an independent garage you can
            rely on. Clear advice, experienced technicians and no unnecessary
            complications.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.footerPrimary}>
              Book an MOT →
            </a>

            <a href="#services" className={styles.secondaryButton}>
              Our Services
            </a>
          </div>
        </div>

        <div className={styles.serviceStrip}>
          <a href="#mot" className={styles.heroService}>
            <span className={styles.heroServiceNumber}>01</span>

            <div>
              <span className={styles.heroServiceTitle}>
                MOT Testing
              </span>

              <span className={styles.heroServiceDescription}>
                Annual testing & checks
              </span>
            </div>

            <span className={styles.heroServiceArrow}>→</span>
          </a>

          <a href="#servicing" className={styles.heroService}>
            <span className={styles.heroServiceNumber}>02</span>

            <div>
              <span className={styles.heroServiceTitle}>
                Servicing
              </span>

              <span className={styles.heroServiceDescription}>
                Routine maintenance
              </span>
            </div>

            <span className={styles.heroServiceArrow}>→</span>
          </a>

          <a href="#diagnostics" className={styles.heroService}>
            <span className={styles.heroServiceNumber}>03</span>

            <div>
              <span className={styles.heroServiceTitle}>
                Diagnostics
              </span>

              <span className={styles.heroServiceDescription}>
                Fault finding & warning lights
              </span>
            </div>

            <span className={styles.heroServiceArrow}>→</span>
          </a>

          <a href="#repairs" className={styles.heroService}>
            <span className={styles.heroServiceNumber}>04</span>

            <div>
              <span className={styles.heroServiceTitle}>
                Repairs
              </span>

              <span className={styles.heroServiceDescription}>
                Mechanical repairs
              </span>
            </div>

            <span className={styles.heroServiceArrow}>→</span>
          </a>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>What we do</p>

          <div>
            <h2 className={styles.sectionTitle}>
              Everything you need
              <br />
              to keep moving.
            </h2>

            <p className={styles.sectionIntro}>
              From your annual MOT to routine servicing and fault diagnostics,
              Northline provides straightforward automotive care without the
              unnecessary complexity.
            </p>
          </div>
        </div>

        <div className={styles.serviceGrid}>
          <article
            id="mot"
            className={`${styles.serviceCard} ${styles.featuredService}`}
          >
            <span className={styles.serviceNumber} aria-hidden="true">
              <LuClipboardCheck />
            </span>

            <div className={styles.serviceContent}>
              <h3>MOT Testing</h3>

              <p>
                Annual MOT testing with clear guidance if your vehicle needs
                additional work.
              </p>
            </div>

            <a
              href="#contact"
              className={`${styles.serviceCta} ${styles.featuredCta}`}
            >
              Book an MOT →
            </a>
          </article>

          <article id="servicing" className={styles.serviceCard}>
            <span className={styles.serviceNumber} aria-hidden="true">
              <LuSettings />
            </span>

            <div>
              <h3>Servicing</h3>
              <p>
                Routine servicing and maintenance designed to keep your vehicle
                performing reliably.
              </p>

              <a href="#contact" className={styles.serviceCta}>
                Book a Service →
              </a>
            </div>
          </article>

          <article id="diagnostics" className={styles.serviceCard}>
            <span className={styles.serviceNumber} aria-hidden="true">
              <LuScanSearch />
            </span>

            <div>
              <h3>Diagnostics</h3>
              <p>
                Modern fault diagnostics to help identify issues quickly and explain
                what needs attention.
              </p>

              <a href="#contact" className={styles.serviceCta}>
                Book Diagnostics →
              </a>
            </div>
          </article>

          <article id="repairs" className={styles.serviceCard}>
            <span className={styles.serviceNumber} aria-hidden="true">
              <LuWrench />
            </span>

            <div>
              <h3>Repairs</h3>
              <p>
                Practical repair work with straightforward recommendations and clear
                communication.
              </p>

              <a href="#contact" className={styles.serviceCta}>
                Request a Repair Quote →
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.aboutImage}>
          <Image
            src="/images/concepts/northline-automotive/northline-workshop.png"
            alt="Northline Automotive workshop"
            fill
            className={styles.aboutPhoto}
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>

        <div className={styles.aboutContent}>
          <p className={styles.aboutEyebrow}>Independent. Experienced. Local.</p>

          <h2 className={styles.aboutTitle}>
            Good work.
            <br />
            Clear advice.
          </h2>

          <p className={styles.aboutText}>
            Northline Automotive is an independent workshop focused on doing the
            job properly. From routine maintenance to fault diagnostics, we provide
            straightforward recommendations, clear communication and dependable
            workmanship.
          </p>

          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber} aria-hidden="true">
                <LuUsers />
              </span>
              <div>
                <h3>Experienced technicians</h3>
                <p>Practical knowledge across servicing, diagnostics and repairs.</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <span className={styles.trustNumber} aria-hidden="true">
                <LuReceipt />
              </span>
              <div>
                <h3>Clear pricing</h3>
                <p>Know what needs doing before any additional work begins.</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <span className={styles.trustNumber} aria-hidden="true">
                <LuGauge />
              </span>
              <div>
                <h3>Modern diagnostics</h3>
                <p>Up-to-date diagnostic equipment for faster fault finding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className={styles.footer}>
        <div className={styles.footerCta}>
          <div>
            <p className={styles.footerEyebrow}>Ready when you are</p>

            <h2 className={styles.footerTitle}>
              Keep your car
              <br />
              road-ready.
            </h2>
          </div>

          <div className={styles.footerActions}>
            <p>
              MOT due? Need a service or have something that does not feel quite
              right? Get in touch with the Northline team.
            </p>

            <div className={styles.footerButtons}>
              <a href="#" className={styles.footerPrimary}>
                Book an MOT →
              </a>

              <a href="tel:+441234000000" className={styles.footerSecondary}>
                Call the garage
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerDetails}>
          <div className={styles.footerBrand}>
            <span className={styles.footerBrandName}>
              Northline Automotive
            </span>

            <span className={styles.footerBrandSub}>
              MOT · Service · Repair
            </span>
          </div>

          <div className={styles.footerColumn}>
            <span className={styles.footerLabel}>Visit</span>

            <p>
              12 Workshop Road
              <br />
              Example Town
              <br />
              AB1 2CD
            </p>
          </div>

          <div className={styles.footerColumn}>
            <span className={styles.footerLabel}>Opening hours</span>

            <p>
              Mon–Fri · 08:00–17:30
            <br />
              Saturday · 08:00–13:00
            <br />
              Sunday · Closed
            </p>
          </div>

          <div className={styles.footerColumn}>
            <span className={styles.footerLabel}>Contact</span>

            <a href="tel:+441234000000">
              01234 000 000
            </a>

            <a href="mailto:hello@northline.example">
              hello@northline.example
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>
            © {new Date().getFullYear()} Northline Automotive
          </span>

          <span className={styles.conceptMark}>
            Iris & Oak · Website Essentials Concept
          </span>

          <a href="#top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}