import Link from "next/link";
import {
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";

import ConceptBar from "@/components/concepts/ConceptBar";
import Image from "next/image";
import styles from "./booking.module.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-atelier-display",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-atelier-body",
});

const services = [
  {
    name: "Cut & Finish",
    description:
      "Consultation, tailored cut and finished styling.",
    duration: "60 min",
    price: "From £65",
    selected: true,
  },
  {
    name: "Colour Refresh",
    description:
      "Refresh existing colour with personalised tone and finish.",
    duration: "90 min",
    price: "From £95",
    selected: false,
  },
  {
    name: "Full Colour",
    description:
      "Consultation-led full colour service and finish.",
    duration: "150 min",
    price: "From £140",
    selected: false,
  },
  {
    name: "Treatment & Blow Dry",
    description:
      "Restorative treatment followed by a polished blow dry.",
    duration: "60 min",
    price: "From £55",
    selected: false,
  },
];

const stylists = [
  {
    name: "Amelia Hart",
    role: "Senior Stylist",
    image:
      "/images/concepts/atelier-rue/team-amelia.png",
    selected: true,
  },
  {
    name: "Maya Ellis",
    role: "Colour Specialist",
    image:
      "/images/concepts/atelier-rue/team-maya.png",
    selected: false,
  },
  {
    name: "Sofia Bennett",
    role: "Stylist",
    image:
      "/images/concepts/atelier-rue/team-sofia.png",
    selected: false,
  },
];

const times = [
  "09:00",
  "10:30",
  "12:00",
  "14:30",
  "16:00",
];

export default function AtelierRueBookingPage() {
  return (
    <main
      className={`${styles.page} ${cormorant.variable} ${manrope.variable}`}
    >
      <ConceptBar
        number="03"
        packageName="Refresh"
      />

      {/* ========================================
          Booking Navigation
      ======================================== */}

      <nav className={styles.nav}>
        <Link
          href="/concepts/hair"
          className={styles.brand}
        >
          Atelier Rue
        </Link>

        <span className={styles.navLabel}>
          Appointment Booking
        </span>

        <Link
          href="/concepts/hair"
          className={styles.backLink}
        >
          ← Back to salon
        </Link>
      </nav>

      {/* ========================================
          Booking Intro
      ======================================== */}

      <header className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>
            Booking Preview
          </p>

          <h1>
            Your appointment,
            <br />
            <em>your way.</em>
          </h1>
        </div>

        <div className={styles.previewNotice}>
          <span className={styles.previewDot} />

          <p>
            View-only concept preview
          </p>
        </div>
      </header>

      {/* ========================================
          Booking Layout
      ======================================== */}

      <div className={styles.bookingLayout}>
        <div className={styles.bookingFlow}>
          {/* ========================================
              01. Service
          ======================================== */}

          <section className={styles.bookingSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>
                01
              </span>

              <div>
                <p className={styles.sectionEyebrow}>
                  Service
                </p>

                <h2>
                  What can we do
                  <br />
                  for you?
                </h2>
              </div>
            </div>

            <div className={styles.serviceList}>
              {services.map((service) => (
                <div
                  key={service.name}
                  className={`${styles.serviceOption} ${
                    service.selected
                      ? styles.serviceOptionSelected
                      : ""
                  }`}
                >
                  <div className={styles.selectionMark}>
                    <span />
                  </div>

                  <div className={styles.serviceContent}>
                    <h3>{service.name}</h3>

                    <p>
                      {service.description}
                    </p>
                  </div>

                  <div className={styles.serviceMeta}>
                    <span>{service.duration}</span>
                    <strong>{service.price}</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================
              02. Stylist
          ======================================== */}

          <section className={styles.bookingSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>
                02
              </span>

              <div>
                <p className={styles.sectionEyebrow}>
                  Stylist
                </p>

                <h2>
                  Choose your
                  <br />
                  stylist.
                </h2>
              </div>
            </div>

            <div className={styles.stylistGrid}>
              {stylists.map((stylist) => (
                <article
                  key={stylist.name}
                  className={`${styles.stylistCard} ${
                    stylist.selected
                      ? styles.stylistCardSelected
                      : ""
                  }`}
                >
                  <div className={styles.stylistImage}>
                    <Image
                      src={stylist.image}
                      alt=""
                      fill
                      className={styles.stylistPhoto}
                      sizes="(max-width: 760px) 100vw, 20vw"
                    />
                  </div>

                  <div className={styles.stylistDetails}>
                    <h3>{stylist.name}</h3>

                    <p>{stylist.role}</p>
                  </div>

                  <div
                    className={styles.selectionMark}
                    aria-hidden="true"
                  >
                    <span />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ========================================
              03. Date & Time
          ======================================== */}

          <section className={styles.bookingSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>
                03
              </span>

              <div>
                <p className={styles.sectionEyebrow}>
                  Date & Time
                </p>

                <h2>
                  Find a time
                  <br />
                  that works.
                </h2>
              </div>
            </div>

            <div className={styles.datePreview}>
              <div className={styles.dateHeader}>
                <span>September 2026</span>

                <div className={styles.dateArrows}>
                  <span aria-hidden="true">←</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>

              <div className={styles.dateDays}>
                <div>
                  <span>Tue</span>
                  <strong>22</strong>
                </div>

                <div>
                  <span>Wed</span>
                  <strong>23</strong>
                </div>

                <div className={styles.dateSelected}>
                  <span>Thu</span>
                  <strong>24</strong>
                </div>

                <div>
                  <span>Fri</span>
                  <strong>25</strong>
                </div>

                <div>
                  <span>Sat</span>
                  <strong>26</strong>
                </div>
              </div>
            </div>

            <div className={styles.timeGrid}>
              {times.map((time, index) => (
                <span
                  key={time}
                  className={
                    index === 1
                      ? styles.timeSelected
                      : undefined
                  }
                >
                  {time}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* ========================================
            Booking Summary
        ======================================== */}

        <aside className={styles.summary}>
          <div className={styles.summaryInner}>
            <p className={styles.summaryEyebrow}>
              Your appointment
            </p>

            <h2>
              Almost
              <br />
              there.
            </h2>

            <dl className={styles.summaryList}>
              <div>
                <dt>Service</dt>
                <dd>Cut & Finish</dd>
              </div>

              <div>
                <dt>Stylist</dt>
                <dd>Amelia Hart</dd>
              </div>

              <div>
                <dt>Date</dt>
                <dd>24 September</dd>
              </div>

              <div>
                <dt>Time</dt>
                <dd>10:30</dd>
              </div>

              <div>
                <dt>Duration</dt>
                <dd>60 minutes</dd>
              </div>
            </dl>

            <div className={styles.summaryPrice}>
              <span>Estimated total</span>
              <strong>From £65</strong>
            </div>

            <button
              type="button"
              className={styles.continueButton}
              disabled
            >
              Continue to booking
              <span aria-hidden="true">→</span>
            </button>

            <p className={styles.summaryNote}>
              This is a view-only concept showing how a
              refreshed salon booking experience could look.
              No appointment will be created.
            </p>
          </div>
        </aside>
      </div>

      {/* ========================================
          Footer
      ======================================== */}

      <footer className={styles.footer}>
        <div>
          <strong>Atelier Rue</strong>
          <span>Hair · Colour · Care</span>
        </div>

        <span>
          Iris & Oak · Refresh Concept
        </span>

        <Link href="/concepts/hair">
          Return to salon →
        </Link>
      </footer>
    </main>
  );
}