import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md border border-atlas-line bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-atlas-green",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
