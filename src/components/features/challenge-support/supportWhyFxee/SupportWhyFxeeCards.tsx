import React from "react";
import Image from "next/image";

import SupportWhyFxeeCard from "@/components/features/challenge-support/supportWhyFxee/SupportWhyFxeeCard";

import SupportWhyFxeeCard1 from "@/public/images/support-whyfxee-card1.png";
import SupportWhyFxeeCard2 from "@/public/images/support-whyfxee-card2.png";
import SupportWhyFxeeCard3 from "@/public/images/support-whyfxee-card3.png";
import SupportWhyFxeeCard4 from "@/public/images/support-whyfxee-card4.png";

export default function SupportWhyFxeeCards() {
  return (
    <div className="flex flex-col items-start sm:gap-7.5 gap-3">
      <div className="flex lg:flex-row flex-col items-center lg:gap-10 sm:gap-7.5 gap-3 self-stretch">
        <SupportWhyFxeeCard
          title="Adaptive Intelligence"
          description="AI continuously learns and adjusts in real-time"
        >
          <div className="absolute bottom-5 sm:bottom-0 -right-[66px] sm:right-2.5 select-none w-[406px] sm:w-[436px] h-[190px]">
            <Image
              src={SupportWhyFxeeCard1}
              alt="Support Why Fxee Card 1"
              fill
            />
          </div>
        </SupportWhyFxeeCard>
        <SupportWhyFxeeCard
          title="Risk Logic Built-In"
          description="Advanced risk logic built-in (Max Daily Loss, Max Loss, Profit Target thresholds)"
        >
          <div className="absolute bottom-0 right-0 select-none w-[358px] h-[180px]">
            <Image
              src={SupportWhyFxeeCard2}
              alt="Support Why Fxee Card 2"
              fill
            />
          </div>
        </SupportWhyFxeeCard>
      </div>
      <div className="flex lg:flex-row flex-col items-center lg:gap-10 sm:gap-7.5 gap-3 self-stretch">
        <SupportWhyFxeeCard
          title="Smart Signals"
          description="No signal groups or random scalping"
        >
          <div className="absolute bottom-0 right-0 select-none w-[300px] sm:w-[432px] h-[200px] sm:h-[160px]">
            <Image
              src={SupportWhyFxeeCard3}
              alt="Support Why Fxee Card 3"
              fill
            />
          </div>
        </SupportWhyFxeeCard>
        <SupportWhyFxeeCard
          title="Rule-Based"
          description="Trades only when rules match your firm’s criteria"
        >
          <div className="absolute bottom-0 right-2.5 select-none w-[333px] sm:w-[443px] h-[211px] sm:h-[170px]">
            <Image
              src={SupportWhyFxeeCard4}
              alt="Support Why Fxee Card 4"
              fill
            />
          </div>
        </SupportWhyFxeeCard>
      </div>
    </div>
  );
}
