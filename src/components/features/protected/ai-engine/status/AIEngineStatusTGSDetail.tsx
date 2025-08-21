import React from "react";

import { cn } from "@/lib/utils";
import { Text12, Text16 } from "@/components/ui/typography";

export default function AIEngineStatusTGSDetail({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="flex justify-center items-center gap-2 self-stretch flex-[1_0_0] p-2 sm:p-2.5 rounded-[10px] border border-white/2 bg-dark-gradient">
      <div className="flex flex-col items-start gap-1.5 flex-[1_0_0]">
          <Text12 className="text-[#FFFFFF] dark:[#FFFFFF]">{title}</Text12>
        <Text16 className={cn("text-green", className)}>{value}</Text16>
      </div>
    </div>
  );
}
