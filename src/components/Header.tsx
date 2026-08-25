"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
        scrolled ? "pt-2 md:pt-3" : "pt-4 md:pt-5"
      }`}
    >
      <div
        className={`glass-nav max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 rounded-full ${
          scrolled ? "shadow-[0_14px_30px_rgba(0,0,0,0.35)]" : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <span className="badge hidden sm:inline-flex">
            <span className="status-online" />
            mining + xdex
          </span>
          <span className="text-lg font-semibold tracking-tight glitch-text">
            HASHHEAD
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavAnchor key={link.name} link={link} />
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-9 h-9 rounded-full border border-white/15 bg-white/5 flex flex-col items-center justify-center gap-1.5 shrink-0"
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

      {mobileOpen && (
        <nav className="lg:hidden mt-3 mx-3 sm:mx-4 rounded-2xl glass-nav">
          <div className="px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <NavAnchor
                key={link.name}
                link={link}
                className="text-sm text-dim hover:text-foreground uppercase tracking-wider py-2 border-b border-cyan/10 last:border-b-0"
                onClick={() => setMobileOpen(false)}
                prefix
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function NavAnchor({
  link,
  className = "px-3 py-1.5 rounded-full text-[11px] text-dim hover:text-foreground hover:bg-white/10 uppercase tracking-wider whitespace-nowrap",
  onClick,
  prefix = false,
}: {
  link: { name: string; url: string };
  className?: string;
  onClick?: () => void;
  prefix?: boolean;
}) {
  const external = link.url.startsWith("http");
  const classNames = className;
  if (!external) {
    return (
      <Link href={link.url} className={classNames} onClick={onClick}>
        {prefix && <span className="text-green mr-2">&gt;</span>}
        {link.name}
      </Link>
    );
  }
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames}
      onClick={onClick}
    >
      {prefix && <span className="text-green mr-2">&gt;</span>}
      {link.name}
    </a>
  );
}
