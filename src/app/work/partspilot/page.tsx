import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PartsPilot Full-Stack Platform Case Study",
  description:
    "PartsPilot is a full-stack automotive inventory management and analytics platform designed and built by Iris & Oak using React, TypeScript, FastAPI and PostgreSQL.",
  alternates: {
    canonical: "/work/partspilot",
  },
};

const capabilities = [
  "Authenticated inventory management",
  "Create, view, update and delete inventory items",
  "Search, filtering, sorting and pagination",
  "Stock-level monitoring",
  "Supplier management",
  "Dashboard operational analytics",
  "Inventory value and category analytics",
  "Reports and CSV export",
  "Power BI business intelligence",
  "Responsive desktop and mobile experience",
];

const technologies = [
  {
    area: "Frontend",
    value: "React, TypeScript, Vite, Tailwind CSS",
  },
  {
    area: "Backend",
    value: "Python, FastAPI, SQLAlchemy, JWT",
  },
  {
    area: "Database",
    value: "PostgreSQL",
  },
  {
    area: "Analytics",
    value: "Power BI",
  },
  {
    area: "Infrastructure",
    value: "Docker, Docker Compose",
  },
  {
    area: "CI",
    value: "GitHub Actions",
  },
  {
    area: "Deployment",
    value: "Vercel",
  },
];

export default function PartsPilotPage() {
  return (
    <main className="case-study">
      {/* Hero */}
      <section className="case-study__hero">
        <div className="site-container">
          <Link href="/work" className="case-study__back">
            ← All work
          </Link>

          <p className="case-study__eyebrow">
            Product Design & Development
          </p>

          <h1>PartsPilot</h1>

          <p className="case-study__lead">
            A full-stack automotive inventory management and analytics
            platform designed to bring stock control, supplier management,
            reporting and operational insight into one clear product experience.
          </p>

          <div className="case-study__meta">
            <div>
              <span>Type</span>
              <p>Full-Stack Web Application</p>
            </div>

            <div>
              <span>Industry</span>
              <p>Automotive</p>
            </div>

            <div>
              <span>My Role</span>
              <p>Designer & Developer</p>
            </div>

            <div>
              <span>Status</span>
              <p>Feature Complete</p>

              <a
                href="https://www.partspilot.uk"
                target="_blank"
                rel="noreferrer"
                className="case-study__meta-link"
              >
                View Frontend Demo ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main product image */}
      <section className="case-study__visual case-study__visual--hero">
        <div className="site-container">
          <div className="case-study__image case-study__image--hero">
            <Image
              src="/images/work/partspilot/overview.png"
              alt="PartsPilot dashboard showing inventory metrics and recent activity"
              width={1600}
              height={900}
              className="case-study__screenshot"
            />
          </div>
        </div>
      </section>

      {/* Section 01 - Problem */}
      <section className="case-study__section">
        <div className="site-container case-study__section-grid">
          <div>
            <p className="case-study__section-number">01</p>
            <p className="case-study__section-label">The Problem</p>
          </div>

          <div className="case-study__section-content">
            <h2>
              Inventory shouldn't become harder to understand as it grows.
            </h2>

            <p>
              PartsPilot was created around a practical operational
              problem: managing inventory requires more than keeping a
              list of parts. Teams need to understand what is available,
              what needs attention, where stock comes from and what the
              wider inventory data is telling them.
            </p>

            <p>
              The product brings inventory management, stock monitoring,
              supplier information and reporting into one automotive-focused
              application, turning day-to-day records into clearer operational
              information.
            </p>
          </div>
        </div>
      </section>

      {/* Section 02 - Approach */}
      <section className="case-study__section case-study__section--accent">
        <div className="site-container case-study__section-grid">
          <div>
            <p className="case-study__section-number">02</p>
            <p className="case-study__section-label">The Approach</p>
          </div>

          <div className="case-study__section-content">
            <h2>
              From inventory records to a complete operational workflow.
            </h2>

            <p>
              PartsPilot was designed as a complete full-stack product
              rather than a standalone interface. The React frontend
              communicates with a FastAPI REST API, with SQLAlchemy
              managing persistence through PostgreSQL.
            </p>

            <p>
              The product was developed around practical workflows: managing
              inventory, tracking stock levels, maintaining supplier records,
              reviewing operational analytics and exporting useful reporting
              data without separating each task into a different tool.
            </p>
          </div>
        </div>
      </section>

      {/* Product image */}
      <section className="case-study__visual">
        <div className="site-container">
          <div className="case-study__image case-study__image--inventory">
            <Image
              src="/images/work/partspilot/inventory.png"
              alt="PartsPilot inventory management interface with search, filtering and stock controls"
              width={1600}
              height={900}
              className="case-study__screenshot"
            />
          </div>
        </div>
      </section>

      {/* Section 03 - Solution */}
      <section className="case-study__section">
        <div className="site-container case-study__section-grid">
          <div>
            <p className="case-study__section-number">03</p>
            <p className="case-study__section-label">The Product</p>
          </div>

          <div className="case-study__section-content">
            <h2>
              One place to manage and understand inventory.
            </h2>

            <div className="case-study__capabilities">
              {capabilities.map((capability, index) => (
                <div
                  className="case-study__capability"
                  key={capability}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 - Analytics */}
      <section className="case-study__section case-study__section--accent">
        <div className="site-container case-study__section-grid">
          <div>
            <p className="case-study__section-number">04</p>
            <p className="case-study__section-label">
              Analytics
            </p>
          </div>

          <div className="case-study__section-content">
            <h2>
              Operational insight with a dedicated reporting layer.
            </h2>

            <p>
              PartsPilot combines reporting within the application with a
              dedicated Power BI dashboard, giving operational inventory data
              a clearer business intelligence layer.
            </p>

            <p>
              The application provides inventory value, stock, product and
              category reporting alongside CSV export, while Power BI extends
              the reporting experience with interactive visual analysis of the
              automotive inventory dataset.
            </p>
          </div>
        </div>
      </section>

      {/* Power BI image */}
      <section className="case-study__visual case-study__visual--powerbi">
        <div className="site-container">
          <div className="case-study__image case-study__image--powerbi">
            <Image
              src="/images/work/partspilot/powerbi-dashboard.png"
              alt="PartsPilot Power BI inventory analytics dashboard"
              width={1600}
              height={900}
              className="case-study__screenshot"
            />
          </div>
        </div>
      </section>

      {/* Section 05 - Engineering */}
      <section className="case-study__section">
        <div className="site-container case-study__section-grid">
          <div>
            <p className="case-study__section-number">05</p>
            <p className="case-study__section-label">
              Engineering
            </p>
          </div>

          <div className="case-study__section-content">
            <h2>
              Built as a complete full-stack application.
            </h2>

            <div className="case-study__technology">
              {technologies.map((technology) => (
                <div
                  className="case-study__technology-row"
                  key={technology.area}
                >
                  <span>{technology.area}</span>
                  <p>{technology.value}</p>
                </div>
              ))}
            </div>

            <div className="case-study__architecture">
              <p>React + TypeScript</p>
              <span>↓ REST API</span>
              <p>FastAPI</p>
              <span>↓ SQLAlchemy</span>
              <p>PostgreSQL</p>
            </div>

            <div className="case-study__deployment-note">
              <span>Deployment</span>
              <p>
                The React frontend is deployed on Vercel. The FastAPI API and
                PostgreSQL database currently run within the local development
                environment, with public backend deployment remaining a separate
                infrastructure step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06 - Result */}
      <section className="case-study__section case-study__section--accent">
        <div className="site-container case-study__section-grid">
          <div>
            <p className="case-study__section-number">06</p>
            <p className="case-study__section-label">
              Current Result
            </p>
          </div>

          <div className="case-study__section-content">
            <h2>
              A feature-complete full-stack product built from end to end.
            </h2>

            <p>
              PartsPilot has reached its v2.0.0 feature-complete milestone,
              bringing together authenticated inventory management, supplier
              workflows, operational analytics, reporting and Power BI within
              one automotive-focused product.
            </p>

            <p>
              The project now moves into maintenance, with future work focused
              on reliability, testing, documentation and infrastructure rather
              than continued feature expansion. The frontend is available as a
              public Vercel demonstration, while public backend deployment
              remains a separate infrastructure step.
            </p>

            <a
              href="https://www.partspilot.uk"
              target="_blank"
              rel="noreferrer"
              className="case-study__external-link"
            >
              View frontend demo ↗
            </a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="case-study__navigation">
        <div className="site-container">
          <Link href="/work">
            ← Back to work
          </Link>
        </div>
      </section>
    </main>
  );
}