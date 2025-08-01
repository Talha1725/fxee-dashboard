import Image from "next/image";
import React from "react";

import { IconChevronDown } from "@/components/ui/icon";
import {
  Text18,
  TextSuccess,
  Body12,
  Text16,
} from "@/components/ui/typography";

import LandingRBVVector from "@/public/images/landing-rbv-vector.png";

export default function LandingATCContentRBVCard() {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center z-1 self-stretch">
        <Text18 className="flex-[1_0_0]">Range Bar Visualization</Text18>
        <IconChevronDown width={24} height={24} />
      </div>
      <div className="flex flex-col items-center gap-2.5 sm:gap-4 self-stretch z-1">
        <div className="self-stretch">
          <Image
            src={LandingRBVVector}
            alt="Fxee"
            className="w-full h-[80px] sm:h-[100px] select-none"
          />
        </div>
        <div className="flex flex-col items-center gap-[6px] self-stretch">
          <div className="flex flex-col items-center">
            <TextSuccess className="text-[16px] sm:text-[18px] font-medium liga tracking-[-0.36px]">
              Current
            </TextSuccess>
            <Body12 className="text-[11px] sm:text-[12px] liga tracking-[-0.24px]">
              (AI expects range here)
            </Body12>
          </div>
          <div className="flex justify-between items-center self-stretch">
            <Text16 className="text-[15px] sm:text-[16px] font-medium tracking-[-0.32px]">
              $1,200
            </Text16>
            <Text16 className="text-[15px] sm:text-[16px] font-medium tracking-[-0.32px]">
              $12,150
            </Text16>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
