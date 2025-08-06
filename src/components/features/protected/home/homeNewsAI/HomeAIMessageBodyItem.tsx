import React from "react";

import { Text12, Text14, Text16 } from "@/components/ui/typography";

export default function HomeAIMessageBodyItem() {
  return (
    <div className="flex flex-col items-start gap-1.5 flex-[1_0_0]">
      <div className="flex justify-between items-center self-stretch">
        <Text16 className="text-green font-satoshi-medium">TradeMind AI</Text16>
        <Text12 className="text-white/60 font-satoshi">08:11</Text12>
      </div>
      <Text14 className="text-white/60 font-satoshi-medium">
        Hello! I'm your AI trading assistant. Currently analyzing EUR/USD based
        on the latest price action and economic sentiment.
      </Text14>
    </div>
  );
}
