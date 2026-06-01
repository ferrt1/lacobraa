import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FixtureClient from "./FixtureClient";

export const metadata: Metadata = {
  title: "Fixture · La Cobra · Mundial 2026",
};

export default function FixturePage() {
  return (
    <>
      <section className="section" id="fixture">
        <div className="wrap">
          <div className="section-head">
            <span className="label celeste">Fixture</span>
            <h2>Mundial 2026</h2>
            <p>
              48 equipos, 12 grupos, del 11 de junio al 19 de julio.
              Seguí todos los partidos y predecí los resultados con la banda.
            </p>
          </div>
          <FixtureClient />
        </div>
      </section>
      <Footer />
    </>
  );
}
