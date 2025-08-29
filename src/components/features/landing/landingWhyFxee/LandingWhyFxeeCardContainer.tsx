import React from "react";

import { cn } from "@/lib/utils";

export default function LandingWhyFxeeCardContainer({
  children,
  className,
  onMouseEnter,
  onMouseLeave
}: {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-start gap-5 shrink-0 self-stretch flex-[1_0_0] h-full p-5 bg-hero-card-gradient border-grey-linear hover-card-green-gradient transition-all duration-300 select-none min-w-[320px]",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
