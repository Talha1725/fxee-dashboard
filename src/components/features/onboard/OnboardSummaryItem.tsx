import React from "react";

import { Description14, Text16, TextSuccess } from "@/components/ui/typography";

export default function OnboardSummaryItem({
  title,
  value,
  isDiscount,
}: {
  title: string;
  value: string;
  isDiscount?: boolean;
}) {
  return (
    <div className="flex justify-between items-center self-stretch">
      <Description14 className="tracking-[-0.084px]">{title}</Description14>
      {isDiscount ? (
        <TextSuccess className="text-[16px] font-medium tracking-[-0.096px]">
          {value}
        </TextSuccess>
      ) : (
        <Text16 className="tracking-[-0.096px]">{value}</Text16>
      )}
    </div>
  );
}
