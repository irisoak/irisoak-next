import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selected Web Design & Development Work",
  description:
    "Explore selected Iris & Oak client work, portfolio projects and website concepts.",
  alternates: {
    canonical: "/work",
  },
};

type Project = {
  title: string;
  category: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePlaceholder?: string;
  href?: string;
  target?: string;
  rel?: string;
};

const clientProjects: Project[] = [
  {
    title: "Kawari Company",
    category: "Client website · Design & development",
    description:
      "A live consultancy website for a specialist practice with 25 years of experience working across safeguarding, regulation, education and independent review.",
    href: "https://www.kawaricompany.com",
    target: "_blank",
    rel: "noopener noreferrer",
    image: "/images/kawari-company.png",
    imageAlt: "Kawari Company consultancy website homepage",
  },
  {
    title: "Maison Vale Events",
    category: "Client website · In progress",
    description:
      "A bespoke website for a wedding and events business nearly 30 years in the making, designed to reflect the trust, craft and experience behind every celebration.",
    imagePlaceholder: "Project underway",
  },
];

const portfolioProjects: Project[] = [
  {
    title: "PartsPilot",
    category: "Full-stack product · Automotive",
    description:
      "An inventory management and analytics platform for automotive stock, suppliers and operational insight.",
    href: "https://www.partspilot.uk",
    target: "_blank",
    rel: "noopener noreferrer",
    image: "/images/partspilot-landing-page.png",
    imageAlt:
      "PartsPilot dashboard showing inventory metrics and recent activity",
  },
  {
    title: "Bloom",
    category: "Digital product · Planning",
    description:
      "A visual task planner designed to make daily routines feel more manageable.",
    href: "https://www.bloomapp.uk",
    target: "_blank",
    rel: "noopener noreferrer",
    image: "/images/bloom-overview.png",
    imageAlt:
      "Bloom homepage showing the visual task planning interface",
  },
];

function ProjectCard({
  project,
  number,
}: {
  project: Project;
  number: string;
}) {
  const content = (
    <>
      <div className="work-page__project-image">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            width={1600}
            height={800}
            sizes="(max-width: 48rem) 100vw, 50vw"
            className="work-page__project-screenshot"
          />
        ) : (
          <div className="work-page__project-placeholder">
            <span>{project.imagePlaceholder ?? "Project image coming soon"}</span>
          </div>
        )}
      </div>

      <div className="work-page__project-content">
        <div>
          <p className="work-page__category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="work-page__description">{project.description}</p>
        </div>

        {project.href && (
          <span className="work-page__arrow" aria-hidden="true">
            →
          </span>
        )}
      </div>
    </>
  );

  return (
    <article className="work-page__project">
      {project.href ? (
        <Link
          href={project.href}
          target={project.target}
          rel={project.rel}
          className="work-page__project-link"
          aria-label={`View ${project.title} project`}
        >
          <span className="work-page__project-number" aria-hidden="true">
            {number}
          </span>
          {content}
        </Link>
      ) : (
        <div className="work-page__project-link work-page__project-link--static">
          <span className="work-page__project-number" aria-hidden="true">
            {number}
          </span>
          {content}
        </div>
      )}
    </article>
  );
}

function ProjectSection({
  id,
  title,
  description,
  projects,
}: {
  id: string;
  title: string;
  description: string;
  projects: Project[];
}) {
  return (
    <section className="work-page__section" id={id}>
      <header className="work-page__section-heading">
        <h2>{title}</h2>
        <p>{description}</p>
      </header>

      <div className="work-page__grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            number={`0${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function WorkPage() {
  return (
    <main className="work-page">
      <div className="site-container">
        <header className="work-page__header">
          <p className="work-page__eyebrow">Work</p>

          <h1>From the Studio</h1>

          <p className="work-page__intro">
            Client projects, concepts and personal builds, 
            each shaped around the people who use them.
          </p>
        </header>

        <ProjectSection
          id="client-work"
          title="Client work"
          description="Websites and digital experiences built for independent businesses"
          projects={clientProjects}
        />

        <ProjectSection
          id="portfolio"
          title="Portfolio"
          description="Independent builds in product, design and engineering."
          projects={portfolioProjects}
        />

        <section className="work-page__contact">
          <p>Have a project in mind?</p>
          <Link href="/#contact">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </main>
  );
}