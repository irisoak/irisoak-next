import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="iohero" aria-labelledby="hero-title">
      <div className="iohero__content">
        <p className="iohero__eyebrow">Digital studio</p>

        <h1 className="iohero__title" id="hero-title">
          Web Design & Development.
        </h1>

        <p className="iohero__text">
          Bespoke websites and digital products for founders and independent
          businesses.
        </p>

        <div className="iohero__actions">
          <Link className="iohero__primary" href="/services">
            Explore services
          </Link>
        </div>
      </div>

      <div className="iohero__art">
        <Image
          src="/images/hero.png"
          alt="Illustrated hands framing a colourful scribble"
          width={900}
          height={700}
          priority
          className="iohero__image"
        />
      </div>
    </section>
  );
}