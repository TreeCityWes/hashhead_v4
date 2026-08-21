"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PINNED_REPOS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Solidity: "#AA6746",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  "C++": "#f34b7d",
};

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/TreeCityWes/repos?per_page=100&sort=updated&direction=desc"
    )
      .then((res) => res.json())
      .then((data) => {
        const list: Repo[] = Array.isArray(data) ? data : [];
        const fallback: Repo = {
          id: 0,
          name: "tree_miner",
          description:
            "Outage-proof CUDA miner for XenBlocks — journal-first XNM and XUNI finds on the X1 Network.",
          html_url: "https://github.com/TreeCityWes/tree_miner",
          stargazers_count: 0,
          forks_count: 0,
          language: "C++",
          topics: ["xenblocks", "mining", "x1"],
        };
        const withFallback = list.some((repo) => repo.name === "tree_miner")
          ? list
          : [fallback, ...list];
        const pinned = PINNED_REPOS.map((name) =>
          withFallback.find((repo) => repo.name === name)
        ).filter(Boolean) as Repo[];
        const rest = withFallback.filter((repo) => !PINNED_REPOS.includes(repo.name));
        setRepos([...pinned, ...rest].slice(0, 6));
        setLoading(false);
      })
      .catch(() => {
        setRepos([
          {
            id: 0,
            name: "tree_miner",
            description:
              "Outage-proof CUDA miner for XenBlocks — journal-first XNM and XUNI finds on the X1 Network.",
            html_url: "https://github.com/TreeCityWes/tree_miner",
            stargazers_count: 0,
            forks_count: 0,
            language: "C++",
            topics: ["xenblocks", "mining", "x1"],
          },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          title="OPEN_SOURCE"
          subtitle="TreeMiner first, then the rest of the HashHead labs"
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="panel p-6 animate-pulse">
                <div className="h-3 bg-dim/20 w-1/3 mb-4" />
                <div className="h-3 bg-dim/20 w-full mb-2" />
                <div className="h-3 bg-dim/20 w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                className="group panel edge-glow p-6 block"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  {repo.language && (
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor: LANG_COLORS[repo.language] || "#888",
                        }}
                      />
                      <span className="text-[10px] text-dim font-mono">
                        {repo.language}
                      </span>
                    </div>
                  )}
                  {PINNED_REPOS.includes(repo.name) && (
                    <span className="badge">pinned</span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-cyan font-[var(--font-display)]">
                  {repo.name}
                </h3>

                <p className="text-dim text-xs leading-relaxed mb-4 line-clamp-2">
                  {repo.name === "tree_miner"
                    ? "Outage-proof CUDA miner for XenBlocks — journal-first XNM and XUNI finds on the X1 Network."
                    : repo.description || "No description"}
                </p>

                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="text-[10px] text-cyan/50 font-mono">
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-3 text-[10px] text-dim font-mono">
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
