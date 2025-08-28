import React from "react";

import { IconTradeUp } from "@/components/ui/icon";

export default function LandingATCContentACPCard() {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center gap-2 self-stretch z-1">
        <p className="text-white text-[12px] sm:text-[14px] font-regular font-medium liga tracking-[-0.145px] flex-[1_0_0]">
          AI Confidence Percentage
        </p>
        <div className="flex justify-center items-center gap-1 py-1 px-2 bg-card-weak-gradient rounded-[8px] backdrop-blur-[5px] bg-white/10">
          <IconTradeUp width={16} height={16} color="#3EDC81" />
          <p className="text-white text-[10px] font-regular font-medium tracking-[-0.198px]">
            Bullish
          </p>
        </div>
      </div>
      <div className="self-stretch text-white text-[21px] sm:text-[23px] font-regular font-[700] liga tracking-[-0.347px] z-1">
        78%
      </div>
      <div className="relative h-[18px] sm:h-[20px] px-2 flex justify-between items-center rounded-[24px] bg-white/10 z-1 self-stretch">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="w-[5px] h-[5px] bg-[#454459] rounded-full"
          ></div>
        ))}
        <div className="absolute left-0 top-0 bg-popular-gradient w-[78%] h-full rounded-[24px]"></div>
      </div>
    </React.Fragment>
  );
}
