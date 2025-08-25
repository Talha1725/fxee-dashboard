import React from "react";

import { cn } from "@/lib/utils";

export default function AIEngineToolsCardContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("flex flex-col items-start gap-4 self-stretch bg-tab-light-gradient!", className)}
    >
      {children}
    </div>
  );
}
