"use client";

import { motion } from "framer-motion";

interface Node {
  role: string;
  org: string;
  period: string;
  detail: string;
}

const NODES: Node[] = [
  {
    role: "Software Engineer",
    org: "Backend & Cloud Systems",
    period: "Recent",
    detail:
      "Designing service architecture, API contracts, and deployment pipelines across several production projects.",
  },
  {
    role: "Team Lead",
    org: "Fracture Capture",
    period: "6-person team",
    detail:
      "Ran Agile planning, code review, and integration for an ML-adjacent inference pipeline.",
  },
  {
    role: "Systems Builder",
    org: "Independent Projects",
    period: "Ongoing",
    detail:
      "Java, Node.js, and cloud-native tooling — multiplayer systems, real-time sync, and infra-as-code.",
  },
];

const SKILL_GROUPS = [
  { label: "Languages", items: ["Python", "Java", "Node.js", "TypeScript"] },
  { label: "Cloud & DevOps", items: ["Terraform", "Vercel", "CI/CD", "Cloudflare"] },
  { label: "Data", items: ["MongoDB", "Firebase/Firestore"] },
  { label: "AI Tooling", items: ["Cursor", "Claude Code"] },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-foam-white/50"
        >
          ~400m &middot; Twilight Zone
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 font-display text-2xl font-semibold text-foam-white sm:text-3xl"
        >
          Experience &amp; Skills
        </motion.h2>
        <p className="mt-3 max-w-xl text-sm text-foam-white/50">
          Signals returning from deeper water &mdash; less light, sharper
          contrast.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {NODES.map((node, i) => (
            <motion.div
              key={node.role}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-bio-glow animate-sonar-pulse" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bio-glow/70">
                {node.period}
              </p>
              <h3 className="mt-2 font-display text-base font-semibold text-foam-white">
                {node.role}
              </h3>
              <p className="mt-0.5 text-xs text-foam-white/50">{node.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-foam-white/65">
                {node.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foam-white/40">
                {group.label}
              </p>
              <ul className="mt-2 space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-foam-white/75">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
