# CORIO – Raum für Körperzeit

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3.4

```bash
npm install
npm run dev      # http://localhost:3000
```

## Stand
Schritt 2–6: Gerüst, Header, Hero, Philosophie, Behandlungen, Elke, Testimonials, Termin, Produkte, Footer.

## Fonts
`lib/fonts.ts`: Inter ist final. Der Editorial-Font ist ein **Platzhalter (Newsreader Light Italic)**.
TT Ramillas: `.woff2` nach `public/fonts/` legen und den Block in `lib/fonts.ts` gegen `localFont` tauschen (Anleitung im Kommentar).

## Assets (public/)
- `video/hero.webm|mp4` – aus dem HEVC-Original neu kodiert (H.264 / VP9, ohne Ton), `images/hero-poster.jpg` als Poster
- `images/dunes.webp`, `termin-1|2.webp`, `elke.webp` (freigestellt, zugeschnitten), `schiena-text.webp` (Textmasse mit Alpha)
- `images/products-placeholder.png` – **Platzhalter in zu geringer Auflösung (358×225)**
- `images/corio-logo.svg` (Original), Logo als Komponente: `components/ui/Logo.tsx` (currentColor)
- `icons/instagram.svg`

## Struktur
`app/` Layout/Seite/Tokens · `components/{layout,sections,ui}` · `data/` Inhalte · `hooks/` · `lib/`
Design-Tokens: `app/globals.css` (`--color-*`, `--gutter`, `--header-h`) → `tailwind.config.ts`.
