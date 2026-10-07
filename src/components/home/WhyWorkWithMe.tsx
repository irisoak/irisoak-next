import Container from "@/components/layout/Container";

const reasons = [
  "Clear communication",
  "Honest recommendations",
  "Accessibility by default",
  "Built for maintainability",
];

export default function WhyWorkWithMe() {
  return (
    <section className="iowhy">
      <Container>
        <p className="iowhy__eyebrow">
          Why work with me
        </p>

        <ul className="iowhy__list">
          {reasons.map((reason) => (
            <li className="iowhy__item" key={reason}>
              {reason}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
