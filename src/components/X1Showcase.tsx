"use client";

import { motion } from "framer-motion";
import { X1_NINJA, X1_PROJECTS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

export default function X1Showcase() {
  return (
    <section id="x1-ninja" className="relative py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          title="X1_NINJA"
          subtitle="Premier DEX screener for the X1 blockchain."
        />

        <motion.a
          href={X1_NINJA.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="group panel edge-glow p-6 md:p-10 block mb-8"
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge">[SCREENER]</span>
            <span className="badge">XDEX</span>
            <span className="badge">1,200+ pairs</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold font-[var(--font-display)] mb-3 group-hover:text-cyan">
            {X1_NINJA.name}
          </h3>
          <p className="text-lg text-foreground/90 font-[var(--font-display)] mb-3">
            {X1_NINJA.tagline}
          </p>
          <p className="text-dim text-sm md:text-base max-w-3xl leading-relaxed mb-5">
            {X1_NINJA.description} Pair it with TreeMiner: mine XenBlocks, then
            track XNM, XUNI, XNT, and the rest of XDEX without leaving the
            HashHead stack.
          </p>
          <span className="text-xs text-cyan/80 font-mono group-hover:text-cyan">
            x1.ninja →
          </span>
        </motion.a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {X1_PROJECTS.filter((project) => project.url !== X1_NINJA.url).map(
            (project, i) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.1, delay: i * 0.03 }}
                className="group panel edge-glow p-6 block"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] text-cyan font-mono badge">
                    [{project.tag}]
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-cyan font-[var(--font-display)]">
                  {project.name}
                </h3>
                <p className="text-dim text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className="text-xs text-cyan/70 font-mono group-hover:text-cyan">
                  {project.url.replace("https://", "")} →
                </span>
              </motion.a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
