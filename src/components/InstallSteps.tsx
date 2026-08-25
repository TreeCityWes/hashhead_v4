"use client";

import { INSTALL_STEPS, TREEMINER } from "@/lib/constants";
import CopyCommand from "./CopyCommand";

export default function InstallSteps() {
  return (
    <div>
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
          <li
            key={step.label}
            className="border-t border-cyan/10 pt-4 first:border-t-0 first:pt-0"
          >
            <p className="text-[10px] text-cyan uppercase tracking-wider mb-2">
              {String(i + 1).padStart(2, "0")} :: {step.label}
            </p>
            <CopyCommand code={step.code} />
          </li>
        ))}
      </ol>
    </div>
  );
}
