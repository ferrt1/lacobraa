"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FLAGS } from "@/components/ui";
import { GROUPS, KNOCKOUT, TEAMS } from "@/lib/fixture-data";
import type { Group } from "@/lib/fixture-data";

function flagBg(code: string) { return FLAGS[code]?.bg || "#333"; }
function flagName(code: string) { return FLAGS[code]?.n || TEAMS[code] || code.toUpperCase(); }
function shortName(code: string) {
  const name = flagName(code);
  if (name.length > 10) return code.toUpperCase();
  return name.toUpperCase();
}

function MiniFlag({ code, size = "md" }: { code: string; size?: "sm" | "md" | "lg" }) {
  const w = size === "sm" ? 18 : size === "lg" ? 30 : 22;
  const h = size === "sm" ? 12 : size === "lg" ? 20 : 15;
  return <span className="pf-flag" style={{ background: flagBg(code), width: w, height: h }} />;
}

type Page =
  | { type: "cover" }
  | { type: "group"; group: Group }
  | { type: "ko"; round: string; label: string }
  | { type: "final" }
  | { type: "champion" };

function buildPages(): Page[] {
  const pages: Page[] = [{ type: "cover" }];
  GROUPS.forEach(g => pages.push({ type: "group", group: g }));
  const koRounds = [
    { id: "r32", label: "32AVOS DE FINAL" },
    { id: "r16", label: "OCTAVOS DE FINAL" },
    { id: "qf", label: "CUARTOS DE FINAL" },
    { id: "sf", label: "SEMIFINALES" },
    { id: "final", label: "FINAL" },
  ];
  koRounds.filter(r => r.id !== "final").forEach(r => pages.push({ type: "ko", round: r.id, label: r.label }));
  pages.push({ type: "final" as const });
  pages.push({ type: "champion" });
  return pages;
}

function CoverPage() {
  return (
    <div className="pf-page-inner pf-cover-page">
      <div className="pf-cover-badge">FIFA WORLD CUP 2026</div>
      <h1 className="pf-cover-title">FIXTURE<br />MUNDIAL<br />2026</h1>
      <div className="pf-cover-hosts">
        <span>ESTADOS UNIDOS</span>
        <span className="pf-cover-dot" />
        <span>MEXICO</span>
        <span className="pf-cover-dot" />
        <span>CANADA</span>
      </div>
      <div className="pf-cover-dates">11 JUNIO — 19 JULIO</div>
      <div className="pf-cover-info">48 EQUIPOS · 12 GRUPOS · 104 PARTIDOS</div>
      <div className="pf-cover-brand">LA COBRA · 2026</div>
      <div className="pf-cover-hint">DESLIZA PARA VER LOS GRUPOS →</div>
    </div>
  );
}

function GroupPage({ group }: { group: Group }) {
  return (
    <div className="pf-page-inner">
      <div className="pf-page-top">
        <div className="pf-page-group-badge">GRUPO {group.name}</div>
        <span className="pf-page-sub">FASE DE GRUPOS · FIFA 2026</span>
      </div>

      <div className="pf-standings">
        <div className="pf-st-header">
          <span className="pf-st-pos">#</span>
          <span className="pf-st-team-h">EQUIPO</span>
          <span>PJ</span><span>PG</span><span>PE</span><span>PP</span>
          <span>GF</span><span>GC</span><span className="pf-st-pts-h">PTS</span>
        </div>
        {group.standings.map((s, i) => (
          <div key={s.code} className={`pf-st-row${i < 2 ? " qualified" : ""}`}>
            <span className="pf-st-pos">{i + 1}</span>
            <span className="pf-st-team">
              <MiniFlag code={s.code} />
              {shortName(s.code)}
            </span>
            <span>{s.pj}</span><span>{s.pg}</span><span>{s.pe}</span><span>{s.pp}</span>
            <span>{s.gf}</span><span>{s.gc}</span>
            <span className="pf-st-pts">{s.pts}</span>
          </div>
        ))}
      </div>

      <div className="pf-page-divider" />
      <div className="pf-page-section-label">PARTIDOS</div>

      <div className="pf-matches-list">
        {group.matches.map((m, i) => (
          <div key={i} className="pf-m">
            <span className="pf-m-date">{m.date}<br /><b>{m.time}</b></span>
            <div className="pf-m-home">
              <span>{shortName(m.home)}</span>
              <MiniFlag code={m.home} size="sm" />
            </div>
            <div className="pf-m-score">
              {m.scoreH != null ? `${m.scoreH} - ${m.scoreA}` : "vs"}
            </div>
            <div className="pf-m-away">
              <MiniFlag code={m.away} size="sm" />
              <span>{shortName(m.away)}</span>
            </div>
            <span className="pf-m-city">{m.city}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KOPage({ round, label }: { round: string; label: string }) {
  const matches = KNOCKOUT.filter(m => m.round === round);
  const few = matches.length <= 4;
  return (
    <div className={`pf-page-inner${few ? " pf-page-centered" : ""}`}>
      <div className="pf-page-top">
        <div className="pf-page-group-badge pf-ko-badge">{label}</div>
        <span className="pf-page-sub">ELIMINATORIAS · FIFA 2026</span>
      </div>

      <div className="pf-ko-list">
        {matches.map(m => (
          <div key={m.id} className="pf-ko-card">
            <div className="pf-ko-row">
              <div className="pf-ko-t">
                <MiniFlag code={m.home} />
                <span>{shortName(m.home)}</span>
              </div>
              <span className="pf-ko-s">{m.scoreH ?? "_"}</span>
            </div>
            <div className="pf-ko-row">
              <div className="pf-ko-t">
                <MiniFlag code={m.away} />
                <span>{shortName(m.away)}</span>
              </div>
              <span className="pf-ko-s">{m.scoreA ?? "_"}</span>
            </div>
            {m.penH != null && (
              <div className="pf-ko-pen">PEN {m.penH}-{m.penA}</div>
            )}
            <div className="pf-ko-info">{m.date} · {m.city}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinalPage() {
  const match = KNOCKOUT.find(m => m.round === "final");
  if (!match) return <div className="pf-page-inner pf-page-centered"><p>Por definir</p></div>;
  return (
    <div className="pf-page-inner pf-final-page">
      {/* anillo decorativo de fondo */}
      <div className="pf-final-ring" />
      <div className="pf-final-ring pf-final-ring-2" />

      <div className="pf-final-badge">FINAL</div>
      <div className="pf-final-label">FIFA WORLD CUP</div>
      <div className="pf-final-year">2026</div>
      <div className="pf-final-venue">{match.city.toUpperCase()} · {match.date}</div>

      <div className="pf-final-card">
        <div className="pf-final-side">
          <MiniFlag code={match.home} size="lg" />
          <span className="pf-final-name">{flagName(match.home).toUpperCase()}</span>
        </div>

        <div className="pf-final-center">
          <div className="pf-final-score">
            <span>{match.scoreH ?? "_"}</span>
            <span className="pf-final-dash">-</span>
            <span>{match.scoreA ?? "_"}</span>
          </div>
          {match.penH != null && (
            <div className="pf-final-pens">PEN {match.penH}-{match.penA}</div>
          )}
        </div>

        <div className="pf-final-side">
          <MiniFlag code={match.away} size="lg" />
          <span className="pf-final-name">{flagName(match.away).toUpperCase()}</span>
        </div>
      </div>

      <div className="pf-final-sub">LA COBRA · MUNDIAL 2026</div>
    </div>
  );
}

function ChampionPage() {
  const final = KNOCKOUT.find(m => m.round === "final");
  const winner = final ? ((final.scoreH ?? 0) > (final.scoreA ?? 0) ? final.home : final.away) : null;
  return (
    <div className="pf-page-inner pf-champ-page">
      <div className="pf-champ-label">CAMPEON DEL MUNDO</div>
      <div className="pf-champ-year">2026</div>
      {winner ? (
        <>
          <MiniFlag code={winner} size="lg" />
          <div className="pf-champ-name">{flagName(winner).toUpperCase()}</div>
        </>
      ) : (
        <div className="pf-champ-empty">?</div>
      )}
      {final && (
        <div className="pf-champ-result">
          {flagName(final.home)} {final.scoreH} - {final.scoreA} {flagName(final.away)}
          <br />{final.date} · {final.city}
        </div>
      )}
      <div className="pf-cover-brand">LA COBRA · MUNDIAL 2026</div>
    </div>
  );
}

function renderPage(page: Page) {
  switch (page.type) {
    case "cover": return <CoverPage />;
    case "group": return <GroupPage group={page.group} />;
    case "ko": return <KOPage round={page.round} label={page.label} />;
    case "final": return <FinalPage />;
    case "champion": return <ChampionPage />;
  }
}

function pageLabel(page: Page): string {
  switch (page.type) {
    case "cover": return "TAPA";
    case "group": return `GRUPO ${page.group.name}`;
    case "ko": return page.label;
    case "final": return "FINAL";
    case "champion": return "CAMPEON";
  }
}

export default function FixtureClient() {
  const PAGES = useState(() => buildPages())[0];
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<"next" | "prev" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goNext = useCallback(() => {
    if (current >= PAGES.length - 1) return;
    setDir("next");
    setTimeout(() => {
      setCurrent(c => c + 1);
      setDir(null);
    }, 350);
  }, [current, PAGES.length]);

  const goPrev = useCallback(() => {
    if (current <= 0) return;
    setDir("prev");
    setTimeout(() => {
      setCurrent(c => c - 1);
      setDir(null);
    }, 350);
  }, [current]);

  const jumpTo = useCallback((idx: number) => {
    if (idx === current || idx < 0 || idx >= PAGES.length) return;
    setDir(idx > current ? "next" : "prev");
    setTimeout(() => {
      setCurrent(idx);
      setDir(null);
    }, 350);
  }, [current, PAGES.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  // touch swipe
  const touchStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStart.current = null;
  };

  const page = PAGES[current];

  return (
    <div className="pf-fixture">
      {/* page chips */}
      <div className="pf-chips">
        <button
          className={`pf-chip${current === 0 ? " active" : ""}`}
          onClick={() => jumpTo(0)}
        >TAPA</button>
        {GROUPS.map((g, i) => (
          <button
            key={g.name}
            className={`pf-chip${current === i + 1 ? " active" : ""}`}
            onClick={() => jumpTo(i + 1)}
          >{g.name}</button>
        ))}
        <span className="pf-chip-sep" />
        {["32avos", "16avos", "4tos", "Semis", "Final"].map((l, i) => (
          <button
            key={l}
            className={`pf-chip${current === 13 + i ? " active" : ""}`}
            onClick={() => jumpTo(13 + i)}
          >{l}</button>
        ))}
        <button
          className={`pf-chip pf-chip-gold${current === PAGES.length - 1 ? " active" : ""}`}
          onClick={() => jumpTo(PAGES.length - 1)}
        >★</button>
      </div>

      {/* paper */}
      <div
        className="pf-paper-wrap"
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className={`pf-paper${dir ? ` pf-slide-${dir}` : ""}`}>
          {renderPage(page)}
          <div className="pf-paper-edge" />
        </div>
      </div>

      {/* nav */}
      <div className="pf-nav">
        <button className="pf-nav-btn" disabled={current === 0 || !!dir} onClick={goPrev}>
          ◀ ANTERIOR
        </button>
        <div className="pf-nav-info">
          <b>{pageLabel(page)}</b>
          <span>{current + 1} / {PAGES.length}</span>
          <div className="pf-progress">
            <i style={{ width: `${((current) / (PAGES.length - 1)) * 100}%` }} />
          </div>
        </div>
        <button className="pf-nav-btn" disabled={current === PAGES.length - 1 || !!dir} onClick={goNext}>
          SIGUIENTE ▶
        </button>
      </div>
    </div>
  );
}
