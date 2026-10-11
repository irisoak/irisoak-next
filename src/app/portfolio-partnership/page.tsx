import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  Check,
  FileText,
  Gift,
  Globe,
  Heart,
  KeyRound,
  Layers,
  Leaf,
  Palette,
  Puzzle,
  Server,
  Settings,
  Star,
  Target,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import styles from "./page.module.css";"./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Partnership Programme | Iris & Oak Digital Studio",
  description:
    "A carefully scoped website project for an independent business, with the design and development fee waived in return for a portfolio case study.",
  alternates: {
    canonical: "/portfolio-partnership",
  },
};

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
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
          "My design and development fee is waived for the scope outlined below.",
      },
      {
        icon: Palette,
        title: "Considered, strategic design",
        description:
          "A website shaped around your business, your audience and your goals.",
      },
      {
        icon: Settings,
        title: "A smooth, collaborative process",
        description:
          "Clear communication and support from our first conversation to launch.",
      },
      {
        icon: Leaf,
        title: "A complete, high-quality website",
        description:
          "Thoughtful design and development focused on your business needs.",
      },
    ],
  },
  {
    title: "What you bring",
    items: [
      {
        icon: Users,
        title: "Your time and input",
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
        icon: Heart,
        title: "A collaborative approach",
        description:
          "Share your insight and work with me throughout the project.",
      },
      {
        icon: Star,
        title: "Permission to feature the work",
        description:
          "You give permission for me to feature the completed website as a case study, with your approval of the final content.",
      },
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Get in touch",
    description: "Tell me about your business and your website goals.",
  },
  {
    number: "02",
    title: "Plan & design",
    description:
      "I’ll confirm the platform and scope, then create a tailored plan and design for your feedback.",
  },
  {
    number: "03",
    title: "Build & launch",
    description:
      "I’ll build the website, refine it with your input, and hand it over with launch support.",
  },
];

const includedScope = [
  "A custom website of up to five pages",
  "One agreed platform, confirmed before work starts",
  "Responsive bespoke design and development",
  "Basic on-page SEO setup",
  "One consolidated revision round",
  "Launch support, training and handover",
];

const excludedScope = [
  "E-commerce and online shops",
  "Complex features or integrations",
  "Custom web applications",
  "Additional pages",
  "Extensive copywriting or content production",
  "Paid third-party subscriptions and ongoing maintenance",
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
  {
    icon: Layers,
    title: "A focused website project",
    description:
      "Your project can be delivered as a website of up to five pages.",
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
      "Hosting is set up under your own account and paid to the provider.",
  },
  {
    icon: Puzzle,
    title: "Third-party tools",
    description:
      "Any paid plugins, booking tools or other subscriptions remain your cost.",
  },
];

const faqs = [
  {
    question: "What does the £0 design and development fee cover?",
    answer:
      "It covers the website work listed in the scope section: a responsive website of up to five pages, on the agreed platform, with basic on-page SEO, one consolidated revision round, and launch support and handover. Anything outside that scope is discussed and quoted separately.",
  },
  {
    question: "What costs will I need to cover?",
    answer:
      "You pay for your domain, hosting and any third-party tools or subscriptions directly to their providers. The amounts depend on the providers and services you choose.",
  },
  {
    question: "Will I own the finished website?",
    answer:
      "Yes. You retain ownership of the completed website. I’ll hand over the agreed website files, access information and guidance.",
  },
  {
    question: "Can I request extra pages or features?",
    answer:
      "Yes. I’ll review the request with you and confirm the additional scope and cost before starting that work.",
  },
  {
    question: "Will my website be featured in your portfolio?",
    answer:
      "Yes. Permission to feature the completed website as a case study is part of the partnership. You’ll approve the final case-study content before it is published.",
  },
  {
    question: "What happens after launch?",
    answer:
      "I’ll hand over your website, access and guidance. You can manage the site yourself or choose an optional Care plan from £59 per month.",
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
          <Link className={styles.headerCta} href="/#contact">
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
              <Link className={styles.headerCta} href="/#contact">
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
  excluded = false,
}: {
  items: string[];
  excluded?: boolean;
}) {
  return (
    <ul className={styles.scopeList}>
      {items.map((item) => (
        <li key={item}>
          {excluded ? (
            <X
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
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PortfolioPartnershipPage() {
  return (
    <div className={`${styles.site} ppp-route-marker`}>
      <SiteHeader />

      <main>
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroArt} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Portfolio Partnership Programme</p>

              <h1 id="hero-heading">
                A website project
                <br />
                with shared value
              </h1>

              <p className={styles.heroText}>
                I help independent businesses make their next step online with
                a carefully scoped website project. In return for the design
                and development fee being waived, you’ll give permission for me
                to feature the completed work as a portfolio case study.
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

              <Link className={styles.heroCta} href="/#contact">
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
                This programme supports an independent business with a
                high-quality website while giving me the opportunity to create
                a new portfolio case study. It’s a genuine partnership that
                creates value for both sides.
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
            <h2 id="process-heading">
              A clear and collaborative three-step process
            </h2>
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
                The design and development fee is waived for the items listed
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
                <h3>Quoted separately</h3>
                <ScopeList items={excludedScope} excluded />
              </article>
            </div>

            <p className={styles.scopeNote}>
              If you need pages or features beyond this scope, I’ll discuss the
              options and provide a separate quote before taking on the extra
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
                There’s no design or development fee for the agreed scope.
                You’ll pay any essential third-party costs directly to the
                relevant provider.
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
                  You retain ownership of the completed website and can make
                  changes, add to it or move it in the future. As part of this
                  partnership, you give permission for me to feature the
                  completed website as a case study. You approve the final
                  content before it is published.
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
                If this feels like a good fit, I’d love to hear from you. Share
                a few details about your business and your website goals, and
                I’ll be in touch.
              </p>
            </div>

            <Link className={styles.contactCta} href="/#contact">
              Tell me about your business
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      {/* The shared Iris & Oak footer is rendered by app/layout.tsx. */}
    </div>
  );
}