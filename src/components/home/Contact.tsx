import Container from "@/components/layout/Container";
import Button from "../ui/Button";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      className="iocontact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <Container className="iocontact__inner">
        <div className="iocontact__intro">
          <p className="iocontact__eyebrow">Let&apos;s collaborate</p>

          <h2 className="iocontact__heading" id="contact-heading">
            Have a project in mind?
          </h2>

          <p className="iocontact__text">
            Share a little about what you need and I&apos;ll reply within two business days.
          </p>

          <Button
            href="mailto:iris@irisoak.dev"
            className="iofooter__cta"
          >
            Get in touch
          </Button>
        </div>

        <form className="iocontact__form" action="/api/contact" method="POST">
          <div className="iocontact__field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>

          <div className="iocontact__field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className="iocontact__field iocontact__field--message">
            <label htmlFor="contact-message">A little about your project</label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              required
            />
          </div>

          <button className="iocontact__submit" type="submit">
            Send enquiry <span aria-hidden="true">→</span>
          </button>
        </form>
      </Container>
    </section>
  );
}