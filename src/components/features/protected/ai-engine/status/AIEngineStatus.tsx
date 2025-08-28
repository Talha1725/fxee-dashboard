import React, { useState } from "react";
import DashboardACP from "../../dashboard/ACP/DashboardACP";
import AIEngineStatusTGS from "./AIEngineStatusTGS";
import type { ProposedTrade } from "@/types/redux";

export default function AIEngineStatus() {
  const [activeTab, setActiveTab] = useState("best_trade");
  const [bestTrade, setBestTrade] = useState<ProposedTrade | null>(null);
  const [customAnalysis, setCustomAnalysis] = useState<any>(null);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-5 self-stretch w-full min-h-[657px]">
      <DashboardACP />
      <AIEngineStatusTGS 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        bestTrade={bestTrade}
        setBestTrade={setBestTrade}
        customAnalysis={customAnalysis}
        setCustomAnalysis={setCustomAnalysis}
      />
    </div>
  );
}
