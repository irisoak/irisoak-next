import Link from "next/link";

const projects = [
  {
    title: "Kawari Company",
    category: "Web Design & Development",
    description:
      "A considered business website designed to create a clearer, more polished digital presence.",
    href: "/work/kawari-company",
  },
  {
    title: "PartsPilot",
    category: "Automotive Inventory Intelligence Platform",
    description:
      "A full-stack inventory platform built to manage automotive parts, stock levels and operational data.",
    href: "/work/partspilot",
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
          {projects.map((project, index) => (
            <article
              className="work-page__project"
              key={project.title}
            >
              <Link
                href={project.href}
                className="work-page__project-link"
              >
                <div className="work-page__project-number">
                  0{index + 1}
                </div>

                <div className="work-page__project-image">
                  {/* Project image will go here */}
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

                  <span className="work-page__arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="work-page__contact">
          <p>Have a project in mind?</p>

          <Link href="/#client-journey">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}