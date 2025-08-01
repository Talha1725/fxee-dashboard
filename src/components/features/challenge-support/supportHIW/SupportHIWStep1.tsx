import React from "react";
import Image from "next/image";

import SupportHIWStepImage from "@/components/features/challenge-support/supportHIW/SupportHIWStepImage";
// import { IconFlashlight } from "@/components/ui/icon";

import SupportHIWStep1Image from "@/public/images/support-hiw-1.png";

export default function SupportHIWStep1() {
  return (
    <SupportHIWStepImage>
      {/* <div className="absolute top-4 sm:top-8 left-7 sm:left-10 flex flex-col items-center gap-2 shrink-0 pb-3.5 sm:pb-5 w-[250px] h-[110px] sm:w-[318px] sm:h-[145px] bg-green-radial-gradient border-green-gradient rounded-[14px]">
        <div className="absolute top-0 left-0 right-0">
          <div className="w-full flex px-2 py-1 items-center justify-center gap-[5px] bg-popular-gradient rounded-t-[14px]">
            <IconFlashlight width={18} height={18} />
            <p className="text-center text-white text-[14px] font-medium leading-normal tracking-[-0.267px]">
              Most Popular
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 pt-7 sm:pt-8">
          <p className="text-white text-center text-[18px] sm:text-[24px] font-regular font-medium tracking-[-0.497px]">
            Pro
          </p>
          <p className="text-white text-center text-[18px] sm:text-[24px] font-regular font-[700] tracking-[-0.497px]">
            $249/month
          </p>
          <p className="text-white/80 text-center text-[10px] sm:text-[12px] font-regular font-normal">
            Serious Insights. Serious Gains
          </p>
        </div>
        <div className="absolute bottom-0 right-0 left-0">
          <div className="h-[4px] w-[214px] rounded-r bg-popular-gradient mx-auto"></div>
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-8 right-7 sm:right-10 flex flex-col items-center px-4.5 py-5 justify-center gap-3.5 shrink-0 w-[250px] h-[100px] sm:w-[318px] sm:h-[132px] bg-dark-radial-gradient border border-white/30 rounded-[14px]">
        <div className="flex flex-col items-center gap-1">
          <p className="text-white text-center text-[18px] sm:text-[24px] font-regular font-medium tracking-[-0.497px]">
            VIP
          </p>
          <p className="text-white text-center text-[18px] sm:text-[24px] font-regular font-[700] tracking-[-0.497px]">
            $399/month
          </p>
          <p className="text-white/80 text-center text-[10px] sm:text-[12px] font-regular font-normal">
            Elite Trading Intelligence. Built for Toppers
          </p>
        </div>
      </div> */}
      <Image
        src={SupportHIWStep1Image}
        alt="Support HIW Step 1"
        className="object-cover object-top"
      />
    </SupportHIWStepImage>
  );
}
