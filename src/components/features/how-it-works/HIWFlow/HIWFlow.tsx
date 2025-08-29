import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingDescription from "@/components/features/landing/LandingDescription";
import HIWFlowContent from "@/components/features/how-it-works/HIWFlow/HIWFlowContent";

import HIWBg from "@/public/images/hiw-bg.png";
import LandingTop from "@/public/images/landing-tp-sec.png";

export default function HIWFlow() {
  return (
    <div className="relative">
      <Image
        src={HIWBg}
        alt="HIW Background"
        className="absolute bottom-[-8%] md:-bottom-[13.7%] right-0 w-full h-[200px] md:w-[1000px] md:h-[800px] md:object-cover md:block hidden"
      />
      <Image
        src={LandingTop}
        alt="HIW Background"
        className="absolute bottom-[-0%] min-[411px]:bottom-[-3%] -right-6 md:-bottom-[13.7%] md:right-0 w-[1300px] min-[411px]:w-[400px] h-[auto] md:w-[1000px] md:h-[800px] object-cover block md:hidden"
      />
      <LandingMax1440Container className="py-25 gap-12.5 sm:gap-[70px]">
        <LandingDescription className="text-center max-w-[734px]">
          FXEE is your all-in-one AI trading companion — built for speed,
          precision, and simplicity. Whether you’re testing a new strategy or
          getting ready to crush a prop firm challenge, FXEE puts the power of
          institutional-grade tools in your hands.
        </LandingDescription>
        <HIWFlowContent />
      </LandingMax1440Container>
    </div>
  );
}
