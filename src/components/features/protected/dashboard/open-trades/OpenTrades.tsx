import { Text14, Text16, Text20 } from "@/components/ui/typography";
import DashboardStatusCardContainer from "../status/statusCards/DashboardStatusCardContainer";
import DashboardStatusCardFooter from "../status/statusCards/DashboardStatusCardFooter";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import bars from "@/public/images/bars.svg";
import CircluarChart from "@/public/images/circular-chart.svg";
import AreaImage from "@/public/images/area-chart.png";
import TradeMeter from "@/public/images/trade-meter";
import DashboardHeadBadge from "../DashboardHeadBadge";
import { IconACP } from "@/components/ui/icon";
import { ChevronUp } from "lucide-react";
import OpenTradeCard from "./OpenTradeCard";

export default function OpenTrades() {
  return (
    <div className="flex flex-col items-start gap-2.5 p-0 sm:p-5 self-stretch rounded-[16px] border-none sm:border border-white/5 bg-transparent sm:bg-popover-gradient sm:backdrop-blur-[7px] my-10 sm:my-0 mb-5">
      <div className="flex flex-col items-start gap-5 flex-[1_0_0] self-stretch">
        <div className="flex items-center justify-between gap-2 self-stretch">
          <div className="flex items-center justify-between gap-2 self-stretch">
            <DashboardHeadBadge>
              <IconACP width={14} height={14} />
            </DashboardHeadBadge>
            <div className="flex flex-col sm:flex-row items-start gap-2 flex-[1_0_0]">
              <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
                <Text16 className="font-satoshi-medium dark:text-white text-black">
                  Open Trades
                </Text16>
                <Text14 className="dark:text-white/80 text-black/80 font-satoshi">
                  Easily track your active positions in real time{" "}
                </Text14>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-1">
            <ChevronUp className="w-6 h-6 dark:text-white/50 text-black/50" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 self-stretch">
          <DashboardStatusCardContainer>
            <div className="absolute top-0 right-0 w-[80px] h-[45px]">
              <Image src={bars} alt="Candle" fill />
            </div>
            <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">
              Auto Trades Today
            </Text14>
            <div className="flex flex-col items-start gap-2.5 self-stretch">
              <Text20 className="dark:text-white text-black font-satoshi-medium">
                12
              </Text20>
              <DashboardStatusCardFooter
                title="Total Equity Increased"
                value={12.44}
                icon={false}
              />
            </div>
          </DashboardStatusCardContainer>
          <DashboardStatusCardContainer>
            <div className="absolute top-0 right-0 w-[120px] h-[45px]">
              <Image src={AreaImage} alt="Candle" fill />
            </div>
            <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">
              Total P&L Today
            </Text14>
            <div className="flex flex-col items-start gap-2.5 self-stretch">
              <div className="flex items-start gap-1">
                <Text20 className="dark:text-white text-black font-satoshi-medium">
                  99,997.49
                </Text20>
                <p className="text-xs dark:text-white text-black font-satoshi-medium ">
                  USD
                </p>
              </div>
              <DashboardStatusCardFooter
                title="P&L Increased"
                value={+3.24}
                icon={false}
              />
            </div>
          </DashboardStatusCardContainer>
          <DashboardStatusCardContainer>
            <div className="absolute top-0 right-0 w-[50px] h-[45px]">
              <Image src={CircluarChart} alt="Candle" fill />
            </div>
            <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">
              Win Rate Today
            </Text14>
            <div className="flex flex-col items-start gap-2.5 self-stretch">
              <Text20 className="dark:text-white text-black font-satoshi-medium">
                + 66.7%
              </Text20>
              <DashboardStatusCardFooter
                title="Win Rate Increased"
                value={+66.7}
                icon={false}
              />
            </div>
          </DashboardStatusCardContainer>
          <DashboardStatusCardContainer>
            <div className="absolute top-0 right-0 w-[100px] h-[45px]">
              <TradeMeter value={12.44} />
            </div>
            <Text14 className="z-1 font-satoshi-medium dark:text-white text-black">
              Win Rate Today
            </Text14>
            <div className="flex flex-col items-start gap-2.5 self-stretch">
              <Text20 className="dark:text-white text-black font-satoshi-medium">
                48
              </Text20>
              <DashboardStatusCardFooter
                title="Win Rate Increased"
                value={+66.7}
                icon={false}
              />
            </div>
          </DashboardStatusCardContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 self-stretch">
          <OpenTradeCard />
        </div>
      </div>
      
    </div>
  );
}
