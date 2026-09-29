import { Inter, Newsreader } from "next/font/google";

/**
 * Functional Font: Inter (final).
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Editorial Font: TEMPORÄRER PLATZHALTER (Newsreader Light Italic),
 * bis die TT-Ramillas-Dateien vorliegen.
 *
 * Austausch – diese Zeilen ersetzen durch:
 *
 *   import localFont from "next/font/local";
 *   export const editorial = localFont({
 *     src: [{ path: "../public/fonts/TTRamillasTrial-LightItalic.woff2", weight: "300", style: "italic" }],
 *     variable: "--font-editorial",
 *     display: "swap",
 *   });
 *
 * Alles andere bleibt unverändert (Variable --font-editorial).
 */
export const editorial = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300"],
  variable: "--font-editorial",
  display: "swap",
});
