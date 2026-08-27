"use client";

import { motion } from "framer-motion";
import type { OpenSourceEntry } from "@/lib/opensource";
import { TechTag } from "../ui/TechTag";
import { SeaCreatures } from "../ocean/SeaCreatures";

export function OpenSource({ entries }: { entries: OpenSourceEntry[] }) {
  return (
    <section
      id="open-source"
      className="relative px-6 py-28 sm:px-10 lg:px-16"
    >
      <SeaCreatures variant="threshold" />
      <div className="relative z-[2] mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-foam-white/55"
        >
          ~250m &middot; Twilight Threshold
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 font-display text-2xl font-semibold text-foam-white sm:text-3xl"
        >
          Open Source
        </motion.h2>
        <p className="mt-3 max-w-xl text-sm text-foam-white/50">
          Contributions to projects outside my own dive log.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {entries.map((entry, i) => (
            <motion.a
              key={entry.slug}
              href={entry.htmlUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-bio-glow/60"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 shadow-[0_0_32px_rgba(77,255,224,0.35)] transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-foam-white">
                  {entry.title}
                </h3>
                {entry.stars > 0 && (
                  <span className="flex shrink-0 items-center gap-1 font-mono text-[11px] text-foam-white/50">
                    &#9733; {entry.stars}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-foam-white/70">
                {entry.description}
              </p>

              <p className="mt-4 flex gap-2 text-xs leading-relaxed text-foam-white/55">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-bio-glow/70" />
                {entry.contribution}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {entry.techTags.map((tag) => (
                  <TechTag key={tag} label={tag} />
                ))}
              </div>

              <span className="mt-5 font-mono text-xs text-bio-glow/80 transition-colors group-hover:text-bio-glow">
                View repository &rarr;
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
