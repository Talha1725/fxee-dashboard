import React from "react";

import { IconTradeUp } from "@/components/ui/icon";
import {
  Description18,
  Title40,
  TextSuccess,
} from "@/components/ui/typography";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

export default function HomeTotalPortfolio() {
  const { isVirtualAccount } = useAccountType();

  return (
    <div className="flex flex-col items-start gap-5">
      <Description18 className="font-satoshi-medium text-black/50 dark:text-white/50 z-10">Total Portfolio</Description18>
      <div className="relative">
        <Title40 className="font-satoshi text-black dark:text-white">$24,982.00</Title40>
      </div>
      <div className="flex justify-center items-center gap-1 relative">
        <TextSuccess className="text-[18px] text-[#079744] font-regular font-medium tracking-[-0.36px] font-satoshi-medium">
          40%
        </TextSuccess>
        <IconTradeUp width={24} height={24} color="#079744" />
     
      </div>
    </div>
  );
}
