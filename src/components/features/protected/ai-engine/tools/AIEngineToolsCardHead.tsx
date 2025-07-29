import React from "react";

import { Text14, Text16 } from "@/components/ui/typography";

export default function AIEngineToolsCardHead({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2 self-stretch">
      <div className="flex justify-center items-center gap-[3px] p-[7px] bg-button-grey-gradient rounded-[7px]">
        {icon}
      </div>
      <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
        <Text16>{title}</Text16>
        <Text14 className="text-white/80 self-stretch font-[400]">
          {description}
        </Text14>
      </div>
    </div>
  );
}
