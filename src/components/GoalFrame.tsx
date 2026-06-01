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
      TOP_T = 5;
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
      const mx = (pl.x + pr.x) / 2;
      const my = (pl.y + pr.y) / 2 + 2 + s * 3;
      path(topTrans, `M ${pl.x} ${pl.y} Q ${mx} ${my} ${pr.x} ${pr.y}`);
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

    // BOTTOM piso interior
    const bottomDepth = $("bottomDepth");
    const BOT_N = 22;
    if (bottomDepth) for (let i = 1; i < BOT_N; i++) {
      const t = i / BOT_N;
      const pf = lerp(F, H, t),
        pb = lerp(E, G, t);
      line(bottomDepth, pf.x, pf.y, pb.x, pb.y);
    }

    // BACK panel accent ropes
    const backV = $("backVertical"),
      backH = $("backHorizontal");
    const BV = 30,
      BH = 14;
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
            <stop offset="100%" stopColor="#363d4e" />
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
          <pattern id="netBack" width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M0 11 L11 0 L22 11 L11 22 Z" fill="none" stroke="#cfd8e6" strokeWidth="0.6" opacity="0.5" />
            <circle cx="11" cy="0" r="0.9" fill="#fff" opacity="0.6" />
            <circle cx="11" cy="22" r="0.9" fill="#fff" opacity="0.6" />
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
        <rect x="190" y="160" width="720" height="320" fill="url(#netBack)" />
        <g id="backVertical" data-ropes stroke="#aeb9cc" strokeWidth="0.55" opacity="0.42" />
        <g id="backHorizontal" data-ropes stroke="#aeb9cc" strokeWidth="0.55" opacity="0.35" />

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
        <g id="topDepth" data-ropes stroke="#dbe4f2" strokeWidth="0.7" opacity="0.7" fill="none" />
        <g id="topTransverse" data-ropes stroke="#dbe4f2" strokeWidth="0.65" opacity="0.55" fill="none" />
        <g id="topKnots" data-ropes fill="#fff" opacity="0.6" />

        {/* 4 · LEFT side */}
        <path d="M 92 82 L 190 160 L 190 480 L 92 540 Z" fill="#04070f" opacity="0.9" />
        <g id="leftDepth" data-ropes stroke="#cfd8e6" strokeWidth="0.6" opacity="0.45" fill="none" />
        <g id="leftTransverse" data-ropes stroke="#cfd8e6" strokeWidth="0.55" opacity="0.4" fill="none" />

        {/* 5 · RIGHT side */}
        <path d="M 1008 82 L 910 160 L 910 480 L 1008 540 Z" fill="#04070f" opacity="0.9" />
        <g id="rightDepth" data-ropes stroke="#cfd8e6" strokeWidth="0.6" opacity="0.45" fill="none" />
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
        <g id="bottomDepth" data-ropes stroke="#cfd8e6" strokeWidth="0.55" opacity="0.35" fill="none" />

        {/* 8 · ceiling glow */}
        <rect x="92" y="82" width="916" height="180" fill="url(#frontGlow)" />

        {/* 9 · grass + línea de cal interrumpida por los postes */}
        <path d="M 0 540 L 1100 540 L 1100 620 L 0 620 Z" fill="url(#grass)" />
        <rect x="0" y="538" width="60" height="3" fill="rgba(255,255,255,0.62)" />
        <rect x="92" y="538" width="916" height="3" fill="rgba(255,255,255,0.62)" />
        <rect x="1040" y="538" width="60" height="3" fill="rgba(255,255,255,0.62)" />

        {/* 10 · FRONT FRAME — soldado en L, plantado en pasto */}
        <ellipse cx="81" cy="552" rx="36" ry="5" fill="rgba(0,0,0,0.65)" />
        <ellipse cx="1019" cy="552" rx="36" ry="5" fill="rgba(0,0,0,0.65)" />
        <ellipse cx="81" cy="560" rx="56" ry="7" fill="rgba(0,0,0,0.35)" />
        <ellipse cx="1019" cy="560" rx="56" ry="7" fill="rgba(0,0,0,0.35)" />

        <path
          d="M 60 545 L 60 82 Q 60 60 82 60 L 1018 60 Q 1040 60 1040 82 L 1040 545 L 1008 545 L 1008 82 L 92 82 L 92 545 Z"
          fill="#262d3a"
        />
        <path
          d="M 70 82 L 70 71 Q 70 60 81 60 L 1019 60 Q 1030 60 1030 71 L 1030 82 L 1008 82 L 1008 71 L 92 71 L 92 82 Z"
          fill="url(#barG)"
        />
        <path d="M 70 71 Q 70 60 81 60 L 92 60 L 92 545 L 70 545 Z" fill="url(#postG)" />
        <path d="M 1008 60 L 1019 60 Q 1030 60 1030 71 L 1030 545 L 1008 545 Z" fill="url(#postG)" />

        <path d="M 78 63 L 1022 63 L 1022 66 L 78 66 Z" fill="rgba(255,255,255,0.85)" opacity="0.65" />
        <rect x="76" y="71" width="3" height="474" fill="url(#postHL)" />
        <rect x="1019" y="71" width="3" height="474" fill="url(#postHL)" opacity="0.9" />

        <path
          d="M 92 82 L 1008 82 L 1008 540 M 92 540 L 92 82"
          stroke="rgba(0,0,0,0.55)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* contenido del hero, posicionado dentro de la boca del arco */}
      <div className="goal-content">{children}</div>
    </div>
  );
}
