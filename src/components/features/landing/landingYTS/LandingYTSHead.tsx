"use client";

import React from "react";
import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { fadeInUpView } from "@/lib/motion-variants";
import { useLocalization } from "@/components/localization-provider";

export default function LandingYTSHead() {
  const { t, locale } = useLocalization();
  
  return (
    <motion.div className="flex flex-col items-center gap-5" {...fadeInUpView}>
      <LandingTitle className="w-full lg:w-[800px] text-center tracking-[-3.6px] leading-[120%] text-landing-title-black-gradient text-white">
        {t("yts_title")}
      </LandingTitle>
      <LandingDescription className="text-center !text-white/40 w-full lg:w-[700px]">
        {t("yts_description")}
      </LandingDescription>
    </motion.div>
  );
}
