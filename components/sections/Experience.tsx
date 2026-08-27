"use client";

import { motion } from "framer-motion";
import { SeaCreatures } from "../ocean/SeaCreatures";

const ROLE = {
  title: "IVR Developer",
  org: "ITNav",
  period: "Dec 2025 - Present",
  bullets: [
    "Support and maintain enterprise Genesys Cloud Contact Center and IVR production environments, including routing, integrations, configuration and operational troubleshooting.",
    "Monitor live production systems, analyze logs and diagnose infrastructure, connectivity, configuration and integration issues.",
    "Work with REST APIs, Webhooks, OAuth and external enterprise systems, troubleshooting communication and data-flow failures.",
    "Build scripts and automation tools for configuration management, environment migration, deployment and repetitive operational tasks.",
    "Provision and manage cloud infrastructure and application configuration using Terraform and YAML-based automation.",
    "Work with internal infrastructure teams, customers and external systems to investigate and resolve production issues.",
    "Support development, testing and production environments, including deployment, configuration validation and ongoing operational reliability.",
  ],
};

const SKILL_GROUPS = [
  { label: "Contact Center", items: ["Genesys Cloud", "IVR Routing", "Webhooks", "OAuth"] },
  { label: "Cloud & IaC", items: ["Terraform", "YAML", "CI/CD", "Vercel"] },
  { label: "Languages", items: ["Python", "Java", "Node.js", "TypeScript"] },
  { label: "AI Tooling", items: ["Cursor", "Claude Code"] },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-28 sm:px-10 lg:px-16"
    >
      <SeaCreatures variant="twilight" />
      <div className="relative z-[2] mx-auto max-w-5xl">
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
          Signals returning from deeper water: less light, sharper contrast.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <span className="absolute right-6 top-6 h-2 w-2 rounded-full bg-bio-glow animate-sonar-pulse" />
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bio-glow/70">
            {ROLE.period}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-foam-white">
            {ROLE.title}
          </h3>
          <p className="mt-0.5 text-sm text-foam-white/50">{ROLE.org}</p>
          <ul className="mt-5 space-y-2.5">
            {ROLE.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-2.5 text-sm leading-relaxed text-foam-white/70"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bio-glow/70" />
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>

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
