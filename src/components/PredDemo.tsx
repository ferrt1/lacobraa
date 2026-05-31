"use client";

import { useState } from "react";
import { Flag } from "./ui";

export default function PredDemo() {
  const [sel, setSel] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  if (done)
    return (
      <div className="pred-demo">
        <div className="pred-done">¡Listo! Tu predicción quedó cargada 🔥</div>
      </div>
    );
  return (
    <div className="pred-demo">
      <div className="pred-match">
        <button className={"pred-team" + (sel === "ar" ? " sel" : "")} onClick={() => setSel("ar")}>
          <Flag code="ar" /> Argentina
        </button>
        <span className="pred-vs">VS</span>
        <button className={"pred-team" + (sel === "fr" ? " sel" : "")} onClick={() => setSel("fr")}>
          <Flag code="fr" /> Francia
        </button>
      </div>
      <button className="pred-go" disabled={!sel} onClick={() => sel && setDone(true)}>
        {sel ? "Metele tu predicción" : "Elegí un equipo"}
      </button>
    </div>
  );
}
