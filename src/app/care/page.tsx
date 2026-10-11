import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Check,
  CircleHelp,
  FileCheck2,
  Gauge,
  Search,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";
import "./care.css";

export const metadata: Metadata = {
  title: "Website Care & Site Check-ups",
  description:
    "Straightforward website check-ups and ongoing care from Iris & Oak for custom-built and WordPress websites.",
  alternates: { canonical: "/care" },
};

const checkGroups = [
  {
    title: "Availability & speed",
    icon: Activity,
    checks: [
      "Uptime and availability reviewed",
      "Mobile page speed reviewed",
      "Desktop page speed reviewed",
      "Large images and media checked",
      "Page loading issues noted",
    ],
  },
  {
    title: "Key pages & journeys",
    icon: Search,
    checks: [
      "Up to five key pages reviewed",
      "Navigation and important links checked",
      "Contact, booking or enquiry journey reviewed",
      "Mobile layouts checked on key pages",
    ],
  },
  {
    title: "Content & findability",
    icon: FileCheck2,
    checks: [
      "Page titles reviewed",
      "Meta descriptions reviewed",
      "Headings and page structure reviewed",
      "Search visibility checked where access is available",
      "Key content and calls to action reviewed",
    ],
  },
  {
    title: "Usability & accessibility",
    icon: Smartphone,
    checks: [
      "Text and button contrast reviewed",
      "Meaningful images checked for alt text",
      "Keyboard focus and navigation reviewed",
      "Forms and labels reviewed",
    ],
  },
];

const faqs = [
  {
    question: "What does the £149 Site Check-up include?",
    answer:
      "An 18-check review of up to five key pages, an overall letter grade, prioritised findings and practical next steps. The report explains what was checked and what shaped the grade.",
  },
  {
    question: "How soon will I receive the report?",
    answer:
      "Your report will normally be ready within five working days after I have the website URL and any agreed access needed for the review.",
  },
  {
    question: "Which platforms do you support?",
    answer:
      "Ongoing Core and Growth care is for custom-built and WordPress websites. I can review Squarespace, Wix, GoDaddy Website Builder, Shopify or Webflow when you need a specific check, subject to what the platform allows.",
  },
  {
    question: "What do you need from me?",
    answer:
      "Start with your website URL and platform. If a check needs account access, I will explain the access required. I never need or ask for your password; you can invite me with an appropriate account or collaborator role.",
  },
  {
    question: "What if my website is unavailable during the review?",
    answer:
      "I will record what I can verify, note the time and impact of the outage, and agree a follow-up check with you if the affected checks cannot be completed.",
  },
  {
    question: "Can I share the report with my developer?",
    answer:
      "Yes. The report is yours to share with your developer or another person helping with your website.",
  },
  {
    question: "Can you fix the issues in the report?",
    answer:
      "Yes. Any implementation work is scoped and quoted separately before it begins. A follow-up review and updated grade are also quoted separately if you would like one.",
  },
  {
    question: "How do cancellations and refunds work?",
    answer:
      "I will confirm the applicable cancellation and refund terms before you pay or book, so you can review them before the check-up starts.",
  },
];

function ReportPreview() {
  return (
    <aside className="care-report" aria-label="Illustrative site check-up report preview">
      <div className="care-report__topline">
        <div>
          <p className="care-report__eyebrow">Example report</p>
          <h2>Website health</h2>
        </div>
        <span className="care-report__tag">Illustrative</span>
      </div>

      <div className="care-report__grade-row">
        <div className="care-report__grade" aria-label="Example overall grade B">
          <span>B</span>
          <small>Overall grade</small>
        </div>
        <div>
          <strong>A clear picture of your website.</strong>
          <p>The report shows what passed, what needs attention and why.</p>
        </div>
      </div>

      <ul className="care-report__checks">
        <li><Check size={16} aria-hidden="true" /><span>18 checks reviewed</span><b>18 / 18</b></li>
        <li><Gauge size={16} aria-hidden="true" /><span>Performance</span><b>Reviewed</b></li>
        <li><Search size={16} aria-hidden="true" /><span>Key pages</span><b>Checked</b></li>
        <li><ShieldCheck size={16} aria-hidden="true" /><span>Next steps</span><b>Prioritised</b></li>
      </ul>

      <p className="care-report__caption">
        Example layout only. Your findings and grade are based on your website.
      </p>
    </aside>
  );
}

export default function CarePage() {
  return (
    <div className="care-page">
      <section className="care-hero" id="overview" aria-labelledby="care-title">
        <div className="care-hero__copy">
          <p className="care-eyebrow">Website care &amp; site check-ups</p>
          <h1 id="care-title">A healthier website, without the admin.</h1>
          <p className="care-hero__intro">
            Clear website reviews and practical ongoing care for custom-built and WordPress websites.
          </p>
          <div className="care-hero__actions">
            <a className="care-button" href="#plans">Explore plans <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <p className="care-hero__platforms">WordPress <span>·</span> Custom-built <span>·</span> Other platforms by request</p>
        </div>
        <ReportPreview />
      </section>

      <section className="care-plans care-section" id="plans" aria-labelledby="plans-title">
        <div className="care-section__heading">
          <div>
            <p className="care-eyebrow">Clear options, practical support</p>
            <h2 id="plans-title">Choose the support that fits.</h2>
          </div>
          <p>Start with a one-off check-up, or choose ongoing care for an eligible website.</p>
        </div>

        <div className="care-plan-grid">
          <article className="care-plan-card">
            <p className="care-plan-card__type">One-off review</p>
            <h3>Site Check-up</h3>
            <p className="care-plan-card__price">£149 <span>one-off</span></p>
            <p className="care-plan-card__description">An 18-check review of up to five key pages, with a scored report and practical next steps.</p>
            <ul>
              <li><Check size={15} aria-hidden="true" /> Overall letter grade</li>
              <li><Check size={15} aria-hidden="true" /> Findings explained and prioritised</li>
              <li><Check size={15} aria-hidden="true" /> Report normally within five working days</li>
            </ul>
            <Link className="care-button care-button--outline" href="/#contact">Ask about a check-up <ArrowRight size={16} aria-hidden="true" /></Link>
          </article>

          <article className="care-plan-card">
            <p className="care-plan-card__type">Ongoing website care</p>
            <h3>Core</h3>
            <p className="care-plan-card__price">£59 <span>/ month</span></p>
            <p className="care-plan-card__annual">or £590 / year</p>
            <p className="care-plan-card__description">Routine maintenance and agreed essential checks for custom-built and WordPress websites.</p>
            <p className="care-plan-card__scope">The tasks included are confirmed for your site before you start.</p>
            <Link className="care-button care-button--outline" href="/#contact">Discuss Core <ArrowRight size={16} aria-hidden="true" /></Link>
          </article>

          <article className="care-plan-card care-plan-card--popular">
            <span className="care-plan-card__badge">Most popular</span>
            <p className="care-plan-card__type">Ongoing website care</p>
            <h3>Growth</h3>
            <p className="care-plan-card__price">£99 <span>/ month</span></p>
            <p className="care-plan-card__annual">or £990 / year</p>
            <p className="care-plan-card__description">More hands-on support for websites that need regular attention and agreed improvements.</p>
            <p className="care-plan-card__scope">The tasks and support level are confirmed for your site before you start.</p>
            <Link className="care-button" href="/#contact">Discuss Growth <ArrowRight size={16} aria-hidden="true" /></Link>
          </article>
        </div>
        <p className="care-plans__note">Ongoing plans are for custom-built and WordPress sites. Check-up work for other platforms is available by request. Prices shown are the total amounts payable; VAT is not charged.</p>
      </section>

      <section className="care-benefits" aria-label="What the service covers">
        <div><Wrench aria-hidden="true" /><span>Updates and maintenance</span></div>
        <div><Activity aria-hidden="true" /><span>Uptime and performance checks</span></div>
        <div><FileCheck2 aria-hidden="true" /><span>Clear findings and next steps</span></div>
        <div><CircleHelp aria-hidden="true" /><span>Support that fits your platform</span></div>
      </section>

      <section className="care-platforms care-section" aria-labelledby="platforms-title">
        <div>
          <p className="care-eyebrow">Support for the site you have</p>
          <h2 id="platforms-title">The right kind of help for your platform.</h2>
        </div>
        <div className="care-platforms__grid">
          <article>
            <span className="care-platforms__mark" aria-hidden="true">W</span>
            <div><h3>Custom-built &amp; WordPress</h3><p>Ongoing Core and Growth care plans are available.</p></div>
          </article>
          <article>
            <span className="care-platforms__mark care-platforms__mark--alt" aria-hidden="true"><Search size={20} /></span>
            <div><h3>Squarespace, Wix, GoDaddy, Shopify &amp; Webflow</h3><p>Specific checks can be arranged when you need them.</p></div>
          </article>
          <p className="care-platforms__note">What I can check or change depends on the access and features your platform provides. I never ask for your password.</p>
        </div>
      </section>

      <section className="care-checks care-section" aria-labelledby="checks-title">
        <div className="care-section__heading">
          <div><p className="care-eyebrow">What the Site Check-up reviews</p><h2 id="checks-title">18 checks, clearly explained.</h2></div>
          <p>Every report covers the same four areas. Checks that do not apply to your platform are identified rather than counted as passed.</p>
        </div>
        <div className="care-check-groups">
          {checkGroups.map(({ title, icon: Icon, checks }) => (
            <details className="care-check-group" key={title}>
              <summary><span className="care-check-group__title"><Icon size={20} aria-hidden="true" />{title}</span><span className="care-check-group__count">{checks.length} checks</span></summary>
              <ol>{checks.map((check) => <li key={check}>{check}</li>)}</ol>
            </details>
          ))}
        </div>
      </section>

      <section className="care-grade" aria-labelledby="grade-title">
        <div className="care-grade__letter" aria-hidden="true">A–F</div>
        <div><p className="care-eyebrow">A useful score, with context</p><h2 id="grade-title">The letter tells a story. The findings explain it.</h2><p>Your report shows the overall grade alongside the checks behind it. A stronger grade means fewer or less significant issues were found; any grade comes with clear reasons and practical next steps.</p></div>
      </section>

      <section className="care-after care-section" aria-labelledby="after-title">
        <div><p className="care-eyebrow">After your check-up</p><h2 id="after-title">Know what to do next.</h2><p>Use the report yourself, share it with your developer, or ask Iris &amp; Oak to scope the changes.</p></div>
        <div className="care-after__steps">
          <article><span>01</span><div><h3>Review the findings</h3><p>See what is working, what needs attention and which actions matter first.</p></div></article>
          <article><span>02</span><div><h3>Choose how to act</h3><p>Make the changes yourself or request a separate implementation quote.</p></div></article>
          <article><span>03</span><div><h3>Check progress</h3><p>A follow-up review and updated grade can be quoted separately once changes are complete.</p></div></article>
        </div>
      </section>

      <section className="care-faq care-section" id="faqs" aria-labelledby="faq-title">
        <div className="care-section__heading"><div><p className="care-eyebrow">FAQs</p><h2 id="faq-title">A few helpful details.</h2></div><p>Still unsure? <Link href="/#contact">Get in touch</Link>.</p></div>
        <div className="care-faq__list">
          {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="care-cta" aria-labelledby="care-cta-title">
        <p className="care-eyebrow">A clear next step for your website</p>
        <h2 id="care-cta-title">Let’s make the next step easier.</h2>
        <p>Tell me your website platform and what you would like help with. I’ll recommend the right starting point.</p>
        <Link className="care-button" href="/#contact">Talk to Iris &amp; Oak <ArrowRight size={17} aria-hidden="true" /></Link>
      </section>

      <footer className="care-footer">
        <Link className="care-footer__brand" href="/care">Iris &amp; Oak <em>Care</em></Link>
        <p>Website care from Iris &amp; Oak.</p>
        <nav aria-label="Care footer navigation"><a href="#overview">Overview</a><a href="#plans">Plans</a><a href="#faqs">FAQs</a><Link href="/privacy">Privacy</Link><Link href="/">Iris &amp; Oak</Link></nav>
        <small>© {new Date().getFullYear()} Iris &amp; Oak. All rights reserved.</small>
      </footer>
    </div>
  );
}
