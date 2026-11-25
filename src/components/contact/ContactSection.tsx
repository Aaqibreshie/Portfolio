"use client";

import { useState, FormEvent } from "react";
import confetti from "canvas-confetti";
import { Copy, Check, Send, Sparkles, Phone, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const directEmail = "reshieaaqib@gmail.com";
  const phone = "+91-7780883029";

  const handleCopy = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#bef264", "#10b981", "#34d399", "#ffffff"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Unable to send message. Please email directly.");
        setLoading(false);
        return;
      }

      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#bef264", "#10b981", "#10b981", "#ffffff"],
      });
    } catch {
      setLoading(false);
      setErrorMsg("Network error. Please use the direct email button on the left.");
    }
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20 relative z-10">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/40">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Initiate Collaboration
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Open to full-time, contract, and remote opportunities across full-stack web engineering and agentic AI development.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {[
            "MERN Stack Developer",
            "Full-Stack Developer",
            "Front-End Engineer",
            "Agentic AI Developer",
            "React / Next.js Developer",
            "Node.js API Engineer",
            "Technical Mentor",
          ].map((role) => (
            <span
              key={role}
              className="px-3 py-1 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Column: Direct channels (2 cols) */}
        <div className="md:col-span-2 rounded-2xl glass-slate p-8 flex flex-col justify-between border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
              Reach out directly for full-time opportunities, technical mentoring, or project inquiries.
            </p>

            {/* Email Box */}
            <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10 mb-4">
              <span className="text-[11px] text-zinc-400 font-mono block mb-1 uppercase tracking-wider">
                Email Address:
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-mono font-medium text-white truncate">
                  {directEmail}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>
            </div>

            {/* Phone Box */}
            <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10 mb-6">
              <span className="text-[11px] text-zinc-400 font-mono block mb-1 uppercase tracking-wider">
                Direct Line:
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-mono font-medium text-emerald-400">
                  {phone}
                </span>
                <a
                  href={`tel:${phone}`}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-mono text-zinc-400 block mb-3 uppercase tracking-wider">
              Verified Profiles:
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/Aaqibreshie"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass-slate text-zinc-300 hover:text-white hover:border-emerald-500/40 transition-all shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/reshieaaqib"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass-slate text-zinc-300 hover:text-white hover:border-emerald-500/40 transition-all shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact form (3 cols) */}
        <div className="md:col-span-3 rounded-2xl glass-slate p-8 border border-white/10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Message Transmitted</h4>
              <p className="text-sm text-zinc-400 max-w-sm">
                Thank you for reaching out. I review incoming communications and typically reply within 2-4 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="mt-6 px-5 py-2.5 rounded-xl bg-white/10 text-xs text-white hover:bg-white/20 transition-colors font-mono cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-2 uppercase tracking-wider">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Hiring Manager / Recruiter"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-2 uppercase tracking-wider">
                  Project Brief & Role Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your role or project requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors font-sans resize-none"
                />
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300 font-mono">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-300 text-zinc-950 font-bold text-xs tracking-wider uppercase transition-all shadow-xl shadow-emerald-500/25 hover:opacity-95 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-zinc-950" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
