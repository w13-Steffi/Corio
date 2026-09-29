import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Common = { children: ReactNode; className?: string; variant?: "primary" | "outline"; size?: "md" | "sm" };
type AsAnchor = Common & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">;
type AsButton = Common & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

/**
 * Hover wächst NUR horizontal (mehr Innenabstand links/rechts). Höhe bleibt fix.
 * Keine Skalierung, kein Schatten, kein Farbwechsel – siehe Referenz-Asset.
 */
const base = "btn font-sans text-base md:text-lg leading-none";
const variants = { primary: "btn-primary", outline: "btn-outline" };
const sizes = { md: "", sm: "btn-sm" };

export default function Button(props: AsAnchor | AsButton) {
  const classes = cn(base, variants[props.variant ?? "primary"], sizes[props.size ?? "md"], props.className);

  if (props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children, ...anchor } = props;
    return (
      <a className={classes} {...anchor}>
        {children}
      </a>
    );
  }
  const { variant: _v, size: _s, className: _c, children, ...button } = props;
  return (
    <button type="button" className={classes} {...button}>
      {children}
    </button>
  );
}
