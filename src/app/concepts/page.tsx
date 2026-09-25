import Link from "next/link";
import Image from "next/image";

const concepts = [
  {
    name: "Northline Automotive",
    industry: "Automotive",
    packageName: "Website Essentials",
    href: "/concepts/automotive",
    status: "live",
    image: "/images/concepts/northline-automotive/northline-automotive-concept.png",
  },
  {
    name: "Marlow & Bean",
    industry: "Café / Hospitality",
    packageName: "Starter Presence",
    href: "/concepts/cafe",
    status: "live",
    image: "/images/concepts/marlow-bean/marlow-bean-concept.png",
  },
  {
    name: "Atelier Rue",
    industry: "Hair & Beauty",
    packageName: "Refresh",
    href: "/concepts/hair",
    status: "live",
    image: "/images/concepts/atelier-rue/atelier-rue-concept.png",
  },
  {
    name: "Hotel / B&B",
    industry: "Hospitality",
    packageName: "Concept in progress",
    href: null,
    status: "coming-soon",
    image: null,
  },
];

export default function ConceptsPage() {
  return (
    <main className="concepts-page">
      <section className="concepts-page__intro">
        <p className="concepts-page__eyebrow">
          Concept Studio
        </p>

        <h1>
          Different industries.
          <br />
          Different possibilities.
        </h1>

        <p className="concepts-page__intro-copy">
          A collection of industry-focused website concepts exploring
          different visual directions, business needs and Iris & Oak
          service packages.
        </p>
      </section>

      <section
        className="concepts-page__grid"
        aria-label="Website concepts"
      >
        {concepts.map((concept, index) => {
          const number = String(index + 1).padStart(2, "0");

          if (concept.status === "coming-soon") {
            return (
              <article
                key={concept.name}
                className="concepts-page__card concepts-page__card--coming-soon"
              >
                <div
                  className="concepts-page__visual concepts-page__visual--coming-soon"
                >
                  <span className="concepts-page__visual-label">
                    Coming Soon
                  </span>
                </div>

                <div className="concepts-page__card-meta">
                  <div>
                    <span className="concepts-page__number">
                      {number}
                    </span>

                    <h2>{concept.name}</h2>

                    <p>
                      {concept.industry} · {concept.packageName}
                    </p>
                  </div>

                  <span className="concepts-page__status">
                    In development
                  </span>
                </div>
              </article>
            );
          }

          return (
            <article
              key={concept.name}
              className="concepts-page__card"
            >
              <Link
                href={concept.href!}
                className="concepts-page__card-link"
              >
                <div className="concepts-page__visual">
                  {concept.image && (
                    <Image
                      src={concept.image}
                      alt={`${concept.name} website concept`}
                      fill
                      className="concepts-page__image"
                      sizes="(max-width: 760px) 100vw, 50vw"
                    />
                  )}

                  <span className="concepts-page__visual-label">
                    View Concept
                  </span>
                </div>

                <div className="concepts-page__card-meta">
                  <div>
                    <span className="concepts-page__number">
                      {number}
                    </span>

                    <h2>{concept.name}</h2>

                    <p>
                      {concept.industry} · {concept.packageName}
                    </p>
                  </div>

                  <span
                    className="concepts-page__arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </section>

      <section className="concepts-page__footer-cta">
        <div>
          <p>Have something different in mind?</p>

          <h2>
            Your business does not need
            <br />
            to look like everyone else&apos;s.
          </h2>
        </div>

        <Link href="/contact">
          Start a project →
        </Link>
      </section>
    </main>
  );
}