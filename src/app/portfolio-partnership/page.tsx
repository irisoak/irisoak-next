import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  Check,
  Compass,
  FileText,
  Gift,
  Globe,
  KeyRound,
  MessageCircle,
  Palette,
  Plus,
  Puzzle,
  Server,
  Star,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfolio Partnership Programme | Iris & Oak Digital Studio",
  description:
    "A carefully scoped website project for an independent business, with the design and development fee waived in return for a portfolio case study.",
  alternates: {
    canonical: "/portfolio-partnership",
  },
};

const partnershipEnquiryHref = "/?enquiry=portfolio-partnership#contact";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Care", href: "/care" }
];

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const partnershipCards: {
  title: string;
  items: Feature[];
}[] = [
  {
    title: "What I bring",
    items: [
      {
        icon: Gift,
        title: "£0 design & development fee",
        description:
          "My design and development fee is waived for the agreed scope.",
      },
      {
        icon: Palette,
        title: "Considered, bespoke design",
        description:
          "A website shaped around your business, your audience and your goals.",
      },
      {
        icon: MessageCircle,
        title: "Clear communication",
        description:
          "You’ll know what’s happening and what comes next, from our first conversation to launch.",
      },
      {
        icon: Compass,
        title: "Honest recommendations",
        description:
          "Practical advice on platform, structure and content, shaped around your goals.",
      },
    ],
  },
  {
    title: "What you bring",
    items: [
      {
        icon: Users,
        title: "Your time and feedback",
        description:
          "Be available for key discussions and share timely feedback.",
      },
      {
        icon: FileText,
        title: "Accurate content and assets",
        description:
          "Provide the text, images and other materials needed for the project.",
      },
      {
        icon: Star,
        title: "Permission to feature the work",
        description:
          "You’re happy for me to feature the finished website as a portfolio case study.",
      },
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell me about your business",
    description: "Share your business and website goals.",
  },
  {
    number: "02",
    title: "Chat and selection",
    description:
      "Have a short call to check whether the programme is a good fit. I’ll let you know within 3 working days.",
  },
  {
    number: "03",
    title: "Plan and design",
    description:
      "I’ll confirm the platform and agreed scope, then share the design for your feedback.",
  },
  {
    number: "04",
    title: "Build and launch",
    description:
      "I’ll build the website, refine it with your input, and hand it over with launch support.",
  },
];

type ScopeItem = {
  key: string;
  content: ReactNode;
};

const includedScope: ScopeItem[] = [
  "A custom website of up to five pages",
  "One agreed platform, confirmed before work starts",
  "Responsive bespoke design and development",
  "Basic on-page SEO setup",
  "One round of revisions, with feedback gathered together",
  "Launch support and handover",
].map((item) => ({ key: item, content: item }));

const extraCostScope: ScopeItem[] = [
  ...[
    "E-commerce and online shops",
    "Complex features or integrations",
    "Custom web applications",
    "Additional pages",
    "Extensive copywriting or content production",
    "Third-party subscriptions",
  ].map((item) => ({ key: item, content: item })),
  {
    key: "Ongoing maintenance",
    content: (
      <>
        Ongoing maintenance, available through a{" "}
        <Link href="/care">Care plan</Link>
      </>
    ),
  },
];

const fitCriteria: Feature[] = [
  {
    icon: Briefcase,
    title: "An independent business",
    description:
      "You run an established independent business or small organisation.",
  },
  {
    icon: Target,
    title: "A clear purpose",
    description:
      "You know who your website needs to reach and what it should help them do.",
  },
  {
    icon: CalendarDays,
    title: "Ready to begin",
    description: "You’re ready to start the project within the next 1–3 months.",
  },
];

const outOfPocketCosts = [
  {
    icon: Globe,
    title: "Domain name",
    description:
      "Your domain is registered and paid for directly by you.",
  },
  {
    icon: Server,
    title: "Website hosting",
    description:
      "Paid directly to your hosting provider. On Squarespace or Wix, hosting is part of the platform subscription.",
  },
  {
    icon: Puzzle,
    title: "Third-party tools",
    description:
      "Any paid plugins, booking tools or other subscriptions are paid directly to their providers.",
  },
];

const faqs: {
  question: string;
  answer: ReactNode;
}[] = [
  {
    question: "How do you choose which businesses to work with?",
    answer:
      "I’m reviewing a limited number of applications for two or three places. After you get in touch, we’ll have a short call to check whether your business and project are a good fit for the programme and its scope. I’ll let you know within 3 working days.",
  },
  {
    question: "How long does the project take?",
    answer:
      "Once the scope, platform and content are confirmed, most projects take up to three weeks. I’ll confirm your timeline before work begins.",
  },
  {
    question: "Which platform will my website be built on?",
    answer:
      "We’ll agree one platform before work starts. I’ll recommend the option that best suits your business, your budget and how you’d like to manage the website.",
  },
  {
    question: "Will I be able to update the website myself?",
    answer:
      "Yes. I can set up the parts you’d like to edit yourself, such as text, images or opening hours, and the handover includes guidance on making those updates.",
  },
  {
    question: "Do I need to sign anything?",
    answer:
      "Yes. Before work starts, I’ll send you a written agreement to review and sign. It covers the agreed scope, our responsibilities, out-of-pocket costs, ownership and portfolio permission.",
  },
  {
    question: "What happens after launch?",
    answer: (
      <>
        I’ll hand over your website, access and guidance. You can manage the
        website yourself, or choose an optional{" "}
        <Link href="/care">Care plan</Link> for ongoing maintenance, from £59
        per month.
      </>
    ),
  },
];

function NavigationLinks() {
  return (
    <ul className={styles.navList}>
      {navigation.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="Iris & Oak Digital Studio home"
        >
          <span className={styles.brandName}>Iris &amp; Oak</span>
          <span className={styles.brandDescriptor}>Digital Studio</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <NavigationLinks />
          <Link className={styles.headerCta} href={partnershipEnquiryHref}>
            Tell me about your business
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </nav>

        <details className={styles.mobileMenu}>
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>

          <div className={styles.mobileMenuPanel}>
            <nav aria-label="Mobile navigation">
              <NavigationLinks />
              <Link className={styles.headerCta} href={partnershipEnquiryHref}>
                Tell me about your business
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

function FeatureCard({
  title,
  items,
}: {
  title: string;
  items: Feature[];
}) {
  return (
    <article className={styles.partnershipCard}>
      <h3>{title}</h3>
      <ul className={styles.featureList}>
        {items.map(({ icon: Icon, title: itemTitle, description }) => (
          <li className={styles.featureItem} key={itemTitle}>
            <span className={styles.featureIcon}>
              <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span>
              <strong>{itemTitle}</strong>
              <span className={styles.featureDescription}>{description}</span>
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ScopeList({
  items,
  extraCost = false,
}: {
  items: ScopeItem[];
  extraCost?: boolean;
}) {
  return (
    <ul className={styles.scopeList}>
      {items.map((item) => (
        <li key={item.key}>
          {extraCost ? (
            <Plus
              className={styles.excludedIcon}
              size={17}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          ) : (
            <Check
              className={styles.includedIcon}
              size={17}
              strokeWidth={2}
              aria-hidden="true"
            />
          )}
          <span>{item.content}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PortfolioPartnershipPage() {
  return (
    <div className={`${styles.site} ppp-route-marker`}>
      <SiteHeader />

      <div>
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroArt} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Portfolio Partnership Programme</p>

              <h1 id="hero-heading">
                A website for your business, a case study for mine
              </h1>

              <p className={styles.heroText}>
                I’m partnering with two or three independent businesses to
                create a new website, with my design and development fee
                waived.
              </p>

              <div className={styles.heroDetails}>
                <div className={styles.feeBadge}>
                  <span>£0</span>
                  <span>design &amp; development fee</span>
                </div>

                <div className={styles.limitedBadge}>
                  <Users size={21} aria-hidden="true" />
                  <span>
                    Limited to
                    <strong>2–3 businesses</strong>
                  </span>
                </div>
              </div>

              <Link className={styles.heroCta} href={partnershipEnquiryHref}>
                Tell me about your business
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className={styles.partnership}
          id="partnership"
          aria-labelledby="partnership-heading"
        >
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={styles.eyebrow}>The partnership</p>
                <h2 id="partnership-heading">
                  A thoughtful exchange,
                  <br />
                  real benefits
                </h2>
              </div>

              <p className={styles.sectionIntroText}>
                It’s a genuine partnership that creates value for both sides.
                Here’s what each of us brings to the project.
              </p>
            </div>

            <div className={styles.partnershipGrid}>
              {partnershipCards.map((card) => (
                <FeatureCard
                  key={card.title}
                  title={card.title}
                  items={card.items}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.process} id="process" aria-labelledby="process-heading">
          <div className={styles.container}>
            <p className={styles.eyebrow}>The process</p>
            <h2 id="process-heading">How it works</h2>
            <p className={styles.processIntro}>
              From first conversation to launch, we’ll work together to create
              a website that supports your goals and makes a real difference to
              your business.
            </p>

            <ol className={styles.processList}>
              {processSteps.map((step) => (
                <li className={styles.processStep} key={step.number}>
                  <span className={styles.processNumber}>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.scope} id="scope" aria-labelledby="scope-heading">
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={styles.eyebrow}>The scope</p>
                <h2 id="scope-heading">A clearly defined website project</h2>
              </div>

              <p className={styles.sectionIntroText}>
                My design and development fee is waived for the items listed
                here. I’ll confirm the platform and project scope with you
                before work begins.
              </p>
            </div>

            <div className={styles.scopeGrid}>
              <article className={styles.scopeCard}>
                <h3>Included</h3>
                <ScopeList items={includedScope} />
              </article>

              <article className={`${styles.scopeCard} ${styles.scopeCardMuted}`}>
                <h3>Available at extra cost</h3>
                <ScopeList items={extraCostScope} extraCost />
              </article>
            </div>

            <p className={styles.scopeNote}>
              If you need pages or features beyond this scope, I’ll discuss the
              options and provide a separate quote before starting any extra
              work.
            </p>
          </div>
        </section>

        <section
          className={styles.forWho}
          id="who-its-for"
          aria-labelledby="for-who-heading"
        >
          <div className={styles.container}>
            <p className={styles.eyebrow}>Who it’s for</p>
            <h2 id="for-who-heading">
              A good fit for independent businesses
            </h2>

            <ul className={styles.fitGrid}>
              {fitCriteria.map(({ icon: Icon, title, description }) => (
                <li className={styles.fitItem} key={title}>
                  <span className={styles.fitIcon}>
                    <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className={styles.outOfPocket}
          id="out-of-pocket"
          aria-labelledby="costs-heading"
        >
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={styles.eyebrow}>Out-of-pocket costs</p>
                <h2 id="costs-heading">Clear costs and full ownership</h2>
              </div>

              <p className={styles.sectionIntroText}>
                Any third-party costs are paid directly by you to the relevant
                providers.
              </p>
            </div>

            <div className={styles.costGrid}>
              {outOfPocketCosts.map(({ icon: Icon, title, description }) => (
                <article className={styles.costCard} key={title}>
                  <span className={styles.costIcon}>
                    <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>

            <div className={styles.ownershipCard}>
              <span className={styles.ownershipIcon}>
                <KeyRound size={24} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <h3>You own your website</h3>
                <p>
                  You have full ownership of the completed website and can
                  change it, add to it or move it in the future. With your
                  permission, I’ll feature the finished website as a portfolio
                  case study, and you’ll approve its final content before it’s
                  published.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faq} id="faq" aria-labelledby="faq-heading">
          <div className={styles.container}>
            <div className={styles.faqHeading}>
              <div>
                <p className={styles.eyebrow}>Frequently asked questions</p>
                <h2 id="faq-heading">A few common questions</h2>
              </div>
            </div>

            <div className={styles.faqList} id="faq-list">
              {faqs.map((faq) => (
                <details className={styles.faqItem} key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <span className={styles.faqToggle} aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.contact}
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className={styles.contactArt} aria-hidden="true" />
          <div className={`${styles.container} ${styles.contactInner}`}>
            <div>
              <p className={styles.eyebrow}>Portfolio Partnership Programme</p>
              <h2 id="contact-heading">Tell me about your business</h2>
              <p>
                If this feels like a good fit, I’d love to hear from you. I’m
                reviewing a limited number of applications, so share a few
                details about your business and your website goals. I’ll reply
                within 3 working days.
              </p>
            </div>

            <div className={styles.contactActions}>
              <Link className={styles.contactCta} href={partnershipEnquiryHref}>
                Apply for the partnership
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <Link className={styles.contactSecondary} href="/work">
                See recent work
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* The shared Iris & Oak footer is rendered by app/layout.tsx. */}
    </div>
  );
}