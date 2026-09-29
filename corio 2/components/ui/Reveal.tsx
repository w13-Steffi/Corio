"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Verzögerung in ms (für zeitversetztes Erscheinen) */
  delay?: number;
  /** Start-Versatz in px (Default 24) */
  y?: number;
  /** "view": beim Einscrollen, "load": direkt nach dem Laden (Hero) */
  trigger?: "view" | "load";
  threshold?: number;
  rootMargin?: string;
};

export default function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  y,
  trigger = "view",
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (trigger === "load") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trigger, threshold, rootMargin]);

  const style = {
    "--reveal-delay": `${delay}ms`,
    ...(y !== undefined ? { "--reveal-y": `${y}px` } : {}),
  } as CSSProperties;

  return createElement(
    as,
    { ref, className: cn("reveal", visible && "is-visible", className), style },
    children,
  );
}
