"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Container from "@/components/layout/Container";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const faqItems: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer: (
      <>
        <strong>Website Essentials</strong> starts at £495 for a streamlined
        one-page website.
        <br />
        <strong>Launch</strong> projects start from £695, while{" "}
        <strong>Refresh</strong> and <strong>Custom</strong> projects are quoted according to the scope,
        support and requirements involved.
      </>
    ),
  },
  {
    question: "How much does care and maintenance cost?",
    answer: (
      <>
        <strong>Site Check-Up</strong> is a one-time payment of £149.
        <br />
        Ongoing <strong>Core Care</strong> starts from{" "}
        <strong>£59/month</strong> or £590/year, with{" "}
        <strong>Growth Care</strong> and <strong>Priority Care</strong> options
        available for businesses that need more regular support.
      </>
    ),
  },
  {
  question: "How long does a project usually take?",
  answer: (
    <>
      Timelines depend on the size of the project.
      <br />
      <strong>Essentials</strong> sites are typically completed within{" "}
      <strong>7–14 days</strong>, while <strong>Launch</strong> projects
      usually take <strong>7–21 days</strong> depending on scope.
      <br />
      <strong>Refresh</strong>, larger or more custom projects may take longer but I'll always confirm a
      realistic timeline with you before any work begins.
    </>
  ),
},
{
  question: "How much does a refresh for my exisiting website typically cost?",
  answer: (
    <>
      <strong>Refresh</strong> projects are quoted after an initial review of
      your existing website, so the scope and price will reflect what actually
      needs improving or updating.
    </>
  ),
},
{
  question: "What happens after I get in touch?",
  answer: (
    <>
      I'll review your enquiry and follow up by email to talk through your
      goals, requirements, timeline and next steps.
      <br />
      If it feels like a good fit, I'll send over a clear proposal
      before any work begins.
    </>
  ),
},
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="faq">
      <Container>
        <p className="faq__eyebrow">
          Frequently Asked Questions
        </p>

        <div className="faq__list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                className={`faq__item ${
                  isOpen ? "faq__item--open" : ""
                }`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(index)}
                >
                  <span>{item.question}</span>

                  <span
                    className="faq__icon"
                    aria-hidden="true"
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                <div
                  id={answerId}
                  className="faq__answer"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}