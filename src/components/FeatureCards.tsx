import { FEATURES } from "@/lib/data";

export default function FeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-celeste">
            Qué podés hacer
          </p>
          <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
            TODO EL MUNDIAL, EN UN SOLO LADO
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <a
            key={f.n}
            href={f.href}
            className="group relative overflow-hidden rounded-2xl border border-line bg-midnight-700/40 p-6 transition-all hover:-translate-y-1 hover:border-celeste/40 hover:bg-midnight-600/50"
          >
            {/* número dorsal */}
            <span className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl text-white/[0.04] transition-colors group-hover:text-celeste/10">
              {f.n}
            </span>
            <h3 className="font-display text-2xl text-ink">{f.titulo}</h3>
            <p className="mt-3 min-h-[5.5rem] text-sm text-ink-dim">{f.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-celeste transition-colors group-hover:text-sol">
              {f.cta} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
