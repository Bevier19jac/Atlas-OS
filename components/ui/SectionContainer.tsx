import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function SectionContainer({ children, className, ...props }: SectionContainerProps) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </section>
  );
}
