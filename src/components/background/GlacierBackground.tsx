"use client";

export default function GlacierBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#09090b]">
      {/* Soft Ambient Emerald Glow Behind Hero */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-emerald-500/12 via-lime-400/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Secondary Mint/Lime Ambient Glow at Mid-Page */}
      <div className="absolute top-[40%] right-[-10%] w-[650px] h-[550px] bg-gradient-to-l from-lime-500/6 via-emerald-900/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[550px] bg-gradient-to-tr from-zinc-900/40 via-emerald-950/15 to-transparent blur-[130px] rounded-full pointer-events-none" />

      {/* Modern Clean Dot Grid Overlay (Clean & Non-distracting) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(rgba(190, 242, 100, 0.45) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Subtle Vignette Gradient around edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]/90 pointer-events-none" />
    </div>
  );
}
