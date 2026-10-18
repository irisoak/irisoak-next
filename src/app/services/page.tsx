import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  Clock,
  CreditCard,
  Layers,
  Mail,
  MessageCircle,
  Plus,
  Settings2,
  ShoppingBag,
  Star,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "Website Design & Development Services",
  description:
    "Websites, website refreshes, web apps and business tools from Iris & Oak, with clear scope and pricing.",
  path: "/services",
});

const websitePackages = [
  {
    name: "Foundation",
    price: "£395",
    tagline: "A polished starting point, shaped around your brand.",
    includes: "What’s included:",
    features: [
      "One-page website with up to five sections",
      "Contact or booking link",
      "One revision round",
    ],
    timeline: "Ready in about 1–2 weeks",
  },
  {
    name: "Signature",
    price: "£695",
    tagline:
      "More room to tell your story, with a layout shaped around your business.",
    includes: "Everything in Foundation, plus:",
    features: [
      "Website of up to three pages",
      "Contact or booking form setup",
      "Basic page titles and descriptions",
      "Two revision rounds in total",
    ],
    timeline: "Ready in about 2 weeks",
    popular: true,
  },
  {
    name: "Bespoke",
    price: "£995",
    tagline: "A more tailored website, shaped around your goals.",
    includes: "Everything in Signature, plus:",
    features: [
      "Website of up to five pages",
      "Custom visual direction and page layouts",
      "Planning session for page structure and customer journey",
      "Three revision rounds in total",
    ],
    timeline: "Ready in about 3–4 weeks",
  },
];

const refreshPackages = [
  {
    name: "Polish",
    price: "£325",
    tagline: "A visual tidy-up of your existing pages.",
    includes: "What’s included:",
    features: [
      "Visual updates to up to three existing pages",
      "Updated spacing, typography, colours and image placement",
      "Fixes for mobile layout issues",
      "One revision round",
    ],
  },
  {
    name: "Refine",
    price: "£625",
    tagline: "A visual tidy-up, plus better flow and navigation.",
    includes: "Everything in Polish, plus:",
    features: [
      "Refresh of up to five existing pages",
      "Improved page flow, navigation and calls to action",
      "Mobile layouts reworked to match the new flow",
      "One revision round",
    ],
    popular: true,
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
  "Automation between your calendar, invoicing or CRM",
  "A simple dashboard or report, where useful",
  "Testing, setup notes and handover",
];

const addOnGroups: {
  title: string;
  icon: LucideIcon;
  items: string[];
  seeBusinessTools?: boolean;
  note?: string;
}[] = [
  {
    title: "Selling online",
    icon: ShoppingBag,
    items: [
      "Online ordering & click-and-collect",
      "Shop & product listings",
      "Event ticketing",
      "Memberships & classes",
    ],
  },
  {
    title: "Customer contact",
    icon: MessageCircle,
    items: [
      "Live chat & WhatsApp",
      "Google Business Profile & Maps",
      "CRM & enquiry tracking",
    ],
  },
  {
    title: "Automation",
    icon: Workflow,
    seeBusinessTools: true,
    note: "Larger or multi-step workflows may be scoped as a Business tools project instead.",
    items: [
      "Calendar syncing",
      "Automatic confirmation emails",
      "Invoicing (Xero, QuickBooks)",
      "Zapier & Make workflows",
    ],
  },
  {
    title: "Insights",
    icon: BarChart3,
    items: ["Analytics"],
  },
];

type PackageCardProps = {
  name: string;
  price: string;
  tagline: string;
  includes?: string;
  features: string[];
  timeline?: string;
  popular?: boolean;
};

function PackageCard({
  name,
  price,
  tagline,
  includes,
  features,
  timeline,
  popular = false,
}: PackageCardProps) {
  return (
    <article className="services-page__price-card">
      {popular && (
        <span className="services-page__popular-badge">Most popular</span>
      )}

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

      {timeline && (
        <p className="services-page__timeline">
          <Clock size={13} strokeWidth={2} aria-hidden="true" />
          {timeline}
        </p>
      )}

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
                Websites built around your business.
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

          <div className="services-page__package-notes">
            <p>
              All packages: you provide the text and images, or ask about
              copywriting support.
            </p>
            <p>
              Every website is mobile-friendly, built with accessibility in
              mind, and includes launch support. Pay in full or split in 2, 3
              or 4 instalments.
            </p>
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

            <div className="services-page__package-notes">
              <p className="services-page__package-note--strong">
                Not sure whether to refresh or rebuild? A £149{" "}
                <Link href="/care#plans">Site Check-up</Link> will tell you.
              </p>
              <p className="services-page__refresh-note">
                On builder platforms like Squarespace or Wix, some changes
                depend on what the template allows. I’ll confirm this before
                quoting.
              </p>
              <p className="services-page__refresh-note">
                All refreshes stay on your current platform. Migrations or
                rebuilds are quoted separately.
              </p>
            </div>
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
                <h2 id="web-apps-heading">Web apps</h2>
                <span className="services-page__heading-rule" />
              </div>

              <span className="services-page__round-icon" aria-hidden="true">
                <Layers size={20} strokeWidth={1.6} />
              </span>

              <p className="services-page__starting-price">
                From <b>£1,200</b>
              </p>
              <p className="services-page__web-apps-intro">
                A custom app your customers or users interact with, such as a
                client portal, member area or quote calculator.
              </p>

              <ul className="services-page__compact-list">
                <li><Check size={13} aria-hidden="true" />A focused first version with an agreed feature list</li>
                <li><Check size={13} aria-hidden="true" />Core screens for one main user journey</li>
                <li><Check size={13} aria-hidden="true" />Responsive layout for desktop, tablet and mobile</li>
                <li><Check size={13} aria-hidden="true" />Testing and handover for the agreed build</li>
              </ul>

              <p className="services-page__scope-note">
                Accounts, payments, multiple user roles and integrations are
                scoped separately.
              </p>
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
            <div className="services-page__service-heading">
              <h2 id="integrations-heading">
                Bookings, payments &amp; integrations
              </h2>
              <span className="services-page__heading-rule" />
            </div>
            <p>
              Add the tools you use to your website, such as bookings,
              payments, newsletters and reviews, so everything works together.
            </p>

            <ul className="services-page__integration-list">
              {integrationPrices.map(({ icon: Icon, name, price }) => (
                <li key={name}>
                  <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  <span>{name}</span>
                  <span className="services-page__integration-price">
                    from {price}
                  </span>
                </li>
              ))}
            </ul>

            <p className="services-page__integration-example">
              e.g. a Calendly booking widget, Stripe checkout or Mailchimp
              sign-up.
            </p>

            <p className="services-page__scope-note">
              Prices are for adding to an existing or new website. Subscription
              fees for third-party tools, like Stripe or Mailchimp, are paid
              directly by you.
            </p>
          </article>
        </section>

        <section
          className="services-page__business-tools"
          aria-labelledby="business-tools-heading"
        >
          <div className="services-page__business-title">
            <h2 id="business-tools-heading">Business tools</h2>
            <span className="services-page__heading-rule" />
          </div>

          <div className="services-page__business-intro">
            <span className="services-page__round-icon" aria-hidden="true">
              <Settings2 size={21} strokeWidth={1.6} />
            </span>
            <p className="services-page__business-price">
              From <b>£900</b>
            </p>
            <p>
              Automate routine admin across the tools you already use, like
              booking confirmations, enquiry follow-ups or invoices.
            </p>
          </div>

          <div className="services-page__business-details">
            <ul className="services-page__business-list">
              {businessToolFeatures.map((feature) => (
                <li key={feature}>
                  <Check size={13} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="services-page__scope-note">
              Covers one workflow between up to two tools. Larger workflows and
              data migration are quoted separately.
            </p>
          </div>

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
            <p>
              Popular add-ons and integrations. These can be added to any
              project and are quoted individually.
            </p>
          </div>

          <div className="services-page__addon-groups">
            {addOnGroups.map(({ title, icon: Icon, items, seeBusinessTools, note }) => (
              <section
                className="services-page__addon-group"
                key={title}
                aria-label={title}
              >
                <h3>
                  <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                  <span>
                    {title}
                    {seeBusinessTools && (
                      <>
                        {" "}
                        <span className="services-page__addon-see">
                          (see{" "}
                          <a href="#business-tools-heading">Business tools</a>)
                        </span>
                      </>
                    )}
                  </span>
                </h3>

                <ul className="services-page__also-list">
                  {items.map((item) => (
                    <li key={item}>
                      <Plus
                        className="services-page__addon-marker"
                        size={12}
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {note && <p className="services-page__addon-note">{note}</p>}
              </section>
            ))}
          </div>

          <div className="services-page__contact">
            <div className="services-page__contact-copy">
              <p className="services-page__eyebrow">Let’s work together</p>
              <h2>Ready to get started?</h2>
              <p>
                Tell me a little about your project and I’ll recommend the best
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