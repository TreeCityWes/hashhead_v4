"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CURATED_LINKS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

const categories = [
  { key: "x1" as const, label: "X1" },
  { key: "community" as const, label: "COMMUNITY" },
  { key: "legacy" as const, label: "LEGACY" },
];

export default function Links() {
  const [activeCategory, setActiveCategory] = useState<"x1" | "community" | "legacy">("x1");
  const currentLinks = CURATED_LINKS[activeCategory];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          number="04"
          title="QUICK_LINKS"
          subtitle="Tools, communities, and resources"
        />

        {/* Tabs */}
        <div className="flex gap-1 mb-8 border border-cyan/20 p-1 rounded-full max-w-sm bg-[rgba(10,18,29,0.55)]">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex-1 px-4 py-2 text-xs uppercase tracking-wider font-mono rounded-full ${
                activeCategory === cat.key
                  ? "bg-cyan text-[#041019]"
                  : "text-dim hover:text-cyan bg-transparent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Clean grid */}
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
                <span className="text-xs text-dim mb-2">
                  {link.description}
                </span>
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
