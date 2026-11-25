"use client";

import { useState, useEffect } from "react";
import { Terminal, Sparkles, FileDown, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenCommand: () => void;
}

const TARGET_ROLES = [
  "MERN Stack Developer",
  "Full-Stack Developer",
  "Agentic AI Developer",
  "Front-End Engineer",
  "Technical Mentor",
];

export default function Navbar({ onOpenCommand }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % TARGET_ROLES.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const links = [
    { label: "Overview", href: "#hero" },
    { label: "Telemetry", href: "#cockpit" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#architecture" },
    { label: "Terminal", href: "#terminal" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#09090b]/80 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-lime-400 p-[1px] shadow-lg shadow-emerald-500/20">
            <div className="w-full h-full bg-[#111114] rounded-[11px] flex items-center justify-center font-bold text-white text-sm font-mono group-hover:bg-transparent transition-colors">
              AN
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-white text-sm tracking-tight flex items-center gap-2">
              <span>Aaqib</span>
              <span className="text-[10px] text-emerald-400 font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                PRO
              </span>
            </span>
            <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse shrink-0" />
              <span className="truncate max-w-[180px] sm:max-w-none">
                Open to: {TARGET_ROLES[roleIndex]}
              </span>
            </span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-900/70 border border-white/10 backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-5 py-2 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="/Aaqib_Nabi_Reshie_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-emerald-500/40 transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
          </a>

          <button
            onClick={onOpenCommand}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-emerald-500/40 transition-all shadow-sm cursor-pointer"
            title="Open Command Center (Cmd + K)"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="text-[10px] bg-white/10 text-zinc-400 px-1.5 py-0.5 rounded font-mono">
              ⌘K
            </kbd>
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex relative items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-300 hover:opacity-95 transition-all shadow-lg shadow-emerald-500/25 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
            <span>Hire Me</span>
          </a>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-xl bg-zinc-900/90 border border-white/10 text-zinc-200 hover:text-white hover:border-emerald-500/40 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#09090b]/95 backdrop-blur-2xl px-4 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-white/5 text-xs font-mono text-zinc-200 hover:text-white hover:border-emerald-500/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-white/10">
            <a
              href="/Aaqib_Nabi_Reshie_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-200 hover:border-emerald-500/40"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume PDF</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
