import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CreditCard,
  Layers,
  Mail,
  Settings2,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Design & Development Services",
  description:
    "Websites, website refreshes, web apps and business tools from Iris & Oak, with clear scope and pricing.",
  alternates: {
    canonical: "/services",
  },
};

const websitePackages = [
  {
    name: "Foundation",
    price: "£395",
    tagline: "Built on a proven layout, adapted to your brand.",
    features: [
      "One-page website with up to five sections",
      "You provide the text, images and brand assets",
      "Contact or booking link",
      "One revision round",
    ],
  },
  {
    name: "Signature",
    price: "£795",
    tagline: "Layouts tailored to your business.",
    includes: "Everything in Foundation, plus:",
    features: [
      "Website of up to three pages",
      "Contact or booking form setup",
      "Basic page titles and descriptions",
      "Two revision rounds in total",
    ],
  },
  {
    name: "Bespoke",
    price: "£1,295",
    tagline: "Fully custom, designed around your customers.",
    includes: "Everything in Signature, plus:",
    features: [
      "Website of up to five pages",
      "Custom visual direction and page layouts",
      "Planning session for page structure and customer journey",
    ],
  },
];

const refreshPackages = [
  {
    name: "Polish",
    price: "£325",
    tagline:
      "Keeps your current structure and design, and improves how it looks.",
    features: [
      "Visual updates to up to three existing pages",
      "Updated spacing, typography, colours and image placement",
      "Mobile layout fixes",
      "One revision round",
    ],
  },
  {
    name: "Refine",
    price: "£625",
    tagline: "Keeps your design and improves how it works.",
    includes: "Everything in Polish, plus:",
    features: [
      "Refresh of up to five existing pages",
      "Improved page flow, navigation and calls to action",
      "Updated mobile layouts",
    ],
  },
  {
    name: "Redesign",
    price: "£895",
    tagline: "A new look and structure, on your current platform.",
    includes: "Everything in Refine, plus:",
    features: [
      "New visual direction and page layouts",
      "Reworked navigation and visitor journey",
      "Two revision rounds in total",
    ],
  },
];

const integrationPrices = [
  { icon: CalendarDays, name: "Online bookings", price: "£200" },
  { icon: CreditCard, name: "Payments", price: "£250" },
  { icon: Mail, name: "Email & newsletters", price: "£225" },
  { icon: Star, name: "Reviews & social feeds", price: "£150" },
];

const businessToolFeatures = [
  "One clearly defined workflow",
  "Booking, calendar, invoicing or CRM automation",
  "A simple dashboard or report, where useful",
  "Testing, setup notes and handover",
];

const otherIntegrations = [
  "Live chat & WhatsApp",
  "Google Business Profile & Maps",
  "Analytics",
  "Online ordering & click-and-collect",
  "Event ticketing",
  "Memberships & classes",
  "Calendar syncing",
  "Invoicing (Xero, QuickBooks)",
  "CRM & enquiry tracking",
  "Automatic confirmation emails",
  "Shop & product listings",
  "Zapier & Make workflows",
];

type PackageCardProps = {
  name: string;
  price: string;
  tagline: string;
  includes?: string;
  features: string[];
};

function PackageCard({
  name,
  price,
  tagline,
  includes,
  features,
}: PackageCardProps) {
  return (
    <article className="services-page__price-card">
      <h3>{name}</h3>
      <p className="services-page__price">{price}</p>
      <p className="services-page__tagline">{tagline}</p>

      {includes && (
        <p className="services-page__includes">{includes}</p>
      )}

      <ul className="services-page__feature-list">
        {features.map((feature) => (
          <li key={feature}>
            <Check size={13} strokeWidth={2.5} aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link className="services-page__card-link" href="/#contact">
        Get started <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </article>
  );
}

function HeroArtwork() {
  return (
    <div className="services-page__hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 430" role="presentation">
        <circle className="services-page__hero-orbit" cx="365" cy="225" r="190" />
        <path
          className="services-page__branch"
          d="M355 435C355 338 347 246 316 163 295 106 261 61 218 19"
        />
        <path
          className="services-page__branch"
          d="M335 343c55-58 109-99 188-123"
        />
        <path
          className="services-page__branch"
          d="M324 276c-68-36-126-55-205-52"
        />
        <path
          className="services-page__branch"
          d="M302 208c48-52 79-105 93-181"
        />
        <path
          className="services-page__branch"
          d="M279 145c-50-40-96-61-160-70"
        />
        <path
          className="services-page__leaf"
          d="M218 19c-7 49 17 82 62 86-2-46-24-75-62-86Z"
        />
        <path
          className="services-page__leaf services-page__leaf--light"
          d="M316 163c38-40 79-45 114-15-32 37-70 44-114 15Z"
        />
        <path
          className="services-page__leaf"
          d="M316 163c-3-46 19-77 63-92 3 43-19 74-63 92Z"
        />
        <path
          className="services-page__leaf services-page__leaf--light"
          d="M308 211c-45-38-91-43-135-12 39 35 84 39 135 12Z"
        />
        <path
          className="services-page__leaf"
          d="M355 343c-8-53 13-91 60-113 8 49-12 87-60 113Z"
        />
        <path
          className="services-page__leaf services-page__leaf--light"
          d="M376 318c48-45 100-58 154-36-43 45-94 58-154 36Z"
        />
        <path
          className="services-page__leaf"
          d="M266 126c-45-32-65-75-59-126 47 29 66 72 59 126Z"
        />
        <path
          className="services-page__leaf services-page__leaf--light"
          d="M160 75c-4 44 17 76 62 93 1-43-20-74-62-93Z"
        />
      </svg>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Image 3: hero, website packages and website refresh */}
      <section className="services-page__hero" aria-labelledby="services-title">
        <div className="site-container services-page__hero-inner">
          <div className="services-page__hero-copy">
            <p className="services-page__eyebrow">Services</p>
            <h1 id="services-title">
              Digital services,
              <span>clearly scoped.</span>
            </h1>
            <p className="services-page__hero-lead">
              Beautiful, functional websites and tools for small businesses.
              Clear pricing, no surprises.
            </p>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <div className="site-container">
        <section
          className="services-page__section services-page__websites"
          aria-labelledby="website-services-heading"
        >
          <div className="services-page__section-heading">
            <div>
              <p className="services-page__eyebrow">Website services</p>
              <h2 id="website-services-heading">
                Beautiful websites, built for your business.
              </h2>
            </div>
            <p>
              Choose the right starting point for your business, with clear
              scope and deliverables.
            </p>
          </div>

          <div className="services-page__pricing-grid">
            {websitePackages.map((plan) => (
              <PackageCard key={plan.name} {...plan} />
            ))}
          </div>
        </section>
      </div>

      <section className="services-page__refresh-band">
        <div className="site-container">
          <section
            className="services-page__section services-page__refresh"
            aria-labelledby="refresh-heading"
          >
            <div className="services-page__section-heading">
              <div>
                <p className="services-page__eyebrow">Website refresh</p>
                <h2 id="refresh-heading">Improve what you already have.</h2>
              </div>
              <p>
                Keep your current platform and make it look and work better.
              </p>
            </div>

            <div className="services-page__pricing-grid">
              {refreshPackages.map((plan) => (
                <PackageCard key={plan.name} {...plan} />
              ))}
            </div>

            <p className="services-page__refresh-note">
              All refreshes stay on your current platform. Migrations or
              rebuilds are quoted separately.
            </p>
          </section>
        </div>
      </section>

      {/* Image 1: web apps, integrations and business tools */}
      <div className="site-container">
        <section
          className="services-page__paired-services"
          aria-label="Web apps and integrations"
        >
          <article
            className="services-page__web-apps"
            aria-labelledby="web-apps-heading"
          >
            <div className="services-page__web-apps-copy">
              <div className="services-page__service-heading">
                <h2 id="web-apps-heading">Web Apps</h2>
                <span className="services-page__heading-rule" />
              </div>

              <span className="services-page__round-icon" aria-hidden="true">
                <Layers size={20} strokeWidth={1.6} />
              </span>

              <p className="services-page__starting-price">
                <strong>Web apps</strong> from <b>£1,200</b>
              </p>
              <p className="services-page__web-apps-intro">
                A custom app your customers or users interact with, such as a client 
                portal, member area, quote calculator or simple booking app.
              </p>

              <ul className="services-page__compact-list">
                <li><Check size={13} aria-hidden="true" />A focused first version with an agreed feature list</li>
                <li><Check size={13} aria-hidden="true" />Core screens for one main user journey</li>
                <li><Check size={13} aria-hidden="true" />Responsive layout for desktop, tablet and mobile</li>
                <li><Check size={13} aria-hidden="true" />Testing and handover for the agreed build</li>
              </ul>
            </div>

            <div className="services-page__app-preview" aria-hidden="true">
              <div className="services-page__app-preview-top">
                <span />
                <span />
                <span />
              </div>
              <div className="services-page__app-preview-content">
                <div className="services-page__app-preview-sidebar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="services-page__app-preview-main">
                  <b />
                  <span />
                  <span />
                  <span />
                  <div className="services-page__app-preview-image">
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article
            className="services-page__integrations"
            aria-labelledby="integrations-heading"
          >
            <h2 id="integrations-heading">
              Bookings, Payments &amp; Integrations
            </h2>
            <p>
              Connect your website to the tools you use, so everything works
              together smoothly.
            </p>

            <ul className="services-page__integration-list">
              {integrationPrices.map(({ icon: Icon, name, price }) => (
                <li key={name}>
                  <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  <span>{name}</span>
                  <strong>from £{price.replace("£", "")}</strong>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section
          className="services-page__business-tools"
          aria-labelledby="business-tools-heading"
        >
          <div className="services-page__business-title">
            <h2 id="business-tools-heading">Business Tools</h2>
            <span className="services-page__heading-rule" />
          </div>

          <div className="services-page__business-intro">
            <span className="services-page__round-icon" aria-hidden="true">
              <Settings2 size={21} strokeWidth={1.6} />
            </span>
            <div>
              <p className="services-page__business-price">
                <strong>Business tools</strong> from <b>£900</b>
              </p>
              <p>
                Automate routine admin across the tools you already use, 
                like booking confirmations, enquiry follow-ups or invoices.
              </p>
            </div>
          </div>

          <ul className="services-page__business-list">
            {businessToolFeatures.map((feature) => (
              <li key={feature}>
                <Check size={13} aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <svg
            className="services-page__business-art"
            viewBox="0 0 120 180"
            aria-hidden="true"
          >
            <path d="M94 180C85 128 67 84 24 26M88 142c-28-22-47-48-57-82m70 95c4-34 1-61-13-89m-8 39c17-23 29-47 34-76M61 104c-23-2-41 2-57 14m47-41c-9-20-22-35-42-46" />
            <path d="M24 26c-4 21 5 37 26 46 2-20-7-36-26-46Zm37 43c17-17 35-22 54-13-15 17-33 21-54 13Zm10 34c-19-13-37-14-55-2 17 13 35 14 55 2Zm16 39c-3-22 5-39 24-51 4 20-4 37-24 51Zm-41-68c-17-15-24-34-18-55 17 14 23 33 18 55Zm24 11c8-21 22-34 44-38-5 21-19 34-44 38Z" />
          </svg>
        </section>
      </div>

      {/* Image 2: additional services and contact prompt */}
      <section
        className="services-page__also-available"
        aria-labelledby="also-available-heading"
      >
        <div className="site-container">
          <div className="services-page__also-heading">
            <div>
              <p className="services-page__eyebrow">Also available</p>
              <h2 id="also-available-heading">
                Even more ways to
                <span>support your business.</span>
              </h2>
            </div>
            <p>Popular add-ons and integrations, tailored to your needs.</p>
          </div>

          <ul className="services-page__also-list">
            {otherIntegrations.map((item) => (
              <li key={item}>
                <span className="services-page__also-check">
                  <Check size={12} strokeWidth={2.3} aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="services-page__contact">
            <div className="services-page__contact-copy">
              <p className="services-page__eyebrow">Let&apos;s work together</p>
              <h2>Ready to get started?</h2>
              <p>
                Tell me a little about your project and I&apos;ll recommend the best
                option.
              </p>
            </div>

            <Link className="services-page__contact-link" href="/#contact">
              Get in touch <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <div className="services-page__api-note">
              <strong>Using something not listed?</strong>
              <span>
                Most popular tools can be connected. Let me know which ones you use
                and I’ll check what’s possible before quoting.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}