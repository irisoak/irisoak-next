"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import EnquiryHoneypot from "@/components/enquiry/EnquiryHoneypot";
import { useEnquirySubmit } from "@/components/enquiry/useEnquirySubmit";

/*
  Links from the Portfolio Partnership page add ?enquiry=portfolio-partnership
  so the enquiry email can be identified as a programme application.
*/
const PORTFOLIO_PARTNERSHIP_ENQUIRY = "portfolio-partnership";

export default function Contact() {
  const { status, errorMessage, submitEnquiry } = useEnquirySubmit();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enquiryType = new URLSearchParams(window.location.search).get(
      "enquiry"
    );

    await submitEnquiry(
      event.currentTarget,
      enquiryType === PORTFOLIO_PARTNERSHIP_ENQUIRY
        ? { type: PORTFOLIO_PARTNERSHIP_ENQUIRY }
        : {}
    );
  }

  return (
    <section
      className="iocontact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <Container className="iocontact__inner">
        <div className="iocontact__intro">
          <p className="iocontact__eyebrow">Let’s collaborate</p>

          <h2 className="iocontact__heading" id="contact-heading">
            Get in touch.
          </h2>

          <p className="iocontact__text">
            Share a little about what you need and I’ll reply within 3
            working days.
          </p>
        </div>

        <form
          className="iocontact__form"
          action="/api/enquiries"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="iocontact__field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={100}
              required
            />
          </div>

          <div className="iocontact__field">
            <label htmlFor="contact-company">Business name (optional)</label>
            <input
              id="contact-company"
              name="organisation"
              type="text"
              autoComplete="organization"
              maxLength={100}
            />
          </div>

          <div className="iocontact__field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={200}
              required
            />
          </div>

          <div className="iocontact__field iocontact__field--message">
            <label htmlFor="contact-message">Any details you’d like to share.</label>
            <textarea
              id="contact-message"
              name="project"
              rows={3}
              maxLength={5000}
              required
            />
          </div>

          <EnquiryHoneypot idPrefix="contact" />

          <p className="iocontact__privacy">
            Read how your details are handled in the{" "}
            <Link
              href="/privacy"
              target="_blank"
            >
              Privacy Policy
            </Link>.
          </p>

          <button
            className="iocontact__submit"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              "Sending…"
            ) : (
              <>
                Send enquiry <span aria-hidden="true">→</span>
              </>
            )}
          </button>

          <p
            className={`iocontact__status iocontact__status--${status}`}
            role="status"
            aria-live="polite"
          >
            {status === "sent" &&
              "Thank you, your enquiry has been sent. I’ll reply within 3 working days."}
            {status === "error" && errorMessage}
          </p>
        </form>
      </Container>
    </section>
  );
}