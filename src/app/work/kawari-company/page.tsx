import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kawari Company Website Case Study",
  description:
    "A custom consultancy website designed and developed by Iris & Oak for Kawari Company, a specialist practice working across safeguarding, regulation, education and independent review.",
  alternates: {
    canonical: "/work/kawari-company",
  },
};

export default function KawariCompanyPage() {
  return (
    <main className="case-study">
      <div className="site-container">
        {/* Hero */}
        <section className="case-study__hero">
          <Link href="/work" className="case-study__back">
            ← Back to work
          </Link>

          <p className="case-study__eyebrow">
            Client Website · Design & Development
          </p>

          <h1>Kawari Company</h1>

          <p className="case-study__lead">
            A live consultancy website designed and developed for Kawari Company,
            a specialist practice working across safeguarding, regulation,
            education and independent review.
          </p>

          <div className="case-study__meta">
            <div>
              <span>Project</span>
              <p>Client Website</p>
            </div>

            <div>
              <span>Industry</span>
              <p>Professional Services</p>
            </div>

            <div>
              <span>My Role</span>
              <p>Designer & Developer</p>
            </div>

            <div>
              <span>Status</span>
              <a
                href="https://www.kawaricompany.com"
                target="_blank"
                rel="noreferrer"
                className="case-study__meta-link"
              >
                Live website ↗
              </a>
            </div>
          </div>
        </section>

        {/* Main website image */}
        <section className="case-study__visual">
          <div className="case-study__image">
            <Image
              src="/images/work/kawari-company/kawari-homepage.png"
              alt="Kawari Company live consultancy website homepage"
              width={1600}
              height={900}
              className="case-study__screenshot"
              priority
            />
          </div>
        </section>

        {/* Section 01 - Project */}
        <section className="case-study__section case-study__section--accent">
          <div className="case-study__section-grid">
            <div>
              <p className="case-study__section-number">01</p>
              <p className="case-study__section-label">The Project</p>
            </div>

            <div className="case-study__section-content">
              <h2>
                A professional digital presence built around trust and clarity.
              </h2>

              <p>
                Kawari Company needed a website that could clearly communicate
                a specialist consultancy offer across several complex sectors
                without making the experience feel dense or difficult to
                navigate.
              </p>

              <p>
                The project focused on creating a calm, professional and
                accessible digital presence that supports credibility while
                making it straightforward for prospective clients to understand
                the business and make contact.
              </p>
            </div>
          </div>
        </section>

        {/* Section 02 - Approach */}
        <section className="case-study__section">
          <div className="case-study__section-grid">
            <div>
              <p className="case-study__section-number">02</p>
              <p className="case-study__section-label">The Approach</p>
            </div>

            <div className="case-study__section-content">
              <h2>
                Simple structure, careful hierarchy and a restrained visual
                system.
              </h2>

              <p>
                I designed the site around clear service information, strong
                typography and a lightweight page structure that works across
                desktop, tablet and mobile.
              </p>

              <p>
                The visual direction uses warm neutral tones, editorial spacing
                and subtle imagery to keep the site professional while still
                giving Kawari Company a distinct identity.
              </p>
            </div>
          </div>
        </section>

        {/* Services / content image */}
        <section className="case-study__visual">
          <div className="case-study__image">
            <Image
              src="/images/work/kawari-company/services.png"
              alt="Kawari Company consultancy services and content layout"
              width={1600}
              height={900}
              className="case-study__screenshot"
            />
          </div>
        </section>

        {/* Section 03 - Delivered */}
        <section className="case-study__section case-study__section--accent">
          <div className="case-study__section-grid">
            <div>
              <p className="case-study__section-number">03</p>
              <p className="case-study__section-label">Delivered</p>
            </div>

            <div className="case-study__section-content">
              <h2>
                More than a one-page brochure website.
              </h2>

              <p>
                The finished project combines the public-facing website with
                the practical pieces needed to support a real business launch.
              </p>

              <div className="case-study__capabilities">
                <div className="case-study__capability">
                  <span>01</span>
                  <p>Custom responsive website</p>
                </div>

                <div className="case-study__capability">
                  <span>02</span>
                  <p>Contact form and email delivery integration</p>
                </div>

                <div className="case-study__capability">
                  <span>03</span>
                  <p>Custom domain and production deployment</p>
                </div>

                <div className="case-study__capability">
                  <span>04</span>
                  <p>
                    Digital contact card with QR code and downloadable vCard
                  </p>
                </div>

                <div className="case-study__capability">
                  <span>05</span>
                  <p>
                    Privacy page and production-ready contact journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact image */}
        <section className="case-study__visual">
          <div className="case-study__image">
            <Image
              src="/images/work/kawari-company/contact.png"
              alt="Kawari Company client enquiry and contact experience"
              width={1600}
              height={900}
              className="case-study__screenshot"
            />
          </div>
        </section>

        {/* Section 04 - Technology */}
        <section className="case-study__section">
          <div className="case-study__section-grid">
            <div>
              <p className="case-study__section-number">04</p>
              <p className="case-study__section-label">Technology</p>
            </div>

            <div className="case-study__section-content">
              <h2>
                A lightweight modern stack chosen for a focused business site.
              </h2>

              <div className="case-study__technology">
                <div className="case-study__technology-row">
                  <span>Frontend</span>
                  <p>Next.js · TypeScript · Tailwind CSS</p>
                </div>

                <div className="case-study__technology-row">
                  <span>Email</span>
                  <p>Resend</p>
                </div>

                <div className="case-study__technology-row">
                  <span>Deployment</span>
                  <p>Vercel · Custom domain configuration</p>
                </div>

                <div className="case-study__technology-row">
                  <span>Contact</span>
                  <p>Custom form flow · Reply-to email handling · vCard</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 - Outcome */}
        <section className="case-study__section case-study__section--accent case-study__section--result">
          <div className="case-study__section-grid">
            <div>
              <p className="case-study__section-number">05</p>
              <p className="case-study__section-label">Outcome</p>
            </div>

            <div className="case-study__section-content">
              <h2>
                A complete live website built to support real client enquiries.
              </h2>

              <p>
                Kawari Company now has a production website with its own domain,
                responsive layouts, privacy page, working enquiry flow and
                supporting digital contact tools.
              </p>

              <p>
                The project moved from initial design through development,
                mobile debugging, deployment and live email delivery into a
                complete working business website.
              </p>

              <a
                href="https://www.kawaricompany.com"
                target="_blank"
                rel="noreferrer"
                className="case-study__external-link"
              >
                Visit live website →
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <nav className="case-study__navigation">
        <div className="site-container">
          <Link href="/contact">
            Start a project →
          </Link>
        </div>
      </nav>
    </main>
  );
}