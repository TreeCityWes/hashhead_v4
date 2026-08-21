"use client";

import { useState } from "react";

export default function CopyCommand({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code.replace(/\\\n\s+/g, " "));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative group">
      <pre className="text-[11px] sm:text-xs leading-relaxed text-green/90 whitespace-pre-wrap break-all pr-16">
        {code}
      </pre>
      <button
        type="button"
        onClick={copy}
        className="absolute top-0 right-0 text-[10px] uppercase tracking-wider text-cyan/70 hover:text-cyan"
      >
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}
