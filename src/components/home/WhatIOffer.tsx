import Container from "@/components/layout/Container";
import {
  Globe,
  Rocket,
  RefreshCw,
  ShieldCheck,
  Code2,
  BookOpenText,
} from "lucide-react";

const offerings = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "Bespoke mobile-friendly websites from one-page to multi-page, for new and established businesses.",
  },
  {
    icon: RefreshCw,
    title: "Website Refresh",
    description:
      "Improve your site's structure, visual direction and usability while keeping what already works.",
  },
  {
    icon: Rocket,
    title: "Web apps",
    description:
      "Custom web apps built around how your customers actually use them.",
  },
  {
    icon: BookOpenText,
    title: "Booking & integrations",
    description:
      "Connect bookings, payments and the tools you already use, so everything works together.",
  },
  {
    icon: Code2,
    title: "Business Tools",
    description:
      "Dashboards, internal systems and automations that take the admin out of your day.",
  },
  {
    icon: ShieldCheck,
    title: "Care & Maintenance",
    description:
      "Ongoing maintenance, regular updates, monitoring and fixes to keep your site running smoothly.",
  },
];

export default function WhatIOffer() {
  return (
    <section className="iooffer">
      <Container>
        <div className="iooffer__intro">
          <h1 className="iooffer__heading">
            What I Offer
          </h1>
          
          <p className="iooffer__text">
            From websites to custom web apps, I design and build digital products 
            around how your business actually works, and support them long after launch.
          </p>
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
