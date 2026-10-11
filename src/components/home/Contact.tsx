"use client";

import { useState, type FormEvent } from "react";
import Container from "@/components/layout/Container";
import Button from "../ui/Button";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
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
            Share a little about what you need and I&apos;ll reply within two
            business days.
          </p>
        </div>

        <form
          className="iocontact__form"
          action="/api/contact"
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
            <label htmlFor="contact-company">Business name</label>
            <input
              id="contact-company"
              name="company"
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
              name="message"
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
            <label htmlFor="contact-company">Company</label>
            <input
              id="contact-company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

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
              "Thank you, your enquiry has been sent. I'll be in touch within two business days."}
            {status === "error" && errorMessage}
          </p>
        </form>
      </Container>
    </section>
  );
}