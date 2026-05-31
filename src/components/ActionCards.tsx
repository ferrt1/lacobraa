import { I } from "./ui";
import PredDemo from "./PredDemo";

const CARDS = [
  { id: "predicciones", icon: "target", num: "01", t: "Predicciones", d: "Predecí los partidos en vivo, sumá puntos con cada acierto y trepá en el ranking de la banda.", go: "Predecir ahora", demo: true },
  { id: "sorteos", icon: "gift", num: "02", t: "Sorteos", d: "40 PlayStations 5 — una por cada día del Mundial. Participás con la palabra clave en el chat de Kick.", go: "Cómo participar", gold: true, ps: true },
  { id: "fixture", icon: "fixture", num: "03", t: "Fixture", d: "Los 48 equipos, 12 grupos y todos los cruces. Del 11 de junio al 19 de julio, ordenado y claro.", go: "Ver fixture", tag: "48 equipos" },
  { id: "ranking", icon: "rank", num: "04", t: "Ranking", d: "La tabla de la comunidad. El que más la pega, manda. Subí, defendé tu puesto y picanteá el chat.", go: "Ver ranking", tag: "En vivo" },
] as const;

export default function ActionCards() {
  return (
    <section className="section" id="predicciones">
      <div className="wrap">
        <div className="section-head">
          <span className="label celeste">Qué podés hacer</span>
          <h2>Todo el Mundial, en un solo lugar</h2>
          <p>Cuatro formas de vivir la Copa con la banda. Mirás el stream, participás y todo suma.</p>
        </div>
        <div className="cards-grid">
          {CARDS.map((c) => {
            const Icon = I[c.icon as keyof typeof I];
            return (
              <article key={c.id} id={c.id} className={"qcard" + ("gold" in c && c.gold ? " gold" : "")}>
                <div className="qcard-top">
                  <span className="qicon"><Icon /></span>
                  <span className="qcard-num">{c.num}</span>
                </div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
                {"demo" in c && c.demo && <PredDemo />}
                {"ps" in c && c.ps && (
                  <div className="ps-bar"><span style={{ width: "2%" }} /></div>
                )}
                <div className="q-meta">
                  <span className="q-go">{c.go} <I.arrow /></span>
                  {"tag" in c && c.tag && <span className="q-tag">{c.tag}</span>}
                  {"ps" in c && c.ps && <span className="q-tag">0 / 40 sorteadas</span>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
