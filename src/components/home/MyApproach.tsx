import Container from "@/components/layout/Container";
import {
  MessageSquareText,
  BadgeCheck,
  Eye,
  Wrench,
} from "lucide-react";

const expectations = [
  {
    title: "Clear communication",
    icon: MessageSquareText,
  },
  {
    title: "Honest recommendations",
    icon: BadgeCheck,
  },
  {
    title: "Accessibility by default",
    icon: Eye,
  },
  {
    title: "Built for maintainability",
    icon: Wrench,
  },
];

export default function MyApproach() {
  return (
    <section className="expectations">
      <Container>
        <p className="expectations__eyebrow">
          My Approach
        </p>

        <div className="expectations__grid">
          {expectations.map(({ title, icon: Icon }) => (
            <div className="expectations__item" key={title}>
              <Icon
                className="expectations__icon"
                size={28}
                strokeWidth={1.4}
                aria-hidden="true"
              />

              <h2 className="expectations__title">
                {title}
              </h2>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}