/* ═══════════════════════════════════════════════════════════════
   GoalFrame.tsx
   Arco de fútbol en perspectiva 3/4 (SVG estructural).
   Marco frontal soldado en L, red con cuerdas reales, marco trasero
   cerrado. El contenido se renderiza ADENTRO de la boca.

   Uso:
     <GoalFrame>
       <copy + media>
     </GoalFrame>

   viewBox 1100x620 — ratio aprox 1.77. El wrapper usa aspect-ratio
   en CSS para mantener proporción al escalar.
   ═══════════════════════════════════════════════════════════════ */

"use client";
import { useEffect, useRef, ReactNode } from "react";

export default function GoalFrame({ children }: { children: ReactNode }) {
  const ref = useRef<SVGSVGElement | null>(null);

  // Genera las cuerdas de la red al montar (más legible que hardcodear ~120 líneas)
  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const SVG_NS = "http://www.w3.org/2000/svg";

    const $ = (id: string) => svg.querySelector("#" + id) as SVGGElement | null;
    const lerp = (a: { x: number; y: number }, b: { x: number; y: number }, t: number) => ({
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
    });
    function line(parent: SVGGElement, x1: number, y1: number, x2: number, y2: number) {
      const l = document.createElementNS(SVG_NS, "line");
      l.setAttribute("x1", String(x1));
      l.setAttribute("y1", String(y1));
      l.setAttribute("x2", String(x2));
      l.setAttribute("y2", String(y2));
      parent.appendChild(l);
    }
    function path(parent: SVGGElement, d: string) {
      const p = document.createElementNS(SVG_NS, "path");
      p.setAttribute("d", d);
      parent.appendChild(p);
    }
    function knot(parent: SVGGElement, cx: number, cy: number) {
      const c = document.createElementNS(SVG_NS, "circle");
      c.setAttribute("cx", String(cx));
      c.setAttribute("cy", String(cy));
      c.setAttribute("r", "0.75");
      parent.appendChild(c);
    }

    // Vértices del arco (ver SVG)
    const A = { x: 92, y: 82 },
      B = { x: 1008, y: 82 };
    const D = { x: 190, y: 160 },
      C_ = { x: 910, y: 160 };
    const F = { x: 92, y: 540 },
      H = { x: 1008, y: 540 };
    const E = { x: 190, y: 480 },
      G = { x: 910, y: 480 };

    // Limpio cualquier render previo (StrictMode dobla effects en dev)
    svg.querySelectorAll("g[data-ropes]").forEach((g) => (g.innerHTML = ""));

    // TOP: cuerdas de profundidad + transversales con sag + nudos
    const topDepth = $("topDepth"),
      topTrans = $("topTransverse"),
      topKnots = $("topKnots");
    const TOP_N = 22,
      TOP_T = 9;
    if (topDepth) for (let i = 1; i < TOP_N; i++) {
      const t = i / TOP_N;
      const pf = lerp(A, B, t),
        pb = lerp(D, C_, t);
      line(topDepth, pf.x, pf.y, pb.x, pb.y);
    }
    if (topTrans) for (let j = 1; j <= TOP_T; j++) {
      const s = j / (TOP_T + 1);
      const pl = lerp(A, D, s),
        pr = lerp(B, C_, s);
      line(topTrans, pl.x, pl.y, pr.x, pr.y); // rectas, igual que los costados
    }
    if (topKnots) for (let i = 1; i < TOP_N; i++) {
      const t = i / TOP_N;
      for (let j = 1; j <= TOP_T; j++) {
        const s = j / (TOP_T + 1);
        const top = lerp(A, B, t),
          bot = lerp(D, C_, t);
        const k = lerp(top, bot, s);
        knot(topKnots, k.x, k.y + s * 2);
      }
    }

    // LEFT side
    const leftDepth = $("leftDepth"),
      leftTrans = $("leftTransverse");
    const SIDE_N = 7,
      SIDE_T = 14;
    if (leftDepth) for (let i = 1; i < SIDE_N; i++) {
      const t = i / SIDE_N;
      const pf = lerp(A, F, t),
        pb = lerp(D, E, t);
      line(leftDepth, pf.x, pf.y, pb.x, pb.y);
    }
    if (leftTrans) for (let j = 1; j < SIDE_T; j++) {
      const s = j / SIDE_T;
      const pTop = lerp(A, D, s),
        pBot = lerp(F, E, s);
      line(leftTrans, pTop.x, pTop.y, pBot.x, pBot.y);
    }

    // RIGHT side
    const rightDepth = $("rightDepth"),
      rightTrans = $("rightTransverse");
    if (rightDepth) for (let i = 1; i < SIDE_N; i++) {
      const t = i / SIDE_N;
      const pf = lerp(B, H, t),
        pb = lerp(C_, G, t);
      line(rightDepth, pf.x, pf.y, pb.x, pb.y);
    }
    if (rightTrans) for (let j = 1; j < SIDE_T; j++) {
      const s = j / SIDE_T;
      const pTop = lerp(B, C_, s),
        pBot = lerp(H, G, s);
      line(rightTrans, pTop.x, pTop.y, pBot.x, pBot.y);
    }

    // BOTTOM piso interior — profundidad + transversales (grilla, no solo líneas)
    const bottomDepth = $("bottomDepth"),
      bottomTrans = $("bottomTransverse");
    const BOT_N = TOP_N; // mismas divisiones que el techo → verticales continuas
    if (bottomDepth) for (let i = 1; i < BOT_N; i++) {
      const t = i / BOT_N;
      const pf = lerp(F, H, t),
        pb = lerp(E, G, t);
      line(bottomDepth, pf.x, pf.y, pb.x, pb.y);
    }
    const BOT_T = SIDE_N; // mismas divisiones que los costados → cruces alineadas
    if (bottomTrans) for (let j = 1; j < BOT_T; j++) {
      const s = j / BOT_T;
      const pl = lerp(F, E, s),
        pr = lerp(H, G, s);
      line(bottomTrans, pl.x, pl.y, pr.x, pr.y);
    }

    // BACK panel — verticales alineadas con el techo, horizontales con los costados
    const backV = $("backVertical"),
      backH = $("backHorizontal");
    const BV = TOP_N,  // verticales arrancan donde llegan las del techo
      BH = SIDE_N;     // horizontales arrancan donde llegan las de los costados
    if (backV) for (let i = 1; i < BV; i++) {
      const x = 190 + (720 * i) / BV;
      line(backV, x, 160, x, 480);
    }
    if (backH) for (let i = 1; i < BH; i++) {
      const y = 160 + (320 * i) / BH;
      line(backH, 190, y, 910, y);
    }
  }, []);

  return (
    <div className="goal">
      {/* piso full-bleed: extiende el pasto del arco hasta los bordes de la sección.
          top alineado a la línea de cal del SVG (y=540 de 620). Va detrás del SVG. */}
      <div className="goal-floor" aria-hidden />

      <svg
        ref={ref}
        className="goal-svg"
        viewBox="0 0 1100 620"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="postG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3d4656" />
            <stop offset="22%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#d8e1ee" />
            <stop offset="100%" stopColor="#252b38" />
          </linearGradient>
          <linearGradient id="barG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#e3ecf6" />
            <stop offset="100%" stopColor="#9aa6ba" />
          </linearGradient>
          <linearGradient id="backPostG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3a4252" />
            <stop offset="50%" stopColor="#8e9aae" />
            <stop offset="100%" stopColor="#262d3a" />
          </linearGradient>
          <radialGradient id="depth" cx="0.5" cy="0.32" r="0.95">
            <stop offset="0%" stopColor="#02050d" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#03060e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#173220" />
            <stop offset="60%" stopColor="#0c1f13" />
            <stop offset="100%" stopColor="#050f08" />
          </linearGradient>
          <linearGradient id="frontGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <pattern id="netBack" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 0 H20 M0 0 V20" fill="none" stroke="#cfd8e6" strokeWidth="0.6" opacity="0.5" />
            <circle cx="0" cy="0" r="0.85" fill="#fff" opacity="0.55" />
          </pattern>
          <linearGradient id="postHL" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
            <stop offset="82%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* 1 · interior depth */}
        <rect x="92" y="82" width="916" height="458" fill="url(#depth)" />

        {/* 2 · back panel */}
        <rect x="190" y="160" width="720" height="320" fill="#040810" opacity="0.65" />
        {/* red del fondo: grilla alineada con techo (verticales) y costados (horizontales) */}
        <g id="backVertical" data-ropes stroke="#cfd8e6" strokeWidth="0.6" opacity="0.42" />
        <g id="backHorizontal" data-ropes stroke="#cfd8e6" strokeWidth="0.55" opacity="0.4" />

        {/* back stanchions — marco trasero cerrado */}
        <line x1="190" y1="160" x2="910" y2="160" stroke="url(#backPostG)" strokeWidth="6" strokeLinecap="round" />
        <line x1="190" y1="160" x2="190" y2="480" stroke="url(#backPostG)" strokeWidth="6" strokeLinecap="round" />
        <line x1="910" y1="160" x2="910" y2="480" stroke="url(#backPostG)" strokeWidth="6" strokeLinecap="round" />
        <line x1="190" y1="480" x2="910" y2="480" stroke="url(#backPostG)" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
        <line x1="192" y1="162" x2="192" y2="478" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
        <line x1="908" y1="162" x2="908" y2="478" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
        <line x1="192" y1="158" x2="908" y2="158" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />

        {/* 3 · TOP panel */}
        <path d="M 92 82 L 1008 82 L 910 160 L 190 160 Z" fill="#04070f" opacity="0.95" />
        <path d="M 92 82 L 1008 82 L 1000 96 L 100 96 Z" fill="rgba(255,255,255,0.07)" />
        <g id="topDepth" data-ropes stroke="#cfd8e6" strokeWidth="0.6" opacity="0.42" fill="none" />
        <g id="topTransverse" data-ropes stroke="#cfd8e6" strokeWidth="0.55" opacity="0.4" fill="none" />

        {/* 4 · LEFT side */}
        <path d="M 92 82 L 190 160 L 190 480 L 92 540 Z" fill="#04070f" opacity="0.9" />
        <g id="leftDepth" data-ropes stroke="#cfd8e6" strokeWidth="0.6" opacity="0.42" fill="none" />
        <g id="leftTransverse" data-ropes stroke="#cfd8e6" strokeWidth="0.55" opacity="0.4" fill="none" />

        {/* 5 · RIGHT side */}
        <path d="M 1008 82 L 910 160 L 910 480 L 1008 540 Z" fill="#04070f" opacity="0.9" />
        <g id="rightDepth" data-ropes stroke="#cfd8e6" strokeWidth="0.6" opacity="0.42" fill="none" />
        <g id="rightTransverse" data-ropes stroke="#cfd8e6" strokeWidth="0.55" opacity="0.4" fill="none" />

        {/* 6 · tensores estructurales */}
        <g stroke="url(#backPostG)" strokeWidth="2.2" fill="none">
          <line x1="92" y1="82" x2="190" y2="160" opacity="0.85" />
          <line x1="1008" y1="82" x2="910" y2="160" opacity="0.85" />
          <line x1="92" y1="540" x2="190" y2="480" opacity="0.65" />
          <line x1="1008" y1="540" x2="910" y2="480" opacity="0.65" />
        </g>

        {/* 7 · piso interior */}
        <path d="M 92 540 L 190 480 L 910 480 L 1008 540 Z" fill="#04070f" opacity="0.9" />
        <g id="bottomDepth" data-ropes stroke="#cfd8e6" strokeWidth="0.6" opacity="0.42" fill="none" />
        <g id="bottomTransverse" data-ropes stroke="#cfd8e6" strokeWidth="0.55" opacity="0.4" fill="none" />

        {/* 8 · ceiling glow */}
        <rect x="92" y="82" width="916" height="180" fill="url(#frontGlow)" />

        {/* 9 · grass + línea de cal → ahora las provee .goal-floor (full-bleed) en CSS,
              para que el pasto sea UNO solo y no se vea el escalón con la franja. */}

        {/* 10 · FRONT FRAME — soldado en L, plantado en pasto.
              Postes hundidos hasta y=560 (la línea de cal/pasto está en y=540),
              así no flotan. Sombra de contacto en la base. */}
        <ellipse cx="81" cy="558" rx="38" ry="6" fill="rgba(0,0,0,0.72)" />
        <ellipse cx="1019" cy="558" rx="38" ry="6" fill="rgba(0,0,0,0.72)" />
        <ellipse cx="81" cy="566" rx="62" ry="9" fill="rgba(0,0,0,0.42)" />
        <ellipse cx="1019" cy="566" rx="62" ry="9" fill="rgba(0,0,0,0.42)" />

        <path
          d="M 60 560 L 60 82 Q 60 60 82 60 L 1018 60 Q 1040 60 1040 82 L 1040 560 L 1008 560 L 1008 82 L 92 82 L 92 560 Z"
          fill="#262d3a"
        />
        <path
          d="M 70 82 L 70 71 Q 70 60 81 60 L 1019 60 Q 1030 60 1030 71 L 1030 82 L 1008 82 L 1008 71 L 92 71 L 92 82 Z"
          fill="url(#barG)"
        />
        <path d="M 70 71 Q 70 60 81 60 L 92 60 L 92 560 L 70 560 Z" fill="url(#postG)" />
        <path d="M 1008 60 L 1019 60 Q 1030 60 1030 71 L 1030 560 L 1008 560 Z" fill="url(#postG)" />

        <path d="M 78 63 L 1022 63 L 1022 66 L 78 66 Z" fill="rgba(255,255,255,0.85)" opacity="0.65" />
        <rect x="76" y="71" width="3" height="489" fill="url(#postHL)" />
        <rect x="1019" y="71" width="3" height="489" fill="url(#postHL)" opacity="0.9" />

        <path
          d="M 92 82 L 1008 82 L 1008 540 M 92 540 L 92 82"
          stroke="rgba(0,0,0,0.55)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* scrim: oscurece la zona izquierda (donde va el texto) para legibilidad.
          Degrada a transparente antes del emblema. */}
      <div className="goal-scrim" aria-hidden />

      {/* contenido del hero, posicionado dentro de la boca del arco */}
      <div className="goal-content">{children}</div>
    </div>
  );
}
