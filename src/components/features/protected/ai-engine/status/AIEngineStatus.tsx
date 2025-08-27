import React, { useState } from "react";
import DashboardACP from "../../dashboard/ACP/DashboardACP";
import AIEngineStatusTGS from "./AIEngineStatusTGS";

export default function AIEngineStatus() {
  const [activeTab, setActiveTab] = useState("best_trade");
  const [bestTrade, setBestTrade] = useState(null);
  const [customAnalysis, setCustomAnalysis] = useState(null);

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
