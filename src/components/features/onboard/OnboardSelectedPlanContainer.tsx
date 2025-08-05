import { cn } from "@/lib/utils";
import React from "react";

export default function OnboardSelectedPlanContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-5 p-5 sm:p-6 rounded-[10px] bg-white/3 border border-white/30 relative",
        className
      )}
    >
      {children}
    </div>
  );
}
