import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "LA COBRA · Mundial 2026",
  description:
    "Viví el Mundial 2026 con la banda de La Cobra. Predicciones, sorteos de 40 plays, fixture en vivo y el ranking de la comunidad.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
