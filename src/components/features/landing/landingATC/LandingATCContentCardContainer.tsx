import { cn } from "@/lib/utils";
import React from "react";

export default function LandingATCContentCardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-start gap-2.5 sm:gap-4 p-2.5 sm:p-4 self-stretch rounded-[10px] bg-landing-atc-gradient overflow-hidden select-none",
        className
      )}
    >
      {children}
    </div>
  );
}
