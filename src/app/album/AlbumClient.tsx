"use client";

/* ═══════════════════════════════════════════════════════════════
   AlbumClient.tsx — Álbum de FIGURITAS del Mundial 2026
   Libro Panini (mismo look que tenía /fixture, CSS rescatado en album.css)
   con contenido de figuritas de convocados.
   + Estación de packs (apertura de a una, con emoción)
   + Modal de perfil  + buscador  + arcos decorativos  + flechas dentro del libro.
   Front only, datos mock. Sin fotos (licenciadas).
   ═══════════════════════════════════════════════════════════════ */

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { FLAGS } from "@/components/ui";
import { SQUADS, COMING_SOON, ALL_FIGUS, initialOwned } from "@/lib/album-data";
import type { Figu, Player, Squad } from "@/lib/album-data";

const POS_COLOR: Record<string, string> = { ARQ: "#F4C73D", DEF: "#3FB4B5", MED: "#3DB14B", DEL: "#D8362A" };
const ARCH_COLORS = ["#D8362A", "#F26B23", "#F4C73D", "#3DB14B", "#3FB4B5", "#2978C2"];

function flagBg(code: string) { return FLAGS[code]?.bg || "#444"; }
function initials(name: string) {
  const parts = name.replace(/\./g, "").split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || parts[0]?.[1] || "")).toUpperCase();
}

/* ─── spread shape ─── */
type PanelSpec =
  | { type: "empty" }
  | { type: "cover" }
  | { type: "team"; squad: Squad }
  | { type: "grid"; squad: Squad };
type Spread = { left: PanelSpec; right: PanelSpec; label: string; code?: string };

function buildSpreads(): Spread[] {
  const s: Spread[] = [{ left: { type: "empty" }, right: { type: "cover" }, label: "Tapa" }];
  SQUADS.forEach((sq) =>
    s.push({ left: { type: "team", squad: sq }, right: { type: "grid", squad: sq }, label: sq.name, code: sq.code })
  );
  return s;
}

function Arches({ where = "top", seed = 0, count = 9 }: { where?: "top" | "bottom"; seed?: number; count?: number }) {
  return (
    <div className={`arches ${where}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="arch" style={{ background: ARCH_COLORS[(i + seed) % ARCH_COLORS.length] }} />
      ))}
    </div>
  );
}

/* ═══════════════ figurita ═══════════════ */
function FiguCard({ fig, owned, big }: { fig: Figu; owned: boolean; big?: boolean }) {
  if (!owned) {
    return (
      <div className={"alb-figu missing" + (big ? " big" : "")}>
        <span className="alb-figu-num">{fig.n}</span>
        <span className="alb-figu-falta">FALTA</span>
      </div>
    );
  }
  return (
    <div className={"alb-figu owned" + (big ? " big" : "")} style={{ ["--pos" as string]: POS_COLOR[fig.pos] } as CSSProperties}>
      <span className="alb-figu-strip" style={{ background: flagBg(fig.code) }} />
      <span className="alb-figu-num">{fig.n}</span>
      <span className="alb-figu-ava">{initials(fig.name)}</span>
      <span className="alb-figu-name">{fig.name}</span>
      <span className="alb-figu-pos">{fig.pos}</span>
    </div>
  );
}

/* ═══════════════ left page: panel de selección ═══════════════ */
function TeamPanel({ squad, owned }: { squad: Squad; owned: Record<string, boolean> }) {
  const total = squad.players.length;
  const have = squad.players.filter((p) => owned[`${squad.code}-${p.n}`]).length;
  const pct = Math.round((have / total) * 100);
  return (
    <div className="alb-team">
      <div className="alb-team-hero">
        <span className="alb-team-logo" style={{ background: flagBg(squad.code) }}>
          <span className="alb-team-logo-code">{squad.code.toUpperCase()}</span>
        </span>
        <div className="alb-team-name">{squad.name}</div>
        <div className="alb-team-fifa"><span className="alb-fifa-dot" />Grupo {squad.group} · FIFA 2026</div>
      </div>

      <div className="alb-team-progress">
        <div className="alb-prog-head"><span>Tu colección</span><b>{have}/{total}</b></div>
        <div className="alb-prog-bar"><i style={{ width: pct + "%" }} /></div>
        <div className="alb-prog-pct">{pct}% completo</div>
      </div>

      <div className="alb-team-stats">
        <div><b>{total}</b><span>plantel</span></div>
        <div><b>{have}</b><span>pegadas</span></div>
        <div><b>{total - have}</b><span>faltan</span></div>
      </div>

      <div className="alb-team-legend">
        <span><i style={{ background: POS_COLOR.ARQ }} />Arquero</span>
        <span><i style={{ background: POS_COLOR.DEF }} />Defensa</span>
        <span><i style={{ background: POS_COLOR.MED }} />Medio</span>
        <span><i style={{ background: POS_COLOR.DEL }} />Delantero</span>
      </div>

      <p className="alb-team-foot">Pegá las {total} figuritas del plantel para completar la página.</p>
    </div>
  );
}

/* ═══════════════ right page: grilla ═══════════════ */
function SquadGrid({ squad, owned, onPick }: { squad: Squad; owned: Record<string, boolean>; onPick: (p: Player, code: string) => void }) {
  return (
    <div className="alb-grid-page">
      <div className="alb-grid-head"><h3>{squad.name}</h3><span className="alb-grid-sub">Convocados</span></div>
      <div className="alb-grid">
        {squad.players.map((p) => {
          const key = `${squad.code}-${p.n}`;
          const fig: Figu = { key, code: squad.code, team: squad.name, n: p.n, name: p.name, pos: p.pos };
          const got = !!owned[key];
          return (
            <button key={key} className="alb-figu-btn" onClick={() => got && onPick(p, squad.code)} disabled={!got}>
              <FiguCard fig={fig} owned={got} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Cover() {
  return (
    <div className="alb-cover">
      <div className="alb-cover-eyebrow">Official Sticker Collection</div>
      <h1 className="alb-cover-title">Álbum de<br />Figuritas</h1>
      <img className="alb-cover-emblem" src="/emblema-26.png" alt="Mundial 26" />
      <div className="alb-cover-sub">World Cup 2026 · Convocados</div>
      <div className="alb-cover-mark">LA <span>COBRA</span> · 26</div>
    </div>
  );
}

function Panel({ spec, owned, onPick }: { spec: PanelSpec; owned: Record<string, boolean>; onPick: (p: Player, code: string) => void }) {
  switch (spec.type) {
    case "empty": return <div className="page-empty" />;
    case "cover": return <Cover />;
    case "team": return <TeamPanel squad={spec.squad} owned={owned} />;
    case "grid": return <SquadGrid squad={spec.squad} owned={owned} onPick={onPick} />;
  }
}

/* ═══════════════ helpers ═══════════════ */
function sampleN<T>(arr: T[], n: number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a.slice(0, n);
}
function fmt(s: number) { return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`; }

/* ═══════════════════════════════════════════════════════════════ */
export default function AlbumClient() {
  const SPREADS = useState(() => buildSpreads())[0];
  const [current, setCurrent] = useState(0);
  const [flip, setFlip] = useState<null | { dir: "forward" | "backward"; turning: boolean }>(null);
  const flipSnap = useRef<{ front: PanelSpec; back: PanelSpec } | null>(null);

  const [owned, setOwned] = useState<Record<string, boolean>>(() => initialOwned());
  const haveCount = ALL_FIGUS.filter((f) => owned[f.key]).length;
  const totalCount = ALL_FIGUS.length;
  const pctTotal = Math.round((haveCount / totalCount) * 100);

  const [packs, setPacks] = useState(3);
  const [secs, setSecs] = useState(15 * 60);
  // apertura de pack: idx -1 = sobre sellado; 0..4 = mostrando figu idx
  const [pack, setPack] = useState<null | { figs: { fig: Figu; isNew: boolean }[]; idx: number }>(null);
  const [player, setPlayer] = useState<{ p: Player; code: string } | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const id = setInterval(() => setSecs((s) => { if (s <= 1) { setPacks((p) => p + 1); return 15 * 60; } return s - 1; }), 1000);
    return () => clearInterval(id);
  }, []);

  function flipForward() {
    if (flip || current >= SPREADS.length - 1) return;
    flipSnap.current = { front: SPREADS[current].right, back: SPREADS[current + 1].left };
    setFlip({ dir: "forward", turning: false });
    requestAnimationFrame(() => requestAnimationFrame(() => setFlip({ dir: "forward", turning: true })));
  }
  function flipBackward() {
    if (flip || current <= 0) return;
    flipSnap.current = { front: SPREADS[current].left, back: SPREADS[current - 1].right };
    setFlip({ dir: "backward", turning: false });
    requestAnimationFrame(() => requestAnimationFrame(() => setFlip({ dir: "backward", turning: true })));
  }
  function onFlipEnd() {
    if (!flip) return;
    setCurrent((c) => (flip.dir === "forward" ? c + 1 : c - 1));
    setFlip(null); flipSnap.current = null;
  }
  function jumpTo(idx: number) {
    if (flip || idx === current || idx < 0 || idx >= SPREADS.length) return;
    if (Math.abs(idx - current) > 1) { setCurrent(idx); return; }
    if (idx > current) flipForward(); else flipBackward();
  }
  function jumpToCode(code: string) { const i = SPREADS.findIndex((sp) => sp.code === code); if (i >= 0) jumpTo(i); }

  useEffect(() => { if (!flip || !flip.turning) return; const t = setTimeout(onFlipEnd, 1000); return () => clearTimeout(t); }, [flip]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (player || pack) return;
      if (e.key === "ArrowRight") flipForward();
      if (e.key === "ArrowLeft") flipBackward();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flip, current, player, pack]); // eslint-disable-line react-hooks/exhaustive-deps

  function openPack() {
    if (packs <= 0 || pack) return;
    const missing = ALL_FIGUS.filter((f) => !owned[f.key]);
    const pool = missing.length >= 5 ? missing : ALL_FIGUS;
    const picks = sampleN(pool, 5).map((fig) => ({ fig, isNew: !owned[fig.key] }));
    setPacks((p) => p - 1);
    setPack({ figs: picks, idx: -1 });
  }
  function closePack() {
    if (pack) {
      setOwned((o) => { const n = { ...o }; pack.figs.forEach((r) => (n[r.fig.key] = true)); return n; });
      const firstNew = pack.figs.find((r) => r.isNew) || pack.figs[0];
      if (firstNew) jumpToCode(firstNew.fig.code);
    }
    setPack(null);
  }

  const cs = SPREADS[current];
  const leftPanel = flip?.dir === "backward" ? SPREADS[current - 1].left : cs.left;
  const rightPanel = flip?.dir === "forward" ? SPREADS[current + 1].right : cs.right;

  const q = query.trim().toLowerCase();
  const matchTeams = q
    ? SQUADS.filter((s) => s.name.toLowerCase().includes(q) || s.players.some((p) => p.name.toLowerCase().includes(q)))
    : SQUADS;

  const cur = pack && pack.idx >= 0 ? pack.figs[pack.idx] : null;

  // guarda de arcos por hoja (anclada a .page/.flip-face → siempre alineada),
  // solo en páginas de selección (no en tapa/vacía). seed distinto izq/der para que el color continúe.
  const pageArches = (t: PanelSpec["type"]) =>
    t === "team" || t === "grid" ? <Arches count={9} seed={t === "grid" ? 9 : 0} /> : null;

  return (
    <div className="alb-root">
      {/* ── estación de packs ── */}
      <div className="alb-station">
        <div className="alb-station-l">
          <div className="alb-station-kick"><span className="dot" />Mirando el stream desbloqueás packs</div>
          <div className="alb-prog-head"><span>Colección total</span><b>{haveCount}/{totalCount} figus</b></div>
          <div className="alb-prog-bar big"><i style={{ width: pctTotal + "%" }} /></div>
          <div className="alb-prog-pct">{pctTotal}% del álbum</div>
        </div>
        <div className="alb-station-r">
          <div className="alb-pack-timer"><span>Próximo pack gratis</span><b suppressHydrationWarning>{fmt(secs)}</b></div>
          <button className="alb-pack-btn" disabled={packs <= 0} onClick={openPack}>
            <span className="alb-pack-ico" aria-hidden />Abrir pack<span className="alb-pack-count">{packs}</span>
          </button>
          <div className="alb-pack-hint">5 figuritas por pack</div>
        </div>
      </div>

      {/* ── buscador ── */}
      <div className="alb-search">
        <input type="text" placeholder="Buscar selección o jugador…" value={query} onChange={(e) => setQuery(e.target.value)} />
        {q && (
          <div className="alb-search-hits">
            {matchTeams.length === 0 ? <span className="alb-search-empty">Sin resultados</span> :
              matchTeams.map((s) => (
                <button key={s.code} onClick={() => { jumpToCode(s.code); setQuery(""); }}>
                  <i style={{ background: flagBg(s.code) }} />{s.name}
                </button>
              ))}
          </div>
        )}
      </div>

      {/* ── el libro ── */}
      <div className="fx-album">
        <div className="album-shell">
          <div className="book">
            <div className="page-stack">
              <div className="page page-left"><Panel spec={leftPanel} owned={owned} onPick={(p, code) => setPlayer({ p, code })} />{pageArches(leftPanel.type)}</div>
              <div className="page page-right"><Panel spec={rightPanel} owned={owned} onPick={(p, code) => setPlayer({ p, code })} />{pageArches(rightPanel.type)}</div>
            </div>
            {flip && flipSnap.current && (
              <div
                className={`flip-layer ${flip.dir === "forward" ? "from-right" : "from-left"}${flip.turning ? " turning" : ""}`}
                onTransitionEnd={(e) => { if (e.target === e.currentTarget && e.propertyName === "transform") onFlipEnd(); }}
              >
                <div className="flip-face front"><Panel spec={flipSnap.current.front} owned={owned} onPick={(p, code) => setPlayer({ p, code })} />{pageArches(flipSnap.current.front.type)}</div>
                <div className="flip-face back"><Panel spec={flipSnap.current.back} owned={owned} onPick={(p, code) => setPlayer({ p, code })} />{pageArches(flipSnap.current.back.type)}</div>
              </div>
            )}

            {/* flechas dentro del libro */}
            <button className="alb-arrow left" disabled={current === 0 || !!flip} onClick={flipBackward} aria-label="Anterior">‹</button>
            <button className="alb-arrow right" disabled={current === SPREADS.length - 1 || !!flip} onClick={flipForward} aria-label="Siguiente">›</button>
          </div>
        </div>

        {/* progreso del libro + chips */}
        <div className="alb-book-track"><i style={{ width: `${(current / (SPREADS.length - 1)) * 100}%` }} /></div>
        <div className="chips">
          <button className={`chip${current === 0 ? " active" : ""}`} onClick={() => jumpTo(0)}>Tapa</button>
          <div className="chip-divider" />
          {SPREADS.slice(1).map((sp, i) => (
            <button key={sp.code} className={`chip${current === i + 1 ? " active" : ""}`} onClick={() => jumpTo(i + 1)}>{sp.label}</button>
          ))}
        </div>

        <div className="alb-soon">
          <span className="alb-soon-label">Próximamente</span>
          {COMING_SOON.map((c) => (<span key={c.code} className="alb-soon-pill"><i style={{ background: flagBg(c.code) }} />{c.name}</span>))}
        </div>
      </div>

      {/* ── modal: perfil de jugador ── */}
      {player && (
        <div className="alb-modal-bg" onClick={() => setPlayer(null)}>
          <div className="alb-modal" onClick={(e) => e.stopPropagation()}>
            <button className="alb-modal-x" onClick={() => setPlayer(null)} aria-label="Cerrar">✕</button>
            <FiguCard fig={{ key: `${player.code}-${player.p.n}`, code: player.code, team: "", n: player.p.n, name: player.p.name, pos: player.p.pos }} owned big />
            <div className="alb-modal-info">
              <div className="alb-modal-team"><i style={{ background: flagBg(player.code) }} />{SQUADS.find((s) => s.code === player.code)?.name}</div>
              <h3>{player.p.name}</h3>
              <div className="alb-modal-meta"><span>Dorsal <b>{player.p.n}</b></span><span>Posición <b>{player.p.pos}</b></span></div>
              <span className="alb-modal-tag" style={{ background: POS_COLOR[player.p.pos] }}>Figurita pegada ✓</span>
            </div>
          </div>
        </div>
      )}

      {/* ── apertura de pack (de a una) ── */}
      {pack && (
        <div className="alb-reveal-bg">
          <div className="alb-pack-scene">
            {pack.idx < 0 ? (
              <>
                <div className="alb-sobre" onClick={() => setPack((p) => p && { ...p, idx: 0 })}>
                  <span className="alb-sobre-tear" />
                  <div className="alb-sobre-face">
                    <div className="alb-sobre-logo">26</div>
                    <div className="alb-sobre-name">PACK · LA COBRA</div>
                    <div className="alb-sobre-sub">5 figuritas</div>
                  </div>
                </div>
                <button className="alb-next-btn" onClick={() => setPack((p) => p && { ...p, idx: 0 })}>Rasgá el sobre ✂</button>
              </>
            ) : (
              <>
                <div className="alb-dots">{pack.figs.map((_, i) => <i key={i} className={i <= pack.idx ? "on" : ""} />)}</div>
                <div className="alb-emerge" key={pack.idx}>
                  <span className="alb-emerge-burst" />
                  <FiguCard fig={cur!.fig} owned big />
                  <span className={"alb-emerge-tag " + (cur!.isNew ? "new" : "repe")}>{cur!.isNew ? "¡NUEVA!" : "REPETIDA"}</span>
                  <div className="alb-emerge-name">{cur!.fig.name} · {cur!.fig.team}</div>
                </div>
                <div className="alb-thumbs">
                  {pack.figs.map((r, i) => (
                    <span key={i} className={"alb-thumb" + (i < pack.idx ? " done" : i === pack.idx ? " cur" : "")} style={{ background: i <= pack.idx ? flagBg(r.fig.code) : undefined }} />
                  ))}
                </div>
                {pack.idx < 4
                  ? <button className="alb-next-btn" onClick={() => setPack((p) => p && { ...p, idx: p.idx + 1 })}>Siguiente <b>{pack.idx + 2}/5</b></button>
                  : <button className="alb-next-btn primary" onClick={closePack}>Pegar en el álbum</button>}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
