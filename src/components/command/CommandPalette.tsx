"use client";

import { useState, useEffect, useMemo } from "react";
import confetti from "canvas-confetti";
import {
  Search,
  FileText,
  Mail,
  Briefcase,
  Layers,
  X,
  CornerDownLeft,
  Sparkles,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectCategory,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const commands = useMemo(
    () => [
      {
        id: "copy-email",
        label: "Copy Priority Email (reshieaaqib@gmail.com)",
        category: "Contact",
        icon: Mail,
        action: () => {
          navigator.clipboard.writeText("reshieaaqib@gmail.com");
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ["#bef264", "#10b981", "#10b981"],
          });
          onClose();
        },
      },
      {
        id: "view-terminal",
        label: "Open Interactive Recruiter Terminal (/sh CLI)",
        category: "Navigation",
        icon: Terminal,
        action: () => {
          window.location.hash = "terminal";
          onClose();
        },
      },
      {
        id: "view-projects",
        label: "Jump to Verified Projects",
        category: "Navigation",
        icon: Briefcase,
        action: () => {
          window.location.hash = "projects";
          onClose();
        },
      },
      {
        id: "filter-all",
        label: "Filter: All Verified Projects (6)",
        category: "Filter",
        icon: Layers,
        action: () => {
          onSelectCategory("all");
          onClose();
        },
      },
      {
        id: "filter-agentic",
        label: "Filter: Agentic AI & Antigravity Projects",
        category: "Filter",
        icon: Sparkles,
        action: () => {
          onSelectCategory("agentic");
          onClose();
        },
      },
      {
        id: "filter-mern",
        label: "Filter: Full-Stack MERN & Backend Projects",
        category: "Filter",
        icon: Layers,
        action: () => {
          onSelectCategory("mern");
          onClose();
        },
      },
      {
        id: "filter-web",
        label: "Filter: Travel & Web UI Projects",
        category: "Filter",
        icon: Sparkles,
        action: () => {
          onSelectCategory("web");
          onClose();
        },
      },
      {
        id: "live-exam-guard",
        label: "Launch Live: Exam Guard (Vercel)",
        category: "Live Deployment",
        icon: Sparkles,
        action: () => {
          window.open("https://exam-guard-eight.vercel.app/", "_blank");
          onClose();
        },
      },
      {
        id: "live-islamic-app",
        label: "Launch Live: Islamic Spiritual Companion (Netlify)",
        category: "Live Deployment",
        icon: Sparkles,
        action: () => {
          window.open("https://quiet-croquembouche-2cf6e0.netlify.app/", "_blank");
          onClose();
        },
      },
      {
        id: "resume",
        label: "Download Resume PDF (Aaqib Nabi Reshie)",
        category: "Document",
        icon: FileText,
        action: () => {
          window.open("/Aaqib_Nabi_Reshie_Resume.pdf", "_blank");
          onClose();
        },
      },
      {
        id: "github",
        label: "Open GitHub Profile (github.com/Aaqibreshie)",
        category: "External",
        icon: GithubIcon,
        action: () => {
          window.open("https://github.com/Aaqibreshie", "_blank");
          onClose();
        },
      },
    ],
    [onClose, onSelectCategory]
  );

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const lower = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(lower) ||
        c.category.toLowerCase().includes(lower)
    );
  }, [commands, query]);

  const handleSelect = (idx: number) => {
    const cmd = filteredCommands[idx];
    if (cmd) {
      cmd.action();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 px-4 bg-zinc-950/85 backdrop-blur-xl animate-fade-in">
      <div
        className="w-full max-w-xl rounded-2xl glass-slate border border-emerald-500/30 shadow-2xl bg-[#080d19]/95 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <Search className="w-4 h-4 text-emerald-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or filter portfolio..."
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-84 overflow-y-auto p-2 space-y-1">
          {filteredCommands.map((cmd, idx) => {
            const Icon = cmd.icon;
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={cmd.id}
                onClick={() => handleSelect(idx)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-emerald-500/30 to-blue-500/20 text-white border border-emerald-500/40 font-semibold"
                    : "text-zinc-300 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isSelected ? "text-emerald-400" : "text-zinc-400"}`} />
                  <span>{cmd.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-400 font-mono bg-white/5 px-2.5 py-0.5 rounded">
                    {cmd.category}
                  </span>
                  {isSelected && <CornerDownLeft className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
              </button>
            );
          })}

          {filteredCommands.length === 0 && (
            <div className="text-center py-8 text-xs text-zinc-400 font-mono">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-2.5 bg-zinc-950/80 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <span>Shortcuts</span>
          <div className="flex items-center gap-3">
            <span>[↑↓] Move</span>
            <span>[↵] Select</span>
            <span>[esc] Exit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
