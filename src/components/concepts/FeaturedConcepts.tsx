import Link from "next/link";
import Image from "next/image";

const featuredConcepts = [
  {
    number: "01",
    name: "Northline Automotive",
    industry: "Automotive",
    packageName: "Website Essentials",
    href: "/concepts/automotive",
    image: "/images/concepts/northline-automotive.png",
  },
  {
    number: "02",
    name: "Marlow & Bean",
    industry: "Café / Hospitality",
    packageName: "Starter Presence",
    href: "/concepts/cafe",
    image: "/images/concepts/marlow-bean.png",
  },
];

export default function FeaturedConcepts() {
  return (
    <section className="featured-concepts">
      <div className="featured-concepts__header">
        <div>
          <p className="featured-concepts__eyebrow">
            Concept Studio
          </p>

          <p className="featured-concepts__description">
            Website ideas exploring different industries and creative
            directions.
          </p>
        </div>

        <Link
          href="/concepts"
          className="featured-concepts__all-link"
        >
          <span>View all concepts</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="featured-concepts__grid">
        {featuredConcepts.map((concept) => (
          <article
            key={concept.name}
            className="featured-concepts__card"
          >
            <Link
              href={concept.href}
              className="featured-concepts__card-link"
            >
              <div className="featured-concepts__visual">
                <Image
                  src={concept.image}
                  alt={`${concept.name} website concept`}
                  fill
                  className="featured-concepts__image"
                  sizes="(max-width: 760px) 100vw, 50vw"
                />

                <span className="featured-concepts__view">
                  View Concept
                </span>
              </div>

              <div className="featured-concepts__meta">
                <div>
                  <span className="featured-concepts__number">
                    {concept.number}
                  </span>

                  <h3>{concept.name}</h3>

                  <p>
                    {concept.industry} · {concept.packageName}
                  </p>
                </div>

                <span
                  className="featured-concepts__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}