"use client";

import React from "react";

import { Text10, Text12 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function DashboardStatusDetailBadge({
  icon,
  title,
  isVip,
  isPro,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  isVip?: boolean;
  isPro?: boolean;
  className?: string;
}) {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        `flex items-center justify-center gap-1 p-2 rounded-[10px] ${theme === "dark" ? "bg-card-weak-gradient" : "bg-black-gradient-light"}`,
        (isVip || isPro) && "opacity-50",
        className
      )}
    >
      {icon}
      <Text12 className="font-satoshi-medium dark:text-white text-black">{title}</Text12>
      {isVip && (
        <div className="flex justify-center items-center py-0.5 px-1.5 gap-2.5 rounded-[2px] dark:bg-green/10 bg-green/40">
          <Text10 className="dark:text-green text-[#079744] font-[700]">VIP</Text10>
        </div>
      )}
      {isPro && (
        <div className="flex justify-center items-center py-0.5 px-1.5 gap-2.5 rounded-[2px] dark:bg-green/10 bg-green/40">
          <Text10 className="dark:text-green text-[#079744] font-[700]">PRO</Text10>
        </div>
      )}
    </div>
  );
}
