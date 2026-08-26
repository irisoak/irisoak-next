import Link from "next/link";

const projects = [
  {
    title: "Kawari Company",
    category: "Web Design & Development",
    href: "/work/kawari-company",
  },
  {
    title: "PartsPilot",
    category: "Automotive Inventory Intelligence Platform",
    href: "/work/partspilot",
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
          {projects.map((project) => (
            <article
              className="selected-work__project"
              key={project.title}
            >
              <Link
                href={project.href}
                className="selected-work__link"
              >
                <div className="selected-work__image">
                  {/* Project image will go here */}
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

                  <span
                    className="selected-work__arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="selected-work__footer">
          <Link href="/work" className="selected-work__view-all">
            View My Work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}