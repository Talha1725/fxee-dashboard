import React from "react";

import { cn } from "@/lib/utils";

export default function DashboardStatusDetailCardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-4 flex-[1_0_0] self-stretch rounded-[10px] bg-white/3 border border-white/4 p-5 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
