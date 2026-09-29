import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Textlink mit feiner Underline, die sich von links nach rechts aufbaut. */
export default function TextLink({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn("link-underline", className)} {...props} />;
}
