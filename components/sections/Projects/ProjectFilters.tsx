"use client";

import clsx from "clsx";
import type { ProjectCategory } from "@/lib/projects";

export type FilterValue = "All Projects" | ProjectCategory;

export const FILTERS: FilterValue[] = [
  "All Projects",
  "Backend & APIs",
  "Cloud & DevOps",
  "AI & Automations",
];

export function ProjectFilters({
  active,
  onChange,
}: {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {FILTERS.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={clsx(
              "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bio-glow",
              isActive
                ? "border-bio-glow bg-bio-glow/10 text-bio-glow shadow-[0_0_16px_rgba(77,255,224,0.25)]"
                : "border-white/15 text-foam-white/80 hover:border-white/35 hover:text-foam-white"
            )}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
