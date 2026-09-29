"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { useHeaderVisibility } from "@/hooks/useHeaderVisibility";
import { cn } from "@/lib/cn";
import { cta, languages, nav } from "@/data/site";

export default function Header() {
  const { hidden, scrolled } = useHeaderVisibility();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]",
        "transition-[transform,background-color] duration-700 ease-soft",
        "focus-within:translate-y-0",
        hidden && !menuOpen && "-translate-y-full",
        (scrolled || menuOpen) && "header-solid",
      )}
    >
      <div className="mx-auto flex h-header max-w-frame items-center justify-between px-gutter">
        {/* Navigation (Desktop) */}
        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="flex gap-[clamp(1.5rem,2.9vw,3.5rem)]">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link font-editorial text-nav font-light italic uppercase text-muted">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menü-Button (Mobile, abgeleitet – keine Mobile-Referenz vorhanden) */}
        <button
          type="button"
          className="font-editorial text-nav font-light italic uppercase text-black md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "Schließen" : "Menü"}
        </button>

        {/* Sprache + CTA */}
        <div className="flex items-center gap-[clamp(0.75rem,1.6vw,2rem)]">
          <div className="hidden items-center font-sans text-sm text-black sm:flex md:text-base" aria-label="Sprache">
            {languages.items.map((l, i) => (
              <span key={l.code} className="flex items-center">
                {i > 0 && <span aria-hidden className="mx-2 h-6 w-px bg-black" />}
                {languages.enabled ? (
                  <a href={l.lang === "de" ? "/" : `/${l.lang}`} hrefLang={l.lang} lang={l.lang} aria-current={l.active}>
                    {l.code}
                  </a>
                ) : (
                  <span lang={l.lang} aria-current={l.active || undefined}>
                    {l.code}
                  </span>
                )}
              </span>
            ))}
          </div>
          <Button href={cta.href}>{cta.label}</Button>
        </div>
      </div>

      {/* Mobile-Panel */}
      <nav
        id="mobile-nav"
        aria-label="Hauptnavigation mobil"
        hidden={!menuOpen}
        className="px-gutter pb-8 pt-2 md:hidden"
      >
        <ul className="flex flex-col gap-4">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-1 font-editorial text-4xl font-light italic uppercase text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
