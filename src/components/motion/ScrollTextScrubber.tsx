"use client";

import { motion, type Variants } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function ScrollTextScrubber() {
  const statement =
    "We do not build ordinary websites. We engineer high-velocity distributed systems, choreograph 60 FPS spatial interactions, and architect software where every microsecond and pixel is tuned for mathematical precision.";

  const words = statement.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0.2, y: 15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-8 max-w-6xl mx-auto relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-6">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Core Engineering Philosophy</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.2] tracking-tight text-white">
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className={`inline-block mr-2.5 sm:mr-3.5 my-1 ${
                word.includes("distributed") || word.includes("60") || word.includes("mathematical")
                  ? "text-glacier-gradient font-black"
                  : "text-zinc-100"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.div
          variants={wordVariants}
          className="mt-10 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-mono text-zinc-400 border-t border-white/10 pt-6"
        >
          <span className="flex items-center gap-2 text-emerald-400 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Deterministic Execution
          </span>
          <span className="text-zinc-300">• Sub-15ms Target Latency</span>
          <span className="text-emerald-400">• 100% Strict Type Safety</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
