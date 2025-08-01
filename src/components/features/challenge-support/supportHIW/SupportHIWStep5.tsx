import React from "react";
import Image from "next/image";

import SupportHIWStepImage from "@/components/features/challenge-support/supportHIW/SupportHIWStepImage";

// import { IconEquity, IconMargin } from "@/components/ui/icon";
import SupportHIWStep5Image from "@/public/images/support-hiw-5.png";

export default function SupportHIWStep5() {
  return (
    <SupportHIWStepImage>
      {/* <div className="absolute top-4 sm:top-8 left-7 sm:left-10">
        <div className="flex items-start gap-2.5 shrink-0 py-2 px-2 sm:py-3.5 sm:px-3 w-[250px] h-[110px] sm:w-[288px] sm:h-[144px] bg-card-green-gradient border border-white/10 rounded-[10px]">
          <div className="flex flex-col items-start justify-between self-stretch flex-[1_0_0]">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center justify-center p-2 rounded-[8px] bg-button-grey-gradient">
                <IconMargin className="shrink-0" width={18} height={18} />
              </div>
              <p className="text-white text-[14px] font-regular font-medium leading-[140%] tracking-[-0.09px]">
                Account Margin
              </p>
            </div>
            <div className="flex flex-col gap-0.5 items-start self-stretch">
              <div className="text-white liga text-[22px] font-regular font-medium leading-[100%] tracking-[-0.128px]">
                0.00.000
              </div>
              <div className="flex justify-between items-center self-stretch text-white/60 liga text-[12px] font-regular font-normal leading-[160%] tracking-[-0.077px]">
                <p>Total Account Margin</p>
                <p className="text-danger">0%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-8 right-7 sm:right-10">
        <div className="flex items-start gap-2.5 shrink-0 py-2 px-2 sm:py-3.5 sm:px-3 w-[250px] h-[110px] sm:w-[288px] sm:h-[144px] bg-card-green-gradient border border-white/10 rounded-[10px]">
          <div className="flex flex-col items-start justify-between self-stretch flex-[1_0_0]">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center justify-center p-2 rounded-[8px] bg-button-grey-gradient">
                <IconEquity className="shrink-0" width={18} height={18} />
              </div>
              <p className="text-white text-[14px] font-regular font-medium leading-[140%] tracking-[-0.09px]">
                Equity
              </p>
            </div>
            <div className="flex flex-col gap-0.5 items-start self-stretch">
              <div className="relative text-white liga text-[22px] font-regular font-medium leading-[100%] tracking-[-0.128px]">
                99,997.49
                <span className="absolute top-0 -right-8 text-white liga text-[12px] font-regular font-normal leading-[160%] tracking-[-0.077px]">
                  USD
                </span>
              </div>
              <div className="flex justify-between items-center self-stretch text-white/60 liga text-[12px] font-regular font-normal leading-[160%] tracking-[-0.077px]">
                <p>Total Equity Increased</p>
                <p className="text-green">12.44%</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Image src={SupportHIWStep5Image} alt="Support HIW Step 5" />
    </SupportHIWStepImage>
  );
}
