"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "pt-2 md:pt-3"
          : "pt-4 md:pt-5"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between border ${
          scrolled
            ? "border-cyan/35 bg-[rgba(10,18,28,0.9)] shadow-[0_14px_30px_rgba(0,0,0,0.35)]"
            : "border-cyan/20 bg-[rgba(10,18,28,0.65)]"
        } backdrop-blur-md rounded-full`}
      >
        <a href="#" className="flex items-center gap-2 group">
          <span className="badge hidden sm:inline-flex">network live</span>
          <span className="text-lg font-semibold tracking-tight glitch-text">
            HASHHEAD
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full text-[11px] text-dim hover:text-foreground hover:bg-cyan/10 uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-9 h-9 rounded-full border border-cyan/35 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-cyan ${
              mobileOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-cyan ${
              mobileOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden mt-3 mx-4 rounded-2xl border border-cyan/20 bg-[rgba(10,18,28,0.92)] backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-dim hover:text-foreground uppercase tracking-wider py-2 border-b border-cyan/10 last:border-b-0"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-green mr-2">&gt;</span> {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
