"use client";

import { useState, useEffect } from "react";
import { FileDown } from "lucide-react";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import GlacierBackground from "@/components/background/GlacierBackground";
import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import HeroScrollMorph from "@/components/motion/HeroScrollMorph";
import ScrollTextScrubber from "@/components/motion/ScrollTextScrubber";
import BentoGrid from "@/components/bento/BentoGrid";
import SkillsMatrix from "@/components/skills/SkillsMatrix";
import ModernProjectsGrid from "@/components/projects/ModernProjectsGrid";
import ScrollCircuitLaser from "@/components/motion/ScrollCircuitLaser";
import RecruiterTerminal from "@/components/terminal/RecruiterTerminal";
import ContactSection from "@/components/contact/ContactSection";
import CommandPalette from "@/components/command/CommandPalette";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    const elem = document.getElementById("projects");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden font-sans selection:bg-emerald-500/30 selection:text-white">
        {/* Modern, Clean & Non-Distracting Glacier Background */}
        <GlacierBackground />

        {/* Top Pinned Glass Navbar */}
        <Navbar onOpenCommand={() => setIsCommandOpen(true)} />

        {/* Recruiter Fast-Path Command Palette (Cmd + K) */}
        <CommandPalette
          isOpen={isCommandOpen}
          onClose={() => setIsCommandOpen(false)}
          onSelectCategory={handleSelectCategory}
        />

        {/* Natural Vertical Flow with Smooth Scroll Animations */}
        <div className="relative z-10">
          {/* 1. Kinetic Hero Header with 3D Hologram Card */}
          <Hero onOpenCommand={() => setIsCommandOpen(true)} />

          {/* 2. In-View 3D Perspective Architecture Rig */}
          <HeroScrollMorph />

          {/* 3. Word-by-Word Kinetic Text Reveal */}
          <ScrollTextScrubber />

          {/* 4. Telemetry & Mentorship Impact Bento Cockpit */}
          <BentoGrid />

          {/* 5. Complete Technical Skills & Competencies Matrix */}
          <SkillsMatrix />

          {/* 6. Filterable Projects Showcase (All 6 Real Projects) */}
          <ModernProjectsGrid
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* 7. Drawing SVG Laser Circuit Beam (Experience & Education) */}
          <ScrollCircuitLaser />

          {/* 8. Interactive Developer Terminal (/sh Recruiter CLI) */}
          <RecruiterTerminal />

          {/* 9. Contact Communications Hub */}
          <ContactSection />

          {/* Minimalist Dark Footer */}
          <footer className="py-16 border-t border-white/10 text-xs text-zinc-400 font-mono relative z-10 bg-[#09090b]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-300">All Systems Operational // Srinagar, IN (IST)</span>
              </div>
              <div className="flex items-center gap-5 text-xs font-mono">
                <a
                  href="/Aaqib_Nabi_Reshie_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-zinc-300"
                >
                  <FileDown className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Resume PDF</span>
                </a>
                <a
                  href="https://github.com/Aaqibreshie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-zinc-300"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/reshieaaqib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-zinc-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-white/5 max-w-7xl mx-auto px-4">
              <p className="text-zinc-300">
                © {new Date().getFullYear()} Aaqib Nabi Reshie. Engineered with Next.js 15, Framer Motion & Google Antigravity.
              </p>
              <p className="mt-1 text-[11px] text-zinc-500">
                MERN Stack Developer • Agentic AI Engineer • Visvesvaraya Technological University (VTU)
              </p>
            </div>
          </footer>
        </div>
      </main>
    </SmoothScrollProvider>
  );
}
