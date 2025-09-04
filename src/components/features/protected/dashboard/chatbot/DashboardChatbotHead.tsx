import React from "react";
import { Text14 } from "@/components/ui/typography";
import HomeAIMessageHead from "@/components/features/protected/home/homeNewsAI/HomeAIMessageHead";
import HomeAIMessageBodyIcon from "@/components/features/protected/home/homeNewsAI/HomeAIMessageBodyIcon";
import { Text12, Text16 } from "@/components/ui/typography";

interface DashboardChatbotHeadProps {
  isExpanded: boolean;
  clearConversation: () => void;
  setIsExpanded: (isExpanded: boolean) => void;
  tradeToUse: any;
  useMockResponses: boolean;
  latestTrade: any;
  selectedTrade: any;
}

export default function DashboardChatbotHead({ 
  isExpanded, 
  clearConversation, 
  setIsExpanded, 
  tradeToUse, 
  useMockResponses, 
  latestTrade, 
  selectedTrade 
}: DashboardChatbotHeadProps) {
  const getContextInfo = () => {
    if (tradeToUse) {
      const isMockData = useMockResponses && !latestTrade && !selectedTrade;
      return (
        <div className="flex items-center gap-2">
          <HomeAIMessageBodyIcon />
          <div className="flex flex-col items-start gap-1">
            <Text16 className="text-[#079744] dark:text-green font-satoshi-medium">TradeMind AI</Text16>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${tradeToUse ? 'bg-green-500' : 'bg-gray-400'}`} />
              <Text12 className="text-white/60 dark:text-white/60 text-xs">
                Auto-context: ${tradeToUse.symbol} (${tradeToUse.timeframe})${isMockData ? ' [Mock Data]' : ''}
              </Text12>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#3edc81] rounded-full animate-bounce" />
        <Text12 className="text-white/60 dark:text-white/60 text-xs">No trade data available</Text12>
      </div>
    )
  };

  return (
    <div className="w-full pb-3">
      <div className="flex items-center justify-between">
        <HomeAIMessageHead isExpanded={isExpanded} clearConversation={clearConversation} setIsExpanded={setIsExpanded} />
      </div>
      <div className="flex items-center gap-2 mt-5">
        <Text14 className="text-black/80 dark:text-white/80 text-xs">
          {getContextInfo()}
        </Text14>
      </div>
    </div>
  );
}
