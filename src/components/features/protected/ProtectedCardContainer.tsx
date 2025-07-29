import React from "react";

import { cn } from "@/lib/utils";

export default function ProtectedCardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-5 p-4 sm:p-5 self-stretch flex-[1_0_0] rounded-[16px] border border-white/5 overflow-hidden min-h-[410px] sm:min-h-[471px]",
        className
      )}
    >
      {children}
    </div>
  );
}
