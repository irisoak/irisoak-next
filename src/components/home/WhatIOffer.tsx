import Container from "@/components/layout/Container";
import {
  Globe,
  Rocket,
  RefreshCw,
  ShieldCheck,
  Code2,
} from "lucide-react";

const offerings = [
  {
    icon: Globe,
    title: "Foundations",
    description:
      "Simple, professional one-page websites for new and independent businesses.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Bespoke websites shaped around your business, brand and customers.",
  },
  {
    icon: RefreshCw,
    title: "Refresh",
    description:
      "A clearer structure, stronger visual direction and a better experience for an existing site.",
  },
  {
    icon: ShieldCheck,
    title: "Care",
    description:
      "Ongoing maintenance, monitoring and technical support after launch.",
  },
  {
    icon: Code2,
    title: "Custom",
    description:
      "Web apps, internal tools and automation, scoped around what you actually need.",
  },
];

export default function WhatIOffer() {
  return (
    <section className="iooffer">
      <Container>
        <div className="iooffer__intro">
          <p className="iooffer__text">
            From first websites to custom web apps, I build digital
            products that are designed around how your business actually
            works, and supported long after launch.
          </p>

          <h2 className="iooffer__heading">
            What I Offer
          </h2>
        </div>

        <p className="iooffer__label">
          Services
        </p>

        <div className="iooffer__grid">
          {offerings.map(({ icon: Icon, title, description }) => (
            <div className="iooffer__item" key={title}>
              <Icon
                className="iooffer__icon"
                size={28}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
