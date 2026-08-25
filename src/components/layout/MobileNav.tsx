import Link from "next/link";
import { BriefcaseBusiness, Layers3, Send } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <Link href="/work" className="mobile-nav__link">
        <BriefcaseBusiness size={20} strokeWidth={1.5} />
        <span>Work</span>
      </Link>

      <Link href="/services" className="mobile-nav__link">
        <Layers3 size={20} strokeWidth={1.5} />
        <span>Services</span>
      </Link>

      <Link href="/work-with-me" className="mobile-nav__link">
        <Send size={20} strokeWidth={1.5} />
        <span>Contact</span>
      </Link>
    </nav>
  );
}