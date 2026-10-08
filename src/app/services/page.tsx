import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  Code2,
  CreditCard,
  Globe,
  RefreshCw,
  Settings2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Design & Development Services",
  description:
    "Explore Iris & Oak website design, development, refresh and custom digital project services.",
  alternates: {
    canonical: "/services",
  },
};

const serviceTypes = [
  {
    icon: Globe,
    name: "Websites",
    description:
      "Responsive websites shaped around your business and customers.",
  },
  {
    icon: RefreshCw,
    name: "Website Refresh",
    description:
      "A considered update to improve your existing website.",
  },
  {
    icon: Code2,
    name: "Web Apps",
    description:
      "Custom applications built around your workflows and users.",
  },
  {
    icon: CalendarDays,
    name: "Booking & Integrations",
    description:
      "Connected booking systems and tools that work together.",
  },
  {
    icon: Settings2,
    name: "Business Tools",
    description:
      "Digital tools to simplify processes and support your business.",
  },
];

const websiteGroups = [
  {
    name: "Foundations",
    intro: "A clear starting point for getting your business online.",
    options: [
      {
        name: "Starter Presence",
        price: "£295",
        description:
          "A simple responsive landing page for new and early-stage businesses, bringing together your essential information, contact details and social or booking links.",
      },
      {
        name: "Website Essentials",
        price: "£495",
        description:
          "A more complete one-page website with up to four focused sections, shaped around your business with contact or booking links, essential SEO setup and one consolidated revision.",
      },
    ],
    idealFor:
      "New businesses · Early-stage independents · Simple services · Local businesses",
  },
  {
    name: "Launch",
    intro: "A bespoke website shaped around your business.",
    options: [
      {
        name: "One Page",
        price: "From £695",
        description:
          "A focused one-page website bringing together what you do, who you help and how customers can contact you.",
      },
      {
        name: "Up to 5 Pages",
        price: "From £1,295",
        description:
          "A fuller multi-page website with dedicated space for your services, story, work and contact information.",
      },
    ],
    idealFor:
      "Growing businesses · Independent businesses · Consultancies · Local services",
  },
];

const customProjects = [
  {
    name: "Booking & Integrations",
    description:
      "Connect booking systems, payments and other tools.",
    price: "From £200",
  },
  {
    name: "Business Tools",
    description:
      "Dashboards, internal tools and automations for your operations.",
    price: "From £595",
  },
  {
    name: "Web Apps",
    description:
      "Custom applications built around your workflows and users.",
    price: "From £1,200",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We'll talk about your goals, ideas and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I'll outline the approach, scope, timeline and quote.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I'll design, develop and prepare your project for launch.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <div className="site-container">
        <section className="services-page__hero">
          <p className="services-page__eyebrow">Services</p>

          <h1>
            Websites and digital products, built around what you actually need.
          </h1>

          <p className="services-page__lead">
            From launching something new to improving an existing website or
            building a custom tool for your business.
          </p>
        </section>

        <section
          className="services-page__types"
          aria-label="Types of services"
        >
          {serviceTypes.map(({ icon: Icon, name, description }) => (
            <article className="services-page__type" key={name}>
              <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
              <h2>{name}</h2>
              <p>{description}</p>
            </article>
          ))}
        </section>

        <section
          className="services-page__websites"
          aria-labelledby="website-services-heading"
        >
          <div className="services-page__section-heading">
            <h2 id="website-services-heading">Website services</h2>
            <p>
              From a simple, effective starting point to a more tailored
              website, each option is scoped around what you need.
            </p>
          </div>

          <div className="services-page__website-groups">
            {websiteGroups.map((group) => (
              <section
                className="services-page__group"
                key={group.name}
                aria-labelledby={`service-${group.name.toLowerCase()}`}
              >
                <div className="services-page__group-heading">
                  <h3 id={`service-${group.name.toLowerCase()}`}>
                    {group.name}
                  </h3>
                  <p>{group.intro}</p>
                </div>

                <div className="services-page__pricing-grid">
                  {group.options.map((option) => (
                    <article
                      className="services-page__price-card"
                      key={option.name}
                    >
                      <h4>{option.name}</h4>
                      <p className="services-page__price">{option.price}</p>
                      <p className="services-page__option-description">
                        {option.description}
                      </p>
                    </article>
                  ))}
                </div>

                {group.idealFor && (
                  <p className="services-page__ideal-for">
                    <span>Ideal for</span> {group.idealFor}
                  </p>
                )}
              </section>
            ))}
          </div>

          <article className="services-page__refresh">
            <div>
              <p className="services-page__refresh-label">Website Refresh</p>
              <h3>Make your existing website work harder.</h3>
              <p>
                A considered update for a website that no longer represents
                your business or works well for your customers. The scope
                focuses on structure, visual direction and the experience
                across mobile, tablet and desktop.
              </p>
            </div>

            <div className="services-page__refresh-price">
              <span>Pricing</span>
              <p>Quoted after review</p>
              <Link href="/#contact">Discuss a refresh →</Link>
            </div>
          </article>
        </section>

        <section
          className="services-page__custom"
          aria-labelledby="custom-projects-heading"
        >
          <div className="services-page__section-heading">
            <h2 id="custom-projects-heading">Custom projects</h2>
            <p>
              Have a more complex idea or need something tailored? Projects
              are scoped and quoted after discovery.
            </p>
          </div>

          <div className="services-page__custom-grid">
            {customProjects.map((project) => (
              <article
                className="services-page__custom-card"
                key={project.name}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>{project.price}</p>
                <span>Quoted after discovery</span>
              </article>
            ))}
          </div>

          <Link className="services-page__custom-link" href="/#contact">
            Discuss a custom project →
          </Link>
        </section>

        <section
          className="services-page__payments"
          aria-labelledby="payment-options-heading"
        >
          <CreditCard
            className="services-page__payments-icon"
            size={30}
            strokeWidth={1.5}
            aria-hidden="true"
          />

          <p className="services-page__eyebrow">
            Flexible project payments
          </p>

          <h2 id="payment-options-heading">
            Pay in full, or split the project fee.
          </h2>

          <p>
            For most website, web app and custom projects, you can pay in full
            or split the project fee into 2, 3 or 4 instalments. Your payment
            schedule will be confirmed in your proposal before work begins.
          </p>
        </section>

        <section
          className="services-page__process"
          aria-labelledby="process-heading"
        >
          <div className="services-page__section-heading">
            <h2 id="process-heading">The process</h2>
            <p>A clear, collaborative approach from start to finish.</p>
          </div>

          <div className="services-page__process-grid">
            {processSteps.map((step) => (
              <article
                className="services-page__process-step"
                key={step.number}
              >
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}