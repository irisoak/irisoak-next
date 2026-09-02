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
            A consultancy website currently in development for a
            specialist practice working across safeguarding,
            regulation, education and independent review.
          </p>

          <div className="case-study__meta">
            <div>
              <span>Status</span>
              <p>In Development</p>
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
      </div>
    </main>
  );
}