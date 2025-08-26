'use client'
import { IconAnalyse, IconBitcoin, IconBull, IconClock, IconConnect, IconNIP } from "@/components/ui/icon";
import AIEngineToolsCardHead from "../AIEngineToolsCardHead";
import AIEngineToolsNIPText from "./AIEngineToolsNIPText";
import AIEngineToolsNIPCards from "./AIEngineToolsNIPCards";
import AIEngineToolsCardContainer from "../AIEngineToolsCardContainer";
import DashboardWidget from "@/components/features/protected/dashboard/widget/DashboardWidget";
import AIEngineToolsNIPCardAI from "./AIEngineToolsNIPCardAI";
import FancyIcon from "@/components/ui/icon";
import PieIcon from "@/components/ui/icon";

const AllocationBar = ({ 
    label, 
    width, 
    opacity = 100 
  }: { 
    label: string; 
    width: number; 
    opacity?: number 
  }) => (
    <div className="flex items-center gap-[12px]">
      <p className="font-satoshi-bold text-[10.11px] leading-[100%] tracking-[0%] text-black dark:text-white">
        {label}
      </p>
      <div 
        className="h-[18px] rounded-[2.37px] bg-gradient-to-r from-[#0276DB] to-[#3EDC81]"
        style={{ width: `${width}px`, opacity: opacity / 100 }}
      />
    </div>
  );
  
  const AllocationBreakdown = () => (
    <div className="flex flex-col gap-[14px] mb-6">
      <AllocationBar label="Forex" width={66} opacity={100} />
      <AllocationBar label="Crypto" width={144} opacity={40} />
    </div>
  );
  
  const NumberScale = () => {
    const numbers = [0, 2.0, 4.0, 6.0, 8.0, 10.0];
    
    return (
      <div className=" h-[14px] flex justify-between items-center pl-[42px] mt-[16px]">
        {numbers.map((num) => (
          <span 
            key={num} 
            className="font-satoshi-medium text-[10.11px] leading-[100%] tracking-[0%] text-black dark:text-white"
          >
            {num}
          </span>
        ))}
      </div>
    );
  };

export default function AIEngineToolsNIP() {
  return (
    <AIEngineToolsCardContainer>
      <div className="flex flex-col gap-6">
        <AIEngineToolsCardHead
          title="News Impact Predictor"
          description="Realtime Market news analysis with sentiment scoring and impact prediction"
          icon={<IconNIP width={14} height={14} />}
        />

        <div className="flex flex-col md:flex-row items-start gap-5 self-stretch h-[400px] md:h-[714px]">
          <div className="w-full md:flex-1 order-1 
            h-full 
            overflow-y-auto scrollbar-hide">
            <AIEngineToolsNIPText />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 self-stretch mt-10">
        <AIEngineToolsCardHead
          title="RSI Analyzer"
          description="Advanced RSI analysis with AI-powered overbought/oversold"
          icon={<FancyIcon width={14} height={14} />}
        />

        <div className="flex flex-col md:flex-row items-start gap-5 self-stretch h-[400px] md:h-[785px]">
          <div className="w-full md:flex-1 h-full overflow-y-auto scrollbar-hide order-1">
            <DashboardWidget 
            currency="BTC/ETH" 
            showPlusIcon={true}
            actionButton={<IconAnalyse className="text-white" width={40} height={40} />} />
          </div>

          <div className="w-full md:w-[344px] h-full overflow-y-auto scrollbar-hide mt-5 md:mt-0 order-2">
            <AIEngineToolsNIPText />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 self-stretch mt-10">
        <AIEngineToolsCardHead
          title="Smart Portfolio Allocator"
          description="Leverage AI to automatically distribute your capital across assets based on risk tolerance, market trends, and performance potential."
          icon={<PieIcon width={14} height={14} />}
        />

        <div className="flex flex-col md:flex-row items-start gap-5 self-stretch h-[400px] md:h-[750px]">
          
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
      </div>

    </AIEngineToolsCardContainer>
  );
}
