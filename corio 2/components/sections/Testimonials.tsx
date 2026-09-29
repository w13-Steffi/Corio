"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/cn";

/**
 * Referenz 06: Der Hintergrundtext ist keine Silhouette, sondern eine schlichte,
 * schmale Textspalte, die HINTER dem großen Zitat liegt und dort durchscheint,
 * wo keine Zitat-Buchstaben sind. Deshalb: eine statische Spalte, kein Blend-Mode,
 * niedrige Deckkraft, Zitat mit position:relative/z-index darüber.
 */
export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const x0 = useRef<number | null>(null);
  const go = (d: number) => setI((v) => (v + d + n) % n);
  const btn =
    "flex h-9 w-[3.25rem] items-center justify-center rounded-full border border-black/70 text-sm transition-colors hover:bg-black/10";

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Kundenstimmen"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "ArrowRight" ? go(1) : e.key === "ArrowLeft" ? go(-1) : null)}
      onPointerDown={(e) => (x0.current = e.clientX)}
      onPointerUp={(e) => {
        if (x0.current !== null && Math.abs(e.clientX - x0.current) > 50) go(e.clientX < x0.current ? 1 : -1);
        x0.current = null;
      }}
      className="relative isolate touch-pan-y overflow-hidden bg-primary md:aspect-[1920/1120] md:min-h-[34rem]"
    >
      {/* Hintergrund-Textspalte: fix, ohne Blend-Mode, geringe Deckkraft */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[33%] hidden w-[38%] opacity-[0.55] md:block">
        <Image src="/images/schiena-text.webp" alt="" fill sizes="38vw" className="object-cover" loading="lazy" />
      </div>

      <div className="relative min-h-[34rem] md:absolute md:inset-0 md:min-h-0">
        {testimonials.map((t, k) => (
          <figure
            key={k}
            aria-hidden={k !== i}
            aria-label={`${k + 1} von ${n}`}
            className={cn(
              "absolute inset-0 z-10 px-gutter pt-[8%] transition-[opacity,transform] duration-[700ms] ease-soft",
              k === i ? "opacity-100" : "pointer-events-none opacity-0",
              k === i ? "translate-x-0" : k < i ? "-translate-x-5" : "translate-x-5",
            )}
          >
            <blockquote className="max-w-[58%] font-editorial text-[clamp(1.5rem,3.4vw,4.3rem)] font-light italic uppercase leading-[1.1] max-md:max-w-full max-md:pt-16">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-[4%] text-[clamp(.75rem,.78vw,.95rem)]">{t.author}</figcaption>
          </figure>
        ))}
      </div>

      <p className="absolute right-[4.5%] top-[4%] z-10 text-xs" aria-live="polite">
        {i + 1}/{n}
      </p>
      <div className="absolute bottom-[5%] right-[4.5%] z-10 flex gap-2">
        <button type="button" className={btn} onClick={() => go(-1)} aria-label="Vorheriges Testimonial">
          ←
        </button>
        <button type="button" className={btn} onClick={() => go(1)} aria-label="Nächstes Testimonial">
          →
        </button>
      </div>
    </section>
  );
}
