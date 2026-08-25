"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";

type ServiceName = "Launch" | "Refresh" | "Care";

type Service = {
  name: ServiceName;
  description: string;
  price: string;
  details: {
    label: string;
    price?: string;
    description?: string;
  }[];
};

const services: Service[] = [
  {
    name: "Launch",
    description:
      "A focused website to get your business online professionally.",
    price: "From £695",
    details: [
      {
        label: "One Page",
        price: "From £695",
      },
      {
        label: "Up to 5 Pages",
        price: "From £1,295",
      },
    ],
  },
  {
    name: "Refresh",
    description:
      "Improve an existing website with a clearer, more polished experience.",
    price: "From £895",
    details: [
      {
        label: "Website Refresh",
        price: "From £895",
        description:
          "Final pricing is confirmed following an initial review of your existing website.",
      },
    ],
  },
  {
    name: "Care",
    description:
      "Ongoing maintenance, monitoring and technical support for your website.",
    price: "From £89/month",
    details: [
      {
        label: "Essential",
        price: "£89/month",
      },
      {
        label: "Standard",
        price: "£179/month",
      },
      {
        label: "Priority",
        price: "£329/month",
      },
    ],
  },
];

export default function Services() {
  const [openService, setOpenService] = useState<ServiceName | null>(null);

  const toggleService = (serviceName: ServiceName) => {
    setOpenService((current) =>
      current === serviceName ? null : serviceName
    );
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

                  <div className="services__action">
                    <span className="services__price">
                      {service.price}
                    </span>

                    <button
                      type="button"
                      className="services__explore"
                      aria-expanded={isOpen}
                      aria-controls={`service-${service.name.toLowerCase()}`}
                      onClick={() => toggleService(service.name)}
                    >
                      {isOpen ? "Close" : "Explore"}

                      <span aria-hidden="true">
                        {isOpen ? " ×" : " →"}
                      </span>
                    </button>
                  </div>
                </div>

                <div
                  id={`service-${service.name.toLowerCase()}`}
                  className="services__details"
                  hidden={!isOpen}
                >
                  {service.details.map((detail) => (
                    <div
                      className="services__detail"
                      key={detail.label}
                    >
                      <div>
                        <h3>{detail.label}</h3>

                        {detail.description && (
                          <p>{detail.description}</p>
                        )}
                      </div>

                      {detail.price && (
                        <span>{detail.price}</span>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="services__custom">
          <div>
            <p className="services__custom-label">
              Custom Project
            </p>

            <h2>
              Need something more specific?
            </h2>
          </div>

          <button
            type="button"
            className="services__custom-link"
          >
            Custom Enquiry
            <span aria-hidden="true"> ➺</span>
          </button>
        </div>
      </Container>
    </section>
  );
}