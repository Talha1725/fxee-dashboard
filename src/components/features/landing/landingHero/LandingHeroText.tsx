"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingButton from "@/components/features/landing/LandingButton";
import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { IconLandingBtn1 } from "@/components/ui/icon";
import { fadeInUp } from "@/lib/motion-variants";

export default function LandingHeroText() {
  return (
    <motion.div
      {...fadeInUp}
      className="flex flex-col md:items-center xl:items-start gap-5 flex-[1_0_0] self-stretch pt-12.5 pb-0 xl:py-12.5"
    >
      <LandingTitle className="md:text-center xl:text-start text-[64px] sm:text-[80px] lg:text-[124px] lg:tracking-[-6.169px] leading-[100%]">
        AI Meets Trading.
        <br />
        Redefined.
      </LandingTitle>
      <LandingDescription className="w-full max-w-[460px] !text-white md:text-center xl:text-start">
        The most advanced AI-powered trading simulator for forex, crypto, and
        indices. Trade smarter, train harder, and pass prop firm challenges with
        precision.
      </LandingDescription>
      <div className="flex items-start gap-2.5 sm:gap-5">
        <LandingButton
          color="black"
          icon={
            <IconLandingBtn1 className="absolute -z-1 w-full h-full inset-0" />
          }
          text="Start Trading Now"
          href="/home"
          className="xs:px-4 px-2.5"
        />
        <LandingButton
          color="white"
          text="See the AI in Action"
          href="/ai-engine"
          className="border border-white/20 xs:px-4 px-2.5"
        />
      </div>
    </motion.div>
  );
}
