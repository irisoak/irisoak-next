import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type EnquiryRequest = {
  service?: "essentials" | "launch" | "refresh" | "care" | "custom";

  // Set by the contact form when opened from the Portfolio Partnership page
  type?: "portfolio-partnership";

  // Honeypot field: left empty by people, often filled in by bots
  website?: string;

  name?: string;
  email?: string;

  organisation?: string;
  organisationType?: string;

  // Essentials / Launch
  hasBrand?: string;

  // Essentials
  essentialsPackage?: string;
  contentReady?: string;

  // Launch
  pageCount?: string;

  // Refresh
  currentWebsiteUrl?: string;
  refreshProblem?: string;

  // Care
  currentPlatform?: string;
  supportType?: string;
  careInterest?: string;

  // Custom
  customBuild?: string;
  integrations?: string;

  // Shared
  project?: string;
  budget?: string;
  timeline?: string;
  additionalInformation?: string;
};

/* ========================================
   Helpers
======================================== */

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

/* ========================================
   Validation
======================================== */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*
  Maximum characters per field. The contact form's maxLength values are
  name 100, business name 100, email 200 and details 5000; email allows
  up to 254, the longest valid address.
*/
const FIELD_LIMITS: Partial<Record<keyof EnquiryRequest, number>> = {
  name: 100,
  email: 254,
  organisation: 100,
  project: 5000,
  additionalInformation: 5000,
  customBuild: 5000,
  refreshProblem: 2000,
  integrations: 2000,
  currentWebsiteUrl: 500,
};

const DEFAULT_FIELD_LIMIT = 200;

const FIELD_LABELS: Partial<Record<keyof EnquiryRequest, string>> = {
  name: "Your name",
  email: "Email address",
  organisation: "Business name",
  project: "Your enquiry details",
};

const validateEnquiry = (body: EnquiryRequest): string | null => {
  for (const [key, value] of Object.entries(body)) {
    if (value === undefined || value === null) continue;

    if (typeof value !== "string") {
      return "The enquiry details could not be read. Please try again.";
    }

    const field = key as keyof EnquiryRequest;
    const limit = FIELD_LIMITS[field] ?? DEFAULT_FIELD_LIMIT;

    if (value.length > limit) {
      const label = FIELD_LABELS[field];

      return label
        ? `${label} must be ${limit.toLocaleString("en-GB")} characters or fewer.`
        : "One of the enquiry fields is too long.";
    }
  }

  if (!body.name?.trim() || !body.email?.trim() || !body.project?.trim()) {
    return "Name, email and project details are required.";
  }

  if (!EMAIL_PATTERN.test(body.email.trim())) {
    return "Please enter a valid email address.";
  }

  return null;
};

/*
  The custom enquiry modal sends JSON. The homepage contact form sends
  FormData, which also keeps it working as a plain HTML form submission.
*/
const readEnquiryBody = async (
  request: Request
): Promise<EnquiryRequest> => {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  const formData = await request.formData();
  const body: Record<string, string> = {};

  formData.forEach((value, key) => {
    if (typeof value === "string") {
      body[key] = value;
    }
  });

  return body as EnquiryRequest;
};

const formatOptionalValue = (
  value: string | undefined,
  labels: Record<string, string> = {}
) => {
  if (!value) {
    return "Not provided";
  }

  return labels[value] ?? value;
};

/* ========================================
   Display Labels
======================================== */

const serviceLabels = {
  essentials: "Website Essentials",
  launch: "Launch",
  refresh: "Refresh",
  care: "Care",
  custom: "Custom Project",
};

const essentialsPackageLabels: Record<string, string> = {
  "starter-presence": "Starter Presence — £295",
  "website-essentials": "Website Essentials — £495",
  unsure: "I'm not sure yet — help me choose",
};

const organisationTypeLabels: Record<string, string> = {
  individual: "An Individual",
  "sole-trader": "A Sole Trader",
  startup: "A Startup",
  "small-business": "A Small Business",
  "medium-business": "A Medium-Sized Business",
  charity: "A Charity",
  "community-organisation": "A Community Organisation",
};

const yesNoLabels: Record<string, string> = {
  yes: "Yes",
  no: "No",
  partial: "Partially / still working on it",
};

const pageCountLabels: Record<string, string> = {
  "one-page": "One page",
  "2-5-pages": "2–5 pages",
  "more-than-5": "More than 5 pages",
  unsure: "I'm not sure yet",
};

const platformLabels: Record<string, string> = {
  wordpress: "WordPress",
  squarespace: "Squarespace",
  wix: "Wix",
  godaddy: "GoDaddy Website Builder",
  shopify: "Shopify",
  webflow: "Webflow",
  custom: "Custom-built",
  other: "Other",
  unsure: "I'm not sure",
};

const careInterestLabels: Record<string, string> = {
  "site-check-up": "Site Check-up",
  core: "Core",
  growth: "Growth",
  unsure: "Not sure",
};

const supportTypeLabels: Record<string, string> = {
  maintenance: "Maintenance and security",
  "content-changes": "Small website or content changes",
  "technical-support": "Ongoing technical support",
  improvements: "Performance or accessibility improvements",
  unsure: "I'm not sure yet",
};

const budgetLabels: Record<string, string> = {
  // Website Essentials
  "within-budget": "Yes",
  "budget-flexible": "Yes, with some flexibility",
  "budget-unsure": "I'm not sure yet",

  // Existing Custom enquiry modal
  "under-1000": "Under £1,000",
  "1000-2500": "£1,000–£2,500",
  "2500-5000": "£2,500–£5,000",
  "5000-plus": "£5,000+",
  unsure: "Not sure yet",
};

const timelineLabels: Record<string, string> = {
  asap: "As soon as possible",

  // Client Journey
  "1-3-months": "Within 1–3 months",
  "3-6-months": "Within 3–6 months",
  exploring: "Just exploring ideas",
  flexible: "My timeline is flexible",
  unsure: "I'm not sure yet",

  // Existing Custom enquiry modal
  "1-2-months": "1–2 months",
};

/* ========================================
   POST
======================================== */

export async function POST(request: Request) {
  try {
    const body = await readEnquiryBody(request);

    const {
      service,
      type,
      website,
      name,
      email,

      organisation,
      organisationType,

      hasBrand,
      essentialsPackage,
      contentReady,
      pageCount,

      currentWebsiteUrl,
      refreshProblem,

      currentPlatform,
      supportType,
      careInterest,

      customBuild,
      integrations,

      project,
      budget,
      timeline,
      additionalInformation,
    } = body;

    /* ========================================
       Spam protection
    ======================================== */

    /*
      Report success without sending anything, so bots that fill in
      the hidden field get no signal that they were filtered out.
    */
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    /* ========================================
       Server-side validation
    ======================================== */

    const validationError = validateEnquiry(body);

    if (validationError || !name || !email || !project) {
      return NextResponse.json(
        {
          error:
            validationError ??
            "Name, email and project details are required.",
        },
        { status: 400 }
      );
    }

    const isPortfolioPartnership = type === "portfolio-partnership";

    const serviceName = isPortfolioPartnership
      ? "Portfolio Partnership Programme"
      : service && serviceLabels[service]
        ? serviceLabels[service]
        : "General";

    const formattedBudget = formatOptionalValue(
      budget,
      budgetLabels
    );

    const formattedTimeline = formatOptionalValue(
      timeline,
      timelineLabels
    );

    /* ========================================
       Escape User Content For Email HTML
    ======================================== */

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeOrganisation = escapeHtml(
      formatOptionalValue(organisation)
    );

    const safeOrganisationType = escapeHtml(
      formatOptionalValue(
        organisationType,
        organisationTypeLabels
      )
    );

    const safeProject = escapeHtml(project);

    const safeBudget = escapeHtml(formattedBudget);
    const safeTimeline = escapeHtml(formattedTimeline);

    const safeAdditionalInformation = escapeHtml(
      formatOptionalValue(additionalInformation)
    );

    /* ========================================
       Service-specific Email Content
    ======================================== */

    let serviceDetailsHtml = "";

    if (service === "essentials") {
      serviceDetailsHtml = `
        <p>
          <strong>Website Essentials option</strong><br />
          ${escapeHtml(
            formatOptionalValue(
              essentialsPackage,
              essentialsPackageLabels
            )
          )}
        </p>

        <p>
          <strong>Existing brand / logo</strong><br />
          ${escapeHtml(
            formatOptionalValue(hasBrand, yesNoLabels)
          )}
        </p>

        <p>
          <strong>Content ready</strong><br />
          ${escapeHtml(
            formatOptionalValue(contentReady, yesNoLabels)
          )}
        </p>
      `;
    }

    if (service === "launch") {
      serviceDetailsHtml = `
        <p>
          <strong>Existing brand / logo</strong><br />
          ${escapeHtml(
            formatOptionalValue(hasBrand, yesNoLabels)
          )}
        </p>

        <p>
          <strong>Estimated pages</strong><br />
          ${escapeHtml(
            formatOptionalValue(pageCount, pageCountLabels)
          )}
        </p>
      `;
    }

    if (service === "refresh") {
      serviceDetailsHtml = `
        <p>
          <strong>Current website</strong><br />
          ${escapeHtml(
            formatOptionalValue(currentWebsiteUrl)
          )}
        </p>

        <p>
          <strong>What isn't working</strong><br />
          ${escapeHtml(
            formatOptionalValue(refreshProblem)
          )}
        </p>
      `;
    }

    if (service === "care") {
      serviceDetailsHtml = `
        <p>
          <strong>Website</strong><br />
          ${escapeHtml(
            formatOptionalValue(currentWebsiteUrl)
          )}
        </p>

        <p>
          <strong>Current platform</strong><br />
          ${escapeHtml(
            formatOptionalValue(
              currentPlatform,
              platformLabels
            )
          )}
        </p>

        <p>
          <strong>Interested in</strong><br />
          ${escapeHtml(
            formatOptionalValue(
              careInterest,
              careInterestLabels
            )
          )}
        </p>

        ${
          supportType
            ? `
              <p>
                <strong>Support needed</strong><br />
                ${escapeHtml(
                  formatOptionalValue(
                    supportType,
                    supportTypeLabels
                  )
                )}
              </p>
            `
            : ""
        }
      `;
    }

    if (service === "custom") {
      serviceDetailsHtml = `
        ${
          customBuild
            ? `
              <p>
                <strong>What they're trying to build</strong><br />
                ${escapeHtml(customBuild)}
              </p>
            `
            : ""
        }

        ${
          integrations
            ? `
              <p>
                <strong>Integrations</strong><br />
                ${escapeHtml(integrations)}
              </p>
            `
            : ""
        }
      `;
    }

    /* ========================================
       Enquiry-type Email Content
    ======================================== */

    const enquiryHeading = isPortfolioPartnership
      ? "New Portfolio Partnership enquiry"
      : "New project enquiry";

    const enquirySubject = isPortfolioPartnership
      ? `New Portfolio Partnership Enquiry - ${name}`
      : `New ${serviceName} Enquiry - ${name}`;

    const projectLabel = isPortfolioPartnership
      ? "Business and website goals"
      : service === "care"
        ? "Help needed"
        : "Project summary";

    /*
      The partnership enquiry comes from the short contact form, so the
      longer service fields are left out rather than shown as "Not provided".
    */
    const enquiryDetailsHtml = isPortfolioPartnership
      ? `
          <p>
            <strong>Programme</strong><br />
            ${serviceName}
          </p>

          ${
            currentWebsiteUrl
              ? `
                <p>
                  <strong>Website</strong><br />
                  ${escapeHtml(currentWebsiteUrl)}
                </p>
              `
              : ""
          }
        `
      : `
          <p>
            <strong>Reaching out as</strong><br />
            ${safeOrganisationType}
          </p>

          <p>
            <strong>Service</strong><br />
            ${serviceName}
          </p>

          ${serviceDetailsHtml}

          <p>
            <strong>Timeline</strong><br />
            ${safeTimeline}
          </p>

          <p>
            <strong>Budget</strong><br />
            ${safeBudget}
          </p>

          <p>
            <strong>Additional information</strong><br />
            ${safeAdditionalInformation}
          </p>
        `;

    /* ========================================
       Email 1
       Send Enquiry To Iris & Oak
    ======================================== */

    const businessEmail = await resend.emails.send({
      from: "Iris & Oak <contact@irisoak.dev>",
      to: ["contact@irisoak.dev"],

      /*
        Makes Reply automatically address
        the client who submitted the enquiry.
      */
      replyTo: email,

      subject: enquirySubject,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            color: #252824;
            line-height: 1.6;
            max-width: 640px;
            margin: 0 auto;
          "
        >
          <p
            style="
              color: #59635c;
              font-size: 12px;
              font-weight: 600;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            "
          >
            Iris & Oak — ${
              isPortfolioPartnership
                ? "Portfolio Partnership Enquiry"
                : "New Enquiry"
            }
          </p>

          <h1
            style="
              color: #18352b;
              font-family: Georgia, 'Times New Roman', serif;
              font-size: 32px;
              font-weight: 400;
              line-height: 1.1;
            "
          >
            ${enquiryHeading}
          </h1>

          <hr
            style="
              border: 0;
              border-top: 1px solid #d7d3ca;
              margin: 24px 0;
            "
          />

          <p>
            <strong>Name</strong><br />
            ${safeName}
          </p>

          <p>
            <strong>Email</strong><br />
            ${safeEmail}
          </p>

          <p>
            <strong>Business name</strong><br />
            ${safeOrganisation}
          </p>

          ${enquiryDetailsHtml}

          <hr
            style="
              border: 0;
              border-top: 1px solid #d7d3ca;
              margin: 24px 0;
            "
          />

          <p>
            <strong>${projectLabel}</strong><br />
            ${safeProject}
          </p>
        </div>
      `,
    });

    if (businessEmail.error) {
      console.error(
        "Business enquiry email failed:",
        businessEmail.error
      );

      return NextResponse.json(
        {
          error:
            "The enquiry could not be delivered.",
        },
        { status: 500 }
      );
    }

    /* ========================================
       Email 2
       Confirmation To Client
    ======================================== */

    const clientEmail = await resend.emails.send({
      from: "Iris & Oak <contact@irisoak.dev>",
      to: [email],
      replyTo: "contact@irisoak.dev",

      template: {
        id: "c7a0c951-cdc4-449d-a1ef-0915a94a967e",
        variables: {
          name,
          serviceName,
        },
      },
    });

    if (clientEmail.error) {
      console.error(
        "Client confirmation email failed:",
        clientEmail.error
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Enquiry submission failed:",
      error
    );

    return NextResponse.json(
      {
        error:
          "The enquiry could not be delivered.",
      },
      { status: 500 }
    );
  }
}