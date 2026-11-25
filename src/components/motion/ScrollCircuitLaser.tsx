"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ShieldCheck, Zap, GraduationCap, Users } from "lucide-react";

interface Milestone {
  year: string;
  role: string;
  organization: string;
  description: string;
  metrics: string;
  skills: string[];
}

const MILESTONES: Milestone[] = [
  {
    year: "JUL 2026 - PRESENT",
    role: "MERN Stack Trainer & Mentor",
    organization: "ILS (Institute of Learning & Skills)",
    description: "Train developers in full-stack MERN development (React, Node.js, Express, MongoDB) with emphasis on modern front-end, API integration, and clean Git workflows. Guide learners through shipping complete full-stack apps from concept to deployment.",
    metrics: "Production-Style App Mentoring • Code Reviews",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Git & GitHub", "REST APIs"],
  },
  {
    year: "JAN 2026 - JUN 2026",
    role: "Technical Instructor",
    organization: "Swift ITI Nowgam",
    description: "Delivered hands-on project-based training in HTML, CSS, JavaScript, AI, and Machine Learning to COPA and AIML student cohorts. Designed practical labs, code assessments, and guided students to convert CS theory into production-ready software.",
    metrics: "15-16 Student Cohorts • Hands-on Project Labs",
    skills: ["JavaScript", "HTML5", "CSS3", "Python / ML Basics", "Project Mentoring"],
  },
  {
    year: "EDUCATION & DEGREE",
    role: "B.E. in Computer Science and Engineering",
    organization: "Visvesvaraya Technological University (VTU)",
    description: "Undergraduate degree in Computer Science and Engineering with specialization in software design, algorithms, databases, and distributed web architectures.",
    metrics: "B.E. Degree • MERN Certified (ILS)",
    skills: ["Data Structures", "Web Development", "Algorithms", "Software Engineering"],
  },
];

export default function ScrollCircuitLaser() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="architecture"
      className="py-32 px-4 sm:px-8 max-w-5xl mx-auto relative z-10 scroll-mt-20"
    >
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/40">
          <Zap className="w-3.5 h-3.5" />
          <span>Professional Experience & Education</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Career Trajectory & Background
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto mt-3">
          Proven history of professional mentoring, full-stack instruction, and hands-on software development.
        </p>
      </div>

      <div className="relative">
        {/* Background track line */}
        <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-zinc-800/80" />

        {/* Animated Drawing Laser Beam Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 w-[2px] bg-gradient-to-b from-emerald-400 via-teal-400 to-lime-300 shadow-[0_0_15px_#10b981]"
        />

        <div className="space-y-16">
          {MILESTONES.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                } gap-8 sm:gap-14 pl-12 sm:pl-0`}
              >
                {/* Glowing Laser Center Pulse Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[#09090b] border-2 border-emerald-400 shadow-[0_0_15px_#10b981] flex items-center justify-center z-20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>

                {/* Milestone Content Card */}
                <div className="w-full sm:w-[calc(50%-2rem)]">
                  <div className="p-7 sm:p-8 rounded-2xl glass-slate border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">
                        {milestone.year}
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
                        Verified Record
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-200 transition-colors">
                      {milestone.role}
                    </h3>
                    <div className="text-sm font-semibold text-zinc-300 mt-1 mb-3">
                      {milestone.organization}
                    </div>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {milestone.description}
                    </p>

                    <div className="p-3 rounded-xl bg-zinc-950/80 border border-white/5 text-xs font-mono text-emerald-400 font-bold mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{milestone.metrics}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {milestone.skills.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300 font-mono"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty side for alternating layout */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
