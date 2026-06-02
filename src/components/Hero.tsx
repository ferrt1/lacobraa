import type { CSSProperties } from "react";
import { I } from "./ui";
import GoalFrame from "./GoalFrame";

const EMBLEM = "/emblema-26.png";

// PRNG determinista → mismas estrellas en server y cliente (sin hydration mismatch)
function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const _rng = mulberry32(20260611);
const STARS = Array.from({ length: 80 }, () => ({
  top: +(_rng() * 58).toFixed(2), // solo en el cielo (parte alta)
  left: +(_rng() * 100).toFixed(2),
  size: +(_rng() * 1.6 + 0.8).toFixed(2),
  delay: +(_rng() * 4).toFixed(2),
  dur: +(_rng() * 2.6 + 2.4).toFixed(2),
  op: +(_rng() * 0.5 + 0.35).toFixed(2),
}));

function Stars() {
  return (
    <div className="sky-stars" aria-hidden>
      {STARS.map((s, i) => (
        <span
          key={i}
          className="sky-star"
          style={{
            top: s.top + "%",
            left: s.left + "%",
            width: s.size + "px",
            height: s.size + "px",
            ["--op" as string]: s.op,
            animationDelay: s.delay + "s",
            animationDuration: s.dur + "s",
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero hv-goal" id="top">
      <div className="hero-bg">
        {/* cielo nocturno con estrellas */}
        <Stars />
        <div className="hero-vignette" />
      </div>

      {/* reflectores de estadio — múltiples haces */}
      <div className="hero-beams-wrap" aria-hidden>
        <div className="hero-beam hero-beam-main" />
        <div className="hero-beam hero-beam-l" />
        <div className="hero-beam hero-beam-r" />
        <div className="hero-beam-flare" />
        <div className="hero-beam-flare hero-beam-flare-2" />
      </div>

      <GoalFrame>
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span className="txt">Kick</span>
          </div>
          <h1>
            Seguí a <span className="accent">La Cobra</span><br />
            en este <span className="stroke">Mundial</span>
          </h1>
          <p className="hero-sub">
            Predicciones en vivo, <b>40 PlayStations</b> en sorteo y el fixture de los 48.
            Metele al Mundial con la banda — y que el chat lo decida.
          </p>
          <div className="hero-cta">
            <a href="#" className="btn btn-primary"><I.bolt /> Sumate a la banda</a>
            <a href="#" className="btn btn-lg-ghost"><I.kick /> Conectar con Kick</a>
          </div>
        </div>
        <div className="hero-media">
          <div className="emblem-halo" aria-hidden />
          <img className="emblem big" src={EMBLEM} alt="Mundial 26" />
        </div>
      </GoalFrame>
    </section>
  );
}
