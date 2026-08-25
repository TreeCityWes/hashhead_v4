"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X1_NINJA, X1_PROJECTS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

const PROJECT_SHOTS: Record<string, { src: string; alt: string }> = {
  "https://x1.ninja/wallet": {
    src: "/screenshots/x1-ninja-wallet.webp",
    alt: "x1.ninja wallet tracker — paste an X1 address to inspect XDEX holdings and trades",
  },
};

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
          className="group panel edge-glow block mb-8 overflow-hidden"
        >
          <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-0">
            <div className="p-6 md:p-10">
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
              <p className="text-dim text-sm md:text-base max-w-xl leading-relaxed mb-5">
                {X1_NINJA.description} Pair it with TreeMiner: mine XenBlocks, then
                track XNM, XUNI, XNT, and the rest of XDEX without leaving the
                HashHead stack.
              </p>
              <span className="text-xs text-cyan/80 font-mono group-hover:text-cyan">
                x1.ninja →
              </span>
            </div>
            <div className="shot-frame m-3 lg:m-4 lg:ml-0 min-h-[200px] sm:min-h-[260px] lg:min-h-[340px]">
              <Image
                src="/screenshots/x1-ninja-screener.webp"
                alt="Live x1.ninja DEX screener showing XDEX pairs, liquidity, volume, and safety scores"
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover object-left-top"
                priority={false}
              />
            </div>
          </div>
        </motion.a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {X1_PROJECTS.filter((project) => project.url !== X1_NINJA.url).map(
            (project, i) => {
              const shot = PROJECT_SHOTS[project.url];
              return (
                <motion.a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.1, delay: i * 0.03 }}
                  className="group panel edge-glow overflow-hidden block"
                >
                  {shot && (
                    <div className="shot-frame m-3 mb-0 h-40 sm:h-48">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-left-top"
                      />
                    </div>
                  )}
                  <div className="p-6">
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
                  </div>
                </motion.a>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
