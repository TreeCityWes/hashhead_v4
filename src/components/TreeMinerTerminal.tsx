"use client";

export default function TreeMinerTerminal() {
  return (
    <div className="miner-terminal text-left font-mono" role="img" aria-label="TreeMiner terminal dashboard">
      <div className="relative overflow-hidden rounded-[16px]">
        <div className="hash-rain" aria-hidden="true" />
        <div className="relative z-10 p-4 sm:p-5">
          <h3 className="text-center text-2xl sm:text-3xl tracking-[0.35em] text-green font-[var(--font-display)] mb-4">
            TREEMINER
          </h3>

          <div className="term-box mb-4">
            <p className="text-[10px] tracking-[0.2em] text-cyan/80 uppercase mb-2">HASHPOWER</p>
            <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
              <p className="text-3xl sm:text-4xl text-foreground font-[var(--font-display)]">
                177.0 <span className="text-base text-dim">kH/s</span>
              </p>
              <div className="text-[11px] text-cyan/80 space-x-4">
                <span>difficulty 1100</span>
                <span>5d 06:09:53</span>
              </div>
            </div>
            <GpuBar label="GPU0" rate="88.5 kH/s" temp="62°C" watts="122.08W" width="92%" />
            <GpuBar label="GPU1" rate="88.5 kH/s" temp="72°C" watts="125.54W" width="86%" />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="term-box">
              <p className="text-[10px] tracking-[0.2em] text-cyan/80 uppercase mb-3">LEDGER (journal)</p>
              <LedgerRow label="confirmed" value="19478" tone="text-green" />
              <LedgerRow label="pending" value="355" tone="text-amber" />
              <LedgerRow label="parked" value="0" tone="text-green" />
              <LedgerRow label="lost" value="0" tone="text-green" />
            </div>
            <div className="term-box">
              <p className="text-[10px] tracking-[0.2em] text-cyan/80 uppercase mb-3">UPLINK (pool)</p>
              <div className="flex items-center gap-2 mb-2 text-sm">
                <span className="status-online" />
                <span className="text-green">ONLINE</span>
              </div>
              <LedgerRow label="session blocks" value="5911" tone="text-green" />
              <LedgerRow label="confirmed" value="15370" tone="text-green" />
              <LedgerRow label="rejected-bad" value="0" tone="text-green" />
            </div>
          </div>

          <p className="mt-4 text-[10px] text-cyan/50">
            q quit dashboard http://192.168.1.50:42069
          </p>
        </div>
      </div>
    </div>
  );
}

function GpuBar({
  label,
  rate,
  temp,
  watts,
  width,
}: {
  label: string;
  rate: string;
  temp: string;
  watts: string;
  width: string;
}) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] mb-1">
        <span className="text-green">{label}</span>
        <span className="text-dim">
          {rate} · {temp} · {watts}
        </span>
      </div>
      <div className="h-2 rounded-full bg-black/50 overflow-hidden">
        <div className="h-full rounded-full bg-green/80" style={{ width }} />
      </div>
    </div>
  );
}

function LedgerRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <div className="flex items-center justify-between text-[12px] py-0.5">
      <span className="text-dim">{label}</span>
      <span className={tone}>{value}</span>
    </div>
  );
}
