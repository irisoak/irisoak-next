import Link from "next/link";
import Container from "@/components/layout/Container";
import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Boxes,
  RefreshCw,
  ShieldCheck,
  Code2,
  Calendar,
} from "lucide-react";

type Offering = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

const offerings: Offering[] = [
  {
    icon: Monitor,
    title: "Websites",
    description:
      "Mobile-friendly websites from one-page to multi-page, for new and established businesses.",
  },
  {
    icon: RefreshCw,
    title: "Website Refresh",
    description:
      "Improve your site's structure, visual direction and usability while keeping what already works.",
  },
  {
    icon: Boxes,
    title: "Web apps",
    description:
      "Custom web apps built around how your customers actually use them.",
  },
  {
    icon: Calendar,
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
    href: "/care",
  },
];

export default function WhatIOffer() {
  return (
    <section className="iooffer">
      <Container>
        <div className="iooffer__intro">
          <h2 className="iooffer__heading">What I Offer</h2>

          <p className="iooffer__text">
            From websites to custom web apps, I design and build digital
            products around how your business actually works, and support them
            long after launch.
          </p>
        </div>

        <p className="iooffer__label">Services</p>

        <div className="iooffer__grid">
          {offerings.map(({ icon: Icon, title, description, href }) => {
            const cardContent = (
              <>
                <Icon
                  className="iooffer__icon"
                  size={28}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3>{title}</h3>
                <p>{description}</p>
              </>
            );

            return href ? (
              <Link
                className="iooffer__item iooffer__item--link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={title}
              >
                {cardContent}
              </Link>
            ) : (
              <div className="iooffer__item" key={title}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}