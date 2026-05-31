import { MUNDIAL } from "@/lib/data";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="grain jersey-stripes relative overflow-hidden border-b border-line"
    >
      <div className="glow-celeste pointer-events-none absolute inset-x-0 top-0 h-[70%]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-celeste">
            <span className="inline-block h-px w-8 bg-celeste" />
            {MUNDIAL.rotulo} · {MUNDIAL.fechas}
          </div>

          <h1 className="mt-5 font-display text-6xl leading-[0.86] text-ink sm:text-7xl lg:text-8xl">
            VIVÍ EL
            <br />
            MUNDIAL
            <br />
            CON <span className="text-celeste">LA COBRA</span>
            <span className="text-sol">.</span>
          </h1>

          <p className="mt-6 max-w-md text-balance text-lg text-ink-dim">
            Predecí los partidos, ganá una de las{" "}
            <span className="font-semibold text-ink">40 PlayStations</span> y
            metete en el ranking de la banda. Todo el Mundial, en un solo lado.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#predicciones"
              className="rounded-full bg-sol px-6 py-3 text-sm font-bold text-midnight transition-transform hover:scale-[1.03] active:scale-95"
            >
              ⚽ Hacé tu predicción
            </a>
            <a
              href="#sorteos"
              className="rounded-full border border-line bg-white/5 px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-white/10"
            >
              🎁 Ver sorteos
            </a>
          </div>
        </div>

        {/* Columna derecha: estado en vivo + countdown */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-line bg-midnight-700/60 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-dim opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ink-dim" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-ink-dim">
                La Cobra · Kick
              </span>
            </div>
            <p className="mt-3 font-display text-3xl text-ink">OFFLINE POR AHORA</p>
            <p className="mt-2 text-sm text-ink-dim">
              Volvé cuando arranque el stream, o seguilo en Kick para no perderte
              el próximo sorteo en vivo.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-celeste hover:text-celeste-bright"
            >
              Ir al canal de Kick →
            </a>
          </div>

          <div className="rounded-2xl border border-line bg-midnight-700/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-dim">
              Arranca el Mundial en
            </p>
            <div className="mt-3">
              <Countdown to={MUNDIAL.inicio} />
            </div>
            <p className="mt-3 text-xs text-ink-dim">{MUNDIAL.sede}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
