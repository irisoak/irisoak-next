import Container from "@/components/layout/Container";

export default function TechnologyApproach() {
  return (
    <section className="technology-approach">
      <Container>
        <div className="technology-approach__inner">
          <p className="technology-approach__primary">
            Every project gets the right tools for the job — modern, reliable
            technology chosen to fit your needs, not forced to fit a template.
          </p>

          <div
            className="technology-approach__divider"
            aria-hidden="true"
          />

          <p className="technology-approach__secondary">
            Not sure what your project needs? Get in touch and I can walk you
            through the best approach that works your business.
          </p>
        </div>
      </Container>
    </section>
  );
}