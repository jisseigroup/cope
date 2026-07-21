const ITEMS = [
  "Buy better",
  "Wear longer",
  "Mend",
  "Swap",
  "Share",
  "Pass it on",
] as const;

export function PhilosophyMarquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden border-y border-white/15 py-5"
      aria-hidden
    >
      <div className="animate-marquee flex w-max gap-10">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-10 font-display text-2xl font-medium tracking-wide text-white/90 sm:text-3xl"
          >
            {item}
            <span className="text-sm text-white/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
