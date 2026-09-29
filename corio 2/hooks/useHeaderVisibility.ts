"use client";

import { useEffect, useState } from "react";

/**
 * hidden   → true beim Scrollen nach unten (nach dem Hero-Einstieg), false beim Hochscrollen
 * scrolled → true sobald die Seite vom Top weg ist (Header bekommt dann einen hellen Grund)
 */
export function useHeaderVisibility({ hideAfter = 120, delta = 8 } = {}) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = Math.max(window.scrollY, 0); // iOS-Gummiband ignorieren
      setScrolled(y > 24);
      if (Math.abs(y - lastY) > delta) {
        setHidden(y > lastY && y > hideAfter);
        lastY = y;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideAfter, delta]);

  return { hidden, scrolled };
}
