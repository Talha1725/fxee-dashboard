import React from "react";

import DashboardStatusDetailCardContainer from "./DashboardStatusDetailCardContainer";
import DashboardStatusDetailCardHead from "./DashboardStatusDetailCardHead";
import DashboardStatusDetailBadge from "./DashboardStatusDetailBadge";
import DashboardStatusDetailSubcardContainer from "./DashboardStatusDetailSubcardContainer";
import DashboardStatusDetailUpgrade from "./DashboardStatusDetailUpgrade";
import { IconAddOns, IconCardPT } from "@/components/ui/icon";
import { Text12, Text14, Text16 } from "@/components/ui/typography";
import { addOnsData, proToolsData } from "@/lib/constants";

export default function DashboardStatusDetailPT() {
  return (
    <DashboardStatusDetailCardContainer className="py-3.5 px-3">
      <div className="flex flex-col items-start gap-5 self-stretch">
        <DashboardStatusDetailCardHead
          title="Proposed Trade"
          icon={<IconCardPT width={14} height={14} />}
        />
        <div className="flex items-center gap-2 self-stretch py-2.5 px-3 rounded-[8px] bg-card-green-gradient">
          <Text14>
            Long BTC/USD on 4H timeframe. Bull flag pattern forming with strong
            support at $56,500. Multiple technical indicators showing bullish
            convergence. Volume increasing on recent candles.
          </Text14>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <div className="flex items-start gap-2 self-stretch">
          <DashboardStatusDetailSubcardContainer>
            <Text12 className="text-green">Entry Price</Text12>
            <Text16>$58,246.75</Text16>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer>
            <Text12 className="text-blue">Target</Text12>
            <Text16>$62,000.00</Text16>
          </DashboardStatusDetailSubcardContainer>
        </div>
        <div className="flex items-start gap-2 self-stretch">
          <DashboardStatusDetailSubcardContainer>
            <Text12 className="text-danger">Stop Loss</Text12>
            <Text16>$56,500.00</Text16>
          </DashboardStatusDetailSubcardContainer>
          <DashboardStatusDetailSubcardContainer>
            <Text12 className="text-green">Risk/Reward</Text12>
            <Text16>1:1.5</Text16>
          </DashboardStatusDetailSubcardContainer>
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <DashboardStatusDetailCardHead
          title="Add-Ons"
          icon={<IconAddOns width={14} height={14} />}
        />
        <div className="flex flex-wrap items-start content-start gap-[14px_10px] self-stretch">
          {addOnsData.map((addOn, index) => (
            <DashboardStatusDetailBadge
              key={index}
              icon={addOn.icon}
              title={addOn.title}
              isVip={addOn.isVip}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <div className="flex items-center gap-2.5 self-stretch">
          <DashboardStatusDetailUpgrade
            title="Upgrade to VIP"
            description="Access advanced trading features and premium indicators"
            profitability="Profitability 82%"
          />
          <DashboardStatusDetailUpgrade
            title="Enable Pro Tools"
            description="Unlock professional trading tools and analysis"
            profitability="Accuracy 82%"
          />
        </div>
        <div className="flex flex-wrap items-start content-start gap-[10px] self-stretch">
          {proToolsData.map((proTool, index) => (
            <DashboardStatusDetailBadge
              key={proTool.title}
              icon={proTool.icon}
              title={proTool.title}
              isPro={proTool.isPro}
              className="py-3 px-2.5"
            />
          ))}
        </div>
      </div>
    </DashboardStatusDetailCardContainer>
  );
}
