export const SITE = {
  name: "HashHead",
  tagline: "TreeMiner and the X1 ecosystem",
  description:
    "HashHead is the home of TreeMiner — an outage-proof XenBlocks GPU miner — and x1.ninja, the premier DEX screener for the X1 blockchain. Built by TreeCityWes.",
  url: "https://hashhead.io",
};

export const SOCIAL_LINKS = {
  twitter: "https://x.com/treecitywes",
  github: "https://github.com/TreeCityWes",
  youtube: "https://youtube.com/@treecitywes",
  telegram: "https://t.me/TreeRootCity",
};

export const TREEMINER = {
  name: "TreeMiner",
  repo: "https://github.com/TreeCityWes/tree_miner",
  clone: "https://github.com/TreeCityWes/tree_miner.git",
  dashboardPort: 42069,
  dashboardUrl: "http://127.0.0.1:42069",
  tagline: "Outage-proof GPU miner for XenBlocks on the X1 Network",
  description:
    "TreeMiner is a CUDA XenBlocks miner that journals every XNM and XUNI find to disk before the first network attempt. When the central server drops, hashing continues and queued finds drain automatically when the uplink returns.",
  problem:
    "The XenBlocks central server goes down several times a day. Typical miners keep found blocks in RAM and drop them after a few failed retries — every outage permanently loses real finds.",
};

export const INSTALL_STEPS = [
  {
    label: "Clone",
    code: "git clone https://github.com/TreeCityWes/tree_miner.git && cd tree_miner",
  },
  {
    label: "Configure",
    code: "cmake -S treeminer -B build -G Ninja \\\n  -DCMAKE_TOOLCHAIN_FILE=$HOME/vcpkg/scripts/buildsystems/vcpkg.cmake",
  },
  {
    label: "Build",
    code: "cmake --build build -j && ctest --test-dir build",
  },
  {
    label: "Mine",
    code: "./build/bin/xenblocksMiner --execute --minerAddr 0xYourAddress --totalDevFee 0",
  },
];

export const OPERATOR_FLAGS = [
  {
    flag: "--cudaStreams 1|2",
    body: "Independent GPU pipelines with a fixed VRAM budget. Two streams is the measured default on modern NVIDIA cards.",
  },
  {
    flag: "--cpuWorkers N",
    body: "Optional CPU sidecar. Uses the same journal path as GPU finds. Off by default.",
  },
  {
    flag: "--dashboard-bind 0.0.0.0",
    body: "Expose the local console on your LAN. Default is 127.0.0.1:42069. Put a firewall in front if you bind a wildcard.",
  },
];

export const MINING_FAQ = [
  {
    q: "What does TreeMiner mine?",
    a: "XenBlocks on the X1 Network — Xenium (XNM / XEN11) and XUNI finds. Hashing is CUDA Argon2id. Confirmed finds are the ones TreeMiner re-checks with GET /get_block.",
  },
  {
    q: "Why journal first?",
    a: "The XenBlocks central server drops several times a day. Other miners keep finds in RAM and lose them after a few failed retries. TreeMiner fsyncs every find to SQLite before the first network attempt, then drains the queue when the uplink returns.",
  },
  {
    q: "Where is the dashboard?",
    a: "http://127.0.0.1:42069 — a self-contained web console plus a terminal HUD. Both stay live while the mining server is down so you can still see hashrate, GPU telemetry, and secured XNM/XUNI queues.",
  },
];

export const TREEMINER_FEATURES = [
  {
    tag: "JOURNAL",
    title: "Journal-first finds",
    body: "Every GPU find is fsync'd to a SQLite WAL journal before the first submit. Crashes, restarts, and outages cannot silently drop XNM or XUNI blocks.",
  },
  {
    tag: "UPLINK",
    title: "Circuit breaker drain",
    body: "A dead XenBlocks server does not stall hashing. TreeMiner backs off, probes, then drains the secured queue at an adaptive rate when the network returns.",
  },
  {
    tag: "CONFIRM",
    title: "Confirmed accepts",
    body: "A 200 from the reference server is not enough. TreeMiner re-checks GET /get_block so lying-200 responses never count as a real accept.",
  },
  {
    tag: "XUNI",
    title: "XNM + XUNI recovery",
    body: "Difficulty-parked XEN11 finds resubmit when the target allows. XUNI finds retry across later :55–:05 windows instead of being discarded.",
  },
  {
    tag: "CUDA",
    title: "CUDA streams + CPU sidecar",
    body: "GPU work uses independent CUDA streams with a fixed VRAM budget. Optional CPU workers hash on the same journal path and report separately.",
  },
  {
    tag: "OPS",
    title: "Local operator consoles",
    body: "A self-contained web dashboard and terminal UI on :42069 stay live while the upstream mining server is down — throughput, queues, and GPU telemetry at a glance.",
  },
];

export const X1_NINJA = {
  name: "x1.ninja",
  url: "https://x1.ninja",
  tagline: "Premier DEX screener for the X1 blockchain",
  description:
    "x1.ninja is the live token screener, wallet tracker, and XDEX analytics desk for X1. Watch liquidity, volume, holders, and safety across 1,200+ pairs, then jump into any wallet or LP.",
};

export const X1_PROJECTS = [
  {
    name: "x1.ninja",
    url: "https://x1.ninja",
    description:
      "Premier DEX screener for the X1 blockchain — live XDEX pairs, liquidity, volume, holders, and safety scores.",
    tag: "SCREENER",
  },
  {
    name: "Wallet Tracker",
    url: "https://x1.ninja/wallet",
    description:
      "Inspect any X1 wallet's holdings, trade history, and activity across every XDEX pool.",
    tag: "WALLETS",
  },
  {
    name: "X1 Tools",
    url: "https://tools.x1.ninja",
    description:
      "Token launching, NFT minting, snapshots, and portfolio view — CoinTool for X1.",
    tag: "TOOLS",
  },
  {
    name: "Forest",
    url: "https://forest.x1.ninja",
    description:
      "$FOREST token — the open claw agent overseeing the X1 Ninja ecosystem.",
    tag: "AGENT",
  },
];

export const CURATED_LINKS = {
  mining: {
    title: "Mining",
    links: [
      {
        name: "TreeMiner install",
        url: "/miner",
        description: "Build, run, and operator notes",
      },
      {
        name: "TreeMiner GitHub",
        url: "https://github.com/TreeCityWes/tree_miner",
        description: "Outage-proof XenBlocks GPU miner",
      },
      {
        name: "XenBlocks",
        url: "https://xenblocks.io",
        description: "Official XenBlocks mining network",
      },
      {
        name: "XenBlocks Docs",
        url: "https://docs.xenblocks.io",
        description: "How to mine XenBlocks",
      },
      {
        name: "XenBlocks Explorer",
        url: "https://explorer.xenblocks.io",
        description: "Leaderboard and block search",
      },
    ],
  },
  x1: {
    title: "X1 Ecosystem",
    links: [
      { name: "x1.ninja", url: "https://x1.ninja", description: "Premier X1 DEX screener" },
      { name: "Wallet Tracker", url: "https://x1.ninja/wallet", description: "XDEX holdings and trades" },
      { name: "X1 Tools", url: "https://tools.x1.ninja", description: "Token launch, NFT mint, portfolio" },
      { name: "Forest", url: "https://forest.x1.ninja", description: "$FOREST agent & staking" },
    ],
  },
  community: {
    title: "Community",
    links: [
      { name: "Telegram", url: "https://t.me/TreeRootCity", description: "Community chat — talk to Forest for bugs & requests" },
      { name: "Twitter / X", url: "https://x.com/treecitywes", description: "@treecitywes" },
      { name: "YouTube", url: "https://youtube.com/@treecitywes", description: "Tutorials & updates" },
      { name: "GitHub", url: "https://github.com/TreeCityWes", description: "Open source projects" },
    ],
  },
};

export const NAV_LINKS = [
  { name: "TREEMINER", url: "/miner" },
  { name: "X1 NINJA", url: "https://x1.ninja" },
  { name: "GITHUB", url: "https://github.com/TreeCityWes/tree_miner" },
  { name: "TWITTER", url: "https://x.com/treecitywes" },
  { name: "TELEGRAM", url: "https://t.me/TreeRootCity" },
];

export const PINNED_REPOS = ["tree_miner", "XenBlocksExplorer", "XenBlocks-Assistant"];

export const ASCII_LOGO = `
 ██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗  ██╗███████╗ █████╗ ██████╗
 ██║  ██║██╔══██╗██╔════╝██║  ██║██║  ██║██╔════╝██╔══██╗██╔══██╗
 ███████║███████║███████╗███████║███████║█████╗  ███████║██║  ██║
 ██╔══██║██╔══██║╚════██║██╔══██║██╔══██║██╔══╝  ██╔══██║██║  ██║
 ██║  ██║██║  ██║███████║██║  ██║██║  ██║███████╗██║  ██║██████╔╝
 ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝`.trimStart();

export const HASH_INPUTS = [
  "tree_miner",
  "xenblocks",
  "x1.ninja",
  "hashhead.io",
  "treecitywes",
];

export const DECRYPT_CHARS = "0123456789abcdef";
