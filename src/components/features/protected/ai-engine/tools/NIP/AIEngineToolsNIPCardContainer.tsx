import React from "react";

import { cn } from "@/lib/utils";

export default function AIEngineToolsNIPCardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 p-4 self-stretch rounded-[16px] border border-white/5 bg-card-main-dashboard-gradient",
        className
      )}
    >
      {children}
    </div>
  );
}
