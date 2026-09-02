import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Kawari Company",
    category: "Web Design & Development",
    description:
      "A consultancy website in development for a specialist safeguarding, regulation and independent review practice.",
    href: "/work/kawari-company",
    image: null,
    imageAlt: "",
    status: "In Development",
  },
  {
    title: "PartsPilot",
    category: "Automotive Inventory Intelligence Platform",
    description:
      "A full-stack inventory platform built to manage automotive parts, stock levels and operational data.",
    href: "/work/partspilot",
    image: "/images/work/partspilot/dashboard.png",
    imageAlt:
      "PartsPilot dashboard showing inventory metrics and recent activity",
    status: null,
  },
];

export default function WorkPage() {
  return (
    <main className="work-page">
      <div className="site-container">
        <header className="work-page__header">
          <p className="work-page__eyebrow">
            Selected Work
          </p>

          <h1>A selection of recent work.</h1>

          <p className="work-page__intro">
            Websites, applications and digital tools designed around
            real requirements, with a focus on clarity, maintainability
            and thoughtful engineering.
          </p>
        </header>

        <div className="work-page__projects">
          {projects.map((project, index) => {
            const content = (
              <>
                <div className="work-page__project-number">
                  0{index + 1}
                </div>

                <div className="work-page__project-image">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={1600}
                      height={900}
                      className="work-page__project-screenshot"
                    />
                  ) : (
                    <div className="work-page__project-placeholder">
                      <span>{project.status}</span>
                    </div>
                  )}
                </div>

                <div className="work-page__project-content">
                  <div>
                    <p className="work-page__category">
                      {project.category}
                    </p>

                    <h2>{project.title}</h2>

                    <p className="work-page__description">
                      {project.description}
                    </p>
                  </div>

                  {project.href && (
                    <span
                      className="work-page__arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <article
                className="work-page__project"
                key={project.title}
              >
                {project.href ? (
                  <Link
                    href={project.href}
                    className="work-page__project-link"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="work-page__project-link work-page__project-link--disabled">
                    {content}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="work-page__contact">
          <p>Have a project in mind?</p>

          <Link href="/#client-journey">
            Start a conversation{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}