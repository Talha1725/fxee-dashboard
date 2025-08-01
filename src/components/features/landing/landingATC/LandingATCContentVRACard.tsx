import Image from "next/image";
import React from "react";

import { IconArrowUp, IconChartBarLine, IconDDV } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

import LandingATCContentVRAItem from "@/components/features/landing/landingATC/LandingATCContentVRAItem";
import LandingVRA100 from "@/public/images/landing-vra-100.png";
import LandingVRARisk from "@/public/images/landing-vra-risk.png";

export default function LandingATCContentVRACard() {
  return (
    <React.Fragment>
      <div className="flex items-center gap-2 self-stretch z-1">
        <IconChartBarLine width={20} height={20} />
        <p className="text-white text-[14px] sm:text-[16px] font-regular font-medium tracking-[-0.32px] flex-[1_0_0]">
          Volatility & Risk Analyzer
        </p>
        <IconDDV width={20} height={20} />
      </div>
      <div className="flex flex-col items-start gap-[2px] self-stretch z-1">
        <LandingATCContentVRAItem label="Volatility">
          <p className="text-danger text-[13px] sm:text-[16px] font-regular font-medium tracking-[-0.32px] text-right">
            HIGH (↑ +30% this week)
          </p>
        </LandingATCContentVRAItem>
        <LandingATCContentVRAItem label="Asset">
          <div className="flex items-center gap-1">
            <Image src={LandingVRA100} alt="Fxee" width={16} height={16} />
            <p className="text-white text-[13px] sm:text-[16px] font-regular font-medium tracking-[-0.32px] text-right">
              US 100 Index
            </p>
          </div>
        </LandingATCContentVRAItem>
        <LandingATCContentVRAItem label="ATR(14)">
          <p className="text-white text-[13px] sm:text-[16px] font-regular font-medium tracking-[-0.32px] text-right">
            0.0123
          </p>
        </LandingATCContentVRAItem>
        <LandingATCContentVRAItem label="5D Variance">
          <IconArrowUp width={24} height={24} color="#E10000" />
        </LandingATCContentVRAItem>
      </div>
      <Separator className="bg-white/5 z-1" />
      <div className="flex flex-col justify-center items-center gap-2 z-1">
        <p className="text-[#F59D31] text-[16px] sm:text-[18px] font-regular font-medium liga tracking-[-0.09px]">
          Medium
        </p>
        <Image
          src={LandingVRARisk}
          alt="Fxee"
          className="h-[150px] w-[290px] sm:w-[290px] sm:h-[220px] select-none"
        />
      </div>
    </React.Fragment>
  );
}
