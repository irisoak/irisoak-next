"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

type Status = "idle" | "sending" | "sent" | "error";

/*
  Links from the Portfolio Partnership page add ?enquiry=portfolio-partnership
  so the enquiry email can be identified as a programme application.
*/
const PORTFOLIO_PARTNERSHIP_ENQUIRY = "portfolio-partnership";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);
    const enquiryType = new URLSearchParams(window.location.search).get(
      "enquiry"
    );

    if (enquiryType === PORTFOLIO_PARTNERSHIP_ENQUIRY) {
      formData.set("type", PORTFOLIO_PARTNERSHIP_ENQUIRY);
    }

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error ?? "Something went wrong. Please try again."
        );
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  return (
    <section
      className="iocontact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <Container className="iocontact__inner">
        <div className="iocontact__intro">
          <p className="iocontact__eyebrow">Let&apos;s collaborate</p>

          <h2 className="iocontact__heading" id="contact-heading">
            Get in touch.
          </h2>

          <p className="iocontact__text">
            Share a little about what you need and I&apos;ll reply within 3
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
            <label htmlFor="contact-message">Any details you&apos;d like to share.</label>
            <textarea
              id="contact-message"
              name="project"
              rows={3}
              maxLength={5000}
              required
            />
          </div>

          {/* Honeypot: hidden from people, bots tend to fill it in */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
          >
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

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
              "Thank you, your enquiry has been sent. I'll reply within 3 working days."}
            {status === "error" && errorMessage}
          </p>
        </form>
      </Container>
    </section>
  );
}