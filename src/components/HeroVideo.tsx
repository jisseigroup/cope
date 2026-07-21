"use client";

export function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-ink" aria-hidden>
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      {/* Original baseline: white/30 · from/45 via/30 to/50 · radial 0.06→0.42 */}
      <div className="absolute inset-0 bg-white/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/25 to-white/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.34)_100%)]" />
    </div>
  );
}
