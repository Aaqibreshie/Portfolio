"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowDown, Copy, Check, Terminal, Sparkles, Bot, Phone, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import Hero3DCard from "./Hero3DCard";

interface HeroProps {
  onOpenCommand: () => void;
}

export default function Hero({ onOpenCommand }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const email = "reshieaaqib@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.65 },
      colors: ["#bef264", "#10b981", "#10b981", "#ffffff"],
    });
    setTimeout(() => setCopied(false), 2600);
  };

  const techPills = [
    "Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Agentic Code", "Antigravity", "Tailwind CSS", "Redis"
  ];

  const openRoles = [
    "MERN Stack Developer",
    "Full-Stack Developer",
    "Front-End Engineer",
    "Agentic AI Developer",
    "React / Next.js Developer",
    "Backend / API Engineer",
    "Technical Mentor",
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-emerald-500/30 text-emerald-200 text-xs font-mono tracking-wide shadow-xl shadow-emerald-950/20 mb-8 backdrop-blur-md w-fit mx-auto lg:mx-0">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-zinc-300">Front-End & Full-Stack MERN Developer</span>
        <span className="text-emerald-400 font-semibold">• Agentic AI Workflows</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Command Typography & Details */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 select-none">
            <span className="text-zinc-400 text-2xl sm:text-3xl font-mono font-medium block mb-2">
              Hi, I am
            </span>
            <span className="text-platinum">Aaqib Nabi Reshie.</span>
            <br />
            <span className="text-glacier-gradient">Building Fast & Agentic Web Apps.</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal mb-6 max-w-2xl">
            Front-end focused MERN developer with 9 months of professional mentoring experience.
            Crafting responsive, high-performance production applications with React, Next.js, Node.js, and modern AI agentic workflows built with <span className="text-emerald-400 font-semibold">Antigravity</span>.
          </p>

          {/* Open For Roles Strip */}
          <div className="mb-8">
            <div className="text-[11px] font-mono uppercase tracking-widest text-lime-300/90 mb-2.5 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              <span>Available For Roles:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {openRoles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 text-xs font-mono hover:border-lime-300/50 hover:text-white transition-colors"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-300 text-zinc-950 font-bold text-xs sm:text-sm hover:opacity-95 transition-all shadow-xl shadow-emerald-500/25 active:scale-95 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="/Aaqib_Nabi_Reshie_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-slate text-zinc-200 font-semibold text-xs sm:text-sm hover:text-white hover:border-emerald-500/40 transition-all active:scale-95 cursor-pointer shadow-lg"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              <span>Resume PDF</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-slate text-zinc-200 font-semibold text-xs sm:text-sm hover:text-white hover:border-emerald-500/40 transition-all active:scale-95 cursor-pointer shadow-lg"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-bold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-emerald-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenCommand}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900/90 border border-white/15 text-zinc-300 hover:text-white text-xs font-mono transition-colors shadow-sm cursor-pointer hover:border-emerald-500/30"
              title="Open Command Center (Cmd + K)"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>⌘K</span>
            </button>
          </div>

          {/* Social and Quick Contacts */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-zinc-400 pt-4 border-t border-white/10">
            <a
              href="https://github.com/Aaqibreshie"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/Aaqibreshie</span>
            </a>
            <a
              href="https://linkedin.com/in/reshieaaqib"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>linkedin.com/in/reshieaaqib</span>
            </a>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91-7780883029</span>
            </span>
          </div>
        </div>

        {/* Right Column: 3D Hologram Spatial Card */}
        <div className="lg:col-span-5 flex justify-center">
          <Hero3DCard />
        </div>
      </div>

      {/* Tech Pills Slider */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest mr-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Core Capabilities:</span>
        </span>
        {techPills.map((pill) => (
          <span
            key={pill}
            className="px-3 py-1 rounded-lg glass-slate border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-zinc-200 transition-all hover:scale-105"
          >
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
}
