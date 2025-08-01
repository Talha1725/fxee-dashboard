import React from "react";
import Image from "next/image";

import LandingATICardContainer from "@/components/features/landing/landingATI/LandingATICardContainer";
import LandingATICardHead from "@/components/features/landing/landingATI/LandingATICardHead";
import LandingATCContentVRAItem from "@/components/features/landing/landingATC/LandingATCContentVRAItem";
import LandingATCContentTPItem from "@/components/features/landing/landingATC/LandingATCContentTPItem";
import LandingWhyFxeeCardContainer from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCardContainer";
import {
  IconChartBarLine,
  IconDDV,
  IconArrowUp,
  IconAIScan,
  IconTradeUp,
} from "@/components/ui/icon";

import LandingVRA100 from "@/public/images/landing-vra-100.png";

export default function LandingATIContentUAC() {
  return (
    <LandingWhyFxeeCardContainer className="min-h-[390px] lg:h-full overflow-hidden">
      <LandingATICardHead
        title="Unique AI Capabilities"
        description="Track whale wallet movements for crypto insights. Analyze social sentiment and news for market predictions. Observe top stock portfolios and hedge fund actions."
      />
      <LandingATICardContainer className="sm:w-[380px] w-[314px] absolute right-[27px] lg:right-[56px] -bottom-[22px] lg:bottom-[106px]">
        <div className="flex items-center gap-2 self-stretch z-1">
          <IconChartBarLine width={20} height={20} color="#FFF" />
          <p className="text-white text-[14px] sm:text-[16px] font-regular font-medium tracking-[-0.32px] flex-[1_0_0]">
            Volatility & Risk Analyzer
          </p>
          <IconDDV width={20} height={20} />
        </div>
        <div className="flex flex-col items-start gap-[2px] self-stretch z-1">
          <LandingATCContentVRAItem label="Volatility">
            <p className="text-danger text-[14px] sm:text-[16px] font-regular font-medium tracking-[-0.32px] text-right">
              HIGH (↑ +30% this week)
            </p>
          </LandingATCContentVRAItem>
          <LandingATCContentVRAItem label="Asset">
            <div className="flex items-center gap-1">
              <Image src={LandingVRA100} alt="Fxee" width={16} height={16} />
              <p className="text-white text-[14px] sm:text-[16px] font-regular font-medium tracking-[-0.32px] text-right">
                US 100 Index
              </p>
            </div>
          </LandingATCContentVRAItem>
          <LandingATCContentVRAItem label="ATR(14)">
            <p className="text-white text-[14px] sm:text-[16px] font-regular font-medium tracking-[-0.32px] text-right">
              0.0123
            </p>
          </LandingATCContentVRAItem>
          <LandingATCContentVRAItem label="5D Variance">
            <IconArrowUp width={24} height={24} color="#E10000" />
          </LandingATCContentVRAItem>
        </div>
      </LandingATICardContainer>
      <LandingATICardContainer className="w-[256px] sm:w-[312px] p-3 sm:p-4.5 gap-2.5 sm:gap-4.5 absolute lg:right-[82px] lg:top-[169px] lg:bottom-auto right-[18px] bottom-[52px] z-1 lg:z-0">
        <div className="flex items-center gap-2 self-stretch z-1">
          <IconAIScan width={20} height={20} />
          <p className="text-white text-[12px] sm:text-[16px] font-regular font-medium tracking-[-0.32px] flex-[1_0_0]">
            Trade Probability (Next 5 Days)
          </p>
          <IconDDV width={20} height={20} />
        </div>
        <div className="flex flex-col items-start self-stretch z-1">
          <LandingATCContentTPItem title="Hit Take-Profit" value="67%" />
          <LandingATCContentTPItem title="Hit Stop-Loss" value="19%" />
          <LandingATCContentTPItem title="Neither TP nor SL" value="14%" />
          <LandingATCContentTPItem title="Risk-Reward Ratio" value="2.0" />
        </div>
      </LandingATICardContainer>
      <LandingATICardContainer className="w-[300px] lg:w-[367px] sm:gap-2.5 p-4 sm:p-4.5 absolute right-[68px] sm:right-[128px] lg:right-[92px] -bottom-[42px] lg:bottom-[34px]">
        <div className="flex justify-center items-center gap-2 self-stretch z-1">
          <p className="text-white text-[12px] sm:text-[14px] font-regular font-medium liga tracking-[-0.145px] flex-[1_0_0]">
            AI Confidence Percentage
          </p>
          <div className="flex justify-center items-center gap-1 py-1 px-2 bg-card-weak-gradient rounded-[8px] backdrop-blur-[9.905548095703125px]">
            <IconTradeUp width={16} height={16} color="#3EDC81" />
            <p className="text-white text-[10px] font-regular font-medium tracking-[-0.198px]">
              Bullish
            </p>
          </div>
        </div>
        <div className="self-stretch text-white text-[18px] sm:text-[23px] font-regular font-[700] liga tracking-[-0.347px] z-1">
          78%
        </div>
        <div className="relative h-[20px] px-2 flex justify-between items-center rounded-[24px] bg-white/10 z-1 self-stretch">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="w-[5px] h-[5px] bg-[#454459] rounded-full"
            ></div>
          ))}
          <div className="absolute left-0 top-0 bg-popular-gradient w-[78%] h-full rounded-[24px]"></div>
        </div>
      </LandingATICardContainer>
    </LandingWhyFxeeCardContainer>
  );
}
