"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CURATED_LINKS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

const categories = [
  { key: "mining" as const, label: "MINING" },
  { key: "x1" as const, label: "X1" },
  { key: "community" as const, label: "COMMUNITY" },
];

export default function Links() {
  const [activeCategory, setActiveCategory] = useState<
    "mining" | "x1" | "community"
  >("mining");
  const currentLinks = CURATED_LINKS[activeCategory];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          number="05"
          title="QUICK_LINKS"
          subtitle="Miner, X1 screener, and community"
        />

        <div className="segmented mb-8 w-full max-w-sm">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={activeCategory === cat.key ? "is-active" : undefined}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.14 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {currentLinks.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group panel edge-glow p-5 flex flex-col"
              >
                <span className="text-base font-semibold text-foreground group-hover:text-cyan mb-1 font-[var(--font-display)]">
                  {link.name}
                </span>
                <span className="text-xs text-dim mb-2">{link.description}</span>
                <span className="text-[10px] text-cyan/50 font-mono group-hover:text-cyan mt-auto">
                  {link.url.replace("https://", "")} →
                </span>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
