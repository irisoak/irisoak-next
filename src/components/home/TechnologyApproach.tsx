import Container from "@/components/layout/Container";
import Link from "next/link";

export default function TechnologyApproach() {
  return (
    <section className="technology-approach">
      <Container>
        <div className="technology-approach__inner">
          <p className="technology-approach__eyebrow">
            HOW I WORK
          </p>

          <div className="technology-approach__grid">
            <h2 className="technology-approach__primary">
              The right technology for the problem — not the other way around.
            </h2>

            <div className="technology-approach__secondary">
              <div className="technology-approach__copy">
                <p>
                  Every project is shaped around what your business actually
                  needs, using modern, reliable tools chosen for the job rather
                  than forcing your idea into a template.
                </p>

                <p>
                  Not sure what approach makes sense? I can help you work through
                  the options and decide what is worth building.{" "}
                  <Link href="/contact" className="technology-approach__contact-link">
                    Contact me →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}