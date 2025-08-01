import React from "react";

import { cn } from "@/lib/utils";

export default function LandingMax1440Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center px-5 lg:px-10 max-w-[1440px] w-full h-full mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
