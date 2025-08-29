"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingHeroContainer from "@/components/features/landing/landingHero/LandingHeroContainer";
import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInUp } from "@/lib/motion-variants";

export default function CommunityHero() {
  return (
    <LandingHeroContainer className="lg:min-h-screen">
      <LandingMax1440Container>
        <motion.div
          className="flex flex-col items-center gap-5 flex-[1_0_0] self-stretch py-[50px]"
          {...fadeInUp}
        >
          <LandingTitle className="max-w-[1100px] text-center text-[64px] sm:text-[80px] lg:text-[124px] leading-[105%]">
            Join the FXEE Movement — Where Traders and Technology Unite
          </LandingTitle>
          <LandingDescription className="w-full max-w-[640px] !text-white text-center">
            We’re building more than a product — we’re building a movement. Join
            our global community of traders who are leveraging AI to change the
            game.
          </LandingDescription>
        </motion.div>
      </LandingMax1440Container>
    </LandingHeroContainer>
  );
}
