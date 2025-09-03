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
    <LandingHeroContainer className="h-fit mb-10 lg:!-mb-24">
      <LandingMax1440Container className="gradient-white-border h-fit">
      <div className="absolute top-[35%] right-[-40%] md:right-20 select-none w-[650px] h-[70px] rounded-full bg-white -rotate-[19deg] opacity-40 md:opacity-90 blur-[100px] md:blur-[180px] overflow-visible"></div>

        <motion.div
          className="flex flex-col items-center gap-5 flex-[1_0_0] self-stretch py-[50px]"
          {...fadeInUp}
        >
          <LandingTitle className="text-center text-[64px] leading-[125%] lg:w-[808px]">
            Pass Your Prop Firm Challenge Without Lifting a Finger
          </LandingTitle>
          <LandingDescription className="w-full max-w-[390px] !text-white/50 text-center">
            Let FXEE handle the strategy, risk, and execution — you just connect
            and watch it work.
          </LandingDescription>
        </motion.div>
      </LandingMax1440Container>
    </LandingHeroContainer>
  );
}
