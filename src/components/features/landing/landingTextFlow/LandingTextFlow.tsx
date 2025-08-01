import React from "react";

import { IconEthFill } from "@/components/ui/icon";
import { TextFlow } from "@/components/ui/typography";

export default function LandingTextFlow() {
  const textFlowItem = (
    <div className="flex items-center gap-3 mx-5">
      <IconEthFill width={24} height={24} className="shrink-0" />
      <TextFlow>Earn $100 in ETH Instantly</TextFlow>
    </div>
  );

  return (
    <div className="marquee-container border border-white/20 bg-landing-text-flow-gradient overflow-hidden">
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
