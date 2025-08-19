import React from "react";
import { Text16 } from "@/components/ui/typography";

export default function CopyTradingHowToItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li>
      <div className="flex flex-col items-start gap-[5px] self-stretch">
        <Text16 className="text-black dark:text-white font-satoshi-medium">{title}</Text16>
        <Text16 className="font-[400] flex-[1_0_0] text-black dark:text-white font-satoshi">{description}</Text16>
      </div>
    </li>
  );
}
