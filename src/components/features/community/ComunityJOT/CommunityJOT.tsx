import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";

import LandingButton from "@/components/features/landing/LandingButton";
import {
  IconAIContent,
  IconAIScan,
  IconChartBarLine,
  IconLandingBtn2,
  IconTG,
} from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import TextCommunity from "@/public/images/Revolution-text.svg";
import Image from "next/image";
import CommunityJOTHead from "./CommunityJOTHead";
import CommunityJOTItem from "./CommunityJOTItem";


export default function CommunityJOT() {
  return (
    <LandingMax1440Container className="py-25 z-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 w-full">
      <Image src={TextCommunity} alt="Text Community" className="w-full h-[243px] z-50" />
      </div>
      <div className="relative flex flex-col items-center md:w-[70%]">
        <div className="absolute inset-0 flex -z-1">
          {Array.from({ length: 14 }).map((_, index) => (
            <div
              key={index}
              className="flex-[1_0_0] self-stretch backdrop-blur-[5px] lg:backdrop-blur-xl"
            ></div>
          ))}
        </div>
        <div className="absolute inset-[2px] border-[6px] border-gradient-blue-green opacity-50 -z-2"></div>
        <div className="flex flex-col items-center gap-5 sm:gap-7.5 p-8 sm:p-12.5 border-[2px] border-gradient-blue-green bg-white/5 self-stretch">
          <CommunityJOTHead />
          <Separator className="bg-landing-hiw-separator-gradient opacity-10" />
          
          <div className="flex flex-col items-center gap-5 self-stretch">
            <LandingButton
              color="white"
              icon={
                <React.Fragment>
                  <IconLandingBtn2 className="absolute -z-1 w-full h-full top-0 left-0" />
                  <IconTG className="shrink-0 w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />
                </React.Fragment>
              }
              text="Join Our Telegram"
            />
            <p className="text-white text-center text-[16px] lg:text-[18px] font-satoshi-medium tracking-[-0.36px]">
              25K+ Members | 98% Positive Feedback
            </p>
          </div>
        </div>
      </div>
    </LandingMax1440Container>
  );
}
