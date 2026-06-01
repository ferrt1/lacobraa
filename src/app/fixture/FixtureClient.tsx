"use client";

import { useState } from "react";
import { Flag, FLAGS } from "@/components/ui";
import { GROUPS, KNOCKOUT, PHASES, TEAMS } from "@/lib/fixture-data";
import type { Group, KnockoutMatch } from "@/lib/fixture-data";
import Link from "next/link";

function TeamName({ code }: { code: string }) {
  return (
    <span className="fx-team-name">
      <Flag code={code} />
      <span>{FLAGS[code]?.n || TEAMS[code] || code}</span>
    </span>
  );
}

function GroupTable({ group }: { group: Group }) {
  return (
    <div className="fx-group">
      <div className="fx-group-header">
        <span className="label celeste">Grupo {group.name}</span>
      </div>

      <table className="fx-table">
        <thead>
          <tr>
            <th className="fx-th-team">Equipo</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>GF</th>
            <th>GC</th>
            <th className="fx-th-pts">PTS</th>
          </tr>
        </thead>
        <tbody>
          {group.standings.map((s, i) => (
            <tr key={s.code} className={i < 2 ? "fx-qualified" : ""}>
              <td className="fx-td-team">
                <span className="fx-pos">{i + 1}</span>
                <TeamName code={s.code} />
              </td>
              <td>{s.pj}</td>
              <td>{s.pg}</td>
              <td>{s.pe}</td>
              <td>{s.pp}</td>
              <td>{s.gf}</td>
              <td>{s.gc}</td>
              <td className="fx-td-pts">{s.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="fx-matches">
        {group.matches.map((m, i) => (
          <div className="fx-match" key={i}>
            <span className="fx-match-date">{m.date} · {m.time}</span>
            <div className="fx-match-row">
              <TeamName code={m.home} />
              <span className="fx-score">
                {m.scoreH !== null ? `${m.scoreH} - ${m.scoreA}` : "vs"}
              </span>
              <TeamName code={m.away} />
            </div>
            <span className="fx-match-city">{m.city}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KnockoutCard({ match }: { match: KnockoutMatch }) {
  const hasPens = match.penH != null;
  return (
    <div className="fx-ko-card">
      <div className="fx-ko-teams">
        <div className="fx-ko-team">
          <TeamName code={match.home} />
          <span className="fx-ko-score">{match.scoreH ?? "-"}</span>
        </div>
        <div className="fx-ko-team">
          <TeamName code={match.away} />
          <span className="fx-ko-score">{match.scoreA ?? "-"}</span>
        </div>
      </div>
      {hasPens && (
        <span className="fx-ko-pens">PEN {match.penH}-{match.penA}</span>
      )}
      <span className="fx-ko-meta">{match.date} · {match.city}</span>
    </div>
  );
}

function KnockoutBracket({ round }: { round: string }) {
  const matches = KNOCKOUT.filter((m) => m.round === round);
  const label = PHASES.find((p) => p.id === round)?.label || round;
  return (
    <div className="fx-ko-round">
      <h3 className="fx-ko-round-title">{label}</h3>
      <div className="fx-ko-grid">
        {matches.map((m) => (
          <KnockoutCard key={m.id} match={m} />
        ))}
      </div>
    </div>
  );
}

export default function FixtureClient() {
  const [phase, setPhase] = useState<string>("groups");

  return (
    <div className="fx-container">
      <div className="fx-phases">
        {PHASES.map((p) => (
          <button
            key={p.id}
            className={`fx-phase-btn${phase === p.id ? " active" : ""}`}
            onClick={() => setPhase(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {phase === "groups" && (
        <div className="fx-groups-grid">
          {GROUPS.map((g) => (
            <GroupTable key={g.name} group={g} />
          ))}
        </div>
      )}

      {phase !== "groups" && (
        <KnockoutBracket round={phase} />
      )}

      <div className="fx-cta">
        <Link href="/predicciones" className="btn btn-primary">
          Predecí los partidos
        </Link>
      </div>
    </div>
  );
}
