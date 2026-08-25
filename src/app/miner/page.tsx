import type { Metadata } from "next";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstallSteps from "@/components/InstallSteps";
import {
  MINING_FAQ,
  OPERATOR_FLAGS,
  SITE,
  TREEMINER,
  TREEMINER_FEATURES,
} from "@/lib/constants";

const minerUrl = `${SITE.url}/miner`;

export const metadata: Metadata = {
  title: "TreeMiner — XenBlocks GPU Miner for X1 (XNM & XUNI)",
  description:
    "Install TreeMiner, the outage-proof CUDA miner for XenBlocks on the X1 blockchain. Journal XNM and XUNI finds locally, keep hashing through server outages, and watch the console on :42069.",
  keywords: [
    "TreeMiner",
    "XenBlocks miner",
    "XenBlocks mining",
    "GPU miner",
    "CUDA miner",
    "XNM",
    "XUNI",
    "Xenium",
    "X1 blockchain",
    "X1 Network",
    "HiveOS",
    "WSL2 miner",
    "outage-proof miner",
  ],
  alternates: {
    canonical: minerUrl,
  },
  openGraph: {
    title: "TreeMiner — XenBlocks GPU miner for the X1 blockchain",
    description:
      "Journal-first CUDA miner for XNM and XUNI. Build on Linux or WSL2, run locally, and keep finds through XenBlocks outages.",
    url: minerUrl,
    siteName: "HashHead",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TreeMiner — XenBlocks GPU miner",
    description:
      "Outage-proof CUDA miner for XenBlocks on X1. XNM + XUNI finds never drop.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "TreeMiner",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Linux, WSL2",
      url: minerUrl,
      downloadUrl: TREEMINER.repo,
      description: TREEMINER.description,
      author: { "@type": "Person", name: "TreeCityWes" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "Build and run TreeMiner",
      description:
        "Clone, configure, build, and start TreeMiner to mine XenBlocks (XNM and XUNI) on the X1 Network.",
      totalTime: "PT20M",
      tool: [
        { "@type": "HowToTool", name: "CUDA 12.x" },
        { "@type": "HowToTool", name: "CMake" },
        { "@type": "HowToTool", name: "vcpkg" },
      ],
      step: [
        {
          "@type": "HowToStep",
          name: "Clone",
          text: "git clone https://github.com/TreeCityWes/tree_miner.git && cd tree_miner",
        },
        {
          "@type": "HowToStep",
          name: "Configure",
          text: "cmake -S treeminer -B build -G Ninja -DCMAKE_TOOLCHAIN_FILE=$HOME/vcpkg/scripts/buildsystems/vcpkg.cmake",
        },
        {
          "@type": "HowToStep",
          name: "Build",
          text: "cmake --build build -j && ctest --test-dir build",
        },
        {
          "@type": "HowToStep",
          name: "Mine",
          text: "./build/bin/xenblocksMiner --execute --minerAddr 0xYourAddress --totalDevFee 0",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: MINING_FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function MinerPage() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="relative px-6 pt-28 pb-16 md:pt-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 badge mb-6">
              <span className="status-online" />
              XenBlocks GPU miner
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4 font-[var(--font-display)]">
              <span className="glitch-text">TreeMiner</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/90 font-[var(--font-display)] mb-4">
              Outage-proof CUDA mining for XenBlocks on X1
            </p>
            <p className="text-dim text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed">
              Mine Xenium (XNM) and XUNI without dropping finds when the
              XenBlocks server goes down. TreeMiner journals every GPU find to
              disk first, then submits with a circuit breaker, confirmed acks,
              and a local console on port {TREEMINER.dashboardPort}.
            </p>
            <div className="cta-row mb-2">
              <a
                href={TREEMINER.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                GitHub
              </a>
              <a href="#install" className="button-secondary">
                Install
              </a>
              <Link href="/" className="button-secondary">
                HashHead
              </Link>
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-5">
            <article className="panel edge-glow p-6 md:p-8 lg:col-span-2">
              <h2 className="text-2xl font-semibold font-[var(--font-display)] mb-4">
                Why journal-first
              </h2>
              <p className="text-dim text-sm leading-relaxed mb-4">
                {TREEMINER.problem}
              </p>
              <p className="text-sm leading-relaxed text-foreground/90">
                {TREEMINER.description} XUNI finds retry across later :55–:05
                windows. Difficulty-parked XEN11 finds resubmit when the network
                target allows. Nothing sits only in RAM.
              </p>
            </article>
            <article className="panel edge-glow p-6 md:p-8">
              <h2 className="text-xl font-semibold font-[var(--font-display)] mb-4">
                What you mine
              </h2>
              <ul className="space-y-3 text-sm text-dim">
                <li>
                  <span className="text-green">XNM</span> — Xenium / XEN11 finds
                  on XenBlocks
                </li>
                <li>
                  <span className="text-green">XUNI</span> — windowed finds that
                  TreeMiner parks and retries
                </li>
                <li>
                  <span className="text-green">X1</span> — the chain XenBlocks
                  settles toward; screen it on{" "}
                  <a
                    href="https://x1.ninja"
                    className="text-cyan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    x1.ninja
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="install" className="relative px-6 pb-20 scroll-mt-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
            <div className="panel edge-glow p-6 md:p-8">
              <h2 className="text-2xl font-semibold font-[var(--font-display)] mb-6">
                Install TreeMiner
              </h2>
              <InstallSteps />
            </div>
            <div className="panel edge-glow p-6 md:p-8">
              <h2 className="text-2xl font-semibold font-[var(--font-display)] mb-4">
                Operator notes
              </h2>
              <p className="text-sm text-dim leading-relaxed mb-5">
                Headless, HiveOS, and container restarts should stay
                non-interactive. Pass the address on the command line. The
                console is read-only by default and does not share fate with the
                submitter thread.
              </p>
              <ul className="space-y-4">
                {OPERATOR_FLAGS.map((item) => (
                  <li key={item.flag} className="border-t border-cyan/10 pt-4 first:border-t-0 first:pt-0">
                    <p className="text-[11px] text-cyan font-mono mb-1">{item.flag}</p>
                    <p className="text-sm text-dim leading-relaxed">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-8">
              Built for XenBlocks outages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TREEMINER_FEATURES.map((feature) => (
                <article key={feature.title} className="panel edge-glow p-6">
                  <span className="badge mb-3">[{feature.tag}]</span>
                  <h3 className="text-lg font-semibold font-[var(--font-display)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-dim text-sm leading-relaxed">{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold font-[var(--font-display)] mb-8">
              XenBlocks mining FAQ
            </h2>
            <div className="space-y-4">
              {MINING_FAQ.map((item) => (
                <article key={item.q} className="panel p-6">
                  <h3 className="text-base font-semibold font-[var(--font-display)] mb-2">
                    {item.q}
                  </h3>
                  <p className="text-dim text-sm leading-relaxed">{item.a}</p>
                </article>
              ))}
            </div>
            <div className="cta-row mt-8">
              <a
                href={TREEMINER.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                GitHub
              </a>
              <a
                href="https://docs.xenblocks.io"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                XenBlocks docs
              </a>
              <a
                href="https://x1.ninja"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                x1.ninja
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
