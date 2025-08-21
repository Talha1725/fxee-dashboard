"use client";
import React from "react";

import { Text12, Text14 } from "@/components/ui/typography";
import { IconTradeDown, IconTradeUp } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function DashboardStatusCardFooter({
  title,
  value,
  icon = true,
}: {
  title: string;
  value: number;
  icon?: boolean;
}) {
  const { theme } = useTheme();
  return (
    <div className="flex justify-between items-center self-stretch">
      <Text12 className="dark:text-white/60 text-black/60 font-satoshi">{title}</Text12>
      <div className="flex items-center gap-1 font-satoshi-medium">
        {icon ? value > 0 ? (
          <IconTradeUp width={18} height={18} color={theme === "dark" ? "var(--green)" : "#079744"} />
        ) : (
          <IconTradeDown width={18} height={18} color={theme === "dark" ? "var(--danger)" : "#EA4335"} />
        ) : null}
        <Text14 className={cn("", value > 0 ? "dark:text-green text-[#079744]" : "dark:text-danger text-[#EA4335] ")}>
          {value}%
        </Text14>
      </div>
    </div>
  );
}
