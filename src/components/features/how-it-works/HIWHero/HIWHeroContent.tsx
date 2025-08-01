"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import {
  IconOandaLogo,
  IconOpenAILogo,
  IconTradingViewLogo,
  IconBinanceLogo,
  IconLogo4,
} from "@/components/ui/icon";
import { fadeInUp, createFadeIn } from "@/lib/motion-variants";

export default function HIWHeroContent() {
  return (
    <LandingMax1440Container>
      <div className="flex flex-col items-center gap-10 flex-[1_0_0] self-stretch pt-12.5 pb-12.5 lg:pt-25 lg:pb-0">
        <motion.div className="flex flex-col items-center gap-5" {...fadeInUp}>
          <LandingTitle className="text-center text-[64px] sm:text-[80px] lg:text-[124px] leading-[100%]">
            Trade Smarter.
            <br />
            Simulate Faster.
            <br />
            Scale Easier.
          </LandingTitle>
          <LandingDescription className="w-full max-w-[620px] text-white text-center">
            FXEE is the result of powerful inspiration and innovation —
            combining the market intelligence of the world’s top platforms into
            one seamless experience.
          </LandingDescription>
        </motion.div>
        <motion.div
          className="relative flex items-center gap-10 sm:gap-15 h-[156px]"
          {...createFadeIn(0.5)}
        >
          <div className="absolute inset-0 mask-landing-pfs-partner z-1"></div>
          <IconOandaLogo className="w-[130px] h-[37px]" />
          <IconTradingViewLogo className="w-[130px] h-[24px]" />
          <IconLogo4
            className="w-[97px] sm:w-[120px] h-[126px] sm:h-[156px] multi-dropshadow"
            opacity={0.5}
          />
          <IconBinanceLogo className="w-[130px] h-[26px]" />
          <IconOpenAILogo className="w-[130px] h-[35px]" />
        </motion.div>
      </div>
    </LandingMax1440Container>
  );
}
