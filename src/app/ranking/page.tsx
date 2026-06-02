import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { RANKING } from "@/lib/data";
import "./ranking.css";

export const metadata: Metadata = {
  title: "Ranking · La Cobra · Mundial 2026",
};

function initials(user: string) {
  return user.replace("@", "").slice(0, 2).toUpperCase();
}

export default function RankingPage() {
  const top3 = RANKING.slice(0, 3);
  const rest = RANKING.slice(3);
  return (
    <>
      <section className="section" id="ranking">
        <div className="wrap">
          <div className="section-head">
            <span className="label celeste">Ranking</span>
            <h2>La tabla de la banda</h2>
            <p>
              Cada acierto en las predicciones suma puntos. El que más la pega, manda. Subí, defendé tu
              puesto y picanteá el chat — se actualiza partido a partido.
            </p>
          </div>

          {/* podio */}
          <div className="rk-podium">
            {top3.map((p) => (
              <div key={p.pos} className={"rk-pod rk-pod-" + p.pos}>
                <span className="rk-pod-medal">{p.pos === 1 ? "1°" : p.pos === 2 ? "2°" : "3°"}</span>
                <span className="rk-avatar">{initials(p.user)}</span>
                <span className="rk-pod-user">{p.user}</span>
                <span className="rk-pod-pts">{p.pts.toLocaleString("es-AR")}<span> pts</span></span>
                <span className="rk-pod-ac">{p.aciertos} aciertos</span>
              </div>
            ))}
          </div>

          {/* tabla */}
          <div className="rk-table">
            <div className="rk-row rk-head">
              <span>#</span>
              <span>Jugador</span>
              <span className="rk-col-ac">Aciertos</span>
              <span className="rk-col-rc">Racha</span>
              <span className="rk-col-pts">Puntos</span>
            </div>
            {rest.map((p) => (
              <div key={p.pos} className="rk-row">
                <span className="rk-pos">{p.pos}</span>
                <span className="rk-user"><span className="rk-avatar sm">{initials(p.user)}</span>{p.user}</span>
                <span className="rk-col-ac">{p.aciertos}</span>
                <span className="rk-col-rc">{p.racha > 0 ? <span className="rk-rc-hot">{p.racha} al hilo</span> : <span className="rk-rc-off">—</span>}</span>
                <span className="rk-col-pts">{p.pts.toLocaleString("es-AR")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
