import { FLAGS } from "./ui";

export default function Bunting({ intensity = 1 }: { intensity?: number }) {
  const order = ["ar", "es", "mx", "uy", "co", "cl", "pe", "br", "fr", "de", "nl", "pt", "hr", "jp", "us", "ca"];
  const n = order.length;
  const pad = 3; // % de margen lateral
  const amp = 15 * intensity;
  const sag = (x: number) => 5 + amp * Math.sin(Math.PI * x); // px de descenso (drape)

  let d = "";
  for (let i = 0; i <= 40; i++) {
    const x = i / 40;
    const X = pad + x * (100 - 2 * pad);
    const Y = sag(x);
    d += (i === 0 ? "M" : "L") + X.toFixed(2) + " " + Y.toFixed(2) + " ";
  }

  return (
    <div className="bunting" style={{ opacity: 0.55 + 0.45 * Math.min(intensity, 1) }} aria-hidden="true">
      <svg className="string" viewBox="0 0 100 56" preserveAspectRatio="none">
        <path d={d} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
      </svg>
      {order.map((code, i) => {
        const x = i / (n - 1);
        const left = pad + x * (100 - 2 * pad);
        const top = sag(x);
        return (
          <span
            key={code}
            className="pennant"
            style={{
              left: `calc(${left}% - 10px)`,
              top: top + "px",
              background: FLAGS[code].bg,
              animationDelay: i * 0.13 + "s",
            }}
            title={FLAGS[code].n}
          />
        );
      })}
    </div>
  );
}
