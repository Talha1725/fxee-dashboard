import React from "react";

import { cn } from "@/lib/utils";

export default function DashboardStatusDetailSubcardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-1.5 self-stretch flex-[1_0_0] py-3.5 px-3 rounded-[10px] border border-white/6 bg-black/4",
        className
      )}
    >
      {children}
    </div>
  );
}
