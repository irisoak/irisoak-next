import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Container from "@/components/layout/Container";
import AnalyticsPreference from "@/components/privacy/AnalyticsPreference";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Iris & Oak collects, uses and protects personal information when you visit the website, submit an enquiry or become a client.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <Container>
        <header className="privacy-page__header">
          <p className="privacy-page__eyebrow">Privacy</p>

          <h1>Privacy Policy</h1>

          <p className="privacy-page__intro">
            This Privacy Policy explains how Iris & Oak collects, uses and
            handles personal information when you visit the website, submit an
            enquiry or become a client.
          </p>

          <p className="privacy-page__updated">
            Last updated: 12 October 2026
          </p>
        </header>

        <div className="privacy-page__content">
          <section>
            <h2>1. Who is responsible for your information?</h2>

            <p>
              Iris & Oak is responsible for the personal information collected
              through this website and through direct enquiries relating to its
              services.
            </p>

            <p>
              If you have a question about this Privacy Policy or how your
              information is handled, you can contact Iris & Oak at{" "}
              <a href="mailto:contact@irisoak.dev">contact@irisoak.dev</a>.
            </p>
          </section>

          <section>
            <h2>2. Information I may collect</h2>

            <p>
              When you submit an enquiry through the contact form on this
              website, I collect the information you choose to provide:
            </p>

            <ul>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your business name, if you include it</li>
              <li>
                The details you share about your business, website or project
              </li>
            </ul>

            <p>
              If you reach the contact form from the Portfolio Partnership
              Programme page, your enquiry is also marked as a Portfolio
              Partnership enquiry so that it can be reviewed as an application
              for the programme.
            </p>

            <p>
              If you email Iris & Oak directly, I will receive the information
              you include in your email.
            </p>

            <p>
              If you become a client, I may also collect information reasonably
              required to manage the project, communicate with you, prepare
              estimates or invoices and receive payment.
            </p>
          </section>

          <section>
            <h2>3. How your information is used</h2>

            <p>I may use your personal information to:</p>

            <ul>
              <li>Review and respond to your enquiry</li>
              <li>Send you an automatic email confirming your enquiry was received</li>
              <li>
                Consider whether your business is a good fit for the Portfolio
                Partnership Programme, if you apply for it
              </li>
              <li>Discuss your project or requirements with you</li>
              <li>Prepare estimates, proposals or invoices</li>
              <li>Provide services that you have requested</li>
              <li>Communicate with you about an active project</li>
              <li>Maintain appropriate business and financial records</li>
              <li>Meet applicable legal, accounting or tax obligations</li>
              <li>Protect the website and business from misuse or security issues</li>
            </ul>

            <p>
              Enquiries submitted through the website are sent by email to Iris
              & Oak. The website itself does not save enquiry details to a
              database.
            </p>

            <p>
              If you take part in the Portfolio Partnership Programme, the
              completed website may be featured as a portfolio case study. You
              will approve the final case-study content before it is published.
            </p>

            <p>
              Information submitted through an enquiry will not be added to a
              marketing mailing list simply because you contacted Iris & Oak.
            </p>
          </section>

          <section>
            <h2>4. Lawful basis for using your information</h2>

            <p>
              Iris & Oak only uses personal information where there is an
              appropriate lawful basis for doing so.
            </p>

            <p>
              Depending on the circumstances, this may include processing that
              is necessary to take steps at your request before entering into a
              contract, processing required to perform a contract with you,
              compliance with legal obligations, or legitimate interests in
              operating and protecting the business.
            </p>
          </section>

          <section>
            <h2>5. Services that may process your information</h2>

            <p>
              Iris & Oak uses third-party services to operate the website and
              provide business services. Where relevant, these providers may
              process limited personal information on behalf of Iris & Oak or
              as part of providing their own services.
            </p>

            <div className="privacy-page__provider">
              <h3>Vercel</h3>

              <p>
                The Iris & Oak Next.js website is hosted on Vercel’s Pro
                plan. Vercel may process technical information as part of hosting, securing
                and delivering the website.
              </p>

              <p>
                Iris & Oak also uses Vercel Web Analytics to understand how the
                website is used and to help improve its content, performance and
                user experience. The analytics service provides aggregated website
                statistics such as page views, referring websites, approximate
                geographic location, browser, operating system and device type.
              </p>
            </div>

            <div className="privacy-page__provider">
              <h3>Resend</h3>

              <p>
                Resend is used to deliver the emails created when you submit
                an enquiry: a notification to Iris & Oak containing the details
                you submitted, and a confirmation email to the address you
                provide.
              </p>

              <p>
                Iris & Oak uses Resend’s Free plan. On this plan, Resend
                states that it keeps the content of these emails, along with
                delivery events and logs, for 30 days. It stores this
                information in the United States.
              </p>
            </div>

            <div className="privacy-page__provider">
              <h3>Google Workspace</h3>

              <p>
                Enquiry emails are received and stored in the Iris & Oak
                Google Workspace mailbox, where they are kept for the period
                described in section 7.
              </p>
            </div>

            <div className="privacy-page__provider">
              <h3>Stripe</h3>

              <p>
                If you become a client, Stripe may be used for services such as
                estimates, invoicing and payment processing. Information
                required for those services may be processed by Stripe under
                its own privacy terms.
              </p>

              <p>
                Iris & Oak does not currently collect card details directly
                through the public website.
              </p>
            </div>

            <div className="privacy-page__provider">
              <h3>Squarespace</h3>

              <p>
                Squarespace is currently used in connection with the Iris & Oak
                domain and DNS management. The Next.js application itself is
                hosted separately.
              </p>
            </div>

            <p>
              Other service providers may be introduced where reasonably
              necessary to operate Iris & Oak. This Privacy Policy will be
              updated where appropriate if the way personal information is
              handled materially changes.
            </p>
          </section>

          <section>
            <h2>6. International processing</h2>

            <p>
              Vercel and Resend both state that their primary data processing
              takes place in the United States, and Google Workspace data may
              be processed in other countries. Information processed by these
              providers, including enquiry emails, is therefore likely to be
              processed outside the United Kingdom.
            </p>

            <p>
              Vercel’s data processing terms apply to the Pro plan used
              for this website. They include the EU Standard Contractual
              Clauses and, for transfers from the United Kingdom, the UK
              International Data Transfer Addendum.
            </p>

            <p>
              Resend’s data processing terms apply to every Resend
              account, including the Free plan used by Iris & Oak. Resend
              states that transfers from the United Kingdom are covered by the
              UK Addendum to the EU Standard Contractual Clauses.
            </p>

            {/*
              CONFIRM: Check that the Google Workspace data processing terms
              have been accepted in the Admin console (Account > Account
              settings > Legal and compliance). Until then, the second sentence
              below describes Google’s published terms, not a confirmed
              safeguard for the Iris & Oak account.
            */}
            <p>
              Google states that Google Workspace data may be processed in any
              country where Google or its subprocessors maintain facilities.
              Google’s published data processing terms state that transfers
              of UK personal data to the United States rely on Google’s
              certification to the UK Extension to the EU-U.S. Data Privacy
              Framework, with Standard Contractual Clauses provided for where no
              such alternative transfer solution applies.
            </p>

            <p>
              Where personal information is transferred internationally by
              other providers, appropriate safeguards will be used where
              required by applicable data protection law.
            </p>
          </section>

          <section>
            <h2>7. How long information is kept</h2>

            <p>
              Enquiry emails for general enquiries that do not become client
              projects will be deleted from the Iris & Oak Google Workspace
              mailbox no later than 9 months after the last meaningful
              communication, unless there is a legitimate reason to retain the
              information for longer.
            </p>

            <p>
              Separately, copies of enquiry and confirmation emails held by
              Resend are kept for 30 days, as described in section 5.
            </p>

            <p>
              If you become a client, some information may need to be retained
              for longer where necessary for project records, contracts,
              accounting, tax, dispute resolution or other legal obligations.
            </p>

            <p>
              Information that is no longer reasonably required will be deleted
              or otherwise securely disposed of where appropriate.
            </p>
          </section>

          <section>
            <h2>8. Cookies, analytics and tracking</h2>

            <p>
              Iris & Oak uses Vercel Web Analytics to understand how visitors
              use this website and to help improve its content, performance and
              user experience.
            </p>

            <p>
              Vercel states that Web Analytics does not use third-party
              cookies. It provides Iris & Oak with aggregated statistics such as
              page views, referring websites, approximate geographic location,
              browser, operating system and device type.
            </p>

            <p>
              Instead of a cookie, Vercel identifies visits using a hash created
              from the incoming request. Vercel states that visitor sessions are
              automatically discarded after 24 hours, and that Web Analytics
              does not collect identifiers that track visitors across different
              websites.
            </p>

            <p>
              Analytics information is used only to understand website usage
              and improve the Iris & Oak website. It is not used for behavioural
              advertising or cross-site advertising tracking.
            </p>

            <p>
              You can object to the use of Vercel Web Analytics on this website
              using the analytics opt-out control provided below.
            </p>

            <p>
              If you use this control, your choice is saved in your
              browser’s local storage on this device so that the website
              can remember it. The preference is not sent to Iris & Oak, and
              clearing your browser’s site data will reset it.
            </p>

            <AnalyticsPreference />
          </section>

          <section>
            <h2>9. Your data protection rights</h2>

            <p>
              Depending on the circumstances and the lawful basis being relied
              upon, UK data protection law may give you rights relating to your
              personal information.
            </p>

            <p>These may include the right to:</p>

            <ul>
              <li>Ask for access to personal information held about you</li>
              <li>Ask for inaccurate information to be corrected</li>
              <li>Ask for your information to be deleted in certain circumstances</li>
              <li>Ask for the use of your information to be restricted</li>
              <li>Object to certain uses of your information</li>
              <li>Request data portability where the right applies</li>
            </ul>

            <p>
              Not every right applies in every situation. If you would like to
              make a request or ask a question about your information, contact{" "}
              <a href="mailto:contact@irisoak.dev">contact@irisoak.dev</a>.
            </p>
          </section>

          <section className="privacy-page__rights-callout">
            <h2>10. Your right to object</h2>

            <p>
              Where Iris & Oak relies on legitimate interests to process your
              personal information, you may have the right to object to that
              processing.
            </p>

            <p>
              To raise an objection, contact{" "}
              <a href="mailto:contact@irisoak.dev">contact@irisoak.dev</a>.
            </p>
          </section>

          <section>
            <h2>11. Complaints</h2>

            <p>
              If you have concerns about how Iris & Oak has handled your
              personal information, please contact me first so that I can
              investigate the issue.
            </p>

            <p>
              You also have the right to raise a concern with the UK
              Information Commissioner’s Office (ICO).
            </p>

            <p>
              You can find information about making a data protection complaint
              through the{" "}
              <a
                href="https://ico.org.uk/make-a-complaint/data-protection-complaints/"
                target="_blank"
                rel="noreferrer"
              >
                Information Commissioner’s Office
              </a>
              .
            </p>
          </section>

          <section>
            <h2>12. Changes to this policy</h2>

            <p>
              This Privacy Policy may be updated as Iris & Oak develops, new
              services are introduced or the way personal information is
              handled changes.
            </p>

            <p>
              The latest version will be published on this page together with
              its most recent update date.
            </p>
          </section>
        </div>

        <footer className="privacy-page__footer">
          <Link href="/">← Return to Iris & Oak</Link>
        </footer>
      </Container>
    </div>
  );
}