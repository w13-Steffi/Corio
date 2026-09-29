"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import type { Treatment } from "@/data/treatments";
import { cta } from "@/data/site";

type Props = { treatment: Treatment; onPrev: () => void; onNext: () => void; onClose: () => void };

export default function TreatmentDetail({ treatment: t, onPrev, onNext, onClose }: Props) {
  const arrow = "flex h-9 w-[3.25rem] items-center justify-center rounded-full border border-black/70 text-sm transition-colors hover:bg-black hover:text-white";
  return (
    <>
      <div className="animate-[fadeUp_.8s_var(--ease-soft)_both] md:absolute md:left-[22%] md:top-[33%] md:w-[30%]">
        <h3 className="whitespace-pre-line font-editorial text-[clamp(1.6rem,2.1vw,2.6rem)] font-light italic uppercase leading-[1.05]">{t.title}</h3>
        <span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs text-white">{t.duration}</span>
        <p className="mt-4 max-w-[34em] text-[clamp(.8rem,.85vw,1rem)] leading-[1.5]">{t.text}</p>
        <div className="mt-6 flex items-center gap-2">
          <button type="button" onClick={onPrev} aria-label="Vorherige Behandlung" className={arrow}>←</button>
          <button type="button" onClick={onNext} aria-label="Nächste Behandlung" className={arrow}>→</button>
          <Button href={cta.href} size="sm" className="ml-2">{cta.label}</Button>
        </div>
      </div>
      <div className="relative aspect-[1/1.05] animate-[fadeIn_.9s_var(--ease-soft)_both] md:absolute md:left-[58%] md:top-[27%] md:w-[21%]">
        <Image src={t.image} alt={t.title.replace("\n", " ")} fill sizes="(min-width:768px) 21vw, 90vw" className="object-cover" />
        <button type="button" onClick={onClose} aria-label="Schließen" className="absolute -right-1 -top-7 text-sm md:-right-6 md:top-0">✕</button>
      </div>
    </>
  );
}
