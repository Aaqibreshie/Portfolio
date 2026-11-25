"use client";

import { useEffect, useState, MouseEvent } from "react";
import { Clock, Globe, Activity, Zap, ShieldCheck, Users, GraduationCap } from "lucide-react";

export default function BentoGrid() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCardMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="cockpit" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20 relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>Developer Telemetry & Impact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Cockpit & Credentials
          </h2>
        </div>
        <p className="text-zinc-400 text-sm max-w-md">
          Live presence, professional mentorship impact, and verified production engineering standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Card 1: Timezone & Active Window (2 cols) */}
        <div
          onMouseMove={handleCardMouseMove}
          className="group md:col-span-2 rounded-3xl glass-slate p-8 flex flex-col justify-between border border-white/10 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden shadow-2xl"
        >
          {/* Spotlight Glacier Cyan Glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "radial-gradient(450px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.14), transparent 70%)",
            }}
          />

          <div className="flex items-center justify-between z-10 mb-8">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>Location: Srinagar, IN (IST / UTC+5:30)</span>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Active Response Window
            </span>
          </div>

          <div className="z-10 my-4">
            <div className="text-5xl sm:text-7xl font-mono font-bold tracking-tight text-white flex items-center gap-4">
              <Clock className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-400/60" />
              <span>{time || "10:45:00 AM"}</span>
            </div>
            <p className="text-zinc-300 text-sm mt-3">
              Coordinated overlapping working hours for North America, Europe & India remote teams.
            </p>
          </div>

          <div className="pt-5 mt-6 border-t border-white/10 space-y-3 z-10">
            <div className="flex flex-wrap gap-1.5">
              {["MERN Stack Dev", "Full-Stack Dev", "Front-End Engineer", "Agentic AI Dev", "Backend / Node.js", "Technical Trainer"].map((role) => (
                <span
                  key={role}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-zinc-900/90 border border-emerald-500/25 text-emerald-300"
                >
                  {role}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span className="text-lime-300 font-semibold">Immediate Availability</span>
              <span>Remote / On-Site / Hybrid</span>
            </div>
          </div>
        </div>

        {/* Card 2: Professional Mentoring Impact (1 col) */}
        <div
          onMouseMove={handleCardMouseMove}
          className="group rounded-3xl glass-slate p-8 flex flex-col justify-between border border-white/10 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden shadow-2xl"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(190, 242, 100, 0.14), transparent 70%)",
            }}
          />

          <div className="flex items-center justify-between mb-4 z-10">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>Instruction</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 font-semibold">
              Active
            </span>
          </div>

          <div className="my-auto py-2 z-10">
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">9+ Months</div>
            <div className="text-sm font-bold text-emerald-400 mt-1">MERN Stack Trainer @ ILS</div>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Trained 150+ students in full-stack web development, code reviews, and Git workflows.
            </p>
          </div>

          <div className="text-xs text-zinc-500 font-mono pt-4 border-t border-white/10 z-10 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Swift ITI + ILS Instructor</span>
          </div>
        </div>

        {/* Card 3: Performance Telemetry (1 col) */}
        <div
          onMouseMove={handleCardMouseMove}
          className="group rounded-3xl glass-slate p-8 flex flex-col justify-between border border-white/10 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden shadow-2xl"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.14), transparent 70%)",
            }}
          />

          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono mb-4 z-10">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Engineering Standard</span>
          </div>

          <div className="space-y-5 my-auto z-10">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-zinc-300 font-mono">React / Next.js Perf</span>
                <span className="text-emerald-400 font-bold font-mono">60+ FPS</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-lime-400 h-2.5 rounded-full w-[98%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-zinc-300 font-mono">Clean Code & Architecture</span>
                <span className="text-emerald-400 font-bold font-mono">100% Verified</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-lime-400 h-2.5 rounded-full w-full" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-300 pt-4 border-t border-white/10 z-10">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Accessible & Production Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
