"use client";

import { motion } from "framer-motion";
import { SeaCreatures } from "../ocean/SeaCreatures";

const FOCUS_AREAS = [
  { label: "Backend Architecture", detail: "REST APIs, service boundaries, async pipelines" },
  { label: "Cloud Deployments", detail: "CI/CD, Vercel, distributed storage" },
  { label: "API Integrations", detail: "Third-party services, auth, real-time sync" },
  { label: "AI Workflows", detail: "Inference pipelines, agentic tooling" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <SeaCreatures variant="sunlight" />
      <div className="relative z-[2] mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-foam-white/60"
        >
          ~50m &middot; Sunlight Zone
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 font-display text-2xl font-semibold text-foam-white sm:text-3xl"
        >
          Still enough light here to see clearly.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-foam-white/75"
        >
          I&apos;m a software and systems engineer who likes owning things
          end-to-end, from the database schema to the deploy pipeline that
          ships it. Recent work spans real-time backends, ML-adjacent
          processing pipelines, and cloud infrastructure for small teams
          moving fast.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FOCUS_AREAS.map((area, i) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <p className="font-display text-sm font-semibold text-foam-white">
                {area.label}
              </p>
              <p className="mt-1 font-mono text-xs text-foam-white/55">
                {area.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
