import React from "react";

import { Input } from "@/components/ui/input";
import { IconSend, IconTradeUp } from "@/components/ui/icon";
import { Text14 } from "@/components/ui/typography";

export default function HomeAIChat() {
  return (
    <div className="flex flex-col items-start gap-4.5 self-stretch">
      <div className="flex flex-col items-center gap-5 self-stretch">
        <Input
          placeholder="Ask me about market trends..."
          className="px-4 py-4 gap-3 border-none h-full font-satoshi-medium"
          backIcon={<IconSend height={20} width={20} />}
        />
        <div className="flex justify-between items-center self-stretch">
          <div className="flex items-center gap-1">
            <IconTradeUp width={20} height={20} color="#3EDC81" />
            <Text14 className="text-green font-satoshi-medium">Bullish Market</Text14>
          </div>
          <div className="flex items-center gap-1">
            <Text14 className="font-satoshi">
              AI Confidence: <span className="text-green">81%</span>
            </Text14>
          </div>
        </div>
      </div>
    </div>
  );
}
