import React from "react";

import { cn } from "@/lib/utils";

export default function OnboardCardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start self-stretch gap-2.5 p-5 sm:p-6 rounded-[10px] bg-white/3 border border-white/30",
        className
      )}
    >
      {children}
    </div>
  );
}
