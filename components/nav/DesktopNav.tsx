"use client";

import { NAV_LINKS } from "./links";
import { scrollToHash } from "@/lib/lenis";

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => {
            e.preventDefault();
            scrollToHash(link.href);
          }}
          className="font-mono text-xs uppercase tracking-[0.15em] text-foam-white/70 transition-colors hover:text-bio-glow"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
