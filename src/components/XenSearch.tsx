"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function XenSearch() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(
        `https://explorer.xenblocks.io/leaderboard/${encodeURIComponent(query.trim())}`,
        "_blank"
      );
    }
  };

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          number="06"
          title="XENBLOCKS_EXPLORER"
          subtitle="search the XenBlocks leaderboard while TreeMiner is hashing"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="panel"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="text-xs text-cyan font-mono badge">
              [XENBLOCKS]
            </span>
            <span className="text-xs text-dim font-mono hidden sm:inline">
              :: session_0x7f3a
            </span>
          </div>

          <form onSubmit={handleSearch} className="p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-green text-sm shrink-0">
                $
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ETH address or ENS..."
                className="flex-1 min-w-0 bg-transparent text-foreground text-sm outline-none placeholder:text-dim/50 font-mono"
              />
              <button type="submit" className="button-secondary">
                EXEC
              </button>
            </div>
          </form>

          <div className="px-4 pb-3">
            <p className="text-dim/40 text-xs font-mono">
              &gt; ready. awaiting query...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
