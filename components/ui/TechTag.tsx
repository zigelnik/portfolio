export function TechTag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[11px] tracking-tight text-foam-white/80">
      {label}
    </span>
  );
}
