"use client";

import React from "react";
import AIEngineToolsCardHead from "./AIEngineToolsCardHead";
import AIEngineToolsCardContainer from "./AIEngineToolsCardContainer";
import AIEngineToolsNIPCardAI from "./NIP/AIEngineToolsNIPCardAI";
import AIEngineToolData from "./AIEngineToolData";
import DashboardWidget from "@/components/features/protected/dashboard/widget/DashboardWidget";
import { useAddOns } from "@/lib/contexts/AddOnsContext";
import { useUser } from "@/lib/contexts/UserContext";
import { useAnalysis } from "@/lib/contexts/AnalysisContext";
import { 
  IconAnalyse, 
  IconBull, 
  IconConnect, 
  IconClock 
} from "@/components/ui/icon";

export default function AIEngineToolsAllSections() {
  const { savedAddOns } = useAddOns();
  const { isPremium } = useUser();
  const { isAnalyzing } = useAnalysis();

  const accessibleActiveAddOns = savedAddOns.filter(addOn => {
    if (!addOn.active) return false;
    return isPremium || !addOn.isVip;
  });

  // Map add-on titles to their corresponding API tool keys
  const getToolKeyForAddOn = (title: string): string => {
    const titleToKeyMap: { [key: string]: string } = {
      "AI RSI Analyzer": "rsi",
      "Smart Portfolio Allocator": "smart_portfolio", 
      "AI Trend Forecast": "ai_trend",
      "Volatility & Risk Analyzer": "volatility_risk",
      "Fibonacci Retracement Analyzer": "fibonacci_retracement",
      "Pattern Recognition Scanner": "pattern_recognition",
      "Mass Psychology Analysis": "mass_psychology",
      "Market Sentiment Aggregator": "market_sentiment",
      "Trade Probability Calculator": "trade_probability"
    };
    
    return titleToKeyMap[title] || title.toLowerCase().replace(/\s+/g, '_');
  };

  const renderSectionContent = (addOn: any) => {
    const toolKey = getToolKeyForAddOn(addOn.title);
    
    return (
      <div className="w-full">
        <AIEngineToolData 
          toolKey={toolKey}
          fallbackTitle={addOn.title}
          fallbackDescription={addOn.description}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full gap-10 self-stretch relative overflow-hidden">
      
      {accessibleActiveAddOns.map((addOn) => (
        <div key={addOn.title} id={addOn.title.toLowerCase().replace(/\s+/g, '-')}>
          <AIEngineToolsCardContainer>
            <div className="flex flex-col gap-6 w-full">
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
