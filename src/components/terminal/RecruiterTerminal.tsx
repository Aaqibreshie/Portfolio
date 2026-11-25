"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import confetti from "canvas-confetti";
import { Terminal, CornerDownLeft, Sparkles, Copy, Check, Maximize2, Minimize2 } from "lucide-react";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
  timestamp?: string;
}

const QUICK_COMMANDS = [
  { cmd: "skills", label: "skills" },
  { cmd: "projects", label: "projects" },
  { cmd: "cat resume.txt", label: "cat resume.txt" },
  { cmd: "sudo hire", label: "sudo hire ⚡" },
  { cmd: "help", label: "help" },
  { cmd: "clear", label: "clear" },
];

export default function RecruiterTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1.5 text-zinc-300">
          <p className="text-emerald-400 font-bold">
            Aaqib Nabi Reshie — Interactive Engineering CLI v2.6.0
          </p>
          <p className="text-xs text-zinc-400">
            Type <span className="text-emerald-300 font-semibold">&apos;help&apos;</span> or click the pills below to inspect stack telemetry, active repositories, or fire hire sequence.
          </p>
        </div>
      ),
    },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isCopied, setIsCopied] = useState(false);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const lower = trimmed.toLowerCase();
    let response: React.ReactNode = null;

    if (lower === "clear" || lower === "cls") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (lower === "help") {
      response = (
        <div className="space-y-1 text-xs">
          <p className="text-emerald-400 font-bold mb-1">Available System Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300">
            <div><span className="text-emerald-400 font-mono font-bold">skills</span> — Front-End, MERN & Agentic AI Stack</div>
            <div><span className="text-emerald-400 font-mono font-bold">projects</span> — 6 Verified Repositories & Live URLs</div>
            <div><span className="text-emerald-400 font-mono font-bold">cat resume.txt</span> — VTU Degree & Mentorship Bio</div>
            <div><span className="text-emerald-400 font-mono font-bold">sudo hire</span> — Authorize hire protocol + Confetti</div>
            <div><span className="text-emerald-400 font-mono font-bold">whoami</span> — Current user session credentials</div>
            <div><span className="text-emerald-400 font-mono font-bold">date</span> — Live Srinagar, IN (IST) timestamp</div>
            <div><span className="text-emerald-400 font-mono font-bold">clear</span> — Flush console buffer</div>
          </div>
        </div>
      );
    } else if (lower === "skills") {
      response = (
        <div className="space-y-3 text-xs leading-relaxed">
          <div>
            <span className="text-emerald-400 font-bold block mb-1">▸ FRONT-END CAPABILITIES:</span>
            <div className="flex flex-wrap gap-1.5">
              {["React.js", "Next.js 15 (App Router)", "JavaScript (ES6+)", "Tailwind CSS v4", "Framer Motion", "HTML5/CSS3", "REST APIs", "Three.js"].map((s) => (
                <span key={s} className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/40 text-emerald-300 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-lime-400 font-bold block mb-1">▸ BACK-END & DATABASE:</span>
            <div className="flex flex-wrap gap-1.5">
              {["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "Redis Caching", "Cloudinary", "Multer", "Leaflet Geo"].map((s) => (
                <span key={s} className="px-2 py-0.5 rounded bg-lime-950/80 border border-lime-800/40 text-lime-300 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-emerald-400 font-bold block mb-1">▸ DATA & AGENTIC AI:</span>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "NumPy", "Pandas", "Google Antigravity Workflows", "Agentic Code", "Git & GitHub", "Vercel", "Netlify", "Postman"].map((s) => (
                <span key={s} className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/40 text-emerald-300 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (lower === "projects") {
      response = (
        <div className="space-y-2 text-xs">
          <p className="text-emerald-400 font-bold mb-1">Verified Production Repositories (6):</p>
          <div className="space-y-1.5 font-mono">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded bg-zinc-900/80 border border-white/5">
              <div>
                <span className="text-white font-bold">1. Exam Guard</span> — Online Proctoring & Exam Engine
                <span className="ml-2 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">VERCEL LIVE</span>
              </div>
              <a href="https://exam-guard-eight.vercel.app/" target="_blank" rel="noreferrer" className="text-emerald-400 underline hover:text-emerald-200 text-[11px] mt-1 sm:mt-0">
                exam-guard-eight.vercel.app ↗
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded bg-zinc-900/80 border border-white/5">
              <div>
                <span className="text-white font-bold">2. Islamic Spiritual Companion</span> — Astronomical Prayers & Quran
                <span className="ml-2 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">NETLIFY LIVE</span>
              </div>
              <a href="https://quiet-croquembouche-2cf6e0.netlify.app/" target="_blank" rel="noreferrer" className="text-emerald-400 underline hover:text-emerald-200 text-[11px] mt-1 sm:mt-0">
                quiet-croquembouche-2cf6e0.netlify.app ↗
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded bg-zinc-900/80 border border-white/5">
              <div>
                <span className="text-white font-bold">3. Room Rental Platform</span> — MERN, JWT, Leaflet Maps, Cloudinary
              </div>
              <a href="https://github.com/Aaqibreshie/Room-Rental-App" target="_blank" rel="noreferrer" className="text-emerald-400 underline hover:text-emerald-200 text-[11px] mt-1 sm:mt-0">
                github.com/Aaqibreshie/Room-Rental-App ↗
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded bg-zinc-900/80 border border-white/5">
              <div>
                <span className="text-white font-bold">4. Wann Hikes</span> — Adventure Expedition & Trekking UI
              </div>
              <a href="https://github.com/Aaqibreshie/wann-hikes-website" target="_blank" rel="noreferrer" className="text-emerald-400 underline hover:text-emerald-200 text-[11px] mt-1 sm:mt-0">
                github.com/Aaqibreshie/wann-hikes-website ↗
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded bg-zinc-900/80 border border-white/5">
              <div>
                <span className="text-white font-bold">5. URL Shortener Service</span> — Node.js, Express, Base62 Hash & Clicks
              </div>
              <a href="https://github.com/Aaqibreshie/URL-Shortener-" target="_blank" rel="noreferrer" className="text-emerald-400 underline hover:text-emerald-200 text-[11px] mt-1 sm:mt-0">
                github.com/Aaqibreshie/URL-Shortener- ↗
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded bg-zinc-900/80 border border-white/5">
              <div>
                <span className="text-white font-bold">6. 3D Developer Cockpit</span> — Next.js 16, Framer Motion &amp; Antigravity
                <span className="ml-2 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">NETLIFY LIVE</span>
              </div>
              <a href="https://aaqibportfolioapp.netlify.app/" target="_blank" rel="noreferrer" className="text-emerald-400 underline hover:text-emerald-200 text-[11px] mt-1 sm:mt-0">
                aaqibportfolioapp.netlify.app ↗
              </a>
            </div>
          </div>
        </div>
      );
    } else if (lower === "cat resume.txt" || lower === "resume") {
      response = (
        <div className="p-3 rounded bg-zinc-950/90 border border-white/10 font-mono text-xs text-zinc-300 space-y-2">
          <div className="text-emerald-400 font-bold pb-1 border-b border-white/10">
            ========================================================================
            <br />
            AAQIB NABI RESHIE // FRONT-END & FULL-STACK MERN DEVELOPER
            <br />
            ========================================================================
          </div>
          <div><span className="text-zinc-400">EMAIL:</span> reshieaaqib@gmail.com</div>
          <div><span className="text-zinc-400">PHONE:</span> +91-7780883029</div>
          <div><span className="text-zinc-400">LOCATION:</span> Srinagar, Jammu & Kashmir, India</div>
          <div><span className="text-zinc-400">EDUCATION:</span> B.E. in Computer Science and Engineering (VTU)</div>
          <div><span className="text-zinc-400">CERTIFICATION:</span> MERN Stack Development Certification (ILS)</div>
          <div>
            <span className="text-zinc-400">EXPERIENCE:</span>
            <br />
            • MERN Stack Trainer @ ILS (Jul 2026 - Present) — Mentored 150+ students in full-stack web engineering.
            <br />
            • Technical Instructor @ Swift ITI Nowgam (Jan 2026 - Jun 2026) — Project-based CS & AI instruction.
          </div>
          <div className="pt-2 text-emerald-300">
            Direct PDF Download: <a href="/Aaqib_Nabi_Reshie_Resume.pdf" target="_blank" rel="noreferrer" className="underline hover:text-white">/Aaqib_Nabi_Reshie_Resume.pdf</a>
          </div>
        </div>
      );
    } else if (lower === "sudo hire" || lower === "hire") {
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#bef264", "#10b981", "#10b981", "#ffffff"],
      });

      response = (
        <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 text-xs font-mono space-y-2 animate-pulse">
          <div className="text-emerald-400 font-bold text-sm flex items-center gap-2">
            <span>[ACCESS GRANTED]</span>
            <span>PROCEEDING TO INITIATE COLLABORATION SEQUENCE...</span>
          </div>
          <p className="text-zinc-300">
            Redirecting target to priority transmission channel. You can also reach out immediately at <span className="text-white font-bold">reshieaaqib@gmail.com</span> or <span className="text-emerald-400 font-bold">+91-7780883029</span>.
          </p>
        </div>
      );

      setTimeout(() => {
        const elem = document.getElementById("contact");
        elem?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    } else if (lower === "whoami") {
      response = (
        <p className="text-xs text-zinc-300 font-mono">
          <span className="text-emerald-400 font-bold">guest:recruiter</span> (Engineering Leader / Technical Hiring Manager inspecting Aaqib&apos;s workspace)
        </p>
      );
    } else if (lower === "date") {
      response = (
        <p className="text-xs text-zinc-300 font-mono">
          {new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} (Srinagar, IN / IST UTC+5:30)
        </p>
      );
    } else if (
      [
        "python",
        "numpy",
        "pandas",
        "react",
        "node",
        "express",
        "mongodb",
        "cloudinary",
        "multer",
        "postman",
        "js",
        "javascript",
        "html",
        "css",
      ].includes(lower)
    ) {
      const skillSpecs: Record<string, string> = {
        python: "Python: Scripting, backend automation, and data/ML basics (NumPy, Pandas).",
        numpy: "NumPy: Numerical Python, multi-dimensional array operations, matrix mathematics.",
        pandas: "Pandas: Data structures, DataFrames, data wrangling, cleaning and tabular analytics.",
        react: "React.js: Advanced component architecture, custom hooks, Virtual DOM, and state patterns.",
        node: "Node.js: High-concurrency event-driven JavaScript server runtime, REST APIs, and microservices.",
        express: "Express.js: Robust HTTP utility methods and middleware routing for Node.js backends.",
        mongodb: "MongoDB & Atlas: NoSQL document database, Mongoose ODM schemas, and indexing pipelines.",
        cloudinary: "Cloudinary: Cloud-based media optimization, image transformations, and global CDN delivery.",
        multer: "Multer: Node.js middleware for handling multipart/form-data for seamless file upload pipelines.",
        postman: "Postman: REST API lifecycle design, endpoint testing, request mocks, and integration suites.",
        js: "JavaScript (ES6+): Asynchronous promises, closures, prototypes, event delegation, and modern syntax.",
        javascript: "JavaScript (ES6+): Asynchronous promises, closures, prototypes, event delegation, and modern syntax.",
        html: "HTML5: Semantic markup, responsive viewport controls, and accessibility (WCAG).",
        css: "CSS3 & Tailwind: Modern Flexbox/Grid systems, responsive utilities, and performant animations.",
      };
      response = (
        <div className="p-2.5 rounded bg-zinc-900/90 border border-emerald-500/30 text-xs font-mono space-y-1">
          <div className="text-emerald-400 font-bold">▸ SKILL SPECIFICATION VERIFIED:</div>
          <div className="text-zinc-200">{skillSpecs[lower]}</div>
        </div>
      );
    } else {
      response = (
        <p className="text-xs text-rose-400 font-mono">
          zsh: command not found: {trimmed}. Type <span className="text-emerald-300 underline cursor-pointer" onClick={() => executeCommand("help")}>&apos;help&apos;</span> to inspect recognized commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: response, timestamp: new Date().toLocaleTimeString() }]);
    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInputVal(cmdHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= cmdHistory.length) {
          setHistoryIndex(-1);
          setInputVal("");
        } else {
          setHistoryIndex(newIndex);
          setInputVal(cmdHistory[newIndex]);
        }
      }
    }
  };

  const copyTerminalLog = () => {
    const rawText = history
      .map((h) => `$ ${h.command}`)
      .join("\n");
    navigator.clipboard.writeText(rawText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-24 px-4 sm:px-8 max-w-5xl mx-auto scroll-mt-20 relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Shell Interface</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Interactive Recruiter Terminal
          </h2>
        </div>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-sm">
          Run commands directly inside this sandboxed shell to inspect verified skills, projects, and credentials.
        </p>
      </div>

      {/* Terminal Window Container */}
      <div className="rounded-3xl border border-emerald-500/30 bg-[#0a0a0d] shadow-[0_0_50px_-10px_rgba(16, 185, 129,0.2)] overflow-hidden font-mono text-sm">
        {/* Window Chrome Header */}
        <div className="px-5 py-3.5 bg-[#121216] border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block shadow-sm" />
            <span className="ml-3 text-xs text-zinc-400 font-mono hidden sm:inline">
              aaqib@workstation: ~/portfolio (zsh)
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <button
              onClick={copyTerminalLog}
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy session output"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="text-[11px] hidden sm:inline">{isCopied ? "Copied" : "Copy Log"}</span>
            </button>
            <span className="text-emerald-400 flex items-center gap-1.5 font-bold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SESSION LIVE
            </span>
          </div>
        </div>

        {/* Console Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="p-6 max-h-[460px] overflow-y-auto space-y-4 bg-[#09090b]/95 text-zinc-200 cursor-text scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        >
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-400 font-bold">guest@aaqib-dev:~$</span>
                <span className="text-white font-semibold">{entry.command}</span>
                {entry.timestamp && (
                  <span className="text-[10px] text-zinc-600 ml-auto">{entry.timestamp}</span>
                )}
              </div>
              <div className="pl-3 sm:pl-4 border-l border-emerald-500/30">{entry.output}</div>
            </div>
          ))}

          {/* Active Command Input Line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400 font-bold text-xs shrink-0">guest@aaqib-dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'skills', 'projects', 'cat resume.txt', or 'sudo hire'..."
              className="w-full bg-transparent text-white text-xs sm:text-sm focus:outline-none placeholder-slate-600 font-mono"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              onClick={() => executeCommand(inputVal)}
              className="text-zinc-500 hover:text-emerald-400 transition-colors p-1"
              title="Execute"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Quick Command Action Pills */}
        <div className="px-5 py-3 bg-[#101014] border-t border-white/10 flex flex-wrap items-center gap-2 select-none">
          <span className="text-[11px] font-mono text-zinc-400 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Shortcuts:</span>
          </span>
          {QUICK_COMMANDS.map((qc) => (
            <button
              key={qc.cmd}
              onClick={() => executeCommand(qc.cmd)}
              className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-white/10 hover:border-emerald-500/50 hover:bg-zinc-800 text-[11px] font-mono text-zinc-300 hover:text-white transition-all cursor-pointer active:scale-95"
            >
              {qc.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
