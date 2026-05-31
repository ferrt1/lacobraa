"use client";

import { useState, useEffect } from "react";
import { Flag } from "./ui";

export default function Countdown() {
  const target = new Date("2026-06-11T13:00:00-03:00").getTime();
  const calc = () => {
    const diff = Math.max(0, target - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (x: number) => String(x).padStart(2, "0");
  const units = [
    { v: t.d, l: "Días" },
    { v: pad(t.h), l: "Horas" },
    { v: pad(t.m), l: "Min" },
    { v: pad(t.s), l: "Seg", sec: true },
  ];
  return (
    <div className="countdown wrap">
      <div className="cd-card">
        <div className="cd-left">
          <div className="cd-kicker">
            <Flag code="ar" cls="cd-flag" /><Flag code="mx" cls="cd-flag" /><Flag code="us" cls="cd-flag" /><Flag code="ca" cls="cd-flag" />
            <span className="label gold">Arranca el 11 de junio</span>
          </div>
          <p className="cd-title">Falta nada para el <b>Mundial 2026</b></p>
        </div>
        <div className="cd-units">
          {units.map((u) => (
            <div key={u.l} className={"cd-unit" + (u.sec ? " sec" : "")}>
              <div className="cd-num" suppressHydrationWarning>{u.v}</div>
              <div className="cd-lab">{u.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
