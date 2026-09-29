"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import TreatmentDetail from "./TreatmentDetail";
import { detailSlots, treatments } from "@/data/treatments";
import { cn } from "@/lib/cn";

/** Referenz 04: freie Komposition (Desktop, Positionen in %), Detail öffnet im selben Bereich. */
export default function Treatments() {
  const [active, setActive] = useState<number | null>(null);
  const open = active !== null;
  const others = treatments.filter((_, i) => i !== active);

  return (
    <section id="behandlungen" aria-label="Behandlungen"
      className="relative isolate aspect-[3/4] overflow-hidden bg-[#c9b394] px-gutter py-10 sm:aspect-[16/10] md:aspect-[16/9] md:min-h-[36rem] md:p-0">
      {/* aspect-ratio ist bewusst auf JEDEM Breakpoint gesetzt: ohne feste Höhe kollabiert das
          absolut positionierte Bild darunter, und der Bereich wird beim Öffnen der Detailansicht weiß. */}
      <Image src="/images/dunes.webp" alt="" fill sizes="100vw" priority className="pointer-events-none object-cover" />

      <div className="relative z-10 flex flex-col gap-6 md:contents">
        {open && (
          <TreatmentDetail key={active} treatment={treatments[active]}
            onPrev={() => setActive((active + treatments.length - 1) % treatments.length)}
            onNext={() => setActive((active + 1) % treatments.length)}
            onClose={() => setActive(null)} />
        )}

        {treatments.map((t, i) => {
          if (i === active) return null;
          const slot = open ? detailSlots[others.indexOf(t)] : { x: t.x, y: t.y };
          return (
            <button key={t.id} type="button" onClick={() => setActive(i)} aria-label={t.label.replace("\n", " ")}
              style={{ "--x": `${slot.x}%`, "--y": `${slot.y}%` } as CSSProperties}
              className={cn("group flex items-start gap-3 text-left md:absolute md:left-[var(--x)] md:top-[var(--y)]",
                "transition-[left,top,opacity,color] duration-[900ms] ease-soft",
                i % 2 && "ml-[30%] md:ml-0", open ? "text-black/40" : "text-black")}>
              <span className="relative block h-[clamp(3.5rem,6.9vw,8.3rem)] w-[clamp(3.3rem,6.6vw,8rem)] shrink-0 overflow-hidden">
                <Image src={t.thumb} alt="" fill sizes="130px" className="object-cover transition-transform duration-500 ease-soft group-hover:scale-110" loading="lazy" />
              </span>
              <span className="whitespace-pre-line font-editorial text-[clamp(.85rem,1.15vw,1.4rem)] font-light italic uppercase leading-[1.05] transition-colors group-hover:text-black">
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
