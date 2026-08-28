"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Projects start from £695 for a focused one-page website. Larger websites, refreshes and custom projects are quoted based on the scope, features and support you need.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "A focused website can usually be completed within a few weeks, while larger or more complex projects may take longer. I'll confirm a realistic timeline before any work begins.",
  },
  {
    question: "What happens after I get in touch?",
    answer:
      "I'll review your enquiry and follow up by email to talk through your goals, requirements, timeline and next steps. If we're a good fit, I'll then send over a clear proposal before work begins.",
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