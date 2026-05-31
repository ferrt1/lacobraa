"use client";

import { useState } from "react";
import { I } from "./ui";

const EMBLEM = "/emblema-26.png";
const LINKS = ["Inicio", "Predicciones", "Sorteos", "Fixture", "Ranking"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label="La Cobra — inicio">
            <span className="brand-mark"><img src={EMBLEM} alt="" /></span>
            <span className="brand-name">LA <span className="b-cobra">COBRA</span></span>
            <span className="brand-badge">26&apos;</span>
          </a>
          <nav className="nav-links">
            {LINKS.map((l, i) => (
              <a key={l} href={"#" + l.toLowerCase()} className={"nav-link" + (i === 0 ? " active" : "")}>{l}</a>
            ))}
          </nav>
          <div className="nav-right">
            <a href="#" className="btn btn-ghost">Ranking</a>
            <a href="#" className="btn btn-kick"><I.kick /> Conectar con Kick</a>
            <button className={"hamb" + (menuOpen ? " open" : "")} onClick={() => setMenuOpen((o) => !o)} aria-label="Menú">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={"drawer" + (menuOpen ? " open" : "")}>
        {LINKS.map((l) => (
          <a key={l} href={"#" + l.toLowerCase()} onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
        <a href="#" className="btn btn-kick" onClick={() => setMenuOpen(false)}><I.kick /> Conectar con Kick</a>
      </div>
    </>
  );
}
