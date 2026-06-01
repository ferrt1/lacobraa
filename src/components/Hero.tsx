import { I } from "./ui";
import GoalFrame from "./GoalFrame";

const EMBLEM = "/emblema-26.png";

function Rings({ opacity = 0.5 }: { opacity?: number }) {
  const rings = [];
  for (let i = 1; i <= 9; i++) {
    const r = i * 120;
    rings.push(
      <circle
        key={i}
        cx="980"
        cy="120"
        r={r}
        fill="none"
        stroke={i % 2 ? "rgba(79,184,232,0.9)" : "rgba(255,255,255,0.85)"}
        strokeWidth={i % 2 ? 9 : 5}
      />
    );
  }
  return (
    <svg className="hero-rings" viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMid slice" style={{ opacity }}>
      <g>{rings}</g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero hv-rings hv-goal" id="top">
      <div className="hero-bg">
        <Rings opacity={0.35} />
        <div
          className="hero-glow"
          style={{ width: "520px", height: "520px", top: "-160px", right: "-80px", background: "var(--celeste)" }}
        />
        <div
          className="hero-glow"
          style={{
            width: "380px",
            height: "380px",
            bottom: "-140px",
            left: "-100px",
            background: "var(--celeste-deep)",
            opacity: 0.3,
          }}
        />
        <div className="hero-vignette" />
      </div>

      {/* spotlights laterales (sutiles) */}
      <div className="hero-spot l" aria-hidden />
      <div className="hero-spot r" aria-hidden />

      <GoalFrame>
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span className="txt">Kick · La banda de La Cobra · 2026</span>
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
