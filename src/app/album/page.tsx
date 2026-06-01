import type { Metadata } from "next";
import Footer from "@/components/Footer";
import AlbumClient from "./AlbumClient";
import "./album.css";

export const metadata: Metadata = {
  title: "Álbum · La Cobra · Mundial 2026",
};

export default function AlbumPage() {
  return (
    <>
      <section className="section" id="album">
        <div className="wrap">
          <div className="section-head">
            <span className="label celeste">Álbum</span>
            <h2>Figuritas del Mundial</h2>
            <p>
              Coleccioná a los convocados de las 48 selecciones. Mirando el stream de La Cobra
              desbloqueás packs — 5 figuritas cada uno — y completás el álbum con la banda.
            </p>
          </div>
          <AlbumClient />
        </div>
      </section>
      <Footer />
    </>
  );
}
