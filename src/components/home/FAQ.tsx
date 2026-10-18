"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
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
        Each project is priced on scope, and you can find my guide prices on the {" "}
        <Link href="/services">Services page</Link>. After a
        quick chat, I’ll send a fixed quote before any work begins.
      </>
    ),
  },
  {
    question: "How long does a website take?",
    answer: (
      <>
        Most one-page websites take <strong>one to two weeks</strong>. Larger sites usually take{" "}
        <strong>three to four weeks</strong>. For web apps and custom tools, I’ll confirm a timeline once we’ve agreed the scope.
      </>
    ),
  },
  {
    question: "Can I pay in instalments?",
    answer: (
      <>
        Absolutely. You can <strong>pay in full</strong> or split the project fee into <strong>two, three or
        four instalments</strong>. Your payment schedule is agreed before work begins.
      </>
    ),
  },
  {
    question: "What do I need to provide?",
    answer: (
      <>
        Your logo, text and any photos you’d like to use. If you don’t have
        everything yet, I can help you pull it together.
      </>
    ),
  },
  {
    question: "Can I update the website myself?",
    answer: (
      <>
        <strong>Yes</strong>. I can set up the parts you’d like to edit yourself, such as text,
        images or opening hours. If you’d prefer not to, a <strong><Link href="/care">maintenance plan</Link></strong> can cover
        such updates for you.
      </>
    ),
  },
  {
    question: "What happens after launch?",
    answer: (
      <>
        I offer website maintenance for updates, monitoring and technical support on a <strong>one-off, monthly</strong>, 
        or <strong>annual basis</strong>. Please see the <Link href="/care">Care page</Link> for
        more details.
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <Container>
        <div className="faq__intro">
          <h2 className="faq__heading" id="faq-heading">
            Frequently asked questions
          </h2>
        </div>

        <div className="faq__list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                className={`faq__item${isOpen ? " faq__item--open" : ""}`}
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
                  <span className="faq__icon" aria-hidden="true">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                <div
                  className="faq__answer"
                  id={answerId}
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