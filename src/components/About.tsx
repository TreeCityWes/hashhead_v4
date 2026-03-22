"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

const socials = [
  { cmd: "open --twitter", handle: "@treecitywes", url: SOCIAL_LINKS.twitter },
  { cmd: "open --github", handle: "TreeCityWes", url: SOCIAL_LINKS.github },
  { cmd: "open --telegram", handle: "TreeRootCity", url: SOCIAL_LINKS.telegram },
  { cmd: "open --youtube", handle: "@treecitywes", url: SOCIAL_LINKS.youtube },
];

export default function About() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          number="02"
          title="ABOUT"
          subtitle="whoami"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.25 }}
          className="panel p-6 md:p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-12 h-12 border border-cyan/45 rounded-xl flex items-center justify-center text-green text-lg font-bold shrink-0"
            >
              W
            </div>
            <div>
              <h3 className="text-2xl font-semibold glitch-text font-[var(--font-display)]">TreeCityWes</h3>
              <p className="text-dim text-xs tracking-wider uppercase">builder // validator // hashhead</p>
            </div>
          </div>

          <div className="space-y-2 mb-7 text-sm text-dim">
            <p><span className="text-green">&gt;</span> Builder, validator operator, and community leader in the X1 blockchain ecosystem.</p>
            <p><span className="text-green">&gt;</span> Creator of X1 Ninja, X1 World, X1 Node, and the HashHead community.</p>
            <p><span className="text-green">&gt;</span> Focused on building open-source tools that make blockchain accessible for everyone.</p>
          </div>

          <div className="border-t border-cyan/20 pt-4 space-y-0">
            {socials.map((s) => (
              <a
                key={s.cmd}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-3 -mx-1.5 text-sm rounded-lg hover:bg-cyan/8 group"
              >
                <span className="text-green">$</span>
                <span className="text-dim group-hover:text-cyan">{s.cmd}</span>
                <span className="text-cyan">{s.handle}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
