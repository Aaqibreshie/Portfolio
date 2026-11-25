"use client";

import { useState, useRef, MouseEvent } from "react";
import { Sparkles, Terminal, Code2, Cpu, Bot, ShieldCheck } from "lucide-react";

export default function Hero3DCard() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotX(rX);
    setRotY(rY);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2,
    });
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div style={{ perspective: 1000 }} className="w-full max-w-md mx-auto">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="relative rounded-3xl glass-slate p-6 sm:p-7 border border-emerald-500/30 shadow-[0_0_50px_-10px_rgba(16, 185, 129,0.25)] select-none overflow-hidden group"
      >
        {/* Specular Glare Sheen */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 350px at ${glare.x}% ${glare.y}%, rgba(16, 185, 129, ${glare.opacity}), transparent 70%)`,
          }}
        />

        {/* Ambient Corner Glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/25 transition-colors" />

        {/* 3D Pop-out Layer 1: Header */}
        <div style={{ transform: "translateZ(30px)" }} className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-400 to-lime-400 p-[1px] shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-[#111114] rounded-[11px] flex items-center justify-center font-bold text-white text-xs font-mono">
                AR
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Aaqib Nabi Reshie</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">MERN & Agentic Engineer</span>
            </div>
          </div>

          <span className="text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full flex items-center gap-1">
            <Bot className="w-3 h-3 text-emerald-400" />
            Antigravity
          </span>
        </div>

        {/* 3D Pop-out Layer 2: Holographic Code Snapshot */}
        <div
          style={{ transform: "translateZ(45px)" }}
          className="rounded-2xl bg-zinc-950/90 border border-white/10 p-4 font-mono text-xs shadow-inner my-4 text-left"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-zinc-500">
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Terminal className="w-3 h-3" />
              developer.profile
            </span>
            <span>v2026.1</span>
          </div>
          <div className="space-y-1 text-zinc-300 text-[11px] leading-relaxed">
            <div><span className="text-emerald-400">const</span> engineer = &#123;</div>
            <div className="pl-4">name: <span className="text-emerald-400">&apos;Aaqib Nabi Reshie&apos;</span>,</div>
            <div className="pl-4">stack: [<span className="text-lime-300">&apos;React&apos;</span>, <span className="text-lime-300">&apos;Next.js&apos;</span>, <span className="text-lime-300">&apos;Node.js&apos;</span>],</div>
            <div className="pl-4">workflow: <span className="text-emerald-300">&apos;Agentic Antigravity Code&apos;</span>,</div>
            <div className="pl-4">status: <span className="text-emerald-400">&apos;Open to Hire&apos;</span></div>
            <div>&#125;;</div>
          </div>
        </div>

        {/* 3D Pop-out Layer 3: Telemetry Bar */}
        <div style={{ transform: "translateZ(35px)" }} className="grid grid-cols-3 gap-2 text-center pt-2">
          <div className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/5">
            <div className="text-xs font-bold text-white font-mono">Full-Stack</div>
            <div className="text-[9px] text-zinc-400 font-mono mt-0.5">MERN Dev</div>
          </div>
          <div className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/5">
            <div className="text-xs font-bold text-emerald-400 font-mono">Agentic</div>
            <div className="text-[9px] text-zinc-400 font-mono mt-0.5">AI Engine</div>
          </div>
          <div className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/5">
            <div className="text-xs font-bold text-emerald-400 font-mono">9+ Months</div>
            <div className="text-[9px] text-zinc-400 font-mono mt-0.5">Mentoring</div>
          </div>
        </div>

        <div className="text-[10px] text-zinc-500 font-mono mt-3 text-center">
          Interactive 3D Hologram • Tilt Cursor to Move
        </div>
      </div>
    </div>
  );
}
