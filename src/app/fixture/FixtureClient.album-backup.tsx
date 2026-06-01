"use client";

/* ═══════════════════════════════════════════════════════════════
   FixtureClient.tsx — Álbum del Mundial 2026
   Replaces the previous standings/bracket view with a Panini-style
   sticker album: cover + 12 group spreads + eliminatorias.
   Pages flip in 3D (rotateY). Keyboard ← →. Chips to jump.
   ═══════════════════════════════════════════════════════════════ */

import { useEffect, useRef, useState } from "react";
import { FLAGS } from "@/components/ui";
import { GROUPS, KNOCKOUT, PHASES, TEAMS } from "@/lib/fixture-data";
import type { Group, GroupMatch, GroupStanding, KnockoutMatch } from "@/lib/fixture-data";

/* ─── Palette ─── */
const GROUP_COLORS = ["#3DB14B","#2978C2","#D8362A","#F4C73D","#3FB4B5","#7B3FA3","#F26B23","#2978C2","#3DB14B","#D8362A","#F4C73D","#F26B23"];
const ARCH_COLORS  = ["#D8362A","#F26B23","#F4C73D","#3DB14B","#3FB4B5","#2978C2"];

function groupColor(name: string) {
  const idx = name.charCodeAt(0) - 65; // 'A' = 0
  return GROUP_COLORS[idx] || GROUP_COLORS[0];
}
function flagBg(code: string) { return FLAGS[code]?.bg || "#333"; }
function flagName(code: string) { return FLAGS[code]?.n || TEAMS[code] || code.toUpperCase(); }

/* ─── Spread shape ─── */
type PanelSpec =
  | { type: "empty" }
  | { type: "cover" }
  | { type: "group"; group: Group; pageNum: number }
  | { type: "matches"; group: Group; pageNum: number }
  | { type: "ko-round"; round: string; pageNum: number }
  | { type: "final-calendar" };

type Spread = { left: PanelSpec; right: PanelSpec; label: string; chip?: string };

function buildSpreads(): Spread[] {
  const s: Spread[] = [];
  s.push({ left: { type: "empty" }, right: { type: "cover" }, label: "Tapa" });
  GROUPS.forEach((g, i) => {
    s.push({
      left:  { type: "group",   group: g, pageNum: i * 2 + 1 },
      right: { type: "matches", group: g, pageNum: i * 2 + 2 },
      label: `Grupo ${g.name}`,
      chip: g.name,
    });
  });
  // Eliminatorias — una página por ronda en formato par
  const koRounds = PHASES.filter(p => p.id !== "groups");
  for (let i = 0; i < koRounds.length; i += 2) {
    const a = koRounds[i];
    const b = koRounds[i + 1];
    s.push({
      left:  { type: "ko-round", round: a.id, pageNum: 25 + i },
      right: b ? { type: "ko-round", round: b.id, pageNum: 26 + i } : { type: "final-calendar" },
      label: b ? `${a.label} · ${b.label}` : a.label,
      chip: a.label,
    });
  }
  return s;
}

/* ═══════════════════════════════════════════════════════════════
   PANEL RENDERERS
   ═══════════════════════════════════════════════════════════════ */

function Arches({ where, seed = 0 }: { where: "top" | "bottom"; seed?: number }) {
  return (
    <div className={`arches ${where}`}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="arch"
          style={{ background: ARCH_COLORS[(i + seed) % ARCH_COLORS.length] }}
        />
      ))}
    </div>
  );
}

function CoverArchSVG() {
  // 4 lados de arches alrededor de la tapa
  const cols = 8, rows = 9;
  const paths: { d: string; fill: string }[] = [];
  for (let i = 0; i < cols; i++) {
    const x = (i * 100) / cols, w = 100 / cols;
    paths.push({ d: `M ${x} 0 L ${x + w} 0 L ${x + w} 12 Q ${x + w / 2} 4 ${x} 12 Z`, fill: ARCH_COLORS[i % ARCH_COLORS.length] });
    paths.push({ d: `M ${x} 140 L ${x + w} 140 L ${x + w} 128 Q ${x + w / 2} 136 ${x} 128 Z`, fill: ARCH_COLORS[(i + 3) % ARCH_COLORS.length] });
  }
  for (let i = 2; i < rows - 2; i++) {
    const y = (i * 140) / rows, h = 140 / rows;
    paths.push({ d: `M 0 ${y} L 0 ${y + h} L 8 ${y + h} Q 3 ${y + h / 2} 8 ${y} Z`, fill: ARCH_COLORS[i % ARCH_COLORS.length] });
    paths.push({ d: `M 100 ${y} L 100 ${y + h} L 92 ${y + h} Q 97 ${y + h / 2} 92 ${y} Z`, fill: ARCH_COLORS[(i + 2) % ARCH_COLORS.length] });
  }
  return (
    <svg className="cover-arches" viewBox="0 0 100 140" preserveAspectRatio="none">
      {paths.map((p, i) => (<path key={i} d={p.d} fill={p.fill} />))}
    </svg>
  );
}

function Cover() {
  return (
    <div className="cover">
      <CoverArchSVG />
      <div className="cover-content">
        <div className="cover-eyebrow">Official Sticker Collection</div>
        <h1 className="cover-title">Álbum del Mundial</h1>
        <img className="cover-emblem" src="/emblema-26.png" alt="Mundial 26" />
        <div className="cover-sub">World Cup 2026</div>
      </div>
      <div className="cover-foot">
        <div className="cover-langs">Sticker Album · Álbum de Cromos · Album D'autocollants</div>
        <div className="cover-cobra-mark">LA <span>COBRA</span> · 26</div>
      </div>
    </div>
  );
}

function GroupPage({ group, pageNum }: { group: Group; pageNum: number }) {
  const color = groupColor(group.name);
  const tilts = [-1.2, 0.8, -0.6, 1.0];
  const totals = group.standings.reduce(
    (a, s) => ({ gf: a.gf + s.gf, gc: a.gc + s.gc, pj: a.pj + s.pj }),
    { gf: 0, gc: 0, pj: 0 }
  );
  const totalPJ = totals.pj / 2;
  const prom = (totals.gf / (totalPJ || 1)).toFixed(1);

  return (
    <div className="group-page">
      <Arches where="top" seed={group.name.charCodeAt(0) - 65} />
      <div className="gp-header">
        <div className="gp-letter-wrap">
          <div className="gp-letter">{group.name}</div>
          <div>
            <div className="gp-label">Grupo</div>
            <div className="gp-fifa"><span className="gp-fifa-dot" />FIFA · 2026</div>
          </div>
        </div>
        <div className="gp-label">{group.standings.length} equipos · 6 partidos</div>
      </div>

      <div className="stickers">
        {group.standings.map((s: GroupStanding, i: number) => (
          <div
            key={s.code}
            className={`sticker${i < 2 ? " qualified" : ""}`}
            style={{ ["--st-color" as any]: color, ["--tilt" as any]: `${tilts[i] || 0}deg` }}
          >
            <span className="sticker-pos">{i + 1}</span>
            <span className="sticker-pts">{s.pts}<small>pts</small></span>
            <div className="sticker-flag" style={{ background: flagBg(s.code) }} />
            <div className="sticker-name">{flagName(s.code)}</div>
            <div className="sticker-record">
              <span>PJ <b>{s.pj}</b></span>
              <span>GF <b>{s.gf}</b></span>
              <span>GC <b>{s.gc}</b></span>
            </div>
          </div>
        ))}
      </div>

      <div className="gp-stats">
        <div className="gp-stat"><b>{totalPJ}</b><span>partidos</span></div>
        <div className="gp-stat"><b>{totals.gf}</b><span>goles</span></div>
        <div className="gp-stat"><b>{prom}</b><span>prom/p</span></div>
      </div>
      <span className="page-num">Pág. {pageNum}</span>
    </div>
  );
}

function MatchesPage({ group, pageNum }: { group: Group; pageNum: number }) {
  // group by date
  const byDate: Record<string, GroupMatch[]> = {};
  group.matches.forEach(m => {
    (byDate[m.date] = byDate[m.date] || []).push(m);
  });
  return (
    <div className="matches-page">
      <Arches where="bottom" seed={group.name.charCodeAt(0) - 65} />
      <div className="mp-header">
        <div>
          <h3 className="mp-title">Partidos · {group.name}</h3>
          <div className="mp-title-sub">Fase de grupos</div>
        </div>
        <div className="gp-fifa"><span className="gp-fifa-dot" />FIFA · 2026</div>
      </div>
      <div className="matches">
        {Object.entries(byDate).map(([date, ms]) => (
          <div key={date}>
            <div className="mp-date-strip">— {date} —</div>
            {ms.map((m, i) => {
              const playable = m.scoreH != null;
              return (
                <div className="match" key={i}>
                  <div className="match-when">{m.time}<b>{date.split(" ")[0]}</b></div>
                  <div className="match-team home">
                    <span>{flagName(m.home)}</span>
                    <span className="mini-flag" style={{ background: flagBg(m.home) }} />
                  </div>
                  <div className={`match-score${playable ? "" : " empty"}`}>
                    {playable ? `${m.scoreH} - ${m.scoreA}` : "vs"}
                  </div>
                  <div className="match-team away">
                    <span className="mini-flag" style={{ background: flagBg(m.away) }} />
                    <span>{flagName(m.away)}</span>
                  </div>
                  <div className="match-city">{m.city}</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <span className="page-num">Pág. {pageNum}</span>
    </div>
  );
}

function KORoundPage({ round, pageNum }: { round: string; pageNum: number }) {
  const matches = KNOCKOUT.filter(m => m.round === round);
  const label = PHASES.find(p => p.id === round)?.label || round;
  return (
    <div className="group-page">
      <Arches where="top" seed={round.length} />
      <div className="gp-header">
        <div className="gp-letter-wrap">
          <div className="gp-letter" style={{ fontSize: 56 }}>{label}</div>
          <div>
            <div className="gp-label">Eliminatorias</div>
            <div className="gp-fifa"><span className="gp-fifa-dot" />FIFA · 2026</div>
          </div>
        </div>
        <div className="gp-label">{matches.length} {matches.length === 1 ? "partido" : "partidos"}</div>
      </div>
      <div className="matches" style={{ marginTop: 8 }}>
        {matches.length === 0 ? (
          <div className="ko-empty">
            <p>Bracket disponible cuando arranque el torneo.</p>
          </div>
        ) : (
          matches.map(m => {
            const playable = m.scoreH != null;
            return (
              <div className="match ko" key={m.id}>
                <div className="match-when">{m.date}</div>
                <div className="match-team home">
                  <span>{flagName(m.home)}</span>
                  <span className="mini-flag" style={{ background: flagBg(m.home) }} />
                </div>
                <div className={`match-score${playable ? "" : " empty"}`}>
                  {playable ? `${m.scoreH} - ${m.scoreA}` : "vs"}
                </div>
                <div className="match-team away">
                  <span className="mini-flag" style={{ background: flagBg(m.away) }} />
                  <span>{flagName(m.away)}</span>
                </div>
                <div className="match-city">
                  {m.penH != null ? `pen ${m.penH}-${m.penA} · ` : ""}{m.city}
                </div>
              </div>
            );
          })
        )}
      </div>
      <span className="page-num">Pág. {pageNum}</span>
    </div>
  );
}

function FinalCalendar() {
  const rows: [string, string][] = [
    ["27 JUN — 02 JUL", "32avos · 16 partidos"],
    ["04 JUL — 07 JUL", "16avos · 8 partidos"],
    ["09 JUL — 11 JUL", "Cuartos · 4 partidos"],
    ["14 JUL — 15 JUL", "Semis · 2 partidos"],
    ["18 JUL", "Por el tercer puesto"],
    ["19 JUL", "Final · Estadio MetLife, NJ"],
  ];
  return (
    <div className="group-page">
      <Arches where="bottom" seed={2} />
      <div className="gp-header">
        <h3 className="mp-title">Calendario</h3>
        <div className="gp-fifa"><span className="gp-fifa-dot" />FIFA · 2026</div>
      </div>
      <div className="matches" style={{ marginTop: 6 }}>
        {rows.map(([when, what]) => (
          <div className="match calendar" key={when}>
            <div className="match-when"><b>{when.split(" — ")[0]}</b>{when.includes("—") ? "— " + when.split(" — ")[1] : ""}</div>
            <div className="match-team home" style={{ justifyContent: "flex-start", textAlign: "left" }}>
              {what}
            </div>
            <div className="match-city">Mundial</div>
          </div>
        ))}
      </div>
      <span className="page-num">Pág. 30</span>
    </div>
  );
}

function Panel({ spec }: { spec: PanelSpec }) {
  switch (spec.type) {
    case "empty":          return <div className="page-empty" />;
    case "cover":          return <Cover />;
    case "group":          return <GroupPage group={spec.group} pageNum={spec.pageNum} />;
    case "matches":        return <MatchesPage group={spec.group} pageNum={spec.pageNum} />;
    case "ko-round":       return <KORoundPage round={spec.round} pageNum={spec.pageNum} />;
    case "final-calendar": return <FinalCalendar />;
  }
}

/* ═══════════════════════════════════════════════════════════════
   MAIN
   ═══════════════════════════════════════════════════════════════ */

export default function FixtureClient() {
  const SPREADS = useState(() => buildSpreads())[0];
  const [current, setCurrent] = useState(0);
  const [flip, setFlip] = useState<null | { dir: "forward" | "backward"; turning: boolean }>(null);

  // Mantengo el "next spread snapshot" durante el flip para que la cara back se mantenga estable
  const flipSnapshot = useRef<{ front: PanelSpec; back: PanelSpec } | null>(null);

  function flipForward() {
    if (flip || current >= SPREADS.length - 1) return;
    flipSnapshot.current = { front: SPREADS[current].right, back: SPREADS[current + 1].left };
    setFlip({ dir: "forward", turning: false });
    // doble RAF para que la animación arranque después del paint
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setFlip({ dir: "forward", turning: true });
    }));
  }
  function flipBackward() {
    if (flip || current <= 0) return;
    flipSnapshot.current = { front: SPREADS[current].left, back: SPREADS[current - 1].right };
    setFlip({ dir: "backward", turning: false });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setFlip({ dir: "backward", turning: true });
    }));
  }
  function onFlipEnd() {
    if (!flip) return;
    if (flip.dir === "forward") setCurrent(c => c + 1);
    else                        setCurrent(c => c - 1);
    setFlip(null);
    flipSnapshot.current = null;
  }
  function jumpTo(idx: number) {
    if (flip || idx === current) return;
    if (idx < 0 || idx >= SPREADS.length) return;
    if (Math.abs(idx - current) > 1) { setCurrent(idx); return; }
    if (idx > current) flipForward();
    else               flipBackward();
  }

  // safety net por si transitionend no se dispara
  useEffect(() => {
    if (!flip || !flip.turning) return;
    const t = setTimeout(onFlipEnd, 1000);
    return () => clearTimeout(t);
  }, [flip]); // eslint-disable-line react-hooks/exhaustive-deps

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") flipForward();
      if (e.key === "ArrowLeft")  flipBackward();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flip, current]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentSpread = SPREADS[current];
  // Mientras se hace flip forward, la right page debajo del overlay ya muestra la del próximo spread
  // (para que cuando termine la transición sea seamless)
  const leftPanel  = flip?.dir === "backward" ? SPREADS[current - 1].left  : currentSpread.left;
  const rightPanel = flip?.dir === "forward"  ? SPREADS[current + 1].right : currentSpread.right;

  return (
    <div className="fx-album">
      <div className="album-shell">
        <div className="book">
          <div className="page-stack">
            <div className="page page-left"><Panel spec={leftPanel} /></div>
            <div className="page page-right"><Panel spec={rightPanel} /></div>
          </div>

          {flip && flipSnapshot.current && (
            <div
              className={`flip-layer ${flip.dir === "forward" ? "from-right" : "from-left"}${flip.turning ? " turning" : ""}`}
              onTransitionEnd={onFlipEnd}
            >
              <div className="flip-face front"><Panel spec={flipSnapshot.current.front} /></div>
              <div className="flip-face back"><Panel spec={flipSnapshot.current.back}  /></div>
            </div>
          )}
        </div>
      </div>

      <div className="album-nav">
        <button className="nav-btn" disabled={current === 0 || !!flip} onClick={flipBackward}>◀ Anterior</button>
        <div className="album-position">
          <span><b>{currentSpread.label}</b></span>
          <div className="album-track">
            <i style={{ width: `${(current / (SPREADS.length - 1)) * 100}%` }} />
          </div>
        </div>
        <button className="nav-btn" disabled={current === SPREADS.length - 1 || !!flip} onClick={flipForward}>Siguiente ▶</button>
      </div>

      <div className="chips">
        <button className={`chip${current === 0 ? " active" : ""}`} onClick={() => jumpTo(0)}>Tapa</button>
        <div className="chip-divider" />
        {SPREADS.slice(1, -3).map((sp, i) => (
          <button
            key={i}
            className={`chip${current === i + 1 ? " active" : ""}`}
            onClick={() => jumpTo(i + 1)}
          >
            {sp.chip || sp.label}
          </button>
        ))}
        <div className="chip-divider" />
        {SPREADS.slice(-3).map((sp, i) => {
          const idx = SPREADS.length - 3 + i;
          return (
            <button
              key={idx}
              className={`chip${current === idx ? " active" : ""}`}
              onClick={() => jumpTo(idx)}
            >
              {sp.chip || sp.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
