import React from "react";

import { IconEthFill } from "@/components/ui/icon";
import { TextFlow } from "@/components/ui/typography";

export default function LandingTextFlow() {
  const textFlowItem = (
    <div className="flex items-center gap-1 md:gap-2 mx-3 border border-white/20 rounded-md bg-gradient-to-b from-white/10 to-white/5 md:px-5 px-3 md:py-3 py-2">
      <IconEthFill width={24} height={24} className="shrink-0 md:w-7 md:h-7 w-4 h-4" />
      <TextFlow>Earn $100 in ETH Instantly</TextFlow>
    </div>
  );

  return (
    <div className="marquee-container overflow-hidden relative">
      <div className="absolute top-0 -left-20 w-[200px] h-[200px] blur-2xl rounded-full bg-[#0a0a0a] z-50"></div>
      <div className="absolute bottom-0 -right-20 w-[200px] h-[200px] blur-2xl rounded-full bg-[#0a0a0a] z-50"></div>
      <div className="marquee-content py-4 flex items-center">
        <div className="flex justify-center items-center shrink-0">
          {textFlowItem}
          {textFlowItem}
          {textFlowItem}
          {textFlowItem}
          {textFlowItem}
          {textFlowItem}
        </div>
        <div className="flex justify-center items-center shrink-0">
          {textFlowItem}
          {textFlowItem}
          {textFlowItem}
          {textFlowItem}
          {textFlowItem}
          {textFlowItem}
        </div>
      </div>
    </div>
  );
}
