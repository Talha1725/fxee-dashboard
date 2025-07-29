import React from "react";

import { IconCheckCircle } from "@/components/ui/icon";
import { Text14 } from "@/components/ui/typography";

export default function SubscriptionPlanItem({ item }: { item: string }) {
  const lines = item.split("\n");

  return (
    <div className="flex flex-col items-start gap-[5px] self-stretch">
      {lines.map((line, index) => (
        <div key={index} className="flex items-start gap-[5px] self-stretch">
          {index === 0 && (
            <IconCheckCircle width={20} height={20} className="shrink-0" />
          )}
          {index !== 0 && <div className="w-[20px]" />}
          <Text14 className="font-normal">{line}</Text14>
        </div>
      ))}
    </div>
  );
}
