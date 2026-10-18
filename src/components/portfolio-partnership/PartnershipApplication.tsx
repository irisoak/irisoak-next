"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EnquiryHoneypot from "@/components/enquiry/EnquiryHoneypot";
import { useEnquirySubmit } from "@/components/enquiry/useEnquirySubmit";
import styles from "./PartnershipApplication.module.css";

const FORM_ID = "partnership-application";
const PORTFOLIO_PARTNERSHIP_ENQUIRY = "portfolio-partnership";

type ApplicationState = {
  isOpen: boolean;
  toggle: () => void;
};

const ApplicationContext = createContext<ApplicationState | null>(null);

function useApplication() {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error("Use within PartnershipApplicationProvider.");
  }

  return context;
}

/*
  Shares the open/closed state between the "Apply for the partnership"
  button in the contact section and the application form below it.
*/
export function PartnershipApplicationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ApplicationContext.Provider
      value={{ isOpen, toggle: () => setIsOpen((open) => !open) }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function ApplyButton({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const { isOpen, toggle } = useApplication();

  return (
    <button
      type="button"
      className={`${className} ${styles.applyButton}`}
      aria-expanded={isOpen}
      aria-controls={FORM_ID}
      onClick={toggle}
    >
      {children}
    </button>
  );
}

export function PartnershipApplicationForm() {
  const { isOpen } = useApplication();
  const { status, errorMessage, submitEnquiry } = useEnquirySubmit();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const wasOpen = useRef(false);

  /* Bring the form into view and move focus to it when it opens. */
  useEffect(() => {
    if (isOpen && !wasOpen.current) {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      headingRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      headingRef.current?.focus({ preventScroll: true });
    }

    wasOpen.current = isOpen;
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitEnquiry(event.currentTarget, {
      type: PORTFOLIO_PARTNERSHIP_ENQUIRY,
    });
  }

  return (
    <section
      className={styles.application}
      id={FORM_ID}
      aria-labelledby="partnership-application-heading"
      hidden={!isOpen}
    >
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2
            id="partnership-application-heading"
            ref={headingRef}
            tabIndex={-1}
          >
            Apply for the partnership
          </h2>
          <p>
            A few details are all I need to start. I’ll reply within 3 working
            days.
          </p>
        </div>

        <form
          className={styles.form}
          action="/api/enquiries"
          method="POST"
          onSubmit={handleSubmit}
          aria-labelledby="partnership-application-heading"
        >
          <input
            type="hidden"
            name="type"
            value={PORTFOLIO_PARTNERSHIP_ENQUIRY}
          />

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="partnership-name">Your name</label>
              <input
                id="partnership-name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="partnership-email">Email address</label>
              <input
                id="partnership-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={200}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="partnership-business">Business name</label>
              <input
                id="partnership-business"
                name="organisation"
                type="text"
                autoComplete="organization"
                maxLength={100}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="partnership-website">
                Website URL <span>(optional)</span>
              </label>
              <input
                id="partnership-website"
                name="currentWebsiteUrl"
                type="text"
                inputMode="url"
                autoComplete="url"
                placeholder="e.g. yourbusiness.co.uk"
                maxLength={500}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="partnership-goals">
              Tell me about your business and your website goals
            </label>
            <textarea
              id="partnership-goals"
              name="project"
              rows={4}
              maxLength={5000}
              required
            />
          </div>

          <EnquiryHoneypot idPrefix="partnership" />

          <p className={styles.privacy}>
            Read how your details are handled in the{" "}
            <Link href="/privacy" target="_blank">
              Privacy Policy
            </Link>
            .
          </p>

          <button
            className={styles.submit}
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              "Sending…"
            ) : (
              <>
                Send application <ArrowRight size={16} aria-hidden="true" />
              </>
            )}
          </button>

          <p
            className={`${styles.status} ${
              status === "sent"
                ? styles.statusSent
                : status === "error"
                  ? styles.statusError
                  : ""
            }`}
            role="status"
            aria-live="polite"
          >
            {status === "sent" &&
              "Thank you, your application has been sent. I’ll reply within 3 working days."}
            {status === "error" && errorMessage}
          </p>
        </form>
      </div>
    </section>
  );
}
