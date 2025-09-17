import React from "react";

import { cn } from "@/lib/utils";

export default function LandingWhyFxeeCardContainer({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  style
}: {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-start gap-5 shrink-0 self-stretch flex-[1_0_0] h-full p-5 select-none",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)',
        ...style
      }}
    >
      {children}
    </div>
  );
}
