import Link from "next/link";

const services = [
  {
    number: "01",
    name: "Launch",
    heading: "A professional home for your business online.",
    description:
      "For new businesses or existing businesses that need a clear, modern website built around their brand and customers.",
    options: [
      ["One Page", "Focused one-page website for a professional online presence.", "From £695"],
      ["Up to 5 Pages", "Perfect for small businesses that need a more comprehensive online presence.", "From £1,295"],
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
      "For websites that already exist but need a clearer structure, stronger visual direction or a better experience across desktop and mobile.",
    options: [["Website Refresh", "A considered update and improvements to your existing website.", "From £895"]],
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
      ["Essential", "Routine dependency and security updates, uptime monitoring, monthly checks of important links and enquiry forms, and minor maintenance-related fixes. Includes an initial support response within three working days.", "£89/month"],
      ["Standard", "Everything in Essential, plus up to one hour of content or design updates each month, regular performance and accessibility checks, and an initial support response within two working days.", "£179/month"],
      ["Priority", "Everything in Standard, plus up to two and a half hours of ongoing website improvements each month, proactive recommendations and an initial support response within one working day.", "£329/month"],
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
          <p className="services-page__eyebrow">
            Services
          </p>

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
            <h2>
              Need something beyond a standard website?
            </h2>

            <p>
              Some projects don&apos;t fit neatly into a package. I also design
              and build custom digital products around specific business needs.
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
          <p className="services-page__eyebrow">
            How it works
          </p>

          <div className="services-page__process-list">
            <div>
              <span>01</span>

              <div className="services-page__process-content">
                <h3>Tell me about your project</h3>
                <p>
                  Share what you&apos;re trying to achieve, who it is for and any
                  challenges with your current setup.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div className="services-page__process-content">
                <h3>I work out what you actually need</h3>
                <p>
                  I&apos;ll discuss your priorities and decide on the most appropriate
                  approach, features and scope.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div className="services-page__process-content">
                <h3>You receive a clear scope and proposal</h3>
                <p>
                  I&apos;ll outline the deliverables, timeline and cost so you know what
                  is included before work begins.
                </p>
              </div>
            </div>

            <div>
              <span>04</span>

              <div className="services-page__process-content">
                <h3>Design, development and launch</h3>
                <p>
                  I&apos;ll build, test and refine the project with regular updates before
                  preparing everything for launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-page__closing">
          <p>Not sure which service fits?</p>

          <h2>
            Let's figure it out together.
          </h2>

          <p>
            No need to pick the "right" package upfront — I can help you land on the right approach first.
          </p>

          <Link href="/contact" className="services-page__closing-link">
            Start a project →
          </Link>
        </section>
      </div>
    </main>
  );
}