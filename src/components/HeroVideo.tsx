"use client";

export function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white" aria-hidden>
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
      {/* Light wash so black type stays readable */}
      <div className="absolute inset-0 bg-white/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-white/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.7)_100%)]" />
    </div>
  );
}
