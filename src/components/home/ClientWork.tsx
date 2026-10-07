import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

const projects = [
  {
    title: "Kawari Company",
    category: "Web Design & Development",
    href: "/work/kawari-company",
    image: "/images/work/kawari-company/kawari-homepage.png",
    imageAlt: "Kawari Company homepage screenshot",
  },
  {
    title: "PartsPilot",
    category: "Automotive Inventory Intelligence Platform",
    href: "/work/partspilot",
    image: "/images/work/partspilot/overview.png",
    imageAlt:
      "PartsPilot dashboard showing inventory metrics and recent activity",
  },
];

export default function ClientWork() {
  return (
    <section className="iowork">
      <Container>
        <p className="iowork__eyebrow">
          Client Work
        </p>

        <p className="iowork__intro">
          From established businesses launching their first website to
          brands ready for a refresh — here&apos;s a look at that work in
          practice.
        </p>

        <div className="iowork__grid">
          {projects.map((project) => (
            <Link
              href={project.href}
              className="iowork__card"
              key={project.title}
            >
              <div className="iowork__image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1600}
                  height={900}
                />
              </div>

              <div className="iowork__details">
                <h2>{project.title}</h2>
                <p>{project.category}</p>
              </div>
            </Link>
          ))}

          <div
            className="iowork__card iowork__card--placeholder"
            aria-label="Maison Vale Events — project underway, not yet available"
          >
            <div className="iowork__image iowork__image--placeholder">
              <span>Coming soon</span>
            </div>

            <div className="iowork__details">
              <h2>Maison Vale Events</h2>
              <p>Project underway</p>
            </div>
          </div>
        </div>

        <div className="iowork__footer">
          <Link href="/work" className="iowork__view-all">
            View my work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
