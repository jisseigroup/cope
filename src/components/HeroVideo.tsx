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
      <div className="absolute inset-0 bg-white/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/45 to-white/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.65)_100%)]" />
    </div>
  );
}
