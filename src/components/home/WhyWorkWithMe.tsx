 import Container from "@/components/layout/Container";
import {
  MessageCircle,
  Compass,
  Accessibility,
  Settings2,
} from "lucide-react";

const reasons = [
  {
    icon: MessageCircle,
    title: "Clear communication",
    description:
      "You’ll know what’s happening, what decisions are needed and what comes next.",
  },
  {
    icon: Compass,
    title: "Honest recommendations",
    description:
      "Advice shaped around your goals, budget and what your business needs.",
  },
  {
    icon: Accessibility,
    title: "Accessibility by default",
    description:
      "Clear, usable experiences considered from the start.",
  },
  {
    icon: Settings2,
    title: "Built for maintainability",
    description:
      "Thoughtful foundations that are easier to update and extend.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="iowhy" aria-labelledby="iowhy-heading">
      <Container>
        <div className="iowhy__intro">
          <h2 className="iowhy__heading" id="iowhy-heading">
            Why work with me
          </h2>

          <p className="iowhy__text">
            Good work comes from clear communication, practical decisions
            and care for the details.
          </p>
        </div>

        <ul className="iowhy__grid">
          {reasons.map(({ icon: Icon, title, description }) => (
            <li className="iowhy__item" key={title}>
              <Icon
                className="iowhy__icon"
                size={28}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}