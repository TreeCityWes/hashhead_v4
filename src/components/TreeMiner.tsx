"use client";

import { motion } from "framer-motion";
import { INSTALL_STEPS, TREEMINER, TREEMINER_FEATURES } from "@/lib/constants";
import CopyCommand from "./CopyCommand";
import SectionHeader from "./SectionHeader";

export default function TreeMiner() {
  return (
    <section id="treeminer" className="relative py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          title="TREEMINER"
          subtitle="Open-source XenBlocks miner — journal first, submit second."
        />

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="panel edge-glow p-6 md:p-8"
          >
            <p className="badge mb-4 max-w-full">tree_miner</p>
            <h3 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-4">
              GPU mining that survives XenBlocks outages
            </h3>
            <p className="text-dim text-sm leading-relaxed mb-4">{TREEMINER.problem}</p>
            <h4 className="text-sm uppercase tracking-[0.14em] text-cyan mb-3">
              Mine XenBlocks on the X1 blockchain
            </h4>
            <p className="text-sm leading-relaxed text-foreground/90 mb-6">
              {TREEMINER.description} Built for operators who mine Xenium (XNM) and XUNI
              on XenBlocks / X1 and need the local dashboard, CUDA stream telemetry, and
              a durable ledger — not a RAM queue.
            </p>
            <div className="cta-row cta-row-start">
              <a
                href={TREEMINER.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                GitHub
              </a>
              <a
                href={`${TREEMINER.repo}#building-linux--wsl2`}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                README
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="panel edge-glow p-6 md:p-8"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-dim mb-4">
              Linux / WSL2 build
            </p>
            <p className="text-xs text-dim mb-5">
              Requires CUDA 12.x, CMake ≥ 3.18, Ninja, and{" "}
              <a
                href="https://github.com/microsoft/vcpkg"
                className="text-cyan"
                target="_blank"
                rel="noopener noreferrer"
              >
                vcpkg
              </a>
              . Local console binds to {TREEMINER.dashboardUrl} by default.
            </p>
            <ol className="space-y-4">
              {INSTALL_STEPS.map((step, i) => (
                <li key={step.label} className="border-t border-cyan/10 pt-4 first:border-t-0 first:pt-0">
                  <p className="text-[10px] text-cyan uppercase tracking-wider mb-2">
                    {String(i + 1).padStart(2, "0")} :: {step.label}
                  </p>
                  <CopyCommand code={step.code} />
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TREEMINER_FEATURES.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.15, delay: i * 0.03 }}
              className="panel edge-glow p-6"
            >
              <span className="badge mb-3">[{feature.tag}]</span>
              <h3 className="text-lg font-semibold font-[var(--font-display)] mb-2">
                {feature.title}
              </h3>
              <p className="text-dim text-sm leading-relaxed">{feature.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
