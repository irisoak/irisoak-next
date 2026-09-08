"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

type ServiceName = "Essentials" | "Launch" | "Refresh" | "Care";

type Service = {
  number: string;
  name: ServiceName;
  description: string;
  price: string;
  image: string;
  details: {
    label: string;
    price?: string;
    description?: string;
  }[];
};

const services: Service[] = [
  {
    number: "00",
    name: "Essentials",
    description:
      "A streamlined one-page website for independent businesses that need a professional presence online without a larger custom build.",
    price: "£495",
    image: "/images/services/essentials.png",
    details: [
      {
        label: "Website Essentials",
        price: "£495",
        description:
          "One streamlined responsive page with up to four focused sections, contact details, social or booking links, essential SEO setup and one consolidated revision round.",
      },
    ],
  },
  {
    number: "01",
    name: "Launch",
    description:
      "A bespoke website shaped around your business, brand and customers.",
    price: "From £695",
    image: "/images/services/launch.png",
    details: [
      {
        label: "One Page",
        price: "From £695",
        description:
          "A focused one-page website that brings together what you do, who you help and how customers can contact you.",
      },
      {
        label: "Up to 5 Pages",
        price: "From £1,295",
        description:
          "A complete small-business website with dedicated space for your services, story, work and contact information.",
      },
    ],
  },
  {
    number: "02",
    name: "Refresh",
    description:
      "Improve an existing website with a clearer structure, stronger visual direction and better experience.",
    price: "Quoted after review",
    image: "/images/services/refresh.png",
    details: [
      {
        label: "Website Refresh",
        price: "Quoted after review",
        description:
          "Final scope and pricing are confirmed following an initial review of your existing website.",
      },
    ],
  },
  {
    number: "03",
    name: "Care",
    description:
      "Ongoing maintenance, monitoring and technical support for your website.",
    price: "From £59/month",
    image: "/images/services/care.png",
    details: [
      {
        label: "Site Check-up",
        price: "£149",
        description:
          "A focused check and tidy-up for an existing website, including core updates, basic health checks and small maintenance fixes.",
      },
      {
        label: "Core Care",
        price: "£59/month or £590/year",
        description:
          "Routine updates, uptime checks, key link and form checks, minor maintenance fixes and an initial support response within three working days.",
      },
      {
        label: "Growth Care",
        price: "£119/month or £1,190/year",
        description:
          "Everything in Core Care, plus up to one hour of content or design updates each month, regular performance checks and an initial support response within two working days.",
      },
      {
        label: "Priority Care",
        price: "£229/month or £2,290/year",
        description:
          "Everything in Growth Care, plus up to two and a half hours of ongoing website improvements each month, proactive recommendations and an initial support response within one working day.",
      },
    ],
  },
];

export default function Services() {
  const [openService, setOpenService] = useState<ServiceName | null>(null);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
    >("idle");

  const [customConsentGiven, setCustomConsentGiven] = useState(false);
  const [customConsentError, setCustomConsentError] = useState(false);  

  const toggleService = (serviceName: ServiceName) => {
    setOpenService((current) =>
      current === serviceName ? null : serviceName
    );
  };

  const handleCustomSubmit = async (
    event: React.FormEvent<HTMLFormElement>
    ) => {
    event.preventDefault();

    if (!customConsentGiven) {
        setCustomConsentError(true);
        return;
    }

    setCustomConsentError(false);
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const enquiry = {
      service: "custom",
      name: formData.get("name"),
      email: formData.get("email"),
      project: formData.get("project"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiry),
      });

      if (!response.ok) {
        throw new Error("Enquiry submission failed.");
      }

      setFormStatus("success");
      setCustomConsentGiven(false);
      setCustomConsentError(false);
      form.reset();
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <section className="services" id="services">
      <Container>
        <p className="services__eyebrow">
          Services
        </p>

        <div className="services__list">
          {services.map((service) => {
            const isOpen = openService === service.name;
            const serviceId = `service-${service.name.toLowerCase()}`;

            return (
              <article
                className={`services__item ${
                  isOpen ? "services__item--open" : ""
                }`}
                key={service.name}
              >
                <div className="services__summary">
                  <div className="services__name">
                    <h2>{service.name}</h2>
                  </div>

                  <p className="services__description">
                    {service.description}
                  </p>

                  <div className="services__media" aria-hidden="true">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 35vw"
                      className="services__image"
                    />
                  </div>

                  <div className="services__action">
                    <span className="services__price">
                      {service.price}
                    </span>

                    <button
                      type="button"
                      className="services__explore"
                      aria-expanded={isOpen}
                      aria-controls={serviceId}
                      onClick={() => toggleService(service.name)}
                    >
                      {isOpen ? "" : "Explore"}

                      <span aria-hidden="true">
                        {isOpen ? "x" : " →"}
                      </span>
                    </button>
                  </div>
                </div>

                {openService === service.name && (
                  <div className="services__details">
                    {service.details.map((detail) => (
                      <div
                        className="services__detail"
                        key={detail.label}
                      >
                        <div>
                          <h3>{detail.label}</h3>
                          <p>{detail.description}</p>
                        </div>

                        <span>{detail.price}</span>
                      </div>
                    ))}

                    <div className="services__enquire-row">
                      <Link
                        href={`/contact?service=${service.name.toLowerCase()}`}
                        className="services__enquire"
                      >
                        Enquire <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="services__custom">
          {/* Custom Project text */}
          <div className="services__custom-text">
            <p className="services__custom-label">
              04 · Custom Project
            </p>

            <h2>
              Need something more specific?
            </h2>

            <p className="services__custom-description">
              Custom applications, integrations and more complex builds
              are scoped around what your project actually needs.
            </p>

            <p className="services__custom-price">
              Quoted after discovery
            </p>
          </div>

          {/* Custom Project image */}
          <div
            className="services__custom-media"
            aria-hidden="true"
          >
            <Image
              src="/images/services/custom.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 35vw"
              className="services__custom-image"
            />
          </div>

          {/* Custom Project enquiry */}
          <button
            type="button"
            className="services__custom-link"
            onClick={() => {
              setFormStatus("idle");
              setCustomConsentGiven(false);
              setCustomConsentError(false);
              setIsCustomOpen(true);
            }}
          >
            Custom Enquiry
            <span aria-hidden="true"> ➺</span>
          </button>
        </div>

        {isCustomOpen && (
          <div
            className="custom-enquiry"
            role="dialog"
            aria-modal="true"
            aria-labelledby="custom-enquiry-title"
          >
            <div
              className="custom-enquiry__backdrop"
              onClick={() => setIsCustomOpen(false)}
              aria-hidden="true"
            />

            <div className="custom-enquiry__panel">
              <button
                type="button"
                className="custom-enquiry__close"
                aria-label="Close custom enquiry"
                onClick={() => setIsCustomOpen(false)}
              >
                x
              </button>

              {formStatus === "success" ? (
                <div className="custom-enquiry__success">
                  <p className="custom-enquiry__eyebrow">
                    Enquiry Received
                  </p>

                  <h2>Thank you for reaching out!</h2>

                  <p className="custom-enquiry__intro">
                    Your enquiry has been received. I&apos;ll review the
                    details and follow up by email with next steps.
                    If you have any questions in the meantime, please email me 
                    directly at {" "}
                    <a href="mailto:iris@irisoak.dev"
                       className="enquiry-success__email"
                    >
                      iris@irisoak.dev
                    </a>
                  </p>

                  <button
                    type="button"
                    className="button button--primary"
                    onClick={() => setIsCustomOpen(false)}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <p className="custom-enquiry__eyebrow">
                    Custom Project
                  </p>

                  <h2 id="custom-enquiry-title">
                    Tell me what you&apos;re looking to build.
                  </h2>

                  <p className="custom-enquiry__intro">
                    A few details are enough to get started. I&apos;ll review your
                    enquiry and follow up with the next steps.
                  </p>

                  <form
                    className="custom-enquiry__form"
                    onSubmit={handleCustomSubmit}
                  >
                    <label>
                      Name
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                      />
                    </label>

                    <label>
                      Email
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                      />
                    </label>

                    <label>
                      What are you looking to build?
                      <textarea
                        name="project"
                        rows={5}
                        required
                      />
                    </label>

                    <label>
                      Budget range
                        <select name="budget" defaultValue="">
                          <option value="" disabled>
                            Select a range
                          </option>

                          <option value="under-1000">
                            Under £1,000
                          </option>

                          <option value="1000-2500">
                            £1,000-£2,500
                          </option>

                          <option value="2500-5000">
                            £2,500-£5,000
                          </option>

                          <option value="5000-plus">
                            £5,000+
                          </option>

                          <option value="unsure">
                            Not sure yet
                          </option>
                        </select>
                      </label>

                      <label>
                        Timeline
                        <select name="timeline" defaultValue="">
                          <option value="" disabled>
                            Select a timeline
                          </option>

                          <option value="asap">
                            As soon as possible
                          </option>

                          <option value="1-2-months">
                            1-2 Months
                          </option>

                          <option value="3-6-months">
                            3-6 Months
                          </option>

                          <option value="flexible">
                            Flexible
                          </option>
                        </select>
                      </label>

                      <div className="custom-enquiry__consent">
                        <label className="custom-enquiry__consent-label">
                          <input
                            type="checkbox"
                            name="privacyAcknowledgement"
                            checked={customConsentGiven}
                            required
                            aria-invalid={customConsentError}
                            onChange={(event) => {
                              const checked = event.target.checked;

                              setCustomConsentGiven(checked);

                              if (checked) {
                                setCustomConsentError(false);
                              }
                            }}
                          />

                          <span>
                            I confirm that Iris & Oak may use the information provided to respond
                            to this enquiry.{" "}
                            <a
                              href="/privacy"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              See the Privacy Policy.
                            </a>
                          </span>
                        </label>

                        {customConsentError && (
                          <p
                            className="custom-enquiry__consent-error"
                            role="alert"
                          >
                            Please confirm that you have read the privacy information before
                            sending your enquiry.
                          </p>
                        )}
                      </div>

                      {formStatus === "error" && (
                        <p
                          className="custom-enquiry__error"
                          role="alert"
                        >
                          Something went wrong while sending your enquiry.
                          Please try again or email me directly at{" "}
                          <a href="mailto:iris@irisoak.dev">
                            iris@irisoak.dev
                          </a>.
                        </p>
                      )}

                      <button
                        type="submit"
                        className="button button--primary"
                        disabled={formStatus === "sending"}
                      >
                        {formStatus === "sending"
                          ? "Sending..."
                          : "Send Enquiry"}
                      </button>
                    </form>
                  </>
                )}
              </div>
          </div>
        )}
      </Container>
    </section>
  );
}