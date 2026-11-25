"use client";

import { useState, useRef, MouseEvent, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, BarChart3, Code2, Sparkles, Bot, ShieldCheck, Compass, Link2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export interface ProjectShowcase {
  id: string;
  number: string;
  title: string;
  badge: string;
  deployPlatform?: "Vercel" | "Netlify" | "Cloud";
  filterCategory: "agentic" | "mern" | "web";
  categoryLabel: string;
  tagline: string;
  overview: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  tech: string[];
  codeSnippet: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ALL_PROJECTS: ProjectShowcase[] = [
  {
    id: "examguard",
    number: "01",
    title: "Exam Guard — Online Exam & Proctoring Platform",
    badge: "Built with Antigravity AI",
    deployPlatform: "Vercel",
    filterCategory: "agentic",
    categoryLabel: "Agentic AI & Full-Stack",
    tagline: "Automated online examination platform designed for student assessments with integrity monitoring, timer locks, and instant grading.",
    overview: "Architected using Google Antigravity agentic workflows to build an end-to-end examination engine. Features secure student test environments, automated countdown timers, and automated question bank evaluation.",
    architecture: [
      "Agentic-assisted full-stack architecture orchestrated with Google Antigravity",
      "Real-time session locks and secure exam submission verification",
      "Interactive candidate test-taking interface with instant score calculation",
      "Responsive, clean UI designed for distraction-free student testing",
    ],
    metrics: [
      { label: "Deployment", value: "Vercel Live" },
      { label: "Exam Integrity", value: "Zero Bypass" },
      { label: "Workflow Mode", value: "Antigravity AI" },
      { label: "Repo Status", value: "Active GitHub" },
    ],
    tech: ["JavaScript", "Antigravity Workflows", "Agentic Code", "Node.js", "Express", "Vercel"],
    codeSnippet: `// Exam-Guard: Test Session Integrity Verification
function verifyExamSession(studentId, examToken) {
  const activeSession = examSecurity.validateToken(examToken);
  if (!activeSession || activeSession.isLocked) {
    throw new SecurityException("Unauthorized exam state detected");
  }
  return session.initializeTimer();
}`,
    liveUrl: "https://exam-guard-eight.vercel.app/",
    githubUrl: "https://github.com/Aaqibreshie/Exam-Guard",
    featured: true,
  },
  {
    id: "islamicapp",
    number: "02",
    title: "Islamic Spiritual Companion & Prayer Engine",
    badge: "Built with Antigravity AI",
    deployPlatform: "Netlify",
    filterCategory: "agentic",
    categoryLabel: "Agentic Code & Frontend",
    tagline: "High-performance spiritual companion providing accurate astronomical prayer timings, Adhan schedules, and Holy Quran browser.",
    overview: "Built using Antigravity agentic code orchestration. Integrates astronomical prayer calculation algorithms, Qibla compass trigonometry, and clean responsive Surah reader.",
    architecture: [
      "Agentic modular architecture generated and refined using Antigravity",
      "High-precision astronomical prayer calculation algorithms for global coordinates",
      "Dynamic Quranic surah and ayat reader with clean typography",
      "Offline-ready local caching with instant zero-latency loads",
    ],
    metrics: [
      { label: "Deployment", value: "Netlify Live" },
      { label: "UI Response", value: "Sub-10ms" },
      { label: "Architecture", value: "Antigravity AI" },
      { label: "Platform", value: "Responsive Web" },
    ],
    tech: ["React.js", "Antigravity AI", "Netlify", "Tailwind CSS", "REST API", "Framer Motion"],
    codeSnippet: `// Prayer Times Calculation Integration
export function calculateTimings(lat, lng, method) {
  const coordinates = new Coordinates(lat, lng);
  const prayerTimes = new PrayerTimes(coordinates, new Date(), method);
  return {
    fajr: prayerTimes.fajr,
    dhuhr: prayerTimes.dhuhr,
    asr: prayerTimes.asr,
    maghrib: prayerTimes.maghrib,
    isha: prayerTimes.isha
  };
}`,
    liveUrl: "https://quiet-croquembouche-2cf6e0.netlify.app/",
    githubUrl: "https://github.com/Aaqibreshie",
    featured: true,
  },
  {
    id: "roomrental",
    number: "03",
    title: "Room Rental Full-Stack Web Platform (MERN)",
    badge: "Full-Stack Architecture",
    filterCategory: "mern",
    categoryLabel: "Full-Stack MERN & Leaflet",
    tagline: "Comprehensive rental platform featuring dual landlord/tenant roles, Leaflet maps, JWT auth, and Cloudinary media uploads.",
    overview: "Full-stack MERN application connecting property owners and tenants. Implemented role-based authorization, Leaflet geolocation property browsing, Multer/Cloudinary image pipelines, and Redis caching.",
    architecture: [
      "Role-based authentication & authorization using JWT tokens and secure cookies",
      "RESTful API design with request validation, rate limiting, and centralized error logging",
      "Integrated Leaflet interactive map coordinates for radius property search",
      "Cloudinary and Multer media pipeline with Redis key-value caching layer",
    ],
    metrics: [
      { label: "Role Separation", value: "Landlord / Tenant" },
      { label: "Media Handling", value: "Cloudinary + Multer" },
      { label: "Map Engine", value: "Leaflet Geo" },
      { label: "Database", value: "MongoDB Atlas" },
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Leaflet Maps", "Cloudinary", "Redis"],
    codeSnippet: `// MERN Role-Based Property Ingestion Controller
router.post('/properties', authMiddleware, roleCheck(['landlord']), upload.array('images', 5), async (req, res) => {
  const imageUrls = await uploadToCloudinary(req.files);
  const newProperty = await Property.create({
    ...req.body,
    landlord: req.user.id,
    photos: imageUrls
  });
  res.status(201).json(newProperty);
});`,
    liveUrl: "https://github.com/Aaqibreshie/Room-Rental-App",
    githubUrl: "https://github.com/Aaqibreshie/Room-Rental-App",
    featured: true,
  },
  {
    id: "wannhikes",
    number: "04",
    title: "Wann Hikes — Adventure & Trekking Platform",
    badge: "Adventure Web UI",
    filterCategory: "web",
    categoryLabel: "Adventure Travel & UI",
    tagline: "Interactive adventure travel portal showcasing high-altitude trekking expeditions, itineraries, and booking inquiries.",
    overview: "Created for mountain expedition planning and trekking enthusiasts. Features immersive itinerary galleries, gear preparation checklists, and dynamic inquiry forms.",
    architecture: [
      "Visual-heavy image optimization pipeline for mountain landscapes",
      "Interactive multi-day expedition itinerary accordion components",
      "Direct WhatsApp & email booking inquiry integrations",
      "Clean responsive mobile navigation for on-the-go travelers",
    ],
    metrics: [
      { label: "Image Performance", value: "Next/Image WebP" },
      { label: "Inquiry Flow", value: "Instant Dispatch" },
      { label: "Target Audience", value: "Trekking & Travel" },
      { label: "Repo Status", value: "Public GitHub" },
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Responsive UI", "Git & GitHub"],
    codeSnippet: `// Wann Hikes: Expedition Route Calculator & Packing List
export function getExpeditionSpecs(altitude, durationDays) {
  return {
    grade: altitude > 4000 ? "Challenging" : "Moderate",
    acclimatizationRequired: altitude > 3500,
    hydrationQuotaLiters: durationDays * 3.5
  };
}`,
    liveUrl: "https://github.com/Aaqibreshie/wann-hikes-website",
    githubUrl: "https://github.com/Aaqibreshie/wann-hikes-website",
  },
  {
    id: "urlshortener",
    number: "05",
    title: "Bitly-Style URL Shortener & Analytics Service",
    badge: "Backend & MongoDB",
    filterCategory: "mern",
    categoryLabel: "Backend & Analytics",
    tagline: "High-speed URL redirection microservice with click analytics, validation, and persistent visit logs.",
    overview: "Bitly-style URL shortener service engineered with Node.js, Express, and MongoDB. Generates unique nano-hash slugs with rapid HTTP 301 redirection and real-time click counter logging.",
    architecture: [
      "Collision-resistant short hash generation algorithm using base62 encoding",
      "Low-latency HTTP 301/302 redirection pipeline indexed by MongoDB slug",
      "Real-time visit counter and timestamp logging for click analytics",
      "Input URL validation with malformed link sanitation and error guards",
    ],
    metrics: [
      { label: "Redirection", value: "HTTP 301 Fast" },
      { label: "Slug Format", value: "Base62 Hash" },
      { label: "Analytics", value: "Real-time Clicks" },
      { label: "Database", value: "MongoDB" },
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "REST API", "Mongoose"],
    codeSnippet: `// URL Shortener Redirect & Analytics Logging
app.get('/:shortId', async (req, res) => {
  const entry = await URL.findOneAndUpdate(
    { shortId: req.params.shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  if (!entry) return res.status(404).send('Short URL not found');
  res.redirect(entry.redirectURL);
});`,
    liveUrl: "https://github.com/Aaqibreshie/URL-Shortener-",
    githubUrl: "https://github.com/Aaqibreshie/URL-Shortener-",
  },
  {
    id: "portfolio-cockpit",
    number: "06",
    title: "Interactive 3D Engineering Portfolio & Telemetry Cockpit",
    badge: "Next.js 16 & Antigravity",
    deployPlatform: "Netlify",
    filterCategory: "agentic",
    categoryLabel: "3D Motion & Next.js 16",
    tagline: "Ultra-modern, motion-driven developer portfolio engineered with Three.js 3D tilt, Lenis smooth scrolling, and live telemetry cockpit.",
    overview: "Built as a production-grade showcase engineered with Next.js 16, TypeScript, Framer Motion, and Google Antigravity agentic workflows. Features interactive 3D perspective physics, real-time IST clock, and clean Obsidian Emerald & Electric Lime aesthetic.",
    architecture: [
      "Next.js 16 App Router architecture with Webpack build optimization pipeline",
      "Interactive 3D holographic perspective cards with real-time cursor tracking & specular sheen",
      "Lenis smooth scroll integration with natural vertical scroll velocity",
      "Dynamic command center modal (⌘K) with keyboard shortcut event listeners",
    ],
    metrics: [
      { label: "Deployment", value: "Netlify Live" },
      { label: "Color System", value: "Obsidian Emerald" },
      { label: "Workflow", value: "Google Antigravity" },
      { label: "Scroll Engine", value: "Lenis Virtual" },
    ],
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Three.js", "Google Antigravity"],
    codeSnippet: `// 3D Perspective Card Tilt Physics Hook
export function usePerspectiveTilt(ref, intensity = 12) {
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * intensity;
    const y = ((e.clientY - top) / height - 0.5) * -intensity;
    setRot({ x: y, y: x });
  };
  return { rot, onMove };
}`,
    liveUrl: "https://aaqibportfolioapp.netlify.app/",
    githubUrl: "https://github.com/Aaqibreshie/Portfolio",
    featured: true,
  },
];

function ProjectCard({ project }: { project: ProjectShowcase }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "metrics">("overview");
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -4;
    const rY = ((x - centerX) / centerX) * 4;

    setRotX(rX);
    setRotY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12,
    });
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full flex">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transition: "transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="relative w-full rounded-3xl glass-slate p-8 sm:p-9 flex flex-col justify-between border border-white/10 hover:border-emerald-500/40 transition-colors overflow-hidden group shadow-2xl"
      >
        {/* Specular Glare */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 420px at ${glarePos.x}% ${glarePos.y}%, rgba(16, 185, 129, ${glarePos.opacity}), transparent 70%)`,
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-colors" />

        <div>
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-black font-mono text-emerald-400/40 group-hover:text-emerald-400/80 transition-colors">
              {project.number}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {project.deployPlatform && (
                <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/70 border border-emerald-700/50 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span>Live on {project.deployPlatform}</span>
                </span>
              )}
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full flex items-center gap-1.5">
                {project.badge.includes("Antigravity") && <Bot className="w-3.5 h-3.5 text-emerald-400" />}
                {project.badge}
              </span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-300 text-sm mt-2 leading-relaxed font-normal">
            {project.tagline}
          </p>

          {/* Interactive Code Preview Window */}
          <div className="my-5 rounded-2xl bg-zinc-950/95 border border-white/10 p-4 font-mono text-xs overflow-x-auto shadow-inner">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5 text-[10px] text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400">{project.id}.snippet.js</span>
            </div>
            <pre className="text-zinc-300 text-xs leading-relaxed">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>

          {/* Feature Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-zinc-900/90 border border-white/10 my-5">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "bg-white/15 text-white font-bold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === "architecture"
                  ? "bg-white/15 text-white font-bold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Stack</span>
            </button>

            <button
              onClick={() => setActiveTab("metrics")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === "metrics"
                  ? "bg-white/15 text-white font-bold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Metrics</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[110px] mb-5">
            {activeTab === "overview" && (
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {project.overview}
              </p>
            )}

            {activeTab === "architecture" && (
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-mono">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "metrics" && (
              <div className="grid grid-cols-2 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/80 border border-white/5">
                    <div className="text-lg font-bold text-emerald-400 font-mono">{m.value}</div>
                    <div className="text-xs text-zinc-400 font-sans mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer: Tags & Action Buttons */}
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-300 text-zinc-950 text-xs font-black transition-all shadow-md shadow-emerald-500/25 hover:opacity-95"
              >
                <span>{project.deployPlatform ? `Launch App (${project.deployPlatform})` : "Live Project"}</span>
                <ExternalLink className="w-4 h-4 text-zinc-950" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl glass-slate text-zinc-200 hover:text-white text-xs font-mono transition-all hover:border-emerald-500/40"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ModernProjectsGridProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function ModernProjectsGrid({
  selectedCategory,
  onSelectCategory,
}: ModernProjectsGridProps) {
  const [localFilter, setLocalFilter] = useState<string>("all");
  const activeFilter = selectedCategory ?? localFilter;
  const setActiveFilter = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    } else {
      setLocalFilter(cat);
    }
  };

  const filterTabs = [
    { id: "all", label: "All Projects (6)" },
    { id: "agentic", label: "Agentic AI & Antigravity" },
    { id: "mern", label: "Full-Stack MERN" },
    { id: "web", label: "Travel & Web UI" },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.filterCategory === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20 relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Featured Engineering Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Verified Projects & Repositories
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          Production applications built with React, Next.js, Node.js, MERN stack, and modern <span className="text-emerald-400 font-semibold">Google Antigravity</span> agentic workflows.
        </p>
      </div>

      {/* Interactive Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-6 border-b border-white/10">
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

      {/* Clean 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
