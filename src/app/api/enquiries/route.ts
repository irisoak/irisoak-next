import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type EnquiryRequest = {
  service?: "launch" | "refresh" | "care" | "custom";
  name?: string;
  email?: string;
  project?: string;
  budget?: string;
  timeline?: string;
};

export async function POST(request: Request) {
  try {
    const body: EnquiryRequest = await request.json();

    const {
      service,
      name,
      email,
      project,
      budget,
      timeline,
    } = body;

    /* ========================================
       Server-side validation
    ======================================== */

    if (!name || !email || !project) {
      return NextResponse.json(
        {
          error:
            "Name, email and project details are required.",
        },
        { status: 400 }
      );
    }

    const serviceLabels = {
      launch: "Launch",
      refresh: "Refresh",
      care: "Care",
      custom: "Custom Project",
    };

    const serviceName =
      service && serviceLabels[service]
        ? serviceLabels[service]
        : "General";

    const budgetLabels: Record<string, string> = {
      "under-1000": "Under £1,000",
      "1000-2500": "£1,000-£2,500",
      "2500-5000": "£2,500-£5,000",
      "5000-plus": "£5,000+",
      unsure: "Not sure yet",
    };

    const timelineLabels: Record<string, string> = {
      asap: "As soon as possible",
      "1-2-months": "1-2 Months",
      "3-6-months": "3-6 Months",
      flexible: "Flexible",
    };    

    const enquiry = {
      service: serviceName,
      name,
      email,
      project,
      budget: 
        budget && budgetLabels[budget]
          ? budgetLabels[budget]
          : "Not provided",
      timeline:
        timeline && timelineLabels[timeline]
          ? timelineLabels[timeline]
          : "Not provided",
    };

    /* ========================================
       Email 1
       Send enquiry to Iris & Oak
    ======================================== */

    const businessEmail = await resend.emails.send({
      from: "Iris & Oak <iris@irisoak.dev>",
      to: ["iris@irisoak.dev"],

      /*
        Makes Reply automatically address
        the client who submitted the enquiry.
      */
      replyTo: email,

      subject: `New ${serviceName} Enquiry - ${name}`,

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
            Iris & Oak — New Enquiry
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
            New project enquiry
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
            ${name}
          </p>

          <p>
            <strong>Email</strong><br />
            <a href="mailto:${email}">
              ${email}
            </a>
          </p>

          <p>
            <strong>Service</strong><br />
            ${serviceName}
          </p>

          <p>
            <strong>Budget</strong><br />
            ${enquiry.budget}
          </p>

          <p>
            <strong>Timeline</strong><br />
            ${enquiry.timeline}
          </p>

          <p>
            <strong>Project details</strong><br />
            ${project}
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
      Confirmation to the client
    ======================================== */

    const clientEmail = await resend.emails.send({
      from: "Iris & Oak <iris@irisoak.dev>",
      to: [email],
      replyTo: "iris@irisoak.dev",

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry submission failed:", error);

    return NextResponse.json(
      { error: "The enquiry could not be delivered." },
      { status: 500 }
    );
  }
}