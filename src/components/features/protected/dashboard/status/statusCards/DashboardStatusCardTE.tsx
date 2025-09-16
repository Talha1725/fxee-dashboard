import React from "react";
import Image from "next/image";
import { Text14, Text20 } from "@/components/ui/typography";
import { Progress } from "@/components/ui/progress";
import DashboardStatusCardContainer from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardContainer";
import DashboardStatusCardFooter from "@/components/features/protected/dashboard/status/statusCards/DashboardStatusCardFooter";
import CandleImage from "@/public/images/candle.png";
import { useLocalization } from "@/components/localization-provider";

interface DashboardStatusCardTEProps {
  totalProfit?: number;
  proposedTrade?: any;
}

export default function DashboardStatusCardTE({ totalProfit = 0, proposedTrade }: DashboardStatusCardTEProps) {
  const { t } = useLocalization();
  const averagePerTrade = proposedTrade?.averagePerTrade ? parseFloat(proposedTrade.averagePerTrade) : 0;
  const progressValue = proposedTrade?.accountRiskPercentage ? parseFloat(proposedTrade.accountRiskPercentage) : 0;

  return (
    <DashboardStatusCardContainer>
      <div className="absolute top-0 right-0 w-[80px] h-[45px]">
        <Image src={CandleImage} alt="Candle" fill />
      </div>
      <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">Trading Equity</Text14>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <Text20 className="dark:text-white text-black font-satoshi-medium">${totalProfit.toFixed(2)}</Text20>
        <Progress value={progressValue} className="w-full h-[10px]" />
        <DashboardStatusCardFooter title={t("average_per_trade")} value={averagePerTrade} />
      </div>
    </DashboardStatusCardContainer>
  );
}