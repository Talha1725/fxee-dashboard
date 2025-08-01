import React from "react";

import { cn } from "@/lib/utils";

export default function LandingATICardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-[380px] flex flex-col items-center gap-2.5 sm:gap-5 p-4 sm:p-5 self-stretch rounded-[15px] border border-white/5 bg-white/6 backdrop-blur-[16px] overflow-hidden select-none",
        className
      )}
    >
      {children}
    </div>
  );
}
