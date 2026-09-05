import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="hero hero--image">
      <Image
        src="/images/hero-iris-oak-workspace.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero__background"
      />

      <div className="hero__overlay" />

      <Container className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            DESIGN · DEVELOPMENT · DIGITAL PRODUCTS
          </p>

          <h1 className="hero__title">
            Ideas into meaningful solutions
          </h1>

          <p className="hero__text">
            Thoughtfully designed websites and digital products, built around real people, businesses and ideas.
          </p>

          <div className="hero__actions">
            <Button href="/contact">
              START A PROJECT
            </Button>

            <Button
              href="/work"
              variant="text"
              className="hero__view-work"
            >
              VIEW MY WORK <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}