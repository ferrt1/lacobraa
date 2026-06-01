import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FixtureClient from "./FixtureClient";

export const metadata: Metadata = {
  title: "Fixture · La Cobra · Mundial 2026",
};

export default function FixturePage() {
  return (
    <>
      <section className="section" id="fixture" style={{ position: "relative", overflow: "hidden" }}>
        {/* Fondo anillos celestes */}
        <div className="bg-rings">
          <div className="glow tr" />
          <div className="glow bl" />
          <div className="rings">
            <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="400" cy="400" r="120" stroke="#4FB8E8" strokeWidth="1" opacity=".5" />
              <circle cx="400" cy="400" r="200" stroke="#4FB8E8" strokeWidth="1" opacity=".4" />
              <circle cx="400" cy="400" r="280" stroke="#4FB8E8" strokeWidth="1" opacity=".3" />
              <circle cx="400" cy="400" r="360" stroke="#4FB8E8" strokeWidth="1" opacity=".2" />
              <circle cx="400" cy="400" r="440" stroke="#4FB8E8" strokeWidth="1" opacity=".15" />
              <circle cx="400" cy="400" r="520" stroke="#4FB8E8" strokeWidth="1" opacity=".1" />
            </svg>
          </div>
        </div>

        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <div className="pf-section-head">
            <div className="pf-head-row">
              <div>
                <span className="label celeste">› FIXTURE</span>
                <h2 className="pf-head-title">
                  MUNDIAL <span className="accent">2026</span>
                </h2>
              </div>
              <div className="pf-head-meta">
                <span className="pf-head-sede">EE.UU. · México · Canadá</span>
                <span className="pf-head-dates">11 JUN — 19 JUL</span>
              </div>
            </div>
            <p className="pf-head-sub">
              48 equipos, 12 grupos, 104 partidos. Seguí el Mundial con la banda.
            </p>
          </div>
          <FixtureClient />
        </div>
      </section>
      <Footer />
    </>
  );
}
