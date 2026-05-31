import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fixture · La Cobra · Mundial 2026",
};

// ───────────────────────────────────────────────────────────────────────
// PÁGINA FIXTURE — esqueleto (la trabaja el amigo).
// Hereda el sidebar/nav del layout y el sistema visual (styles en globals.css).
// Clases útiles del DS: .wrap .section .section-head .label .qcard .panel ...
// Datos: mock; equipos/resultados plausibles del Mundial 2026.
// ───────────────────────────────────────────────────────────────────────

export default function FixturePage() {
  return (
    <>
      <section className="section" id="fixture">
        <div className="wrap">
          <div className="section-head">
            <span className="label celeste">Fixture</span>
            <h2>El fixture del Mundial</h2>
            <p>Los 48 equipos, 12 grupos y todos los cruces. Del 11 de junio al 19 de julio. (En construcción — arrancá desde acá.)</p>
          </div>
          <div className="qcard" style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
            <p>🏗️ Acá va el fixture. Mirá los comentarios en <code style={{ color: "var(--celeste)" }}>src/app/fixture/page.tsx</code>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
