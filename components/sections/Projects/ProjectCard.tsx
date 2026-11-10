"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/github";
import { TechTag } from "../../ui/TechTag";

const CARD_CLASS =
  "group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-bio-glow/60";

const CARD_MOTION = {
  layout: true,
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.35 },
  whileHover: { y: -4 },
} as const;

function CardShell({ href, children }: { href: string | null; children: ReactNode }) {
  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noreferrer" {...CARD_MOTION} className={CARD_CLASS}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.div {...CARD_MOTION} className={CARD_CLASS}>
      {children}
    </motion.div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <CardShell href={project.htmlUrl}>
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 shadow-[0_0_32px_rgba(77,255,224,0.35)] transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-foam-white">
          {project.title}
        </h3>
        {project.stars > 0 && (
          <span className="flex shrink-0 items-center gap-1 font-mono text-[11px] text-foam-white/75">
            &#9733; {project.stars}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-foam-white/85">
        {project.tagline}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.bullets.slice(0, 2).map((bullet) => (
          <li
            key={bullet}
            className="flex gap-2 text-xs leading-relaxed text-foam-white/80"
          >
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-bio-glow/70" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.techTags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>

      {project.htmlUrl ? (
        <span className="mt-5 font-mono text-xs text-bio-glow/95 transition-colors group-hover:text-bio-glow">
          View repository &rarr;
        </span>
      ) : (
        <span className="mt-5 font-mono text-xs text-foam-white/65">
          Private repository
        </span>
      )}
    </CardShell>
  );
}
