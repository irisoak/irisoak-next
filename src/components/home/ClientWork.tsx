import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

const projects = [
  {
    title: "The Kawari Company",
    category: "Website design & build",
    description: "A first website for a safeguarding consultancy with over 25 years of experience.",
    href: "/work/kawari-company",
    image: "/images/work/kawari-company/kawari-homepage.png",
    imageAlt: "Kawari Company homepage screenshot",
  },
];

export default function ClientWork() {
  return (
    <section className="iowork">
      <Container>
        <div className="iowork__intro">
          <h1 className="iowork__heading">Client Work</h1>

          <p className="iowork__text">
            Projects for businesses, designed, 
            built and supported from start to finish.
          </p>
        </div>

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
                <h3>{project.title}</h3>
                <h4>{project.category}</h4>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}

          <div className="iowork__card iowork__card--placeholder">
            <div className="iowork__image iowork__image--placeholder">
              <span>Coming soon</span>
            </div>

            <div className="iowork__details">
              <h3>Maison Vale Events</h3>
              <p>Project underway</p>
            </div>
          </div>
        </div>

        <div className="iowork__footer">
          <Link href="/work" className="iowork__view-all">
            Browse the full portfolio <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}