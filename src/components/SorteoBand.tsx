export default function SorteoBand() {
  return (
    <section id="sorteos" className="relative overflow-hidden">
      <div className="glow-celeste pointer-events-none absolute inset-x-0 bottom-0 h-full rotate-180" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid items-center gap-10 rounded-3xl border border-line bg-midnight-700/50 p-8 lg:grid-cols-[1fr_auto] lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sol">
              El sorteo del Mundial
            </p>
            <h2 className="mt-3 font-display text-5xl leading-[0.9] text-ink sm:text-6xl">
              40 PLAYS.
              <br />
              <span className="text-celeste">UNA POR DÍA.</span>
            </h2>
            <p className="mt-5 max-w-lg text-ink-dim">
              Por cada día del Mundial, La Cobra sortea una PlayStation. Para
              participar solo tenés que escribir la{" "}
              <span className="font-semibold text-ink">palabra clave</span> en el
              chat de Kick cuando se abra el sorteo en vivo. Así de simple.
            </p>

            <ol className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["1", "Entrá al stream", "Conectá tu cuenta de Kick."],
                ["2", "Esperá la palabra", "La Cobra la tira en vivo."],
                ["3", "Escribíla en el chat", "Quedás dentro del sorteo."],
              ].map(([n, t, d]) => (
                <li
                  key={n}
                  className="rounded-xl border border-line bg-midnight-600/40 p-4"
                >
                  <span className="font-display text-2xl text-sol">{n}</span>
                  <p className="mt-1 text-sm font-semibold text-ink">{t}</p>
                  <p className="text-xs text-ink-dim">{d}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-sol/30 bg-sol/5 px-10 py-8 text-center">
            <span className="font-display text-7xl text-sol lg:text-8xl">40</span>
            <span className="mt-1 text-sm font-bold uppercase tracking-widest text-ink">
              PlayStation
            </span>
            <span className="mt-4 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold text-ink-dim">
              0 entregadas · 40 por sortear
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
