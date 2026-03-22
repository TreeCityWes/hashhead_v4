"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useDecryptReveal } from "@/hooks/useDecryptReveal";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const decrypted = useDecryptReveal(title, inView);

  return (
    <div ref={ref} className="mb-12">
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight font-[var(--font-display)]">
        <span className="text-dim text-xl md:text-2xl">[{number}]</span>{" "}
        <span className="text-dim">{":: "}</span>
        <span className="glitch-text">{decrypted}</span>
      </h2>
      {subtitle && (
        <p className="text-dim text-sm mt-2">{subtitle}</p>
      )}
    </div>
  );
}
