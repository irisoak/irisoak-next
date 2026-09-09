import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Design & Development Services",
  description:
    "Explore Iris & Oak website services for independent businesses, including streamlined one-page websites, larger launches, website refreshes, ongoing care and custom development.",
  alternates: {
    canonical: "/services",
  },
};

const careOptions = [
  {
    name: "Core Care",
    description:
      "Routine updates, uptime checks, key link and form checks, minor maintenance fixes and an initial support response within three working days.",
    monthly: 59,
    annual: 590,
  },
  {
    name: "Growth Care",
    description:
      "Everything in Core Care, plus up to one hour of content or design updates each month, regular performance checks and an initial support response within two working days.",
    monthly: 119,
    annual: 1190,
  },
  {
    name: "Priority Care",
    description:
      "Everything in Growth Care, plus up to two and a half hours of ongoing website improvements each month, proactive recommendations and an initial support response within one working day.",
    monthly: 229,
    annual: 2290,
  },
];

const services = [
  {
    number: "00",
    name: "Essentials",
    heading: "A clear starting point for getting your business online.",
    description:
      "For independent businesses that need a simple, professional website using a streamlined structure, existing branding and client-supplied content.",
    options: [
      [
        "Website Essentials",
        "One streamlined responsive page with up to four focused sections, contact details, social or booking links, essential SEO setup and one consolidated revision round.",
        "£495",
      ],
    ],
    note:
      "Best suited to straightforward brochure-style websites. Additional pages, branding, copywriting, custom booking systems, ecommerce and larger functionality are quoted separately.",
    goodFor:
      "New businesses · Social-media-only businesses · Simple services · Local independents",
  },
  {
    number: "01",
    name: "Launch",
    heading: "A bespoke website shaped around your business.",
    description:
      "For new or growing businesses that need a more flexible website with structure, visual direction and content flow designed around their brand and customers.",
    options: [
      [
        "One Page",
        "A focused one-page website that brings together what you do, who you help and how customers can contact you in one clear, responsive experience.",
        "From £695",
      ],
      [
        "Up to 5 Pages",
        "A complete small-business website with dedicated space for your services, story, work and contact information. Clear navigation and a consistent responsive design help customers understand your business and take the next step.",
        "From £1,295",
      ],
    ],
    note: null,
    goodFor:
      "New businesses · Independent businesses · Consultancies · Local services",
  },
  {
    number: "02",
    name: "Refresh",
    heading: "Make your existing website work harder.",
    description:
      "A considered update for an existing website that no longer represents the business or works well for its customers. I’ll improve its structure, visual direction and desktop and mobile experience while retaining the parts that still work.",
    options: [
      [
        "Website Refresh",
        "A considered update and improvement process for your existing website. Final scope and pricing are confirmed after an initial review.",
        "Quoted after review",
      ],
    ],
    note: null,
    goodFor:
      "Older websites · Mobile improvements · UX improvements · Visual redesigns",
  },
  {
    number: "03",
    name: "Care",
    heading: "Keep things running after launch.",
    description:
      "Ongoing maintenance, monitoring and technical support for businesses that would rather have someone keeping an eye on their website.",
    options: [
      [
        "Site Check-up",
        "A focused check and tidy-up for an existing website, including core updates, basic health checks and small maintenance fixes.",
        "£149",
      ],
    ],
    note:
      "Included update time resets each month and does not roll over. Hosting, domain renewals, paid third-party services, new pages, larger features and emergency or out-of-hours work are quoted separately.",
    goodFor:
      "Maintenance · Monitoring · Small updates · Ongoing technical support",
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
            building something more specific.
          </p>
        </section>

        <div className="services-page__list">
          {services.map((service) => (
            <section
              className="services-page__service"
              key={service.name}
            >
              <div className="services-page__service-label">
                <span>{service.number}</span>
                <p>{service.name}</p>
              </div>

              <div className="services-page__service-content">
                <h2>{service.heading}</h2>

                <p className="services-page__description">
                  {service.description}
                </p>

                <div className="services-page__pricing">
                  {service.options.map(([label, description, price]) => (
                    <div key={label}>
                      <div className="services-page__pricing-details">
                        <span>{label}</span>

                        {description && (
                          <p className="services-page__pricing-description">
                            {description}
                          </p>
                        )}
                      </div>

                      <p className="services-page__pricing-price">
                        {price}
                      </p>
                    </div>
                  ))}

                  {service.name === "Care" &&
                    careOptions.map((option) => (
                      <div key={option.name}>
                        <div className="services-page__pricing-details">
                          <span>{option.name}</span>

                          <p className="services-page__pricing-description">
                            {option.description}
                          </p>
                        </div>

                        <div className="care-pricing">
                          <p className="care-pricing__monthly">
                            £{option.monthly.toLocaleString("en-GB")}/month
                          </p>

                          <p className="care-pricing__annual">
                            £{option.annual.toLocaleString("en-GB")}/year
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="services-page__good-for">
                  <span>IDEAL FOR</span>
                  <p>{service.goodFor}</p>
                </div>

                {service.note && (
                  <p className="services-page__pricing-note">
                    {service.note}
                  </p>
                )}

                <Link
                  href={`/contact?service=${service.name.toLowerCase()}`}
                  className="services-page__cta"
                >
                  Start a project →
                </Link>
              </div>
            </section>
          ))}
        </div>

        <section className="services-page__custom">
          <div>
            <span>04</span>
            <p>CUSTOM PROJECTS</p>
          </div>

          <div>
            <h2>Need something beyond a standard website?</h2>

            <p>
              Some projects don&apos;t fit neatly into a package. I also design
              and build custom digital products around specific business needs.
            </p>

            <p className="services-page__custom-price">
              Quoted after discovery
            </p>

            <ul>
              <li>Web applications</li>
              <li>Internal tools</li>
              <li>APIs &amp; integrations</li>
              <li>Automation</li>
              <li>Dashboards</li>
              <li>Accessibility improvements</li>
            </ul>

            <Link
              href="/contact?service=custom"
              className="services-page__cta"
            >
              Discuss your project →
            </Link>
          </div>
        </section>

        <section className="services-page__process">
          <p className="services-page__eyebrow">How it works</p>

          <div className="services-page__process-list">
            <div>
              <span>01</span>

              <div className="services-page__process-content">
                <h3>Tell me about your project</h3>

                <p>
                  Share what you&apos;re trying to achieve, who it is for and
                  any challenges with your current setup.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div className="services-page__process-content">
                <h3>I work out what you actually need</h3>

                <p>
                  I&apos;ll discuss your priorities and decide on the most
                  appropriate approach, features and scope.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div className="services-page__process-content">
                <h3>You receive a clear scope and proposal</h3>

                <p>
                  I&apos;ll outline the deliverables, timeline and cost so you
                  know what is included before work begins.
                </p>
              </div>
            </div>

            <div>
              <span>04</span>

              <div className="services-page__process-content">
                <h3>Design, development and launch</h3>

                <p>
                  I&apos;ll build, test and refine the project with regular
                  updates before preparing everything for launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-page__closing">
          <p>Not sure which service fits?</p>

          <h2>Let&apos;s figure it out together.</h2>

          <p>
            No need to pick the &quot;right&quot; package upfront — I can help
            you land on the right approach first.
          </p>

          <Link
            href="/contact"
            className="services-page__closing-link"
          >
            Start a project →
          </Link>
        </section>
      </div>
    </main>
  );
}