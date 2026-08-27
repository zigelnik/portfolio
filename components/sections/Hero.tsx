"use client";

import Image from "next/image";
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

      <div className="flex flex-1 flex-col-reverse items-center justify-center gap-10 pb-24 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:pr-28 lg:pr-36">
        <div className="flex flex-col gap-5">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative shrink-3"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-bio-glow/25 blur-2xl" />
          <div className="h-32 w-32 overflow-hidden rounded-full ring-2 ring-bio-glow/60 ring-offset-4 ring-offset-surface-cyan/40 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
            <Image
              src="/profile.png"
              alt="Portrait of Tal Zigelnik"
              width={192}
              height={192}
              priority
              className="h-full w-full object-cover"
              style={{ objectPosition: "52% 22%" }}
            />
          </div>
          <span className="absolute -right-1 bottom-1 h-4 w-4 rounded-full border-2 border-surface-cyan bg-bio-glow shadow-[0_0_10px_var(--bio-glow)] animate-sonar-pulse sm:h-5 sm:w-5" />
        </motion.div>
      </div>
    </section>
  );
}
