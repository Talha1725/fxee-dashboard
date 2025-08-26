"use client";

import React from "react";
import AIEngineToolsCardHead from "./AIEngineToolsCardHead";
import AIEngineToolsCardContainer from "./AIEngineToolsCardContainer";
import AIEngineToolsNIPText from "./NIP/AIEngineToolsNIPText";
import { useAddOns } from "@/lib/contexts/AddOnsContext";
import { useUser } from "@/lib/contexts/UserContext";

export default function AIEngineToolsAllSections() {
  const { addOns } = useAddOns();
  const { isPremium } = useUser();

  const accessibleActiveAddOns = addOns.filter(addOn => {
    if (!addOn.active) return false;
    return isPremium || !addOn.isVip;
  });

  return (
    <div className="flex flex-col gap-10">
      {accessibleActiveAddOns.map((addOn, index) => {
        const sectionId = addOn.title.toLowerCase().replace(/\s+/g, '-');
        
        return (
          <div key={index} id={sectionId} className="scroll-mt-20">
            <AIEngineToolsCardContainer>
              <div className="flex flex-col gap-6">
                <AIEngineToolsCardHead
                  title={addOn.title}
                  description={addOn.description}
                  icon={addOn.icon}
                />

                <div className="flex flex-col md:flex-row items-start gap-5 self-stretch h-[400px] md:h-[714px]">
                  <div className="w-full md:flex-1 order-1 h-full overflow-y-auto scrollbar-hide">
                    <AIEngineToolsNIPText />
                  </div>
                </div>
              </div>
            </AIEngineToolsCardContainer>
          </div>
        );
      })}
    </div>
  );
}
