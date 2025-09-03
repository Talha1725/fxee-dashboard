"use client";
import React from "react";
import Image from "next/image";

import SupportWhyFxeeCard from "@/components/features/challenge-support/supportWhyFxee/SupportWhyFxeeCard";
import { useMediaQuery } from "@/hooks/use-media-query";

import SupportWhyFxeeCard1 from "@/public/images/support-whyfxee-card1.svg";
import SupportWhyFxeeCard2 from "@/public/images/support-whyfxee-card2.png";
import SupportWhyFxeeCard3 from "@/public/images/smart-signal-mobile.svg";
import SupportWhyFxeeCard4 from "@/public/images/rule-based-mobile.svg";
import { LongEllipse } from "@/components/ui/icon";

export default function SupportWhyFxeeCards() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-7.5 gap-3 mt-10 md:mt-3 mx-auto max-w-[1140px] relative">
 <LongEllipse className="absolute -top-[80%] md:-top-[120%] -right-[140%] sm:right-1/2 sm:translate-x-1/2 opacity-60 z-50 pointer-events-none" />
        <SupportWhyFxeeCard
          title="Adaptive Intelligence"
          description="AI continuously learns and adjusts in real-time"
        >
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 min-[541px]:translate-x-0 min-[541px]:-bottom-3 min-[541px]:right-2 select-none min-[541px]:w-[436px] min-[541px]:h-[193px] w-[290px] h-[151px]">
            <Image
              src={SupportWhyFxeeCard1}
              alt="Support Why Fxee Card 1"
              fill
              className="object-contain min-[541px]:object-cover min-[541px]:object-top-left"
            />
          </div>
        </SupportWhyFxeeCard>
        <SupportWhyFxeeCard
          title="Risk Logic Built-In"
          description="Advanced risk logic built-in (Max Daily Loss, Max Loss, Profit Target thresholds)"
        >
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 min-[541px]:translate-x-0 min-[541px]:-bottom-3 min-[541px]:right-2 select-none min-[541px]:w-[358px] min-[541px]:h-[180px] w-[90%] h-[150px] min-[380px]:w-[90%] min-[380px]:h-[160px]">
            <Image
              src={SupportWhyFxeeCard2}
              alt="Support Why Fxee Card 2"
              fill
            />
          </div>
        </SupportWhyFxeeCard>
      
        <SupportWhyFxeeCard
          title="Smart Signals"
          description="No signal groups or random scalping"
        >
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 min-[541px]:translate-x-0 min-[541px]:-bottom-22 min-[541px]:right-2 select-none min-[541px]:w-[436px] min-[541px]:h-[288px] w-[99%] h-[170px]">
            <Image
              src={SupportWhyFxeeCard3}
              alt="Support Why Fxee Card 3"
              fill
            />
          </div>
        </SupportWhyFxeeCard>
        <SupportWhyFxeeCard
          title="Rule-Based"
          description="Trades only when rules match your firm's criteria"
        >
          <div className="absolute -bottom-5 right-1/2 translate-x-1/2 min-[541px]:translate-x-0 min-[541px]:-bottom-17 min-[541px]:right-2 select-none min-[541px]:w-[442px] min-[541px]:h-[280px] w-[90%] h-[178px]">
            <Image
              src={SupportWhyFxeeCard4}
              alt="Support Why Fxee Card 4"
              fill
            />
          </div>
        </SupportWhyFxeeCard>
      </div>
  );
}
