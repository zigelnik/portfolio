"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { NAV_LINKS } from "./links";
import { useDepth } from "../ocean/DepthProvider";
import { scrollToHash } from "@/lib/lenis";

export function SubmarineDrawer() {
  const [open, setOpen] = useState(false);
  const { depthM, zone } = useDepth();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open navigation hatch"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-foam-white transition-colors hover:border-bio-glow hover:text-bio-glow md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=closed]:[animation:overlay-fade-out_200ms_ease-in] data-[state=open]:[animation:overlay-fade-in_220ms_ease-out]"
        />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-50 flex w-[82vw] max-w-sm flex-col border-l border-white/10 bg-midnight-navy/90 p-6 shadow-2xl backdrop-blur-xl outline-none data-[state=closed]:[animation:drawer-slide-out_220ms_ease-in] data-[state=open]:[animation:drawer-slide-in_360ms_cubic-bezier(0.16,1,0.3,1)]"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <Dialog.Title className="font-mono text-xs uppercase tracking-[0.2em] text-bio-glow">
                Control Hatch
              </Dialog.Title>
              <p className="mt-1 font-mono text-[11px] text-foam-white/50">
                {depthM.toLocaleString()}m &middot; {zone.name}
              </p>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close navigation"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-foam-white/80 hover:border-bio-glow hover:text-bio-glow"
              >
                &times;
              </button>
            </Dialog.Close>
          </div>

          <nav className="mt-8 flex flex-col gap-1" aria-label="Primary">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  window.setTimeout(() => scrollToHash(link.href), 150);
                }}
                className="group flex items-center gap-3 rounded-lg px-2 py-3 text-lg font-medium text-foam-white transition-colors hover:text-bio-glow"
              >
                <span className="font-mono text-xs text-foam-white/40 group-hover:text-bio-glow">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-4 font-mono text-[11px] text-foam-white/40">
            Hull integrity nominal. Descend to explore.
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
