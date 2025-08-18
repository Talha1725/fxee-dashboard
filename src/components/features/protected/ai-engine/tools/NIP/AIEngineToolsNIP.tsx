import React from "react";

import AIEngineToolsCardHead from "../AIEngineToolsCardHead";
import AIEngineToolsCardContainer from "../AIEngineToolsCardContainer";
import AIEngineToolsNIPText from "./AIEngineToolsNIPText";
import AIEngineToolsNIPCards from "./AIEngineToolsNIPCards";
import { IconNIP } from "@/components/ui/icon";

export default function AIEngineToolsNIP() {
  return (
    <AIEngineToolsCardContainer>
      <AIEngineToolsCardHead
        title="News Impact Predictor"
        description="Realtime Market news analysis with sentiment scoring and impact prediction"
        icon={<IconNIP width={14} height={14} />}
      />
      
      <div className="h-[714px] overflow-y-auto">
        <div className="flex items-start gap-5 self-stretch">
          <AIEngineToolsNIPText />
          <AIEngineToolsNIPCards />
        </div>
      </div>
      
    </AIEngineToolsCardContainer>
  );
}
