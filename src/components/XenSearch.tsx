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
          number="05"
          title="XENBLOCKS_EXPLORER"
          subtitle="legacy tool — search the XenBlocks leaderboard"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="panel"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-cyan/20">
            <span className="text-xs text-cyan font-mono badge">
              [XENBLOCKS_EXPLORER]
            </span>
            <span className="text-xs text-dim font-mono">
              :: session_0x7f3a
            </span>
          </div>

          <form onSubmit={handleSearch} className="p-4">
            <div className="flex items-center gap-3">
              <span className="text-green text-sm shrink-0">
                $
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter ETH address or ENS name..."
                className="flex-1 bg-transparent text-foreground text-sm outline-none placeholder:text-dim/50 font-mono"
              />
              <button
                type="submit"
                className="px-4 py-1.5 rounded-full border border-cyan text-cyan text-xs font-mono uppercase tracking-wider hover:bg-cyan hover:text-[#041019]"
              >
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
