import { PROXIMOS_PARTIDOS } from "@/lib/data";

export default function UpcomingMatches() {
  return (
    <section id="fixture" className="border-y border-line bg-midnight-700/30">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-celeste">
              Próximos partidos
            </p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
              EL FIXTURE QUE SE VIENE
            </h2>
          </div>
          <a
            href="#fixture"
            className="hidden shrink-0 rounded-full border border-line bg-white/5 px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-white/10 sm:block"
          >
            Ver todo el fixture →
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PROXIMOS_PARTIDOS.map((m, i) => (
            <div
              key={i}
              className="rounded-2xl border border-line bg-midnight-700/50 p-5"
            >
              <div className="flex items-center justify-between text-xs text-ink-dim">
                <span className="rounded-full bg-white/5 px-2.5 py-1 font-semibold text-celeste">
                  {m.grupo}
                </span>
                <span className="uppercase tracking-wide">{m.fecha}</span>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex flex-1 flex-col items-center gap-2 text-center">
                  <span className="text-4xl">{m.local.flag}</span>
                  <span className="text-sm font-semibold text-ink">
                    {m.local.nombre}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-display text-xl text-ink-dim">VS</span>
                  <span className="mt-1 rounded bg-white/5 px-2 py-0.5 text-xs font-bold text-ink">
                    {m.hora}
                  </span>
                </div>
                <div className="flex flex-1 flex-col items-center gap-2 text-center">
                  <span className="text-4xl">{m.visita.flag}</span>
                  <span className="text-sm font-semibold text-ink">
                    {m.visita.nombre}
                  </span>
                </div>
              </div>

              <a
                href="#predicciones"
                className="mt-5 block rounded-xl border border-celeste/30 bg-celeste/10 py-2.5 text-center text-sm font-bold text-celeste transition-colors hover:bg-celeste/20"
              >
                Predecí este partido
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
