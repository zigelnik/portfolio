"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/github";
import { ProjectFilters, type FilterValue } from "./ProjectFilters";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<FilterValue>("All Projects");

  const visible = useMemo(() => {
    if (filter === "All Projects") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [projects, filter]);

  return (
    <section id="projects" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-foam-white/60"
        >
          ~150m &middot; Edge of the Sunlight Zone
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 font-display text-2xl font-semibold text-foam-white sm:text-3xl"
        >
          Projects
        </motion.h2>

        <div className="mt-8">
          <ProjectFilters active={filter} onChange={setFilter} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
