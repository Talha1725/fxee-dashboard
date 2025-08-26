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
  const { savedAddOns } = useAddOns();
  const { isPremium } = useUser();

  const accessibleActiveAddOns = savedAddOns.filter(addOn => {
    if (!addOn.active) return false;
    return isPremium || !addOn.isVip;
  });

  const renderSectionContent = (addOn: any) => {
    let sectionHeight = "h-[400px] md:h-[714px]";

    if (addOn.title === "RSI Analyzer") {
      sectionHeight = "h-[400px] md:h-[785px]";
    }
    
    if (addOn.title === "Smart Portfolio Allocator") {
      return (
        <div className={`flex flex-col md:flex-row items-start gap-5 self-stretch ${sectionHeight}`}>
          <div className="w-full flex-1 h-full overflow-y-auto scrollbar-hide">
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
    <div className="flex flex-col items-start gap-10 self-stretch">
      {accessibleActiveAddOns.map((addOn) => (
        <div key={addOn.title} id={addOn.title.toLowerCase().replace(/\s+/g, '-')}>
          <AIEngineToolsCardContainer>
            <div className="flex flex-col gap-6">
              <AIEngineToolsCardHead
                title={addOn.title}
                description={addOn.description}
                icon={addOn.icon}
              />
              {renderSectionContent(addOn)}
            </div>
          </AIEngineToolsCardContainer>
        </div>
      ))}
    </div>
  );
}
