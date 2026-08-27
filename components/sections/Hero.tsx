"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "../ui/Button";
import { DesktopNav } from "../nav/DesktopNav";
import { SubmarineDrawer } from "../nav/SubmarineDrawer";
import { scrollToHash } from "@/lib/lenis";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col px-6 sm:px-10 lg:px-16">
      <header className="flex items-center justify-between py-6">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-abyssal-black/70">
          TZ &middot; Dive Log
        </span>
        <DesktopNav />
        <SubmarineDrawer />
      </header>

      <div className="flex flex-1 flex-col justify-center gap-5 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-abyssal-black/60"
        >
          Diving deep into complex systems
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-abyssal-black sm:text-5xl"
        >
          Tal Zigelnik
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-xl font-display text-lg font-medium text-abyssal-black/80 sm:text-2xl"
        >
          Engineered for End-to-End Ownership
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl text-base leading-relaxed text-abyssal-black/75 sm:text-lg"
        >
          Computer Science graduate (B.Sc.) and full-stack/backend engineer
          with hands-on experience in cloud infrastructure, RESTful
          integrations, and agentic AI workflows. I translate complex
          business logic into reliable, production-ready applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-3 pt-2"
        >
          <ButtonLink
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash("#projects");
            }}
          >
            View projects
          </ButtonLink>
          <ButtonLink
            variant="ghost"
            href="https://github.com/zigelnik"
            target="_blank"
            rel="noreferrer"
          >
            GitHub &rarr;
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
