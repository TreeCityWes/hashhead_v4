"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, TREEMINER } from "@/lib/constants";
import TreeMinerDashboard from "./TreeMinerDashboard";
import TreeMinerTerminal from "./TreeMinerTerminal";

const phrases = [
  "JOURNAL-FIRST XENBLOCKS MINER...",
  "XNM + XUNI FINDS NEVER DROP_",
  "CUDA STREAMS // LOCAL OPS :42069",
  "MINE X1. SCREEN XDEX. HASHHEAD.",
];

type Phase = "typing" | "pausing" | "deleting";

function useTypewriter(
  items: string[],
  typingMs = 40,
  deleteMs = 20,
  pauseMs = 2200
) {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [itemIndex, setItemIndex] = useState(0);
  const [charPos, setCharPos] = useState(0);

  useEffect(() => {
    const current = items[itemIndex];
    const delay =
      phase === "typing" ? typingMs : phase === "deleting" ? deleteMs : pauseMs;

    const timer = setTimeout(() => {
      if (phase === "typing") {
        const nextPos = Math.min(charPos + 1, current.length);
        setCharPos(nextPos);
        setDisplay(current.slice(0, nextPos));
        if (nextPos >= current.length) setPhase("pausing");
        return;
      }

      if (phase === "pausing") {
        setPhase("deleting");
        return;
      }

      const nextPos = Math.max(charPos - 1, 0);
      setCharPos(nextPos);
      setDisplay(current.slice(0, nextPos));

      if (nextPos <= 0) {
        setItemIndex((prev) => (prev + 1) % items.length);
        setPhase("typing");
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [items, itemIndex, charPos, phase, typingMs, deleteMs, pauseMs]);

  return display;
}

export default function Hero() {
  const typedText = useTypewriter(phrases);
  const [view, setView] = useState<"web" | "terminal">("web");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16 md:pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full max-w-6xl"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 badge mb-6">
            <span className="status-online" />
            <span className="sm:hidden">XenBlocks miner</span>
            <span className="hidden sm:inline">XenBlocks GPU miner for X1</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4 font-[var(--font-display)]">
            <span className="glitch-text">TreeMiner</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-foreground/90 font-[var(--font-display)] mb-4">
            Outage-proof mining for XenBlocks on the X1 blockchain
          </h2>

          <div className="h-8 md:h-10 mb-5 flex items-center justify-center px-2">
            <p className="text-[10px] sm:text-xs md:text-sm text-cyan/80 uppercase tracking-[0.12em] sm:tracking-[0.16em] text-center">
              {typedText}
              <span className="inline-block w-[2px] h-[1.1em] bg-cyan ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
            </p>
          </div>

          <p className="text-dim text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed">
            HashHead ships {TREEMINER.name} for XenBlocks GPU mining and{" "}
            <a
              href="https://x1.ninja"
              className="text-cyan hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              x1.ninja
            </a>
            , the premier DEX screener for X1. Journal every XNM and XUNI find
            locally, keep hashing through server outages, then screen XDEX from
            the same desk.
          </p>

          <div className="cta-row mb-10">
            <a
              href={TREEMINER.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              GitHub
            </a>
            <a href="#treeminer" className="button-secondary">
              Install
            </a>
            <a
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              Telegram
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="segmented" role="tablist" aria-label="TreeMiner console view">
            {(
              [
                ["web", "Web"],
                ["terminal", "Terminal"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={view === id ? "is-active" : undefined}
                onClick={() => setView(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {view === "web" ? <TreeMinerDashboard /> : <TreeMinerTerminal />}
      </motion.div>
    </section>
  );
}
