import React from "react";

import { IconATF, IconDDV } from "@/components/ui/icon";
import { Text16, Description14, TextWarning, TextSuccess } from "@/components/ui/typography";

export default function LandingATCContentATFCard() {
  return (
    <React.Fragment>
      <div className="flex items-center gap-1 sm:gap-2 self-stretch z-1">
        <IconATF className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]" />
        <Text16 className="flex-[1_0_0]">
          AI Trend Forecast
        </Text16>
        <IconDDV className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]" />
      </div>
      <div className="flex flex-col items-start gap-0.5 self-stretch z-1">
        <div className="flex items-center gap-1 sm:gap-2 py-1 self-stretch">
          <Description14 className="text-[13px] sm:text-[14px] tracking-[-0.28px] flex-[1_0_0]">
            24h AI Forecast
          </Description14>
          <TextWarning className="text-[13px] sm:text-[16px] font-medium tracking-[-0.32px]">
            Moderate Uptrend
          </TextWarning>
        </div>
      </div>
      <div className="flex flex-col items-start gap-0.5 self-stretch z-1">
        <div className="flex items-center gap-1 sm:gap-2 py-1 self-stretch">
          <Description14 className="text-[13px] sm:text-[14px] tracking-[-0.28px] flex-[1_0_0]">
            Expected Range
          </Description14>
          <Text16 className="text-[13px] sm:text-[16px] font-medium tracking-[-0.32px]">
            $1.2000 – $1.2150
          </Text16>
        </div>
      </div>
      <div className="flex flex-col items-start gap-0.5 self-stretch z-1">
        <div className="flex items-center gap-1 sm:gap-2 py-1 self-stretch">
          <Description14 className="text-[13px] sm:text-[14px] tracking-[-0.28px] flex-[1_0_0]">
            Confidence
          </Description14>
          <TextSuccess className="text-[13px] sm:text-[16px] font-medium tracking-[-0.32px]">
            80%
          </TextSuccess>
        </div>
      </div>
    </React.Fragment>
  );
}
