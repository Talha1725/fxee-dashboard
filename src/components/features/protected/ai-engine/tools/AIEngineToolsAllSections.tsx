"use client";

import React from "react";
import AIEngineToolsCardHead from "./AIEngineToolsCardHead";
import AIEngineToolsCardContainer from "./AIEngineToolsCardContainer";
import AIEngineToolsNIPText from "./NIP/AIEngineToolsNIPText";
import AIEngineToolsNIPCardAI from "./NIP/AIEngineToolsNIPCardAI";
import DashboardWidget from "@/components/features/protected/dashboard/widget/DashboardWidget";
import { useAddOns } from "@/lib/contexts/AddOnsContext";
import { useUser } from "@/lib/contexts/UserContext";
import { 
  IconAnalyse, 
  IconBull, 
  IconConnect, 
  IconClock 
} from "@/components/ui/icon";

export default function AIEngineToolsAllSections() {
  const { addOns } = useAddOns();
  const { isPremium } = useUser();

  const accessibleActiveAddOns = addOns.filter(addOn => {
    if (!addOn.active) return false;
    return isPremium || !addOn.isVip;
  });

  const renderSectionContent = (addOn: { title: string; description: string; icon: React.ReactNode }) => {
    let sectionHeight = "h-[400px] md:h-[714px]"; // default
    
    if (addOn.title === "AI RSI Analyzer") {
      sectionHeight = "h-[400px] md:h-[785px]";
    } else if (addOn.title === "Smart Portfolio Allocator") {
      sectionHeight = "h-[400px] md:h-[750px]";
    }
    
    if (addOn.title === "AI RSI Analyzer") {
      return (
        <div className={`flex flex-col md:flex-row items-start gap-5 self-stretch ${sectionHeight}`}>
          <div className="w-full flex-1 h-full overflow-y-auto scrollbar-hide">
            <DashboardWidget 
              currency="BTC/ETH" 
              showPlusIcon={true}
              actionButton={<IconAnalyse className="text-white" width={40} height={40} />} 
            />
          </div>
          <div className="w-full md:w-[344px] h-full overflow-y-auto scrollbar-hide mt-5 md:mt-0">
            <AIEngineToolsNIPText />
          </div>
        </div>
      );
    }
    
    if (addOn.title === "Smart Portfolio Allocator") {
      return (
        <div className={`flex flex-col md:flex-row items-start gap-5 self-stretch ${sectionHeight}`}>
          <div className="w-full flex-1 h-full overflow-y-auto scrollbar-hide">
            <AIEngineToolsNIPCardAI
              title="AI Insight Panel"
              headerAlign="center"
              showHeaderIcon={false}
              showIcon={true}
              showBadges={true}
              showReasoning={true}
              showPrediction={false}
              showActionButton={false}
              isNIPVersion={true}
              badges={[
                { text: "Bullish Bias", icon: <IconBull width={20} height={20} /> },
                { text: "89%", icon: <IconConnect width={20} height={20} /> },
                { text: "Next 4 Hours ", icon: <IconClock width={20} height={20} /> }
              ]}
            />
          </div>
          <div className="w-full md:w-[344px] h-full overflow-y-auto scrollbar-hide mt-5 md:mt-0">
            <AIEngineToolsNIPText />                
          </div>
        </div>
      );
    }
    
    return (
      <div className={`flex flex-col md:flex-row items-start gap-5 self-stretch ${sectionHeight}`}>
        <div className="w-full flex-1 h-full overflow-y-auto scrollbar-hide">
          <AIEngineToolsNIPText />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-10">
      {accessibleActiveAddOns.map((addOn, index) => {
        const sectionId = addOn.title.toLowerCase().replace(/\s+/g, '-');
        
        return (
          <div key={index} id={sectionId} className="scroll-mt-20">
              <div className="flex flex-col gap-6">
                <AIEngineToolsCardHead
                  title={addOn.title}
                  description={addOn.description}
                  icon={addOn.icon}
                />
                {renderSectionContent(addOn)}
              </div>
          </div>
        );
      })}
    </div>
  );
}
