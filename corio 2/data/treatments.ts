// Positionen in % des Sektions-Frames (aus Referenz 04 gemessen, 1920px).
// Bildzuordnung ist vorläufig (Tiefenmassage, Kräuterstempel, Honig noch nicht bestätigt).
export type Treatment = {
  id: string; label: string; title: string; duration: string; text: string;
  image: string; thumb: string; x: number; y: number;
};
const text =
  "Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const t = (id: string, label: string, title: string, x: number, y: number): Treatment => ({
  id, label, title, duration: "Dauer: 60 min", text,
  image: `/images/treatments/${id}.webp`, thumb: `/images/treatments/${id}-thumb.webp`, x, y,
});
export const treatments: Treatment[] = [
  t("drainierend", "Drainierende\nMassage", "Drainierende\nMassage", 4.7, 10.6),
  t("wirbelsaeule", "Wirbelsäule\nin Balance", "Wirbelsäule\nin Balance", 19, 34),
  t("oele", "Massagen mit\nätherischen Ölen", "Massagen mit\nätherische Ölen", 34.7, 57.6),
  t("tiefen", "Tiefen-\nmassage", "Tiefen-\nmassage", 10.9, 77.5),
  t("kraeuter", "Kräuterstempel-\nmassage", "Kräuterstempel-\nmassage", 58.6, 22.5),
  t("honig", "Honig-\nmassage", "Honig-\nmassage", 81, 46),
  t("fussreflex", "Fussreflex-\nmassage", "Fussreflex-\nmassage", 61, 69),
];
// Plätze der übrigen Items im Detailzustand (Referenz 04, Detailblatt)
export const detailSlots = [
  { x: 4.7, y: 8 }, { x: 8, y: 80 }, { x: 58, y: 8 }, { x: 82, y: 44 }, { x: 60, y: 80 }, { x: 36, y: 88 },
];
