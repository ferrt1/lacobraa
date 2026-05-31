const STATS = [
  { num: "1.2M", lab: "La banda", sub: "seguidores en Kick", celeste: true },
  { num: "—", lab: "Líder de la tabla", sub: "sin actividad todavía" },
  { num: "0", lab: "Predicciones jugadas", sub: "por la comunidad" },
  { num: "0/40", lab: "PlayStations sorteadas", sub: "una por día del Mundial", gold: true },
] as const;

export default function Stats() {
  return (
    <section className="stats" id="ranking">
      <div className="wrap" style={{ padding: 0 }}>
        <div className="stats-grid">
          {STATS.map((s) => (
            <div key={s.lab} className={"stat" + ("gold" in s && s.gold ? " gold" : "") + ("celeste" in s && s.celeste ? " celeste" : "")}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lab">{s.lab}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
