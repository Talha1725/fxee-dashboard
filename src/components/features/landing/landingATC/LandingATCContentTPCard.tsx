import React from "react";

import LandingATCContentTPItem from "@/components/features/landing/landingATC/LandingATCContentTPItem";
import { IconAIScan, IconDDV } from "@/components/ui/icon";

export default function LandingATCContentTPCard() {
  return (
    <React.Fragment>
      <div className="flex items-center gap-2 self-stretch z-1">
        <IconAIScan width={20} height={20} />
        <p className="text-white text-[15px] sm:text-[16px] font-regular font-medium tracking-[-0.32px] flex-[1_0_0]">
          Trade Probability (Next 5 Days)
        </p>
        <IconDDV width={20} height={20} />
      </div>
      <div className="flex flex-col items-start gap-[2px] self-stretch z-1">
        <LandingATCContentTPItem title="Hit Take-Profit" value="67%" />
        <LandingATCContentTPItem title="Hit Stop-Loss" value="19%" />
        <LandingATCContentTPItem title="Neither TP nor SL" value="14%" />
        <LandingATCContentTPItem title="Risk-Reward Ratio" value="2.0" />
      </div>
    </React.Fragment>
  );
}
