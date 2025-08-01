"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingHeroContainer from "@/components/features/landing/landingHero/LandingHeroContainer";
import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInUp } from "@/lib/motion-variants";

export default function ContactHero() {
  return (
    <LandingHeroContainer>
      <LandingMax1440Container>
        <motion.div
          className="flex flex-col items-center gap-5 flex-[1_0_0] self-stretch py-[50px] justify-center"
          {...fadeInUp}
        >
          <LandingTitle className="max-w-[1050px] text-center text-[64px] sm:text-[80px] lg:text-[124px] leading-[105%]">
            Questions? Ideas?
            <br />
            Need Help? <br />
            We’ve Got You.
          </LandingTitle>
          <LandingDescription className="w-full max-w-[460px] text-white text-center">
            Whether you’re a new user, VIP client, or business partner — we’re
            here to support you every step of the way.
          </LandingDescription>
        </motion.div>
      </LandingMax1440Container>
    </LandingHeroContainer>
  );
}
