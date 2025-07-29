import React from "react";

import { Text12, Text14, Text20 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { IconLogo2, IconLogo3, IconLogo4 } from "@/components/ui/icon";

interface TradesDetailCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  change: string;
  isUSD: boolean;
  isIncreased: boolean;
  isBalance?: boolean;
}

export default function TradesDetailCard({
  icon,
  title,
  value,
  description,
  change,
  isUSD,
  isIncreased,
  isBalance = false,
}: TradesDetailCardProps) {
  return (
    <div
      className={cn(
        "relative flex items-start gap-2.5 flex-[1_0_0] py-3.5 px-3 rounded-[10px] border border-white/3 bg-card-green-gradient overflow-hidden",
        isBalance && "border-none border-green-gradient bg-trades-card-gradient"
      )}
    >
      {isBalance && (
        <IconLogo4
          width={103}
          height={137}
          className="absolute top-[-5px] right-[-10px] opacity-10"
        />
      )}
      <div className="flex flex-col gap-7 items-start justify-between self-stretch flex-[1_0_0]">
        <div className="flex items-center gap-1.5">
          <div className="flex justify-center items-center p-2 rounded-[8px] bg-button-grey-gradient">
            {icon}
          </div>
          <Text14>{title}</Text14>
        </div>
        <div className="flex flex-col items-start gap-0.5 self-stretch">
          <Text20>
            {value}
            {isUSD && <sup className="text-[12px]"> USD</sup>}
          </Text20>
          <div className="flex justify-between items-center self-stretch">
            <Text12 className="text-white/60 font-[400]">{description}</Text12>
            <Text12
              className={cn(
                "font-[400]",
                isIncreased ? "text-green" : "text-danger"
              )}
            >
              {change}
            </Text12>
          </div>
        </div>
      </div>
    </div>
  );
}
