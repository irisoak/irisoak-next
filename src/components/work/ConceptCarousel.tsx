"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Concept = {
  name: string;
  category: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

const concepts: Concept[] = [
  {
    name: "Willow & Gray",
    category: "Concept · Restaurant",
    description: "A neighbourhood restaurant built around seasonal dishes and relaxed dining.",
    href: "https://concepts.irisoak.dev/willowandgrayrestaurant",
    image: "/images/concepts/willow-and-gray/hero-food.jpg",
    imageAlt: "Willow & Gray restaurant concept website",
  },
  {
    name: "Northline Auto",
    category: "Concept · Automotive",
    description: "MOTs, servicing and repairs from an independent garage you can rely on.",
    href: "https://concepts.irisoak.dev/automotivegarage",
    image: "/images/concepts/northline-automotive/northline-automotive-concept.png",
    imageAlt: "Northline Automotive concept website",
  },
  {
    name: "Marlow & Bean",
    category: "Concept · Café",
    description: "Thoughtful coffee, fresh brunch and an easy place to stay a little longer.",
    href: "https://concepts.irisoak.dev/marlowandbeancafe",
    image: "/images/concepts/marlow-bean/marlow-bean-concept.png",
    imageAlt: "Marlow & Bean café concept website",
  },
  {
    name: "Atelier Rue",
    category: "Concept · Hair salon",
    description: "Modern cuts, thoughtful colour and a more personal salon experience.",
    href: "https://concepts.irisoak.dev/atelierruehairsalon",
    image: "/images/concepts/atelier-rue/atelier-rue-concept.png",
    imageAlt: "Atelier Rue hair salon concept website",
  },
];

export default function ConceptCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setCanScrollPrev(track.scrollLeft > 1);
    setCanScrollNext(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 1
    );
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [updateControls]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="concept-carousel">
      <div className="concept-carousel__controls">
        <button
          type="button"
          className="concept-carousel__button"
          aria-label="Show previous concepts"
          aria-controls="concept-carousel-track"
          disabled={!canScrollPrev}
          onClick={() => scrollByCard(-1)}
        >
          <span aria-hidden="true">←</span>
        </button>

        <button
          type="button"
          className="concept-carousel__button"
          aria-label="Show next concepts"
          aria-controls="concept-carousel-track"
          disabled={!canScrollNext}
          onClick={() => scrollByCard(1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <ul
        className="concept-carousel__track"
        id="concept-carousel-track"
        ref={trackRef}
        aria-label="Concept websites"
      >
        {concepts.map((concept) => (
          <li className="concept-carousel__item work-page__project" key={concept.name}>
            <a
              className="work-page__project-link"
              href={concept.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="work-page__project-image">
                <Image
                  src={concept.image}
                  alt={concept.imageAlt}
                  width={1600}
                  height={900}
                  sizes="(min-width: 64rem) 40vw, (min-width: 48rem) 60vw, 85vw"
                  className="work-page__project-screenshot"
                />
              </div>

              <div className="work-page__project-content">
                <div>
                  <p className="work-page__category">{concept.category}</p>
                  <h3>
                    {concept.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </h3>
                  <p className="work-page__description">
                    {concept.description}
                  </p>
                </div>

                <span className="work-page__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
