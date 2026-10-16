"use client";

import { useState } from "react";

export type EnquiryStatus = "idle" | "sending" | "sent" | "error";

const FALLBACK_ERROR = "Something went wrong. Please try again.";

/*
  Shared submission flow for the site's enquiry forms. Posts the form's
  fields, plus any extra fields, to /api/enquiries and tracks the state.
*/
export function useEnquirySubmit() {
  const [status, setStatus] = useState<EnquiryStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submitEnquiry(
    form: HTMLFormElement,
    extraFields: Record<string, string> = {}
  ) {
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);

    for (const [name, value] of Object.entries(extraFields)) {
      formData.set(name, value);
    }

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error ?? FALLBACK_ERROR);
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : FALLBACK_ERROR);
      setStatus("error");
    }
  }

  return { status, errorMessage, submitEnquiry };
}
