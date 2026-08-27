"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "../ui/Button";
import { ContactModal } from "./ContactModal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[70vh] flex-col justify-center px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-bio-glow/70"
        >
          ~1000m &middot; Abyssal Trench
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 font-display text-3xl font-semibold text-foam-white sm:text-4xl"
        >
          Let&apos;s build something down here.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-foam-white/60"
        >
          Open to backend, cloud, and AI-workflow projects. Reach out and
          I&apos;ll get back to you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <ContactModal />
          <ButtonLink variant="ghost" href="mailto:zigelnik@gmail.com">
            zigelnik@gmail.com
          </ButtonLink>
          <ButtonLink variant="ghost" href="tel:+972523466986">
            +972 (052) 346-6986
          </ButtonLink>
          <ButtonLink
            variant="ghost"
            href="https://github.com/zigelnik"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </ButtonLink>
        </motion.div>
      </div>

      <p className="mt-24 text-center font-mono text-[11px] text-foam-white/30">
        Built with Next.js, Tailwind, Lenis &amp; Framer Motion.
      </p>
    </section>
  );
}
