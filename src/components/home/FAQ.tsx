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
    question: "How is a project priced?",
    answer: (
      <>
        Each project is priced on scope, and you can find my guide prices on the {" "}
        <Link href="/services">Services page</Link>. After a
        quick chat, I'll send a fixed quote before any work begins.
      </>
    ),
  },
  {
    question: "How long does a website take?",
    answer: (
      <>
        Most one-page websites take one to two weeks. Larger sites can take up
        to three. For web apps and custom tools, I'll confirm a timeline once we;ve agreed the scope.
      </>
    ),
  },
  {
    question: "Can I pay in instalments?",
    answer: (
      <>
        Absolutely. You can pay in full or split the project fee into two, three or
        four instalments. Your payment schedule is agreed before work begins.
      </>
    ),
  },
  {
    question: "What do I need to provide?",
    answer: (
      <>
        Your logo, text and any photos you'd like to use. If you don't have
        everything yet, I can help you pull it together.
      </>
    ),
  },
  {
    question: "Can I update the website myself?",
    answer: (
      <>
        Yes. I can set up the parts you'd like to edit yourself, such as text,
        images or opening hours. If you'd prefer not to, a <Link href="/care">Care plan</Link> can cover
        such updates for you.
      </>
    ),
  },
  {
    question: "What happens after launch?",
    answer: (
      <>
        I offer Care plans for updates, monitoring and technical support on a 
        monthly, quarterly or annual basis. See the <Link href="/care">I&O Care page</Link> for
        the available pacakges.
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <Container>
        <div className="faq__intro">
          <h1 className="faq__heading" id="faq-heading">
            Frequently asked questions
          </h1>
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