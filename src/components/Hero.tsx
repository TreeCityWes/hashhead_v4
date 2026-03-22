"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ASCII_LOGO, SOCIAL_LINKS } from "@/lib/constants";
import HashVisualization from "./HashVisualization";

const phrases = [
  "BUILDING X1 ECOSYSTEM...",
  "sha256(commitment) => 0x...",
  "VALIDATOR.BUILDER.HASHHEAD",
  "DECENTRALIZE EVERYTHING_",
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
      phase === "typing"
        ? typingMs
        : phase === "deleting"
          ? deleteMs
          : pauseMs;

    const timer = setTimeout(() => {
      if (phase === "typing") {
        const nextPos = Math.min(charPos + 1, current.length);
        setCharPos(nextPos);
        setDisplay(current.slice(0, nextPos));

        if (nextPos >= current.length) {
          setPhase("pausing");
        }
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

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 text-center max-w-5xl"
      >
        <div className="inline-flex items-center gap-2 badge mb-6">
          <span className="status-online" />
          X1 validator suite
        </div>

        {/* ASCII art on desktop */}
        <pre className="hidden lg:block text-cyan/70 text-[10px] leading-tight mb-6 whitespace-pre select-none">
          {ASCII_LOGO}
        </pre>

        {/* Simplified on tablet/mobile */}
        <h1 className="lg:hidden text-4xl md:text-5xl font-semibold mb-6 glitch-text font-[var(--font-display)]">
          HASHHEAD
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 font-[var(--font-display)]">
          Infrastructure for the{" "}
          <span className="glitch-text">X1 ecosystem</span>
        </h2>

        <div className="h-8 md:h-10 mb-5 flex items-center justify-center">
          <p className="text-xs md:text-sm text-cyan/80 whitespace-nowrap uppercase tracking-[0.16em]">
            {typedText}
            <span className="inline-block w-[2px] h-[1.1em] bg-cyan ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
          </p>
        </div>

        <p className="text-dim text-sm md:text-base max-w-2xl mx-auto mb-9 leading-relaxed">
          HashHead is the build lab for TreeCityWes. I ship validator tooling, operate infrastructure,
          and create community-first products that make X1 easier to use.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="https://x1.ninja"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Launch X1 Ninja
          </a>
          <a
            href={SOCIAL_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            Join Telegram
          </a>
        </div>

        <div className="panel px-4 py-4 md:px-6 md:py-5 max-w-3xl mx-auto">
          <HashVisualization />
        </div>
      </motion.div>
    </section>
  );
}
