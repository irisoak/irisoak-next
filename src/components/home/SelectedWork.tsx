import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Kawari Company",
    category: "Web Design & Development",
    href: "/work/kawari-company",
    image: null,
    imageAlt: "",
    status: "In Development",
  },
  {
    title: "PartsPilot",
    category: "Automotive Inventory Intelligence Platform",
    href: "/work/partspilot",
    image: "/images/work/partspilot/dashboard.png",
    imageAlt:
      "PartsPilot dashboard showing inventory metrics and recent activity",
    status: null,
  },
];

export default function SelectedWork() {
  return (
    <section className="selected-work">
      <div className="site-container">
        <p className="selected-work__eyebrow">
          Selected Work
        </p>

        <div className="selected-work__grid">
          {projects.map((project) => {
            const content = (
              <>
                <div className="selected-work__image">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={1600}
                      height={900}
                      className="selected-work__screenshot"
                    />
                  ) : (
                    <div className="selected-work__placeholder">
                      <span>{project.status}</span>
                    </div>
                  )}
                </div>

                <div className="selected-work__details">
                  <div>
                    <h2 className="selected-work__title">
                      {project.title}
                    </h2>

                    <p className="selected-work__category">
                      {project.category}
                    </p>
                  </div>

                  {project.href && (
                    <span
                      className="selected-work__arrow"
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
                className="selected-work__project"
                key={project.title}
              >
                {project.href ? (
                  <Link
                    href={project.href}
                    className="selected-work__link"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="selected-work__link selected-work__link--disabled">
                    {content}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="selected-work__footer">
          <Link
            href="/work"
            className="selected-work__view-all"
          >
            View My Work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}