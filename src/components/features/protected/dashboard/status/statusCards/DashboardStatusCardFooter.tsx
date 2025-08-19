import React from "react";

import { Text12, Text14 } from "@/components/ui/typography";
import { IconTradeDown, IconTradeUp } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export default function DashboardStatusCardFooter({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="flex justify-between items-center self-stretch">
      <Text12 className="dark:text-white/60 text-black/60 font-satoshi">{title}</Text12>
      <div className="flex items-center gap-1 font-satoshi-medium">
        {value > 0 ? (
          <IconTradeUp width={18} height={18} color="var(--green)" />
        ) : (
          <IconTradeDown width={18} height={18} color="var(--danger)" />
        )}
        <Text14 className={cn("", value > 0 ? "text-green" : "text-danger")}>
          {value}%
        </Text14>
      </div>
    </div>
  );
}
