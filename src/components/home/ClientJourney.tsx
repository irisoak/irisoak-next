"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/layout/Container";

type JourneyData = {
  name: string;
  organisation: string;
  email: string;
  organisationType: string;
  service: string;

  // Launch
  hasBrand: string;
  pageCount: string;

  // Refresh
  currentWebsiteUrl: string;
  refreshProblem: string;

  // Care
  currentPlatform: string;
  supportType: string;

  // Custom
  customBuild: string;
  integrations: string;

  // Shared
  timeline: string;
  budget: string;
  additionalInformation: string;
};

const initialJourneyData: JourneyData = {
  name: "",
  organisation: "",
  email: "",
  organisationType: "",
  service: "",

  hasBrand: "",
  pageCount: "",

  currentWebsiteUrl: "",
  refreshProblem: "",

  currentPlatform: "",
  supportType: "",

  customBuild: "",
  integrations: "",

  timeline: "",
  budget: "",
  additionalInformation: "",
};

export default function ClientJourney() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [stepOneErrors, setStepOneErrors] = useState({
    name: false,
    email: false,
    organisationType: false,
  });

  const [journeyData, setJourneyData] =
    useState<JourneyData>(initialJourneyData);

  /* ========================================
     Step 1 Validation
  ======================================== */

  const handleStepOneContinue = () => {
    const emailIsValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(journeyData.email);

    const errors = {
      name: journeyData.name.trim() === "",
      email: journeyData.email.trim() === "" || !emailIsValid,
      organisationType: journeyData.organisationType === "",
    };

    setStepOneErrors(errors);

    if (Object.values(errors).some(Boolean)) {
      return;
    }

    setCurrentStep(2);
  };

  /* ========================================
     Display Helpers
  ======================================== */

  const formatValue = (value: string) => {
    if (!value) {
      return "—";
    }

    const displayValues: Record<string, string> = {
      "one-page": "One page",
      "2-5-pages": "2-5 Pages",
      "more-than-5": "More than 5 Pages",

      "1-3-months": "1-3 Months",
      "3-6-months": "3-6 Months",

      asap: "As soon as possible",
      exploring: "Just exploring ideas",
      flexible: "My timeline is flexible",
      unsure: "I'm not sure yet",

      yes: "Yes",
      no: "No",
      partial: "Partially / still working on it",

      individual: "An Individual",
      "sole-trader": "A Sole Trader",
      startup: "A Startup",
      "small-business": "A Small Business",
      "medium-business": "A Medium-Sized Business",
      charity: "A Charity",
      "community-organisation": "A Community Organisation",

      wordpress: "WordPress",
      squarespace: "Squarespace",
      shopify: "Shopify",
      custom: "Custom-built",
      other: "Other",

      maintenance: "Maintenance and security",
      "content-changes": "Small website or content changes",
      "technical-support": "Ongoing technical support",
      improvements: "Performance or accessibility improvements",
    };

    return (
      displayValues[value] ??
      value
        .replaceAll("-", " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase())
    );
  };

  const getServiceName = () => {
    switch (journeyData.service) {
      case "launch":
        return "Launch";
      case "refresh":
        return "Refresh";
      case "care":
        return "Care";
      case "custom":
        return "Custom Project";
      default:
        return "—";
    }
  };

  /* ========================================
     Reset Journey
  ======================================== */

  const resetJourney = () => {
    setCurrentStep(1);
    setJourneyData(initialJourneyData);
    setConsentGiven(false);
    setConsentError(false);
    setFormStatus("idle");

    setStepOneErrors({
      name: false,
      email: false,
      organisationType: false,
    });
  };

  /* ========================================
     Submit Enquiry
  ======================================== */

  const handleJourneySubmit = async () => {
    if (!consentGiven) {
      setConsentError(true);
      return;
    }

    setConsentError(false);
    setFormStatus("sending");

    const enquiry = {
      service: journeyData.service,
      name: journeyData.name,
      email: journeyData.email,
      organisation: journeyData.organisation,
      organisationType: journeyData.organisationType,

      hasBrand: journeyData.hasBrand,
      pageCount: journeyData.pageCount,

      currentWebsiteUrl: journeyData.currentWebsiteUrl,
      refreshProblem: journeyData.refreshProblem,

      currentPlatform: journeyData.currentPlatform,
      supportType: journeyData.supportType,

      customBuild: journeyData.customBuild,
      integrations: journeyData.integrations,

      timeline: journeyData.timeline,
      budget: journeyData.budget,
      additionalInformation: journeyData.additionalInformation,

      project:
        journeyData.customBuild ||
        journeyData.refreshProblem ||
        journeyData.additionalInformation ||
        `${getServiceName()} enquiry`,
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiry),
      });

      if (!response.ok) {
        throw new Error("Enquiry submission failed.");
      }

      setFormStatus("success");
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <section id="client-journey" className="client-journey">
      <Container>
        {/* ========================================
            Introduction
        ======================================== */}

        <div className="client-journey__header">
          <p className="client-journey__eyebrow">Start a project</p>

          <h2 className="client-journey__title">
            Tell me a little about what you need.
          </h2>

          <p className="client-journey__intro">
            I&apos;ll guide you through a few short steps so I can understand
            your business, your project and what would make the most sense for
            you.
          </p>

          {!isJourneyOpen && (
            <button
              type="button"
              className="client-journey__toggle"
              aria-expanded={isJourneyOpen}
              aria-controls="client-journey-form"
              onClick={() => setIsJourneyOpen(true)}
            >
              Start the Conversation <span aria-hidden="true">→</span>
            </button>
          )}
        </div>

        {/* ========================================
            Expanded Journey
        ======================================== */}

        {isJourneyOpen && (
          <div
            id="client-journey-form"
            className="client-journey__expanded"
          >
            <button
              type="button"
              className="client-journey__close"
              aria-label="Close client journey form"
              onClick={() => setIsJourneyOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>

            {/* ========================================
                Progress
            ======================================== */}

            {formStatus !== "success" && (
              <nav
                className="journey-progress"
                aria-label="Client Journey progress"
              >
                <p
                  className="journey-progress__status"
                  aria-live="polite"
                >
                  Step {currentStep} of 4
                </p>

                <ol className="journey-progress__list">
                  {[
                    "About you",
                    "Your needs",
                    "Your project",
                    "Review and send",
                  ].map((label, index) => {
                    const step = index + 1;
                    const isActive = currentStep === step;

                    return (
                      <li
                        key={label}
                        className={`journey-progress__item ${
                          isActive ? "is-active" : ""
                        }`}
                        aria-current={isActive ? "step" : undefined}
                      >
                        <span className="journey-progress__number">
                          {step}
                        </span>

                        <span className="journey-progress__label">
                          {label}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            )}

            {/* ========================================
                Step 1 — About You
            ======================================== */}

            {currentStep === 1 && formStatus !== "success" && (
              <form
                className="client-journey-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleStepOneContinue();
                }}
              >
                <fieldset className="form-section journey-step">
                  <legend>About you</legend>

                  <div className="form-grid form-grid--two">
                    <div className="form-field">
                      <label htmlFor="journey-name">
                        Your name{" "}
                        <span
                          className="form-required"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      </label>

                      <input
                        id="journey-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={journeyData.name}
                        aria-invalid={stepOneErrors.name}
                        className={
                          stepOneErrors.name
                            ? "form-field--error"
                            : undefined
                        }
                        onChange={(event) => {
                          setJourneyData((current) => ({
                            ...current,
                            name: event.target.value,
                          }));

                          setStepOneErrors((current) => ({
                            ...current,
                            name: false,
                          }));
                        }}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="journey-organisation">
                        Business name (optional)
                      </label>

                      <input
                        id="journey-organisation"
                        name="organisation"
                        type="text"
                        autoComplete="organization"
                        value={journeyData.organisation}
                        onChange={(event) =>
                          setJourneyData((current) => ({
                            ...current,
                            organisation: event.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="form-grid form-grid--two">
                    <div className="form-field">
                      <label htmlFor="journey-email">
                        Email address{" "}
                        <span
                          className="form-required"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      </label>

                      <input
                        id="journey-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={journeyData.email}
                        aria-invalid={stepOneErrors.email}
                        className={
                          stepOneErrors.email
                            ? "form-field--error"
                            : undefined
                        }
                        onChange={(event) => {
                          setJourneyData((current) => ({
                            ...current,
                            email: event.target.value,
                          }));

                          setStepOneErrors((current) => ({
                            ...current,
                            email: false,
                          }));
                        }}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="journey-organisation-type">
                        I&apos;m reaching out as...{" "}
                        <span
                          className="form-required"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      </label>

                      <select
                        id="journey-organisation-type"
                        name="organisationType"
                        required
                        value={journeyData.organisationType}
                        aria-invalid={stepOneErrors.organisationType}
                        className={
                          stepOneErrors.organisationType
                            ? "form-field--error"
                            : undefined
                        }
                        onChange={(event) => {
                          setJourneyData((current) => ({
                            ...current,
                            organisationType: event.target.value,
                          }));

                          setStepOneErrors((current) => ({
                            ...current,
                            organisationType: false,
                          }));
                        }}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="individual">An Individual</option>
                        <option value="sole-trader">A Sole Trader</option>
                        <option value="startup">A Startup</option>
                        <option value="small-business">
                          A Small Business
                        </option>
                        <option value="medium-business">
                          A Medium-Sized Business
                        </option>
                        <option value="charity">A Charity</option>
                        <option value="community-organisation">
                          A Community Organisation
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="journey-navigation journey-navigation--forward">
                    <button
                      type="submit"
                      className="button button--primary"
                    >
                      Continue
                    </button>
                  </div>
                </fieldset>
              </form>
            )}

            {/* ========================================
                Step 2 — Your Needs
            ======================================== */}

            {currentStep === 2 && formStatus !== "success" && (
              <form
                className="client-journey-form"
                onSubmit={(event) => {
                  event.preventDefault();

                  if (!journeyData.service) {
                    return;
                  }

                  setCurrentStep(3);
                }}
              >
                <fieldset className="form-section journey-step">
                  <legend>Your needs</legend>

                  <p className="form-hint">
                    Choose the option that feels closest. You can change it
                    later if you need to.
                  </p>

                  <div className="service-options">
                    <label
                      className={`choice-card ${
                        journeyData.service === "launch"
                          ? "choice-card--selected"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value="launch"
                        checked={journeyData.service === "launch"}
                        onChange={(event) =>
                          setJourneyData((current) => ({
                            ...current,
                            service: event.target.value,
                          }))
                        }
                      />

                      <span>
                        <strong>Launch</strong>
                        <small>
                          A focused website to get your business online
                          professionally.
                        </small>
                      </span>
                    </label>

                    <label
                      className={`choice-card ${
                        journeyData.service === "refresh"
                          ? "choice-card--selected"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value="refresh"
                        checked={journeyData.service === "refresh"}
                        onChange={(event) =>
                          setJourneyData((current) => ({
                            ...current,
                            service: event.target.value,
                          }))
                        }
                      />

                      <span>
                        <strong>Refresh</strong>
                        <small>
                          Improve or redesign an existing website with a clearer,
                          more polished experience.
                        </small>
                      </span>
                    </label>

                    <label
                      className={`choice-card ${
                        journeyData.service === "care"
                          ? "choice-card--selected"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value="care"
                        checked={journeyData.service === "care"}
                        onChange={(event) =>
                          setJourneyData((current) => ({
                            ...current,
                            service: event.target.value,
                          }))
                        }
                      />

                      <span>
                        <strong>Care</strong>
                        <small>
                          Ongoing maintenance, technical support and improvements
                          for your website.
                        </small>
                      </span>
                    </label>

                    <label
                      className={`choice-card ${
                        journeyData.service === "custom"
                          ? "choice-card--selected"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value="custom"
                        checked={journeyData.service === "custom"}
                        onChange={(event) =>
                          setJourneyData((current) => ({
                            ...current,
                            service: event.target.value,
                          }))
                        }
                      />

                      <span>
                        <strong>Custom Project</strong>
                        <small>
                          Something more specific, technical or tailored to your
                          business.
                        </small>
                      </span>
                    </label>
                  </div>

                  <div className="journey-navigation">
                    <button
                      type="button"
                      className="button button--secondary"
                      onClick={() => setCurrentStep(1)}
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="button button--primary"
                      disabled={!journeyData.service}
                    >
                      Continue
                    </button>
                  </div>
                </fieldset>
              </form>
            )}

            {/* ========================================
                Step 3 — Your Project
            ======================================== */}

            {currentStep === 3 && formStatus !== "success" && (
              <form
                className="client-journey-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setCurrentStep(4);
                }}
              >
                <fieldset className="form-section journey-step">
                  <legend>Your project</legend>

                  <p className="form-hint">
                    A few details will help me understand what would make the
                    most sense for your project.
                  </p>

                  {/* Launch */}

                  {journeyData.service === "launch" && (
                    <>
                      <div className="form-field">
                        <label htmlFor="journey-brand">
                          Do you have an existing brand or logo?
                        </label>

                        <select
                          id="journey-brand"
                          name="hasBrand"
                          value={journeyData.hasBrand}
                          onChange={(event) =>
                            setJourneyData((current) => ({
                              ...current,
                              hasBrand: event.target.value,
                            }))
                          }
                        >
                          <option value="">Select an option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="partial">
                            Partially / still working on it
                          </option>
                        </select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="journey-page-count">
                          Roughly how many pages do you think you&apos;ll need?
                        </label>

                        <select
                          id="journey-page-count"
                          name="pageCount"
                          value={journeyData.pageCount}
                          onChange={(event) =>
                            setJourneyData((current) => ({
                              ...current,
                              pageCount: event.target.value,
                            }))
                          }
                        >
                          <option value="">Select an option</option>
                          <option value="one-page">One page</option>
                          <option value="2-5-pages">2–5 pages</option>
                          <option value="more-than-5">
                            More than 5 pages
                          </option>
                          <option value="unsure">
                            I&apos;m not sure yet
                          </option>
                        </select>
                      </div>
                    </>
                  )}

                  {/* Refresh */}

                  {journeyData.service === "refresh" && (
                    <>
                      <div className="form-field">
                        <label htmlFor="journey-current-url">
                          What&apos;s your current website URL?
                        </label>

                        <input
                          id="journey-current-url"
                          name="currentWebsiteUrl"
                          type="url"
                          placeholder="https://"
                          value={journeyData.currentWebsiteUrl}
                          onChange={(event) =>
                            setJourneyData((current) => ({
                              ...current,
                              currentWebsiteUrl: event.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="journey-refresh-problem">
                          What&apos;s not working about it?
                        </label>

                        <textarea
                          id="journey-refresh-problem"
                          name="refreshProblem"
                          rows={5}
                          value={journeyData.refreshProblem}
                          onChange={(event) =>
                            setJourneyData((current) => ({
                              ...current,
                              refreshProblem: event.target.value,
                            }))
                          }
                        />
                      </div>
                    </>
                  )}

                  {/* Care */}

                  {journeyData.service === "care" && (
                    <>
                      <div className="form-field">
                        <label htmlFor="journey-platform">
                          What platform is your site built on?
                        </label>

                        <select
                          id="journey-platform"
                          name="currentPlatform"
                          value={journeyData.currentPlatform}
                          onChange={(event) =>
                            setJourneyData((current) => ({
                              ...current,
                              currentPlatform: event.target.value,
                            }))
                          }
                        >
                          <option value="">Select an option</option>
                          <option value="wordpress">WordPress</option>
                          <option value="squarespace">Squarespace</option>
                          <option value="shopify">Shopify</option>
                          <option value="custom">Custom-built</option>
                          <option value="other">Other</option>
                          <option value="unsure">I&apos;m not sure</option>
                        </select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="journey-support-type">
                          What kind of support are you looking for?
                        </label>

                        <select
                          id="journey-support-type"
                          name="supportType"
                          value={journeyData.supportType}
                          onChange={(event) =>
                            setJourneyData((current) => ({
                              ...current,
                              supportType: event.target.value,
                            }))
                          }
                        >
                          <option value="">Select an option</option>
                          <option value="maintenance">
                            Maintenance and security
                          </option>
                          <option value="content-changes">
                            Small website or content changes
                          </option>
                          <option value="technical-support">
                            Ongoing technical support
                          </option>
                          <option value="improvements">
                            Performance or accessibility improvements
                          </option>
                          <option value="unsure">
                            I&apos;m not sure yet
                          </option>
                        </select>
                      </div>
                    </>
                  )}

                  {/* Custom */}

                  {journeyData.service === "custom" && (
                    <>
                      <div className="form-field">
                        <label htmlFor="journey-custom-build">
                          What are you trying to build?
                        </label>

                        <textarea
                          id="journey-custom-build"
                          name="customBuild"
                          rows={6}
                          value={journeyData.customBuild}
                          onChange={(event) =>
                            setJourneyData((current) => ({
                              ...current,
                              customBuild: event.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="journey-integrations">
                          Any integrations needed?
                        </label>

                        <textarea
                          id="journey-integrations"
                          name="integrations"
                          rows={4}
                          placeholder="For example: payments, bookings, CRM, APIs or email services"
                          value={journeyData.integrations}
                          onChange={(event) =>
                            setJourneyData((current) => ({
                              ...current,
                              integrations: event.target.value,
                            }))
                          }
                        />
                      </div>
                    </>
                  )}

                  {/* Shared Project Details */}

                  <div className="form-grid form-grid--two">
                    <div className="form-field">
                      <label htmlFor="journey-timeline">
                        When would you like to get started?
                      </label>

                      <select
                        id="journey-timeline"
                        name="timeline"
                        value={journeyData.timeline}
                        onChange={(event) =>
                          setJourneyData((current) => ({
                            ...current,
                            timeline: event.target.value,
                          }))
                        }
                      >
                        <option value="">Select an option</option>
                        <option value="asap">
                          As soon as possible
                        </option>
                        <option value="1-3-months">
                          Within 1–3 months
                        </option>
                        <option value="3-6-months">
                          Within 3–6 months
                        </option>
                        <option value="exploring">
                          Just exploring ideas
                        </option>
                        <option value="flexible">
                          My timeline is flexible
                        </option>
                        <option value="unsure">
                          I&apos;m not sure yet
                        </option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="journey-budget">
                        Do you have a budget in mind?
                      </label>

                      <input
                        id="journey-budget"
                        name="budget"
                        type="text"
                        placeholder="For example: unsure, flexible or around £2,000"
                        value={journeyData.budget}
                        onChange={(event) =>
                          setJourneyData((current) => ({
                            ...current,
                            budget: event.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="journey-additional-information">
                      Is there anything else I should know?
                    </label>

                    <textarea
                      id="journey-additional-information"
                      name="additionalInformation"
                      rows={5}
                      value={journeyData.additionalInformation}
                      onChange={(event) =>
                        setJourneyData((current) => ({
                          ...current,
                          additionalInformation: event.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="journey-navigation">
                    <button
                      type="button"
                      className="button button--secondary"
                      onClick={() => setCurrentStep(2)}
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="button button--primary"
                    >
                      Review your enquiry
                    </button>
                  </div>
                </fieldset>
              </form>
            )}

            {/* ========================================
                Step 4 — Review and Send
            ======================================== */}

            {currentStep === 4 && formStatus !== "success" && (
              <div className="client-journey-form journey-step journey-step--review">
                <header className="review-header">
                  <p className="client-journey__eyebrow">
                    Review your enquiry
                  </p>

                  <h2>Check everything looks right.</h2>

                  <p>
                    Review the details below before sending your enquiry. You
                    can go back and amend any section if something needs
                    changing.
                  </p>
                </header>

                <div className="review-sections">
                  {/* About You */}

                  <section
                    className="review-section"
                    aria-labelledby="review-about-title"
                  >
                    <div className="review-section__header">
                      <h3 id="review-about-title">About you</h3>

                      <button
                        type="button"
                        className="review-edit-button"
                        onClick={() => setCurrentStep(1)}
                      >
                        Amend
                      </button>
                    </div>

                    <dl className="review-list">
                      <div>
                        <dt>Name</dt>
                        <dd>{journeyData.name || "—"}</dd>
                      </div>

                      <div>
                        <dt>Business name</dt>
                        <dd>{journeyData.organisation || "—"}</dd>
                      </div>

                      <div>
                        <dt>Email address</dt>
                        <dd>{journeyData.email || "—"}</dd>
                      </div>

                      <div>
                        <dt>Reaching out as</dt>
                        <dd>{formatValue(journeyData.organisationType)}</dd>
                      </div>
                    </dl>
                  </section>

                  {/* Your Needs */}

                  <section
                    className="review-section"
                    aria-labelledby="review-needs-title"
                  >
                    <div className="review-section__header">
                      <h3 id="review-needs-title">Your needs</h3>

                      <button
                        type="button"
                        className="review-edit-button"
                        onClick={() => setCurrentStep(2)}
                      >
                        Amend
                      </button>
                    </div>

                    <dl className="review-list">
                      <div>
                        <dt>Service</dt>
                        <dd>{getServiceName()}</dd>
                      </div>
                    </dl>
                  </section>

                  {/* Your Project */}

                  <section
                    className="review-section"
                    aria-labelledby="review-project-title"
                  >
                    <div className="review-section__header">
                      <h3 id="review-project-title">Your project</h3>

                      <button
                        type="button"
                        className="review-edit-button"
                        onClick={() => setCurrentStep(3)}
                      >
                        Amend
                      </button>
                    </div>

                    <dl className="review-list">
                      {journeyData.service === "launch" && (
                        <>
                          <div>
                            <dt>Existing brand / logo</dt>
                            <dd>{formatValue(journeyData.hasBrand)}</dd>
                          </div>

                          <div>
                            <dt>Estimated pages</dt>
                            <dd>{formatValue(journeyData.pageCount)}</dd>
                          </div>
                        </>
                      )}

                      {journeyData.service === "refresh" && (
                        <>
                          <div>
                            <dt>Current website</dt>
                            <dd>{journeyData.currentWebsiteUrl || "—"}</dd>
                          </div>

                          <div>
                            <dt>What isn&apos;t working</dt>
                            <dd>{journeyData.refreshProblem || "—"}</dd>
                          </div>
                        </>
                      )}

                      {journeyData.service === "care" && (
                        <>
                          <div>
                            <dt>Current platform</dt>
                            <dd>
                              {formatValue(journeyData.currentPlatform)}
                            </dd>
                          </div>

                          <div>
                            <dt>Support needed</dt>
                            <dd>{formatValue(journeyData.supportType)}</dd>
                          </div>
                        </>
                      )}

                      {journeyData.service === "custom" && (
                        <>
                          <div>
                            <dt>What you&apos;re trying to build</dt>
                            <dd>{journeyData.customBuild || "—"}</dd>
                          </div>

                          <div>
                            <dt>Integrations</dt>
                            <dd>{journeyData.integrations || "—"}</dd>
                          </div>
                        </>
                      )}

                      <div>
                        <dt>Preferred timeline</dt>
                        <dd>{formatValue(journeyData.timeline)}</dd>
                      </div>

                      <div>
                        <dt>Budget</dt>
                        <dd>{journeyData.budget || "—"}</dd>
                      </div>

                      <div>
                        <dt>Additional information</dt>
                        <dd>{journeyData.additionalInformation || "—"}</dd>
                      </div>
                    </dl>
                  </section>
                </div>

                {/* ========================================
                    Final Confirmation
                ======================================== */}

                <div className="review-submit-intro">
                  <h2>Ready to send your enquiry?</h2>

                  <p>
                    Once you&apos;re happy with the information above, send your
                    enquiry to Iris & Oak.
                  </p>
                </div>

                {formStatus === "error" && (
                  <p
                    className="client-journey__error"
                    role="alert"
                  >
                    Something went wrong while sending your enquiry. Please try
                    again or email me directly at{" "}
                    <a href="mailto:iris@irisoak.dev">
                      iris@irisoak.dev
                    </a>
                    .
                  </p>
                )}

                <div className="form-actions">
                  <button
                    type="button"
                    className="button button--secondary"
                    onClick={() => setCurrentStep(3)}
                  >
                    Back
                  </button>

                  <div>
                    <label className="form-confirmation">
                      <input
                        id="enquiry-consent"
                        name="enquiryConsent"
                        type="checkbox"
                        checked={consentGiven}
                        aria-invalid={consentError}
                        onChange={(event) => {
                          const checked = event.target.checked;

                          setConsentGiven(checked);

                          if (checked) {
                            setConsentError(false);
                          }
                        }}
                      />

                      <span>
                        I confirm that Iris & Oak may use the information provided to respond to this enquiry. See the{" "}
                        <a
                          href="/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy.
                        </a>  
                      </span>
                    </label>

                    {consentError && (
                      <p
                        className="form-confirmation__error"
                        role="alert"
                      >
                        Please confirm before submitting your enquiry.
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    className="button button--primary"
                    onClick={handleJourneySubmit}
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending"
                      ? "Sending…"
                      : "Send enquiry"}
                  </button>
                </div>
              </div>
            )}

            {/* ========================================
                Success
            ======================================== */}

            {formStatus === "success" && (
              <div
                className="client-journey__success"
                role="status"
              >
                <p className="client-journey__eyebrow">
                  Enquiry received
                </p>

                <h2>Thank you, {journeyData.name}.</h2>

                <p>
                  Sent! I&apos;ll be in touch soon.
                </p>

                <p>
                  If you have any questions in the meantime, please email me directly
                  at{" "}
                  <a href="mailto:iris@irisoak.dev">
                    iris@irisoak.dev
                  </a>
                  .
                </p>

                <button
                  type="button"
                  className="button button--primary"
                  onClick={() => {
                    resetJourney();
                    setIsJourneyOpen(false);
                  }}
                >
                  Return to Iris & Oak
                </button>
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}