import React from "react";

import AIEngineStatusTGSHead from "./AIEngineStatusTGSHead";
import AIEngineStatusTGSSlider from "./AIEngineStatusTGSSlider";
import AIEngineStatusTGSDetail from "./AIEngineStatusTGSDetail";
import AIEngineStatusTGSCheck from "./AIEngineStatusTGSCheck";
import AIEngineStatusTGSPairSelect from "./AIEngineStatusTGSPairSelect";
import AIEngineStatusTGSTimeframeSelect from "./AIEngineStatusTGSTimeframeSelect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconCustomGoal,
  IconBestTrade,
  IconSend,
  IconMic,
} from "@/components/ui/icon";
import { Text14 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";

export default function AIEngineStatusTGS() {
  return (
    <div className="flex flex-col items-center gap-4 p-5 flex-[1_0_0] self-stretch rounded-[16px] border border-white/5 bg-card-green-gradient">
      <AIEngineStatusTGSHead />
      <Tabs defaultValue="best_trade" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="custom_goal">
            <IconCustomGoal width={20} height={20} />
            Custom Goal
          </TabsTrigger>
          <TabsTrigger value="best_trade">
            <IconBestTrade width={20} height={20} />
            Best Trade
          </TabsTrigger>
        </TabsList>
        <TabsContent value="custom_goal">
          <div>Custom Goal</div>
        </TabsContent>
        <TabsContent value="best_trade" className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 self-stretch">
            <AIEngineStatusTGSSlider title="Profit Target" value={5000} />
            <AIEngineStatusTGSSlider
              title="Maximum Risk"
              value={5000}
              color="danger"
            />
          </div>
          <div className="flex items-center gap-1 self-stretch">
            <AIEngineStatusTGSDetail
              title="Protentional Profit"
              value="$5,000.00"
            />
            <AIEngineStatusTGSDetail
              title="Maximum Loss"
              value="$2,000.00"
              className="text-danger"
            />
            <AIEngineStatusTGSDetail
              title="Risk/Reward"
              value="1:2.50"
              className="bg-picton-blue text-transparent bg-clip-text"
            />
          </div>
          <div className="flex items-start gap-4 self-stretch">
            <AIEngineStatusTGSCheck
              title="Risk Level"
              switches={[
                { label: "Low Risk", id: "low-risk" },
                { label: "Mid Risk", id: "mid-risk" },
                { label: "High Risk", id: "high-risk" },
              ]}
            />
            <AIEngineStatusTGSCheck
              title="Trading Type"
              switches={[
                { label: "Day Trade", id: "day-trade" },
                { label: "Swing Trade", id: "swing-trade" },
              ]}
            />
            <AIEngineStatusTGSCheck
              title="Trading Version"
              switches={[
                { label: "Basic", id: "basic" },
                { label: "Pro", id: "pro" },
              ]}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4 self-stretch">
            <div className="flex flex-col justify-center items-start gap-2 self-stretch flex-[1_0_0]">
              <Text14 className="self-stretch">Select Trading Pair</Text14>
              <AIEngineStatusTGSPairSelect />
            </div>
            <div className="flex flex-col justify-center items-start gap-2 self-stretch flex-[1_0_0]">
              <Text14 className="self-stretch">Select Timeframe</Text14>
              <AIEngineStatusTGSTimeframeSelect />
            </div>
          </div>
          <Input
            placeholder="Enter your custom goal"
            className="w-full !p-4 gap-3 border-none"
            backIcon={
              <div className="flex items-center gap-3">
                <IconMic width={20} height={20} />
                <IconSend width={20} height={20} opacity={1} />
              </div>
            }
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
