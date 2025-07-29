import React from "react";

import { cn } from "@/lib/utils";

export default function OnboardContentContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full mt-23 sm:mt-26 mb-10 flex flex-col items-center justify-center gap-10",
        className
      )}
    >
      {children}
    </div>
  );
}
