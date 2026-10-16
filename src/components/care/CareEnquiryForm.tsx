"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EnquiryHoneypot from "@/components/enquiry/EnquiryHoneypot";
import { useEnquirySubmit } from "@/components/enquiry/useEnquirySubmit";

/*
  Care enquiry form. Uses the shared enquiry flow with service "care", so
  the email is labelled as a Care enquiry.
*/
export default function CareEnquiryForm() {
  const { status, errorMessage, submitEnquiry } = useEnquirySubmit();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitEnquiry(event.currentTarget);
  }

  return (
    <form
      className="care-enquiry"
      action="/api/enquiries"
      method="POST"
      onSubmit={handleSubmit}
      aria-labelledby="care-cta-title"
    >
      <input type="hidden" name="service" value="care" />

      <div className="care-enquiry__row">
        <div className="care-enquiry__field">
          <label htmlFor="care-name">Your name</label>
          <input
            id="care-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
          />
        </div>

        <div className="care-enquiry__field">
          <label htmlFor="care-email">Email address</label>
          <input
            id="care-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={200}
            required
          />
        </div>
      </div>

      <div className="care-enquiry__field">
        <label htmlFor="care-website-url">Website URL</label>
        <input
          id="care-website-url"
          name="currentWebsiteUrl"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="e.g. yourbusiness.co.uk"
          maxLength={500}
          required
        />
      </div>

      <div className="care-enquiry__field">
        <label htmlFor="care-help">What would you like help with?</label>
        <textarea
          id="care-help"
          name="project"
          rows={4}
          maxLength={5000}
          required
        />
      </div>

      <EnquiryHoneypot idPrefix="care" />

      <p className="care-enquiry__privacy">
        Read how your details are handled in the{" "}
        <Link href="/privacy" target="_blank">
          Privacy Policy
        </Link>
        .
      </p>

      <button
        className="care-button care-enquiry__submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          "Sending…"
        ) : (
          <>
            Send Care enquiry <ArrowRight size={17} aria-hidden="true" />
          </>
        )}
      </button>

      <p
        className={`care-enquiry__status care-enquiry__status--${status}`}
        role="status"
        aria-live="polite"
      >
        {status === "sent" && (
          <>
            Thank you, your Care enquiry has been sent. I’ll reply within 3
            working days.
            <span className="care-enquiry__status-note">
              If you don’t see my reply, please check your spam or junk folder.
            </span>
          </>
        )}
        {status === "error" && errorMessage}
      </p>
    </form>
  );
}
