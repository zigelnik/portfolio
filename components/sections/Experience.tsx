"use client";

import { motion } from "framer-motion";
import { SeaCreatures } from "../ocean/SeaCreatures";

const ROLE = {
  title: "IVR Developer",
  org: "ITNav",
  period: "Dec 2025 - Present",
  bullets: [
    "Built an internal Java/Spring Boot tool that compares and deploys Genesys Cloud configuration across environments, with REST controllers, an adapter per resource type (data tables, integrations, prompts, queues, schedules, wrap-up codes), a diff engine, a dependency resolver with cycle detection, and deployments with rollback support.",
    "Design, build, and maintain IVR call flows in Genesys Cloud Architect, including menus, routing logic, prompts, and schedules that send callers to the right queues.",
    "Author, version, and deploy Architect flows as YAML with the Archy CLI, and provision Genesys Cloud configuration using Terraform.",
    "Configure and maintain queues and routing for enterprise Genesys Cloud Contact Center environments, keeping production IVR stable as requirements change.",
    "Track and analyze flow and interaction logs to diagnose call-flow, routing, and configuration issues, and troubleshoot REST API, Webhook, and OAuth integrations.",
    "Develop agentic virtual agents (Genesys Cloud AVA) with Claude, using an MCP-based harness and agent skills to define, build, publish, and test agents.",
    "Work closely with QA, product managers, and developers to investigate and resolve production issues across development, testing, and production environments.",
  ],
};

const EDUCATION = [
  {
    title: "B.Sc. Computer Science",
    period: "Apr 2022 - Jul 2024",
    detail: "The College of Management Academic Studies",
  },
  {
    title: "Deep Learning Internship (Academic, Final Year)",
    period: "2023 - 2024",
    detail:
      "Trained and evaluated computer vision models on medical imaging data.",
  },
];

const SKILL_GROUPS = [
  { label: "Contact Center", items: ["Genesys Cloud", "Architect", "Archy", "IVR Flows & Queues", "Genesys AVA"] },
  { label: "Backend & Cloud", items: ["Spring Boot", "FastAPI", "Node.js", "Terraform", "CI/CD"] },
  { label: "Languages", items: ["Java", "Python", "TypeScript", "React"] },
  { label: "AI & ML", items: ["Claude API", "Agentic tool-use", "MCP", "TensorFlow / PyTorch", "Claude Code"] },
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
          className="font-mono text-xs uppercase tracking-[0.25em] text-foam-white/75"
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
          Experience, Education &amp; Skills
        </motion.h2>
        <p className="mt-3 max-w-xl text-sm text-foam-white/75">
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
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bio-glow/90">
            {ROLE.period}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-foam-white">
            {ROLE.title}
          </h3>
          <p className="mt-0.5 text-sm text-foam-white/75">{ROLE.org}</p>
          <ul className="mt-5 space-y-2.5">
            {ROLE.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-2.5 text-sm leading-relaxed text-foam-white/85"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bio-glow/70" />
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foam-white/65">
            Education
          </p>
          <ul className="mt-4 space-y-4">
            {EDUCATION.map((item) => (
              <li key={item.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-base font-semibold text-foam-white">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bio-glow/90">
                    {item.period}
                  </span>
                </div>
                {item.detail && (
                  <p className="mt-1 text-sm leading-relaxed text-foam-white/80">
                    {item.detail}
                  </p>
                )}
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
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foam-white/65">
                {group.label}
              </p>
              <ul className="mt-2 space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-foam-white/90">
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
