import React from "react";

import AIEngineToolsNIPCardContainer from "./AIEngineToolsNIPCardContainer";
import AIEngineToolsNIPCardHead from "./AIEngineToolsNIPCardHead";
import { IconATF } from "@/components/ui/icon";
import { Text14, Text16 } from "@/components/ui/typography";

export default function AIEngineToolsNIPCardATF() {
  return (
    <AIEngineToolsNIPCardContainer>
      <AIEngineToolsNIPCardHead
        title="Trend Forecaster"
        icon={<IconATF width={20} height={20} />}
      />
      <div className="flex flex-col items-start gap-0.5 self-stretch">
        <div className="flex items-center gap-2 self-stretch py-1 px-0">
          <Text14 className="font-[400] flex-[1_0_0]">24h AI Forecast</Text14>
          <Text16 className="text-warning">Moderate Uptrend</Text16>
        </div>
        <div className="flex items-center gap-2 self-stretch py-1 px-0">
          <Text14 className="font-[400] flex-[1_0_0]">Expected Range</Text14>
          <Text16>$1.2000 – $1.2150</Text16>
        </div>
        <div className="flex items-center gap-2 self-stretch py-1 px-0">
          <Text14 className="font-[400] flex-[1_0_0]">Confidence</Text14>
          <Text16 className="text-green">80% </Text16>
        </div>
      </div>
    </AIEngineToolsNIPCardContainer>
  );
}
