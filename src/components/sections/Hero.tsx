import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="hero">
      <Container className="hero__container">

        <div className="hero__media">
          <Image
            src="/images/hero-developer-workspace.png"
            alt="Developer workspace with a laptop and curved monitor displaying code and a website in development."
            fill
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
            className="hero__image"
          />
        </div>

        <div className="hero__content">
          <h1 className="hero__title">
            Thoughtful digital products, built for real businesses.
          </h1>

          <p className="hero__text">
            I design and build accessible, maintainable websites and digital
            products for small businesses, founders and growing organisations.
          </p>

          <p className="hero__supporting-text">
            Full-stack development, thoughtful design, and long-term support —
            all under one roof.
          </p>

          <div className="hero__actions">
            <Button href="/work-with-me">
              START A PRJOECT
            </Button>

            <Button href="/work" variant="text">
              VIEW MY WORK <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
}