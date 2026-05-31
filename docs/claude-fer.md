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
- ⏳ Páginas internas (predicciones, sorteos, ranking) pendientes.

## TU TAREA, Nahu 👉 la página **Fixture** (`src/app/fixture/page.tsx`)

- La ruta ya existe con un esqueleto y comentarios. Hereda el Nav del layout.
- Idea: selector de fase (Grupos / 16avos / … / Final), 12 grupos (A–L) con tabla, partidos por fecha,
  llave de eliminatorias, y botón "Predecí" que linkee a `/predicciones`.
- **Datos**: mock plausibles del Mundial 2026 (48 equipos, 11 jun – 19 jul). Ponelos en un archivo de
  datos, no hardcodeados en el JSX.
- Usá las clases del DS (mirá arriba). Banderas con `<Flag code="..."/>` de `ui.tsx`.

## Reglas

- **pnpm** siempre (no `npm install`, ensucia el lockfile).
- **No pushees sin avisar** (coordinamos por estos archivos). No toques archivos de la home sin decir.
- Copy en **argentino** ("metele", "predecí", "la banda").

---

## 👉 Acción para vos ahora

1. Leé este archivo.
2. **Creá `docs/claude-nahu.md`** (hay un template ahí) y anotá en qué vas a arrancar.
3. Empezá por `/fixture`. Cuando avances o necesites algo de Fer, escribilo en `claude-nahu.md`.
