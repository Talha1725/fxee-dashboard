  import React from "react";

  import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
  import LandingJOTHead from "@/components/features/landing/landingJOT/LandingJOTHead";
  import LandingJOTItem from "@/components/features/landing/landingJOT/LandingJOTItem";
  import {
    IconAIContent,
    IconAIScan,
    IconChartBarLine,
    IconLandingBtn2,
    IconTG,
  } from "@/components/ui/icon";
  import bullBg from "@/public/images/bull-bg.svg";
  import bullRightMobile from "@/public/images/bull-mobile.svg";
  import Image from "next/image";
  import { Button } from "@/components/ui/button";

  export default function LandingJOT() {
    return (
      <LandingMax1440Container className="py-20 z-50">
        <div className="p-[1px] rounded-gradient-border xl:w-[1150px] relative overflow-hidden">
          <div className="bg-black h-full w-full rounded-md z-50 relative">
          <div className="bull-gradient h-full w-full z-50 relative">

            <Image src={bullBg} alt="bull-right-top" className="absolute w-full h-full top-0 sm:block hidden object-cover" />
            <Image src={bullRightMobile} alt="bull-right-top" className="absolute w-full h-full top-0 block sm:hidden object-cover" />
            <div className="flex flex-col items-center gap-5 p-8 sm:p-12.5  self-stretch z-50 relative">
              <LandingJOTHead />
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-2.5 md:gap-0 lg:gap-10 self-stretch flex-[1_0_0] mt-10">
                <LandingJOTItem
                  icon={
                    <IconAIScan className="shrink-0 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
                  }
                  title="AI-Powered Alerts"
                />
                <LandingJOTItem
                  icon={
                    <IconAIContent className="shrink-0 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
                  }
                  title="Daily Trading Signals"
                />
                <LandingJOTItem
                  icon={
                    <IconChartBarLine className="shrink-0 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
                  }
                  title="Insider Content"
                />
              </div>
              <div className="flex flex-col items-center gap-5 self-stretch mt-8">
                <Button variant="white" className="relative font-satoshi-medium">
                  <React.Fragment>
                      <IconTG className="shrink-0 w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />
                    </React.Fragment>
                  Join Our Telegram
                </Button>
                <p className="text-white text-center text-[16px] lg:text-[18px] font-satoshi tracking-[-0.36px] text-nowrap">
                  25K+ Members | 98% Positive Feedback
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </LandingMax1440Container>
    );
  }
