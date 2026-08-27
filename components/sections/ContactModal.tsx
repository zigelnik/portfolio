"use client";

import { useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const CONTACT_EMAIL = "zigelnik@gmail.com";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setOpen(false);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-bio-glow px-5 py-2.5 text-sm font-medium tracking-tight text-abyssal-black transition-all duration-300 hover:shadow-[0_0_24px_var(--bio-glow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bio-glow"
        >
          Send a message
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-midnight-navy/90 p-6 shadow-2xl backdrop-blur-xl outline-none sm:p-8"
          aria-describedby="contact-modal-description"
        >
          <div className="flex items-start justify-between">
            <div>
              <Dialog.Title className="font-display text-lg font-semibold text-foam-white">
                Send a transmission
              </Dialog.Title>
              <Dialog.Description
                id="contact-modal-description"
                className="mt-1 font-mono text-xs text-foam-white/50"
              >
                Opens a pre-filled draft in your email client.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-foam-white/80 hover:border-bio-glow hover:text-bio-glow"
              >
                &times;
              </button>
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-foam-white/50"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-foam-white outline-none transition-colors placeholder:text-foam-white/30 focus:border-bio-glow"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-foam-white/50"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-foam-white outline-none transition-colors placeholder:text-foam-white/30 focus:border-bio-glow"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-foam-white/50"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-foam-white outline-none transition-colors placeholder:text-foam-white/30 focus:border-bio-glow"
                placeholder="What are you building?"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-bio-glow px-5 py-2.5 text-sm font-medium tracking-tight text-abyssal-black transition-all duration-300 hover:shadow-[0_0_24px_var(--bio-glow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bio-glow"
            >
              Open email draft
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
