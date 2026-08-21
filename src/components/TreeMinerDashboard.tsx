"use client";

export default function TreeMinerDashboard() {
  const spark = "M0 28 C18 26, 36 22, 54 24 C72 26, 90 18, 108 16 C126 14, 144 20, 162 18 C180 16, 198 12, 216 14 C234 16, 252 10, 270 12 C288 14, 306 8, 324 10";

  return (
    <div className="miner-frame text-left" aria-hidden="false">
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-green/20">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-7 h-7 rounded-md bg-green text-[#041019] font-bold grid place-items-center font-[var(--font-display)]">
            T
          </span>
          <div className="min-w-0">
            <p className="text-[11px] tracking-[0.18em] uppercase text-foreground">
              HASHHEAD // TREEMINER
            </p>
            <p className="text-[10px] text-dim font-mono truncate">LOCAL_OPS::42069</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#52d5ff]" />
            <span className="w-2 h-2 rounded-full bg-[#ff7ad9]" />
            <span className="w-2 h-2 rounded-full bg-green" />
          </span>
          <span className="badge">
            <span className="status-online" />
            NETWORK ONLINE
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-4 p-4 md:p-5">
        <div>
          <p className="text-[10px] text-dim tracking-[0.16em] uppercase mb-2">
            [01] :: ACTIVE_RIG
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold glitch-text font-[var(--font-display)] mb-2">
            TREEMINER
          </h3>
          <p className="text-[10px] text-dim font-mono break-all">
            0xe4bB…BC9bC · session live · http://192.168.1.50:42069
          </p>
        </div>
        <div className="lg:text-right">
          <p className="text-[10px] text-dim tracking-[0.16em] uppercase mb-1">
            Combined throughput
          </p>
          <p className="text-4xl sm:text-5xl font-semibold text-green font-[var(--font-display)] leading-none">
            177.00
            <span className="text-lg text-dim ml-2">kH/s</span>
          </p>
          <p className="text-[10px] text-dim font-mono mt-2">
            GPU 177.00 kH/s // CPU 0.00 kH/s
          </p>
        </div>
      </div>

      <div className="px-4 md:px-5 pb-4">
        <div className="flex items-center justify-between text-[10px] text-dim font-mono mb-1">
          <span>THROUGHPUT // LAST 10 MIN // FIND</span>
          <span>173.46 — 180.54 kH/s</span>
        </div>
        <svg viewBox="0 0 324 40" className="w-full h-10 overflow-visible" aria-hidden="true">
          <path d={spark} fill="none" stroke="rgba(111,244,196,0.9)" strokeWidth="1.6" />
        </svg>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-cyan/10 border-y border-cyan/10">
        {[
          ["DIFFICULTY", "1,100", "network target"],
          ["XNM FINDS", "5,911", "this session"],
          ["XUNI FINDS", "9,728", "this session"],
          ["Q_XNM", "0", "secured locally"],
          ["Q_XUNI", "355", "secured locally"],
          ["UPTIME", "5d 6h", "current process"],
        ].map(([label, value, hint]) => (
          <div key={label} className="bg-[rgba(8,16,24,0.9)] px-3 py-3">
            <p className="text-[9px] tracking-[0.14em] text-dim uppercase">{label}</p>
            <p className="text-lg text-green font-semibold font-[var(--font-display)]">{value}</p>
            <p className="text-[9px] text-dim/80">{hint}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.5fr_0.5fr] gap-0">
        <div className="p-4 md:p-5 overflow-x-auto">
          <p className="text-[10px] text-dim tracking-[0.16em] uppercase mb-3">
            [02] :: ENGINE — CUDA STREAM TELEMETRY
          </p>
          <table className="w-full text-[11px] font-mono min-w-[460px]">
            <thead className="text-dim">
              <tr className="border-b border-cyan/15">
                <th className="text-left font-normal py-2 pr-3">DEVICE</th>
                <th className="text-left font-normal py-2 pr-3">STREAM</th>
                <th className="text-left font-normal py-2 pr-3">MEMORY</th>
                <th className="text-left font-normal py-2 pr-3">HASHRATE</th>
                <th className="text-left font-normal py-2">WORK</th>
              </tr>
            </thead>
            <tbody className="text-foreground">
              <tr className="border-b border-cyan/10">
                <td className="py-2.5 pr-3">#0 NVIDIA GeForce RTX 3060</td>
                <td className="pr-3 text-green">1</td>
                <td className="pr-3">98.1%</td>
                <td className="pr-3 text-green">88.54 kH/s</td>
                <td>live</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-3">#1 NVIDIA GeForce RTX 3060</td>
                <td className="pr-3 text-green">1</td>
                <td className="pr-3">98.1%</td>
                <td className="pr-3 text-green">88.47 kH/s</td>
                <td>live</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 md:p-5 border-t lg:border-t-0 lg:border-l border-cyan/10 space-y-2.5 text-[11px]">
          <p className="text-[10px] text-dim tracking-[0.16em] uppercase mb-3">DELIVERY CHANNEL</p>
          {[
            ["Network", "ONLINE"],
            ["Last submission", "ACCEPTED"],
            ["Secured queue", "355 finds"],
            ["CPU sidecar", "0 workers"],
            ["CUDA streams", "2"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-3">
              <span className="text-dim">{k}</span>
              <span className="text-green font-mono">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
