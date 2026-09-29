// Alle Texte mit "PLATZHALTER" stammen 1:1 aus den Figma-Referenzen und werden später ersetzt.

export const site = {
  name: "CORIO",
  tagline: "Raum für Körperzeit",
  title: "CORIO – Raum für Körperzeit | Massage in Meran",
  description:
    "CORIO – Raum für Körperzeit. Massage, Körper und bewusste Zeit in Meran.", // TODO: Text vom Kunden freigeben lassen
};

export const nav = [
  { label: "Behandlungen", href: "#behandlungen" },
  { label: "Elke", href: "#elke" },
  { label: "Produkte", href: "#produkte" },
] as const;

export const cta = { label: "Jetzt Anfragen", href: "#termin" } as const;

// DE/IT ist in der Referenz sichtbar; solange nicht geklärt ist, ob die Seite zweisprachig wird,
// wird der Umschalter nur dargestellt (nicht interaktiv).
export const languages = {
  enabled: false,
  items: [
    { code: "DE", lang: "de", active: true },
    { code: "IT", lang: "it", active: false },
  ],
} as const;

export const hero = {
  // PLATZHALTER – Zeilenumbrüche wie in Referenz 02 (Desktop)
  headlineLines: [
    "Philosofie Titel:",
    "Das natürliche",
    "Gleichgewicht",
    "des Körpers",
    "braucht Zeit",
  ],
  // PLATZHALTER
  text: "Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eiusmod incididunt ut labore et dolore magna aliqua.",
  scrollLabel: "Scroll to explore",
  scrollTarget: "#philosophie",
};

export const elke = {
  title: ["Elke", "Meran"],
  text: "Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  statement: "Text: Das ist meine Profession",
};
export const appointment = {
  title: ["Termin", "vereinbaren"],
  text: "Text: Dein Termin wartet, Zeit für dich, Termin sichern, Buche deine Auszeit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
export const products = {
  title: ["Titel: Die Produkte", "Ätherische Öle"],
  sub: ["doTERRA - Certified Pure Tested", "Grade ätherische Öle"],
  text: "Die Schwarzfichte wurde traditionell von den Ureinwohnern Amerikas zur Förderung der Hautgesundheit und als Teil ihrer spirituellen Heilpraktiken verwendet und das Holz liefert ein kräftiges ätherisches Öl. Es wird aus den Blättern und Zweigen der Schwarzfichte (Picea mariana) destilliert. Nach einem anstrengendem Workout oder wenn Ihr Körper nach einer Wohltat verlangt, mischen Sie Black Spruce (Schwarzfichte) mit einem Trägeröl und massieren Sie es für ein beruhigendes und wohltuendes Erlebnis in die Haut.",
};
export const footer = {
  city: "Meran", address: ["Theaterplatz 21", "39012 Meran"], phone: "+39 0473 23 20 48", email: "info.meran@corio.bz.it",
  hoursTitle: "Öffnungszeiten",
  hours: [["Montag bis Donnerstag", "08:30 - 12:30 Uhr"], ["Freitag", "08:30 - 14:00 Uhr"]],
  instagram: "https://www.instagram.com/", // TODO: echte URL
  legal: [["Impressum", "/impressum"], ["Sitemap", "/sitemap"], ["Privacy", "/privacy"], ["Cookies", "/cookies"]],
};
