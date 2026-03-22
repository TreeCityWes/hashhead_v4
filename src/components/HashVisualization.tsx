"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { HASH_INPUTS, DECRYPT_CHARS } from "@/lib/constants";

function fakeHash(): string {
  return Array.from({ length: 64 }, () =>
    DECRYPT_CHARS[Math.floor(Math.random() * DECRYPT_CHARS.length)]
  ).join("");
}

export default function HashVisualization() {
  const [inputIdx, setInputIdx] = useState(0);
  const [hashDisplay, setHashDisplay] = useState(fakeHash());
  const [resolved, setResolved] = useState(0);
  const targetHash = useRef(fakeHash());
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const startResolve = useCallback(() => {
    targetHash.current = fakeHash();
    setResolved(0);

    if (timerRef.current) clearInterval(timerRef.current);

    let pos = 0;
    timerRef.current = setInterval(() => {
      pos++;
      setResolved(pos);

      if (pos >= 64) {
        clearInterval(timerRef.current);
        timerRef.current = undefined;
      } else {
        const locked = targetHash.current.slice(0, pos);
        const scrambled = Array.from({ length: 64 - pos }, () =>
          DECRYPT_CHARS[Math.floor(Math.random() * DECRYPT_CHARS.length)]
        ).join("");
        setHashDisplay(locked + scrambled);
      }
    }, 25);
  }, []);

  useEffect(() => {
    startResolve();

    const cycleId = setInterval(() => {
      setInputIdx((prev) => (prev + 1) % HASH_INPUTS.length);
      startResolve();
    }, 4000);

    return () => {
      clearInterval(cycleId);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startResolve]);

  const displayHash = resolved >= 64 ? targetHash.current : hashDisplay;

  return (
    <div className="text-xs md:text-sm font-mono max-w-2xl mx-auto text-left">
      <div className="flex flex-wrap gap-x-2">
        <span className="text-dim">INPUT:</span>
        <span className="text-green">{HASH_INPUTS[inputIdx]}</span>
      </div>
      <div className="flex flex-wrap gap-x-2 mt-1">
        <span className="text-dim">SHA256:</span>
        <span className="text-cyan/70 break-all">{displayHash}</span>
      </div>
    </div>
  );
}
