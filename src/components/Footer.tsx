const EMBLEM = "/emblema-26.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand" style={{ gap: "12px" }}>
              <span className="brand-mark" style={{ width: "40px", height: "40px" }}>
                <img src={EMBLEM} style={{ height: "40px" }} alt="" />
              </span>
              <span className="brand-name">LA <span className="b-cobra">COBRA</span></span>
            </div>
            <p>Sitio de fans de La Cobra para el Mundial 2026. Hecho por la banda, para la banda. Sumate, metele y que gane el mejor.</p>
          </div>
          <div className="footer-cols">
            <div className="fcol">
              <h4>El Mundial</h4>
              <a href="#predicciones">Predicciones</a>
              <a href="#sorteos">Sorteos</a>
              <a href="#fixture">Fixture</a>
              <a href="#ranking">Ranking</a>
            </div>
            <div className="fcol">
              <h4>La banda</h4>
              <a href="#">Kick</a>
              <a href="#">Discord</a>
              <a href="#">Instagram</a>
              <a href="#">X / Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="disclaimer">
            <b>Sitio no oficial de fans.</b> No está afiliado a FIFA ni a Kick. Los sorteos y predicciones son de la comunidad de La Cobra.
          </span>
          <span>© 2026 · La banda de La Cobra</span>
        </div>
      </div>
    </footer>
  );
}
