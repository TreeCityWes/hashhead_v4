"use client";

import { motion } from "framer-motion";
import { X1_PROJECTS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

export default function X1Showcase() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          title="X1_ECOSYSTEM"
          subtitle="Tools and platforms built for the X1 blockchain."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
          {X1_PROJECTS.map((project, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
