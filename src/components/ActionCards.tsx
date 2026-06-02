"use client";

import { useState } from "react";
import { Flag } from "./ui";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ActionCards() {
  const [sel, setSel] = useState<string | null>("ar");

  return (
    <section className="section" id="predicciones">
      <div className="wrap">
        <div className="section-head">
          <span className="label celeste">Qué podés hacer</span>
          <h2>Todo el Mundial, en un solo lugar</h2>
          <p>Cuatro formas de vivir la Copa con la banda. Mirás el stream, participás y todo suma.</p>
        </div>

        <ul className="va-list">
          {/* 01 — Predicciones */}
          <li className="va-row">
            <span className="va-num">01</span>
            <div className="va-body">
              <h3>Predicciones</h3>
              <p>Predecí los partidos en vivo, sumá puntos con cada acierto y trepá en el ranking de la banda.</p>
            </div>
            <div className="va-side">
              <div className="va-demo">
                <button className={"va-team" + (sel === "ar" ? " sel" : "")} onClick={() => setSel("ar")}>
                  <Flag code="ar" /> ARG
                </button>
                <span className="va-vs">VS</span>
                <button className={"va-team" + (sel === "fr" ? " sel" : "")} onClick={() => setSel("fr")}>
                  <Flag code="fr" /> FRA
                </button>
              </div>
              <a href="#predicciones" className="va-go">Predecir ahora <Arrow /></a>
            </div>
          </li>

          {/* 02 — Sorteos */}
          <li className="va-row" id="sorteos">
            <span className="va-num">02</span>
            <div className="va-body">
              <h3>Sorteos</h3>
              <p>40 PlayStations 5 — una por cada día del Mundial. Participás con la palabra clave en el chat de Kick.</p>
            </div>
            <div className="va-side">
              <div className="va-progress-label">02 / 40</div>
              <div className="va-progress"><span style={{ width: "5%" }} /></div>
              <a href="#sorteos" className="va-go">Cómo participar <Arrow /></a>
            </div>
          </li>

          {/* 03 — Fixture */}
          <li className="va-row" id="fixture">
            <span className="va-num">03</span>
            <div className="va-body">
              <h3>Fixture</h3>
              <p>Los 48 equipos, 12 grupos y todos los cruces. Del 11 de junio al 19 de julio, ordenado y claro.</p>
            </div>
            <div className="va-side">
              <div className="va-ladder">
                <span className="va-ladder-cell">A</span>
                <span className="va-ladder-cell">B</span>
                <span className="va-ladder-cell">C</span>
                <span className="va-ladder-cell hi">…</span>
                <span className="va-ladder-cell">L</span>
              </div>
              <span className="va-tag">48 equipos · 12 grupos</span>
              <a href="/fixture" className="va-go">Ver fixture <Arrow /></a>
            </div>
          </li>

          {/* 04 — Ranking */}
          <li className="va-row" id="ranking">
            <span className="va-num">04</span>
            <div className="va-body">
              <h3>Ranking</h3>
              <p>La tabla de la comunidad. El que más la pega, manda. Subí, defendé tu puesto y picanteá el chat.</p>
            </div>
            <div className="va-side">
              <div className="va-rank">
                <div className="va-rank-row"><span className="va-rank-pos">01</span><span className="va-rank-name">@lucho.k</span><span className="va-rank-pts">142</span></div>
                <div className="va-rank-row"><span className="va-rank-pos">02</span><span className="va-rank-name">@tincho99</span><span className="va-rank-pts">128</span></div>
                <div className="va-rank-row"><span className="va-rank-pos">03</span><span className="va-rank-name">@nayare</span><span className="va-rank-pts">119</span></div>
              </div>
              <span className="va-tag live">En vivo</span>
              <a href="/ranking" className="va-go">Ver ranking <Arrow /></a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}