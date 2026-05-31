"use client";

import { useEffect, useState } from "react";

type Parts = { dias: number; hs: number; min: number; seg: number };

function diff(target: number): Parts {
  const ms = Math.max(0, target - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    dias: Math.floor(s / 86400),
    hs: Math.floor((s % 86400) / 3600),
    min: Math.floor((s % 3600) / 60),
    seg: s % 60,
  };
}

export default function Countdown({ to }: { to: string }) {
  const target = new Date(to).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells: [string, number][] = [
    ["días", parts?.dias ?? 0],
    ["hs", parts?.hs ?? 0],
    ["min", parts?.min ?? 0],
    ["seg", parts?.seg ?? 0],
  ];

  return (
    <div className="flex gap-2">
      {cells.map(([label, val]) => (
        <div
          key={label}
          className="flex min-w-[3.5rem] flex-col items-center rounded-xl border border-line bg-midnight-700/60 px-3 py-2"
        >
          <span className="font-display text-2xl leading-none text-ink tabular-nums">
            {parts ? String(val).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-ink-dim">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
