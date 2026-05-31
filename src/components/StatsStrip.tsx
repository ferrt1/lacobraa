import { STATS } from "@/lib/data";

export default function StatsStrip() {
  return (
    <section className="border-b border-line bg-midnight-700/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="px-2 py-7 lg:px-6">
            <p className="font-display text-4xl text-celeste lg:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">{s.label}</p>
            <p className="text-xs text-ink-dim">{s.hint}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
