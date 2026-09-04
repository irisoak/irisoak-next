import Link from "next/link";

export default function KawariCompanyPage() {
  return (
    <main className="case-study">
      <div className="site-container">
        <section className="case-study__hero">
          <Link href="/work" className="case-study__back">
            ← Back to work
          </Link>

          <p className="case-study__eyebrow">
            Web Design & Development
          </p>

          <h1>Kawari Company</h1>

          <p className="case-study__lead">
            A custom consultancy website for a specialist practice working
            across safeguarding, regulation, education and independent review.
          </p>

          <div className="case-study__meta">
            <div>
              <span>Status</span>
              <p>Live</p>
            </div>

            <div>
              <span>Project</span>
              <p>Business Website</p>
            </div>

            <div>
              <span>Focus</span>
              <p>Professional Services</p>
            </div>

            <div>
              <span>Delivery</span>
              <p>Responsive Web</p>
            </div>
          </div>
        </section>

        <section className="case-study__section case-study__section--accent">
          <div className="case-study__section-grid">
            <div>
              <p className="case-study__section-number">01</p>
              <p className="case-study__section-label">
                The Project
              </p>
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

        <section className="case-study__section">
          <div className="case-study__section-grid">
            <div>
              <p className="case-study__section-number">02</p>
              <p className="case-study__section-label">
                The Approach
              </p>
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

        <section className="case-study__section case-study__section--accent">
          <div className="site-container">
            <div className="case-study__section-grid">
              <div>
                <p className="case-study__section-number">03</p>
                <p className="case-study__section-label">
                  Delivered
                </p>
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
                    <p>Digital contact card with QR code and downloadable vCard</p>
                  </div>

                  <div className="case-study__capability">
                    <span>05</span>
                    <p>Privacy page and production-ready contact journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-study__section ">
          <div className="case-study__section-grid">
            <div>
              <p className="case-study__section-number">04</p>
              <p className="case-study__section-label">
                Technology
              </p>
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

        <section className="case-study__section case-study__section--result">
          <div className="case-study__section-grid">
            <div>
              <p className="case-study__section-number">05</p>
              <p className="case-study__section-label">
                Outcome
              </p>
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

        <nav className="case-study__navigation">
          <Link href="/contact">
            Start a project →
          </Link>
        </nav>
      </div>
    </main>
  );
}