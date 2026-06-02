import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { I } from "@/components/ui";
import { SORTEOS } from "@/lib/data";
import "./sorteos.css";

export const metadata: Metadata = {
  title: "Sorteos · La Cobra · Mundial 2026",
};

export default function SorteosPage() {
  const { palabra, premio, sorteadas, total, pasos, ganadores } = SORTEOS;
  const pct = Math.round((sorteadas / total) * 100);
  return (
    <>
      <section className="section" id="sorteos">
        <div className="wrap">
          <div className="section-head">
            <span className="label gold">Sorteos</span>
            <h2>40 PlayStation 5, una por día</h2>
            <p>
              Por cada día del Mundial, La Cobra sortea una {premio} entre la banda. Se participa gratis
              desde el chat de Kick — sin compra, sin vueltas.
            </p>
          </div>

          {/* palabra del día + progreso */}
          <div className="srt-hero">
            <div className="srt-word">
              <span className="srt-word-lab">Palabra de hoy</span>
              <span className="srt-word-val">{palabra}</span>
              <span className="srt-word-hint">Escribila en el chat mientras La Cobra está en vivo.</span>
            </div>
            <div className="srt-prog">
              <div className="srt-prog-top">
                <span className="srt-prog-num">{sorteadas}<span className="srt-prog-den"> / {total}</span></span>
                <span className="srt-prog-lab">PlayStations sorteadas</span>
              </div>
              <div className="ps-bar"><span style={{ width: pct + "%" }} /></div>
            </div>
          </div>

          {/* cómo participar */}
          <div className="srt-steps-head"><span className="label celeste">› Cómo participar</span></div>
          <div className="srt-steps">
            {pasos.map((p) => (
              <article key={p.n} className="srt-step">
                <span className="srt-step-n">{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </article>
            ))}
          </div>

          {/* ganadores */}
          <div className="srt-steps-head"><span className="label celeste">› Últimos ganadores</span></div>
          <div className="srt-winners">
            {ganadores.map((g) => (
              <div key={g.dia} className="srt-win">
                <span className="srt-win-day">Día {g.dia}<span className="srt-win-date"> · {g.fecha}</span></span>
                <span className="srt-win-user">{g.user}</span>
                <span className="srt-win-prize"><I.gift /> {premio}</span>
              </div>
            ))}
          </div>

          <p className="srt-legal">
            Sorteos sin obligación de compra. La participación se valida en el chat de Kick durante la
            transmisión. Los ganadores se anuncian al aire y se contactan por mensaje directo.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
