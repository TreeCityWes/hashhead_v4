"use client";

import { useState, useEffect, useRef } from "react";
import { DECRYPT_CHARS } from "@/lib/constants";

export function useDecryptReveal(
  target: string,
  active: boolean,
  cyclesPerChar = 4,
  intervalMs = 30
): string {
  const [display, setDisplay] = useState(target);
  const resolvedCount = useRef(0);
  const cycleCount = useRef(0);

  useEffect(() => {
    if (!active) {
      resolvedCount.current = target.length;
      cycleCount.current = 0;
      return;
    }

    resolvedCount.current = 0;
    cycleCount.current = 0;

    const id = setInterval(() => {
      cycleCount.current++;

      if (cycleCount.current % cyclesPerChar === 0 && resolvedCount.current < target.length) {
        resolvedCount.current++;
      }

      if (resolvedCount.current >= target.length) {
        setDisplay(target);
        clearInterval(id);
        return;
      }

      const resolved = target.slice(0, resolvedCount.current);
      const scrambled = Array.from({ length: target.length - resolvedCount.current }, () =>
        DECRYPT_CHARS[Math.floor(Math.random() * DECRYPT_CHARS.length)]
      ).join("");

      setDisplay(resolved + scrambled);
    }, intervalMs);

    return () => clearInterval(id);
  }, [target, active, cyclesPerChar, intervalMs]);

  return active ? display : target;
}
