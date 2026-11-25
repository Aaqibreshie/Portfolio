"use client";

import { motion } from "framer-motion";
import { Bot, Layers, Users } from "lucide-react";

export default function HeroScrollMorph() {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto relative z-10 w-full" style={{ perspective: 1200 }}>
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full rounded-3xl glass-slate border border-emerald-500/30 shadow-[0_0_60px_-15px_rgba(16, 185, 129,0.18)] overflow-hidden"
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#111114] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/90" />
            <span className="w-3 h-3 rounded-full bg-amber-500/90" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
            <span className="ml-3 text-xs font-mono text-zinc-300 font-semibold hidden sm:inline">
              AAQIB_RESHIE // ENGINEERING SNAPSHOT &amp; VERIFIED METRICS
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Production Ready</span>
          </div>
        </div>

        {/* Device Cockpit Body */}
        <div className="p-6 sm:p-10 bg-[#0c0c0f]/95 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Shipped Projects */}
          <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Bot className="w-4 h-4" />
                  <span>Shipped Work</span>
                </span>
                <span className="text-emerald-400 font-bold">2 LIVE</span>
              </div>
              <div className="text-3xl font-black text-white font-mono">6 Projects</div>
              <p className="text-xs text-zinc-400 mt-2">
                Full-stack MERN apps &amp; Antigravity agentic builds live on Vercel and Netlify.
              </p>
            </div>

            <div className="space-y-2 mt-6 pt-4 border-t border-white/10 text-xs font-mono">
              <div className="flex justify-between text-zinc-400">
                <span>Live Deployments</span>
                <span className="text-emerald-400 font-bold">Vercel &amp; Netlify</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Workflow Engine</span>
                <span className="text-white font-bold">Antigravity AI</span>
              </div>
            </div>
          </div>

          {/* Column 2: Technical Stack */}
          <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4">
                <span className="flex items-center gap-1.5 text-lime-400 font-semibold">
                  <Layers className="w-4 h-4" />
                  <span>Core Stack</span>
                </span>
                <span className="text-emerald-400 font-bold">MERN + PY</span>
              </div>
              <div className="text-3xl font-black text-white font-mono">16+ Tools</div>
              <p className="text-xs text-zinc-400 mt-2">
                React, Next.js 15, Node/Express, MongoDB, Redis, Cloudinary, Multer &amp; Python.
              </p>
            </div>

            <div className="space-y-2 mt-6 pt-4 border-t border-white/10 text-xs font-mono">
              <div className="flex justify-between text-zinc-400">
                <span>Primary Focus</span>
                <span className="text-emerald-400 font-bold">Front-End &amp; MERN</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Data &amp; Scripting</span>
                <span className="text-white font-bold">Python / NumPy / Pandas</span>
              </div>
            </div>
          </div>

          {/* Column 3: Mentorship & Education */}
          <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Users className="w-4 h-4" />
                  <span>Mentorship</span>
                </span>
                <span className="text-emerald-400 font-bold">9+ MOS</span>
              </div>
              <div className="text-3xl font-black text-white font-mono">150+ Devs</div>
              <p className="text-xs text-zinc-400 mt-2">
                Trained student cohorts in MERN, JS, HTML/CSS &amp; ML at ILS and Swift ITI Nowgam.
              </p>
            </div>

            <div className="space-y-2 mt-6 pt-4 border-t border-white/10 text-xs font-mono">
              <div className="flex justify-between text-zinc-400">
                <span>Degree</span>
                <span className="text-emerald-400 font-bold">B.E. CSE (VTU)</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Certification</span>
                <span className="text-white font-bold">MERN Stack (ILS)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
