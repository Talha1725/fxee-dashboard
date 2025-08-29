"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingHeroContainer from "@/components/features/landing/landingHero/LandingHeroContainer";
import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInUp } from "@/lib/motion-variants";

export default function SupportHero() {
  return (
    <LandingHeroContainer className="lg:min-h-screen mb-25">
      <LandingMax1440Container>
        <motion.div
          className="flex flex-col items-center gap-5 flex-[1_0_0] self-stretch pt-[40px] sm:pt-[100px] lg:pt-[146px]"
          {...fadeInUp}
        >
          <LandingTitle className="text-center text-[64px] sm:text-[80px] lg:text-[124px] leading-[105%]">
            Pass Your Prop Firm Challenge Without Lifting a Finger
          </LandingTitle>
          <LandingDescription className="w-full max-w-[390px] !text-white text-center">
            Let FXEE handle the strategy, risk, and execution — you just connect
            and watch it work.
          </LandingDescription>
        </motion.div>
      </LandingMax1440Container>
    </LandingHeroContainer>
  );
}
