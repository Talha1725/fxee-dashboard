'use client'
import { IconAnalyse, IconBitcoin, IconBull, IconClock, IconConnect, IconNIP } from "@/components/ui/icon";
import AIEngineToolsCardHead from "../AIEngineToolsCardHead";
import AIEngineToolsNIPText from "./AIEngineToolsNIPText";
import AIEngineToolsNIPCards from "./AIEngineToolsNIPCards";
import AIEngineToolsCardContainer from "../AIEngineToolsCardContainer";
import DashboardWidget from "@/components/features/protected/dashboard/widget/DashboardWidget";
import CommonSelect from "@/components/ui/common-select";
import FinancialIndexCard from "@/components/ui/financial-index-card";
import HomeTopPicks from "../../../home/homeTopScore/HomeTopPicks";
import AIEngineToolsNIPCardAI from "./AIEngineToolsNIPCardAI";
import CardBox from "@/components/ui/cardBox";
import { Button } from "@/components/ui/button";
import { Text14 } from "@/components/ui/typography";
import { RefreshCcw } from "lucide-react";
import { useTheme } from "@/lib/contexts/ThemeContext";
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
  const { theme } = useTheme();
  return (
    <AIEngineToolsCardContainer>
      <div className="flex flex-col gap-6">
        <AIEngineToolsCardHead
          title="News Impact Predictor"
          description="Realtime Market news analysis with sentiment scoring and impact prediction"
          icon={<IconNIP width={14} height={14} />}
        />

        <div className="flex flex-col md:flex-row items-start gap-5 self-stretch h-[714px] md:min-h-[714px] md:max-h-[714px]">
          <div className="w-full md:flex-1 order-1 
            h-full 
            overflow-y-auto scrollbar-hide">
            <AIEngineToolsNIPText />
          </div>

          <div className="w-full md:w-[344px] order-2 
            h-full 
            overflow-y-auto scrollbar-hide mt-5 md:mt-0">
            <AIEngineToolsNIPCards />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 self-stretch mt-6">
        <AIEngineToolsCardHead
          title="RSI Analyzer"
          description="Advanced RSI analysis with AI-powered overbought/oversold"
          icon={<FancyIcon width={14} height={14} />}
        />

        <div className="flex flex-col md:flex-row items-start gap-5 self-stretch md:min-h-[785px] md:max-h-[785px]">
          <div className="w-full md:flex-1 h-[350px] md:h-full overflow-y-auto scrollbar-hide order-1">
            <DashboardWidget 
            currency="BTC/ETH" 
            showPlusIcon={true}
            actionButton={<IconAnalyse className="text-white" width={40} height={40} />} />
          </div>

          <div className="w-full md:w-[344px] h-auto md:h-full md:overflow-y-auto scrollbar-hide mt-5 md:mt-0 order-2">
            <div className="flex flex-col items-start gap-4 w-full">
              <HomeTopPicks showArrows={false} openModal={() => {}} />

              <FinancialIndexCard
                symbol="BTC/ETH"
                name="US 100 Index"
                type="TVC"
                currentValue={19967.94}
                change={-134.67}
                changePercent={-0.67}
                lastUpdate="03:22 GMT+5"
                icon={<IconBitcoin width={24} height={24} />}
              />

              <div className="w-full flex flex-col gap-4">
                <CommonSelect
                  placeholder="Select a category"
                  defaultValue="Trade"
                  options={[
                    { value: "Trade", label: "Trade" },
                    { value: "Trending", label: "Trending" },
                    { value: "Popular", label: "Popular" }
                  ]}
                  className="w-full min-w-0"
                />
                <CommonSelect
                  placeholder="Select a category"
                  defaultValue="Seasonal"
                  options={[
                    { value: "Seasonal", label: "Seasonal" },
                    { value: "Trending", label: "Trending" },
                    { value: "Popular", label: "Popular" }
                  ]}
                  className="w-full min-w-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 self-stretch mt-12">
        <AIEngineToolsCardHead
          title="Smart Portfolio Allocator"
          description="Leverage AI to automatically distribute your capital across assets based on risk tolerance, market trends, and performance potential."
          icon={<PieIcon width={14} height={14} />}
        />

        <div className="flex flex-col md:flex-row items-start gap-5 self-stretch min-h-[714px] md:max-h-[750px] md:overflow-y-auto scrollbar-hide">
          
          <div className="w-full flex-1 h-full md:overflow-y-auto scrollbar-hide">
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

          <div className="w-full md:w-[344px] h-auto md:h-full md:overflow-y-auto scrollbar-hide">
            <div className="flex flex-col items-start gap-4 w-full mt-5 md:mt-0 md:w-auto md:flex-1">

              <CardBox
                title="Suggested Allocation Breakdown"
                customSize={{
                  width: "w-full",
                  height: "h-[162px]",
                  padding: "p-5"
                }}
              >
                <AllocationBreakdown />
                <NumberScale />
              </CardBox>

              <CardBox
                title="Sub-Breakdown Inside Each Category"
                listItems={[
                  { label: "Forex", value: "", highlight: true, style: 'sub-breakdown' },
                  { value: "USD/JPY 30%, EUR/USD 20%, GBP/USD 10%", style: 'sub-breakdown' },
                  { label: "Crypto", value: "", highlight: true, style: 'sub-breakdown' },
                  { value: "BTC 25%, ETH 10%, SOL 5%", style: 'sub-breakdown' },
                ]}
                customSize={{
                  width: "w-full",
                  padding: "p-5"
                }}
              />

              <CardBox
                title="Risk Profile Selector"
                customSize={{
                  width: "w-full",
                  padding: "p-5"
                }}
              >
                <p className="text-black dark:text-white font-medium mb-2">Your Risk Profile:</p>
                <ul className="list-disc pl-5 text-black dark:text-white space-y-1">
                  <li>Conservative</li>
                  <li>Moderate</li>
                  <li>Aggressive</li>
                </ul>
              </CardBox>

              <div className="flex justify-center items-center gap-4 mt-4 w-full">
                {["Apply Allocation", "Simulate ROI"].map((label) => (
                  <Button
                    key={label}
                    variant={theme === "dark" ? "white" : "black"}
                    className="h-[39px] rounded-[10px] border border-white/5 px-[10px] 
                              w-[140px] sm:w-[163px]"
                  >
                    <Text14 className="text-white dark:text-[#111] font-satoshi-bold text-[14px]">
                      {label}
                    </Text14>
                  </Button>
                ))}
              </div>

              <div className="flex flex-col mt-4 w-full">
                <div
                  className={`flex items-center justify-center w-full h-[52px] rounded-[16px] 
                  ${theme === "dark" ? "bg-dark-gradient" : "bg-tab-light-gradient"} 
                  border border-black/20 cursor-pointer hover:bg-white/10 dark:border-white/[0.1]`}
                >
                  <div className="flex items-center gap-2">
                    <RefreshCcw size={14} className="shrink-0" />
                    <Text14 className="text-black dark:text-white font-satoshi-bold">
                      Rebalance Now
                    </Text14>
                  </div>
                </div>

                <div className="text-center mt-1">
                  <span className="font-satoshi-medium text-[12px] leading-[100%] tracking-[-0.02em] text-black dark:text-white opacity-70">
                    Last updated: 30 seconds ago
                  </span>
                </div>
              </div>

              <CardBox
                title="Mini Allocation History View"
                listItems={[
                  { label: "Apr 30", value: "", highlight: true, style: 'mini-allocation' },
                  { value: "70% Forex / 30% Crypto", style: 'mini-allocation' },
                  { label: "May 6", value: "", highlight: true, style: 'mini-allocation' },
                  { value: "50% Forex / 50% Crypto", style: 'mini-allocation' },
                ]}
                customSize={{
                  width: "w-full",
                  padding: "p-5"
                }}
              />
            </div>
          </div>
        </div>
      </div>

    </AIEngineToolsCardContainer>
  );
}
