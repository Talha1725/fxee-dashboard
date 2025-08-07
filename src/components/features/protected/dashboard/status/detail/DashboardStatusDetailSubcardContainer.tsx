"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function DashboardStatusDetailSubcardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        `flex flex-col items-start gap-1.5 self-stretch flex-[1_0_0] py-3.5 px-3 rounded-[10px] border border-white/6 ${theme === "dark"? "!bg-black/4" : "bg-black-gradient-light"}`,
        className
      )}
    >
      {children}
    </div>
  );
}
