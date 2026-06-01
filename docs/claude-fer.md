# claude-fer — notas de Fer para el equipo 👋 (leé esto, Nahu)

Este archivo lo mantiene **Fer** (y su Claude). **Vos, Nahu, lo leés** para saber qué pasa.
Vos a tu vez mantenés **`docs/claude-nahu.md`**, que **Fer lee**. Así nos coordinamos sin pisarnos.

> 📌 **Cómo funciona la coordinación**
> - **Fer** escribe acá (`claude-fer.md`): estado, decisiones, qué necesita de Nahu.
> - **Nahu** escribe en `claude-nahu.md`: en qué está, qué hizo, qué necesita de Fer, dudas.
> - Antes de ponerte a laburar, **leé el otro archivo**. Cuando termines algo, **anotalo en el tuyo**.

---

## Qué es el proyecto

Maqueta (solo front) del sitio de la comunidad del streamer **La Cobra** para el **Mundial 2026**:
predicciones, sorteos (40 PlayStations), fixture y ranking. Es un **pitch para mostrarle** — sin backend
todavía, datos mock. Sitio de fans, no oficial.

## Stack y CÓMO CORRER

- **Next.js 15 + React 19 + TypeScript**. Usamos **pnpm** (no npm).
```bash
pnpm install   # primera vez
pnpm dev       # http://localhost:3000
pnpm build     # para chequear que no rompiste nada
```

## Sistema de diseño (IMPORTANTE — no inventes otro estilo)

El look salió de **Claude Design** y está porteado. **NO usamos Tailwind.** Todo el estilo vive en
`src/app/globals.css` con clases propias. Reusá esas clases:
- Layout: `.wrap` (contenedor centrado), `.section`, `.section-head`, `.label` / `.label.celeste`.
- Cards: `.qcard`, paneles con `var(--panel)` y `var(--border)`.
- Botones: `.btn .btn-primary`, `.btn-kick`, `.btn-ghost`.
- Colores (CSS vars): `--celeste #4FB8E8`, `--midnight #070B16`, `--panel #0E1426`, `--gold #F1C24B`, verde Kick `#53FC18`.
- Fuentes: **Anton** (titulares), **Archivo** (nav/botones/h2), **Nunito** (texto).
- Banderas y íconos: helpers en `src/components/ui.tsx` (`<Flag code="ar"/>`, `I.target`, etc.).

Mirá la **home** (`src/app/page.tsx` + componentes en `src/components/`) como referencia de estilo.

## Estado actual (lo hizo Fer + Claude)

- ✅ **Home** completa (Nav, Bunting, Hero, Countdown, ActionCards, Stats, Footer).
- ✅ Sistema de diseño en `globals.css`. Nav persiste desde `src/app/layout.tsx`.
- ✅ **Fixture** lo hiciste vos (gracias 🙌). Quedó funcional.
- ✅ **Hero rediseñado a fondo** — ahora es una escena de **estadio de noche con un arco de fútbol**
  (ver sección de abajo). Entra todo en una pantalla, fondo continuo, mobile contemplado.
- 🔜 **Fer arranca `/album`** (solo diseño). **No lo toques** — es la página de Fer.
- ⏳ Pendientes: predicciones, sorteos, ranking, perfil.

## ⚠️ Hero / "el campo" — arquitectura (NO lo rompas, Nahu)

Esto es lo más delicado de la home. Si tocás la home, **no metas mano acá sin avisar**:

- **`src/app/page.tsx`** envuelve `Bunting + Hero + Countdown` en un **`.fieldzone`**: un solo fondo
  continuo (cielo estrellado arriba → pasto abajo), sin franjas. `min-height: calc(100vh - nav)` →
  ocupa toda la pantalla.
- **`src/components/Hero.tsx`**: fondo de **estrellas** (generadas con PRNG determinista — no usar
  `Math.random` directo o rompe la hidratación de Next) + **reflector** (`.hero-beam`, cono de luz al
  arco). El hero sube con `margin-top:-56px` para meterse bajo los banderines.
- **`src/components/GoalFrame.tsx`**: el **arco SVG** (marco, red en perspectiva, postes plantados).
  La red se genera por JS en un `useEffect`; las grillas de techo/costados/fondo/piso están **alineadas**
  entre sí (no las desalinees). El **pasto** (`.goal-floor`) es full-bleed y sale del arco.
- El contenido (texto + copa) va **dentro de la boca** del arco vía `.goal-content` (absoluto, en
  coords del viewBox). En **mobile** el marco SVG se oculta y el contenido se apila (ver media query).
- Tamaño del arco topeado por altura (`100vh - 320px`) para que **todo entre sin scroll**.

Regla de diseño que costó: **restricción**. Nada de confeti/papelitos/glows de más — Fer rechazó 2
versiones por "muy IA". Lo festivo lo dan los banderines y nada más.

## Reglas

- **pnpm** siempre (no `npm install`, ensucia el lockfile).
- **No pushees sin avisar** (coordinamos por estos archivos). No toques archivos de la home sin decir.
- Copy en **argentino** ("metele", "predecí", "la banda").

---

## 👉 Acción para vos ahora

1. Leé este archivo (sobre todo la sección del **Hero/campo** — no lo rompas).
2. **Fer está en `/album` (solo diseño) — no la toques.**
3. Si seguís con otra página interna, avisá en `claude-nahu.md` cuál agarrás para no pisarnos.
4. Reusá el sistema de diseño de `globals.css`. Cualquier cambio a la **home** o a `globals.css`,
   coordiná primero (ese archivo lo compartimos).
