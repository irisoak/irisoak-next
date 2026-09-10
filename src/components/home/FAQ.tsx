"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Container from "@/components/layout/Container";

type FAQItem = {
  question: string;
  answer: ReactNode;
  showEssentialsPreview?: boolean;
};

const faqItems: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer: (
      <>
        <strong>Starter Presence</strong> is £295 for a simple, streamlined
        landing page for new and early-stage businesses.
        <br />
        <strong>Website Essentials</strong> is £495 for a more complete
        one-page website with greater structure and flexibility.
        <br />
        <strong>Launch</strong> projects start from £695, while{" "}
        <strong>Refresh</strong> and <strong>Custom</strong> projects are
        quoted according to the scope, support and requirements involved.
      </>
    ),
  },
  {
    question:
      "What's the difference between Starter Presence and Website Essentials?",
    answer: (
      <>
        <strong>Starter Presence</strong> is a lighter starting point using a
        streamlined structure and client-supplied branding, copy and images.
        It&apos;s designed for businesses that need a simple, professional
        place to send customers.
        <br />
        <strong>Website Essentials</strong> provides a more complete one-page
        website with up to four focused sections and a structure shaped more
        closely around your business.
      </>
    ),
    showEssentialsPreview: true,
  },
  {
    question: "How much does care and maintenance cost?",
    answer: (
      <>
        <strong>Site Check-up</strong> is a one-time payment of £149.
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
        <strong>Website Essentials</strong> projects are typically completed
        within <strong>7–14 days</strong>, while <strong>Launch</strong>{" "}
        projects usually take <strong>7–21 days</strong> depending on scope.
        <br />
        <strong>Refresh</strong>, larger or more custom projects may take
        longer, but I&apos;ll always confirm a realistic timeline with you
        before any work begins.
      </>
    ),
  },
  {
    question: "How much does a refresh for my existing website typically cost?",
    answer: (
      <>
        <strong>Refresh</strong> projects are quoted after an initial review of
        your existing website, so the scope and price will reflect what
        actually needs improving or updating.
      </>
    ),
  },
  {
    question: "What happens after I get in touch?",
    answer: (
      <>
        I&apos;ll review your enquiry and follow up by email to talk through
        your goals, requirements, timeline and next steps.
        <br />
        If it feels like a good fit, I&apos;ll send over a clear proposal
        before any work begins.
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [isEssentialsPreviewOpen, setIsEssentialsPreviewOpen] =
    useState(false);

  const toggleItem = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  const closeEssentialsPreview = () => {
    setIsEssentialsPreviewOpen(false);
  };

  /* ========================================
     Essentials Preview — Escape + Scroll
  ======================================== */

  useEffect(() => {
    if (!isEssentialsPreviewOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeEssentialsPreview();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isEssentialsPreviewOpen]);

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
                  <span>
                    {item.question}
                  </span>

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
                  <p>
                    {item.answer}
                  </p>

                  {item.showEssentialsPreview && (
                    <button
                      type="button"
                      className="faq__preview-button"
                      onClick={() =>
                        setIsEssentialsPreviewOpen(true)
                      }
                    >
                      Click here to see →
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Container>

      {/* ========================================
          Website Essentials — Preview Modal
      ======================================== */}

      {isEssentialsPreviewOpen && (
        <div
          className="faq-preview"
          role="dialog"
          aria-modal="true"
          aria-labelledby="essentials-preview-title"
        >
          {/* Backdrop */}

          <button
            type="button"
            className="faq-preview__backdrop"
            aria-label="Close Website Essentials preview"
            onClick={closeEssentialsPreview}
          />

          {/* Modal */}

          <div className="faq-preview__modal">
            {/* Header */}

            <div className="faq-preview__header">
              <div>
                <p className="faq-preview__eyebrow">
                  Website options
                </p>

                <h2 id="essentials-preview-title">
                  See the difference.
                </h2>

                <p>
                  A visual example of how the website options can grow with your
                  business, from a simple Starter Presence through to a larger
                  Launch project.
                </p>
              </div>

              <button
                type="button"
                className="faq-preview__close"
                aria-label="Close preview"
                onClick={closeEssentialsPreview}
              >
                x
              </button>
            </div>

            {/* ========================================
                Service Comparison Preview
            ======================================== */}

            <div className="faq-preview__comparison">
              <img
                src="/images/services/previews/service-comparison.png"
                alt="Visual comparison of Starter Presence, Website Essentials, Launch and an older website suitable for a Refresh"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}