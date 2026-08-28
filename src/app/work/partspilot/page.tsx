import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PartsPilot | Iris & Oak",
  description:
    "PartsPilot is a full-stack automotive inventory management and analytics platform designed and built by Iris & Oak.",
};

const capabilities = [
  "Authenticated inventory management",
  "Create, view, update and delete inventory items",
  "Search, filtering, sorting and pagination",
  "Stock-level monitoring",
  "Inventory value and category analytics",
  "Dashboard summary metrics",
  "Power BI reporting",
  "REST API documentation",
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
    area: "CI/CD",
    value: "GitHub Actions",
  },
  {
    area: "Deployment",
    value: "Vercel, Render",
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
            An automotive inventory management and analytics platform
            designed and built to make stock, inventory value and
            operational information easier to manage and understand.
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
              <p>Live</p>

              <a
                href="https://inventory-management-system-iris408.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="case-study__meta-link"
              >
                Visit the Live Site ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main product image */}
      <section className="case-study__visual">
        <div className="site-container">
          <div className="case-study__image case-study__image--hero">
            {/* Replace with actual PartsPilot image later */}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="case-study__section">
        <div className="site-container case-study__section-grid">
          <div>
            <p className="case-study__section-number">01</p>
            <p className="case-study__section-label">The Problem</p>
          </div>

          <div className="case-study__section-content">
            <h2>
              Inventory shouldn&apos;t become harder to understand as
              it grows.
            </h2>

            <p>
              PartsPilot was created around a practical inventory
              management problem: businesses need more than a list of
              parts. They need to understand what is available, what
              needs attention and what their inventory data is telling
              them.
            </p>

            <p>
              The product brings day-to-day inventory management,
              stock monitoring and operational analytics into one
              application built around an automotive parts dataset.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="case-study__section">
        <div className="site-container case-study__section-grid">
          <div>
            <p className="case-study__section-number">02</p>
            <p className="case-study__section-label">The Approach</p>
          </div>

          <div className="case-study__section-content">
            <h2>
              From inventory records to useful operational information.
            </h2>

            <p>
              PartsPilot was designed as a complete full-stack system
              rather than a standalone interface. The React frontend
              communicates with a FastAPI REST API, with SQLAlchemy
              providing the persistence layer over PostgreSQL.
            </p>

            <p>
              The application focuses on making common inventory
              workflows straightforward while surfacing useful
              information such as stock status, category performance
              and inventory value.
            </p>
          </div>
        </div>
      </section>

      {/* Product image */}
      <section className="case-study__visual">
        <div className="site-container">
          <div className="case-study__image">
            {/* Inventory/dashboard screenshot */}
          </div>
        </div>
      </section>

      {/* Solution */}
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

      {/* Analytics */}
      <section className="case-study__section">
        <div className="site-container case-study__section-grid">
          <div>
            <p className="case-study__section-number">04</p>
            <p className="case-study__section-label">
              Analytics
            </p>
          </div>

          <div className="case-study__section-content">
            <h2>
              Operational data with a dedicated reporting layer.
            </h2>

            <p>
              Alongside analytics within the application, PartsPilot
              includes a dedicated Power BI dashboard for deeper
              inventory reporting and business intelligence.
            </p>

            <p>
              The Power BI dashboard is complete. Current development is focused
              on a broader UX update across PartsPilot, including final frontend
              polish and refinement of the remaining application experience
            </p>
          </div>
        </div>
      </section>

      {/* Power BI image */}
      <section className="case-study__visual">
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

      {/* Engineering */}
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
              <span>↓</span>
              <p>Power BI</p>
            </div>

            <div className="case-study__deployment-note">
              <span>Deployment</span>
              <p>
                React frontend deployed on Vercel, with the FastAPI backend deployed on Render.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="case-study__section case-study__section--result">
        <div className="site-container case-study__section-grid">
          <div>
            <p className="case-study__section-number">06</p>
            <p className="case-study__section-label">
              Current Result
            </p>
          </div>

          <div className="case-study__section-content">
            <h2>
              A deployed product with the core platform complete.
            </h2>

            <p>
              PartsPilot is now deployed as a live demonstration using
              a sample automotive inventory dataset. Authentication,
              inventory management, application analytics, PostgreSQL,
              Docker, CI and the Power BI reporting dashboard are all
              operational.
            </p>

            <p>
              The core product is complete and deployed. Current development is
              focused on a UX update, final frontend polish and expanding automated
              test coverage before PartsPilot moves primarily into maintenance.
            </p>

            <a
              href="https://inventory-management-system-iris408.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="case-study__external-link"
            >
              View live product ↗
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