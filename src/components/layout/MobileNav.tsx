"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { BriefcaseBusiness, Layers3, Send } from "lucide-react";

export default function MobileNav() {
  const closeMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.closest("details")?.removeAttribute("open");
  };

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <Link href="/work" className="mobile-nav__link" onClick={closeMenu}>
        <BriefcaseBusiness size={20} strokeWidth={1.5} />
        <span>Work</span>
      </Link>

      <Link href="/services" className="mobile-nav__link" onClick={closeMenu}>
        <Layers3 size={20} strokeWidth={1.5} />
        <span>Services</span>
      </Link>

      <Link href="/care" className="mobile-nav__link" onClick={closeMenu}>
        <Layers3 size={20} strokeWidth={1.5} />
        <span>Care</span>
      </Link>

      <Link href="/contact" className="mobile-nav__link" onClick={closeMenu}>
        <Send size={20} strokeWidth={1.5} />
        <span>Contact</span>
      </Link>
    </nav>
  );
}