import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingDescription from "@/components/features/landing/LandingDescription";
import HIWFlowContent from "@/components/features/how-it-works/HIWFlow/HIWFlowContent";

import HIWBg from "@/public/images/hiw-bg.png";

export default function HIWFlow() {
  return (
    <div className="relative">
      <Image
        src={HIWBg}
        alt="HIW Background"
        className="absolute bottom-0 right-0 w-[1000px] h-[800px] object-cover"
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
