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
        <Text16>{title}</Text16>
        <Text16 className="font-[400] flex-[1_0_0]">{description}</Text16>
      </div>
    </li>
  );
}
