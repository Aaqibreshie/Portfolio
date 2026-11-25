"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Bot,
  Wrench,
  Users,
  Sparkles,
  Layers,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import {
  ReactIcon,
  JavaScriptIcon,
  PythonIcon,
  NodeIcon,
  ExpressIcon,
  MongoDBIcon,
  NumPyIcon,
  PandasIcon,
  CloudinaryIcon,
  MulterIcon,
  PostmanIcon,
  Html5Icon,
  Css3Icon,
  TailwindIcon,
  NextJsIcon,
  AntigravityIcon,
  RedisIcon,
} from "@/components/icons/TechIcons";

interface DedicatedSkill {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  category: "all" | "frontend" | "backend" | "data" | "tools";
  categoryLabel: string;
  role: string;
  badge: string;
  glowColor: string;
  borderColor: string;
  experience: string;
}

const DEDICATED_SKILLS: DedicatedSkill[] = [
  {
    id: "react",
    name: "React.js",
    icon: ReactIcon,
    category: "frontend",
    categoryLabel: "Front-End",
    role: "Component Architecture, Virtual DOM & State Hooks",
    badge: "Core Stack",
    glowColor: "rgba(97, 218, 251, 0.25)",
    borderColor: "hover:border-[#61DAFB]/50",
    experience: "Advanced",
  },
  {
    id: "js",
    name: "JavaScript (ES6+)",
    icon: JavaScriptIcon,
    category: "frontend",
    categoryLabel: "Front-End",
    role: "Async/Await, Closures, DOM Engine & Event Loop",
    badge: "Language",
    glowColor: "rgba(247, 223, 30, 0.25)",
    borderColor: "hover:border-[#F7DF1E]/50",
    experience: "Advanced",
  },
  {
    id: "node",
    name: "Node.js",
    icon: NodeIcon,
    category: "backend",
    categoryLabel: "Back-End",
    role: "Asynchronous Server Runtime & Non-blocking I/O",
    badge: "MERN Engine",
    glowColor: "rgba(83, 158, 67, 0.25)",
    borderColor: "hover:border-[#539E43]/50",
    experience: "Production",
  },
  {
    id: "express",
    name: "Express.js",
    icon: ExpressIcon,
    category: "backend",
    categoryLabel: "Back-End",
    role: "RESTful Routing, Custom Middlewares & JSON APIs",
    badge: "Framework",
    glowColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "hover:border-zinc-300/50",
    experience: "Production",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: MongoDBIcon,
    category: "backend",
    categoryLabel: "Database",
    role: "NoSQL Schemas, Mongoose ODM & Atlas Clusters",
    badge: "Database",
    glowColor: "rgba(71, 162, 72, 0.25)",
    borderColor: "hover:border-[#47A248]/50",
    experience: "Production",
  },
  {
    id: "python",
    name: "Python",
    icon: PythonIcon,
    category: "data",
    categoryLabel: "Data / Scripting",
    role: "Automation Scripts, Scripting & ML Fundamentals",
    badge: "Language",
    glowColor: "rgba(55, 118, 171, 0.25)",
    borderColor: "hover:border-[#3776AB]/50",
    experience: "Intermediate",
  },
  {
    id: "numpy",
    name: "NumPy",
    icon: NumPyIcon,
    category: "data",
    categoryLabel: "Data Science",
    role: "N-Dimensional Arrays, Linear Algebra & Vector Math",
    badge: "Data / ML",
    glowColor: "rgba(77, 171, 207, 0.25)",
    borderColor: "hover:border-[#4DABCF]/50",
    experience: "Data Basics",
  },
  {
    id: "pandas",
    name: "Pandas",
    icon: PandasIcon,
    category: "data",
    categoryLabel: "Data Science",
    role: "DataFrames, ETL Pipelines, Cleaning & Analysis",
    badge: "Data / ML",
    glowColor: "rgba(231, 4, 136, 0.25)",
    borderColor: "hover:border-[#E70488]/50",
    experience: "Data Basics",
  },
  {
    id: "cloudinary",
    name: "Cloudinary",
    icon: CloudinaryIcon,
    category: "tools",
    categoryLabel: "Media Cloud",
    role: "Automated Image Transformations & CDN Storage",
    badge: "Cloud CDN",
    glowColor: "rgba(52, 72, 197, 0.25)",
    borderColor: "hover:border-[#3448C5]/50",
    experience: "Integrated",
  },
  {
    id: "multer",
    name: "Multer",
    icon: MulterIcon,
    category: "tools",
    categoryLabel: "File Pipeline",
    role: "Multipart/Form-Data Streaming File Ingestion",
    badge: "File Pipeline",
    glowColor: "rgba(190, 242, 100, 0.25)",
    borderColor: "hover:border-[#bef264]/50",
    experience: "Integrated",
  },
  {
    id: "postman",
    name: "Postman",
    icon: PostmanIcon,
    category: "tools",
    categoryLabel: "API Testing",
    role: "REST Endpoint Prototyping, Mocking & Test Suites",
    badge: "Testing",
    glowColor: "rgba(255, 108, 55, 0.25)",
    borderColor: "hover:border-[#FF6C37]/50",
    experience: "Proficient",
  },
  {
    id: "html",
    name: "HTML5",
    icon: Html5Icon,
    category: "frontend",
    categoryLabel: "Front-End",
    role: "Semantic Web Architecture & SEO Accessibility",
    badge: "Markup",
    glowColor: "rgba(227, 79, 38, 0.25)",
    borderColor: "hover:border-[#E34F26]/50",
    experience: "Expert",
  },
  {
    id: "css",
    name: "CSS3 & Tailwind",
    icon: TailwindIcon,
    category: "frontend",
    categoryLabel: "Front-End",
    role: "Modern Flexbox/Grid Layouts, Keyframes & Tokens",
    badge: "Styling",
    glowColor: "rgba(190, 242, 100, 0.25)",
    borderColor: "hover:border-[#bef264]/50",
    experience: "Expert",
  },
  {
    id: "nextjs",
    name: "Next.js 15",
    icon: NextJsIcon,
    category: "frontend",
    categoryLabel: "Front-End",
    role: "App Router, Server Components & Webpack/Turbopack",
    badge: "Production SSR",
    glowColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "hover:border-zinc-300/50",
    experience: "Advanced",
  },
  {
    id: "antigravity",
    name: "Google Antigravity",
    icon: AntigravityIcon,
    category: "tools",
    categoryLabel: "Agentic AI",
    role: "Autonomous Agentic Workflows & Multi-Agent Coding",
    badge: "Agentic AI",
    glowColor: "rgba(16, 185, 129, 0.35)",
    borderColor: "hover:border-[#10b981]/60",
    experience: "Specialized",
  },
  {
    id: "redis",
    name: "Redis",
    icon: RedisIcon,
    category: "backend",
    categoryLabel: "In-Memory",
    role: "High-Speed Key/Value In-Memory Data Caching",
    badge: "Cache",
    glowColor: "rgba(220, 56, 45, 0.25)",
    borderColor: "hover:border-[#DC382D]/50",
    experience: "Integrated",
  },
];

interface SkillCategory {
  title: string;
  icon: any;
  skills: { name: string; tag: string; IconComponent?: any }[];
}

const DOMAIN_CATEGORIES: SkillCategory[] = [
  {
    title: "Front-End Engineering",
    icon: Code2,
    skills: [
      { name: "React.js", tag: "Advanced", IconComponent: ReactIcon },
      { name: "Next.js 15 (App Router)", tag: "SSR / SSG", IconComponent: NextJsIcon },
      { name: "JavaScript (ES6+)", tag: "Modern", IconComponent: JavaScriptIcon },
      { name: "Tailwind CSS v4", tag: "Styling", IconComponent: TailwindIcon },
      { name: "HTML5 & CSS3", tag: "Semantic", IconComponent: Html5Icon },
      { name: "Framer Motion", tag: "Animations" },
      { name: "Responsive & Accessible UI", tag: "WCAG" },
      { name: "REST API Integration", tag: "Client" },
    ],
  },
  {
    title: "Back-End & Architecture",
    icon: Server,
    skills: [
      { name: "Node.js", tag: "Runtime", IconComponent: NodeIcon },
      { name: "Express.js", tag: "Framework", IconComponent: ExpressIcon },
      { name: "MongoDB & Mongoose", tag: "NoSQL DB", IconComponent: MongoDBIcon },
      { name: "Redis Caching", tag: "In-Memory", IconComponent: RedisIcon },
      { name: "JWT Authentication", tag: "Security" },
      { name: "Role-Based Access (RBAC)", tag: "AuthZ" },
      { name: "RESTful API Design", tag: "Architecture" },
      { name: "Error Handling & Logging", tag: "Resilience" },
    ],
  },
  {
    title: "Cloud Media & Pipelines",
    icon: Database,
    skills: [
      { name: "Cloudinary API", tag: "Media CDN", IconComponent: CloudinaryIcon },
      { name: "Multer", tag: "File Uploads", IconComponent: MulterIcon },
      { name: "MongoDB Atlas", tag: "Cloud Cluster", IconComponent: MongoDBIcon },
      { name: "Postman API Suite", tag: "API Testing", IconComponent: PostmanIcon },
      { name: "Leaflet Maps API", tag: "Geo Search" },
      { name: "Vercel & Netlify", tag: "Deployments" },
    ],
  },
  {
    title: "Data & Agentic AI",
    icon: Bot,
    skills: [
      { name: "Google Antigravity", tag: "Agentic Dev", IconComponent: AntigravityIcon },
      { name: "Python Scripting", tag: "Automation", IconComponent: PythonIcon },
      { name: "NumPy Matrix Math", tag: "Data / ML", IconComponent: NumPyIcon },
      { name: "Pandas DataFrames", tag: "Data / ML", IconComponent: PandasIcon },
      { name: "Agentic Code Orchestration", tag: "Multi-Agent" },
      { name: "LLM Prompt Engineering", tag: "Context" },
    ],
  },
  {
    title: "Tools & DevOps Workflows",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", tag: "Version Control" },
      { name: "Postman Testing", tag: "Testing", IconComponent: PostmanIcon },
      { name: "VS Code & Debugging", tag: "IDE" },
      { name: "npm / Yarn Tooling", tag: "Packages" },
      { name: "Webpack & Turbopack", tag: "Bundling" },
      { name: "Continuous Integration", tag: "CI/CD" },
    ],
  },
  {
    title: "Technical Mentorship & Teaching",
    icon: Users,
    skills: [
      { name: "MERN Stack Trainer (ILS)", tag: "Jul 2026 - Present" },
      { name: "Technical Instructor (Swift ITI)", tag: "Jan - Jun 2026" },
      { name: "150+ Developers Trained", tag: "Impact" },
      { name: "Code Reviews & Feedback", tag: "Mentoring" },
      { name: "Project-Based Learning", tag: "Curriculum" },
      { name: "Clear Technical Presentations", tag: "Soft Skill" },
    ],
  },
];

export default function SkillsMatrix() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Skills (16)" },
    { id: "frontend", label: "Front-End" },
    { id: "backend", label: "Back-End & DB" },
    { id: "data", label: "Python & Data" },
    { id: "tools", label: "Cloud & Tooling" },
  ];

  const filteredSkills = DEDICATED_SKILLS.filter((s) => {
    if (activeFilter === "all") return true;
    return s.category === activeFilter;
  });

  return (
    <section id="skills" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20 relative z-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Dedicated Technical Stack</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Core Skills &amp; Modern Tooling
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          A tactile breakdown of primary technologies, runtime engines, data analytics libraries, and cloud services powering production architectures.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-5 border-b border-white/10">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-300 text-zinc-950 font-black shadow-lg shadow-emerald-500/25 scale-[1.03]"
                  : "bg-zinc-900/90 text-zinc-300 hover:text-white border border-white/10 hover:border-emerald-500/40"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Dedicated Skills Interactive Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 mb-20"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.35, delay: idx * 0.03, ease: "easeOut" }}
                className={`relative rounded-2xl glass-slate p-5 border border-white/10 ${skill.borderColor} transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden flex flex-col justify-between`}
              >
                {/* Dynamic Brand Glow */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: skill.glowColor }}
                />

                <div>
                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center justify-center p-2 group-hover:scale-110 group-hover:border-emerald-400/40 transition-transform shadow-inner">
                      <Icon className="w-7 h-7" size={28} />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                      {skill.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-emerald-200 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed line-clamp-2">
                    {skill.role}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-500">{skill.categoryLabel}</span>
                  <span className="text-emerald-400 font-semibold">{skill.experience}</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Domain Competencies 6-Box Matrix */}
      <div className="mt-16 pt-16 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
          <Cpu className="w-4 h-4 text-emerald-400" />
          <span>Full Architecture Mapping</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-8">
          Domain Competency Breakdown
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DOMAIN_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className="rounded-3xl glass-slate p-7 sm:p-8 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-emerald-200 transition-colors">
                      {cat.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const SkillIcon = skill.IconComponent;
                      return (
                        <div
                          key={skill.name}
                          className="px-3 py-2 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-emerald-500/30 text-xs font-mono text-zinc-200 flex items-center justify-between gap-2.5 transition-all hover:bg-zinc-800/80 w-full"
                        >
                          <span className="flex items-center gap-2.5">
                            {SkillIcon ? (
                              <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                                <SkillIcon className="w-4 h-4" size={16} />
                              </div>
                            ) : (
                              <span className="text-emerald-400 text-xs">▹</span>
                            )}
                            <span className="font-medium text-white">{skill.name}</span>
                          </span>
                          <span className="text-[10px] text-emerald-400/80 font-mono bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/30 shrink-0">
                            {skill.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
