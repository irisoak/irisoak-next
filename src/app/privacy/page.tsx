import Link from "next/link";

import Container from "@/components/layout/Container";

export const metadata = {
  title: "Privacy Policy | Iris & Oak",
  description:
    "Learn how Iris & Oak collects, uses and protects personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
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
            Last updated: 28 August 2026
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
              <a href="mailto:iris@irisoak.dev">iris@irisoak.dev</a>.
            </p>
          </section>

          <section>
            <h2>2. Information I may collect</h2>

            <p>
              When you submit an enquiry through the Iris & Oak website, I may
              collect information that you choose to provide, including:
            </p>

            <ul>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your business or organisation name</li>
              <li>Your organisation type</li>
              <li>The service you are interested in</li>
              <li>Information about your website or proposed project</li>
              <li>Your preferred project timeline</li>
              <li>Your approximate budget</li>
              <li>Any additional information you include in your enquiry</li>
            </ul>

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
              <li>Discuss your project or requirements with you</li>
              <li>Prepare estimates, proposals or invoices</li>
              <li>Provide services that you have requested</li>
              <li>Communicate with you about an active project</li>
              <li>Maintain appropriate business and financial records</li>
              <li>Meet applicable legal, accounting or tax obligations</li>
              <li>Protect the website and business from misuse or security issues</li>
            </ul>

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
                The Iris & Oak Next.js website is hosted using Vercel.
                Technical information may be processed as part of hosting,
                securing and delivering the website.
              </p>
            </div>

            <div className="privacy-page__provider">
              <h3>Resend</h3>

              <p>
                Resend is used to support transactional email delivery,
                including emails associated with website enquiries.
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
              Some technology providers used by Iris & Oak may process or store
              information outside the United Kingdom.
            </p>

            <p>
              Where personal information is transferred internationally, the
              relevant provider and Iris & Oak are expected to use appropriate
              safeguards where required by applicable data protection law.
            </p>
          </section>

          <section>
            <h2>7. How long information is kept</h2>

            <p>
              General enquiries that do not become client projects will
              normally be retained for no longer than 12 months after the last
              meaningful communication, unless there is a legitimate reason to
              retain the information for longer.
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
            <h2>8. Analytics and tracking</h2>

            <p>
              Iris & Oak does not currently use analytics, advertising pixels
              or behavioural tracking technologies on this website.
            </p>

            <p>
              If analytics or similar technologies are introduced in the
              future, this Privacy Policy and any necessary privacy or cookie
              controls will be updated before or alongside their introduction.
            </p>
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
              <a href="mailto:iris@irisoak.dev">iris@irisoak.dev</a>.
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
              <a href="mailto:iris@irisoak.dev">iris@irisoak.dev</a>.
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
              Information Commissioner&apos;s Office (ICO).
            </p>

            <p>
              You can find information about making a data protection complaint
              through the{" "}
              <a
                href="https://ico.org.uk/make-a-complaint/data-protection-complaints/"
                target="_blank"
                rel="noreferrer"
              >
                Information Commissioner&apos;s Office
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
    </main>
  );
}