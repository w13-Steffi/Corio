"use client";

import { useEffect, useRef } from "react";
import Logo from "@/components/ui/Logo";
import Reveal from "@/components/ui/Reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { hero } from "@/data/site";

/**
 * Hero – Referenz 02.
 * Video füllt die Fläche (cover), Inhalt liegt darüber. Ladereihenfolge:
 * Logo (300ms) → Headline zeilenweise (900ms+) → Textblock (1700ms) → Scroll-Hinweis (2200ms).
 */
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Reduced Motion: Video anhalten (Poster bleibt sichtbar)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) v.pause();
    else v.play().catch(() => {});
  }, [reduced]);

  // Sehr subtile Tiefenwirkung: Inhalt läuft ~6 % langsamer als die Seite. Video bleibt stabil.
  useEffect(() => {
    const el = contentRef.current;
    if (!el || reduced) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = Math.min(window.scrollY, window.innerHeight);
      el.style.transform = `translate3d(0, ${y * 0.06}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section id="top" aria-label="Einleitung" className="relative isolate min-h-[100svh] overflow-hidden bg-[#c4cac9]">
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/video/hero.webm" type="video/webm; codecs=vp9" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div ref={contentRef} className="relative flex min-h-[100svh] flex-col will-change-transform">
        <div className="mx-auto flex w-full max-w-frame flex-1 flex-col px-gutter pb-[max(1.5rem,3svh)]">
          {/* Logo – mittig */}
          <div className="flex justify-center pt-[clamp(6rem,19svh,16rem)]">
            <Reveal trigger="load" delay={300} y={16} className="w-[clamp(11rem,17vw,20.4rem)] text-black">
              <Logo className="h-auto w-full" />
            </Reveal>
          </div>

          {/* Headline links, Textblock rechts unten */}
          <div className="mt-12 flex flex-1 flex-col justify-end gap-10 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-8">
            <h1 className="font-editorial text-display font-light italic uppercase text-black md:mb-[clamp(0rem,25svh,20rem)]">
              {hero.headlineLines.map((line, i) => (
                <Reveal key={line} as="span" trigger="load" delay={900 + i * 140} className="block whitespace-nowrap">
                  {line}
                </Reveal>
              ))}
            </h1>

            <Reveal
              as="p"
              trigger="load"
              delay={1700}
              className="max-w-[11em] self-end text-right font-editorial text-statement font-light italic uppercase text-black"
            >
              {hero.text}
            </Reveal>
          </div>
        </div>

        {/* Scroll to explore – rechts auf halber Höhe (Desktop) */}
        <Reveal
          trigger="load"
          delay={2200}
          y={10}
          className="absolute right-gutter top-[43%] hidden md:block"
        >
          <a
            href={hero.scrollTarget}
            className="link-underline font-editorial text-label font-light italic uppercase text-black"
          >
            {hero.scrollLabel} <span aria-hidden>↓</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
