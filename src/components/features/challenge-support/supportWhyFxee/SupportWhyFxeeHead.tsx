"use client";

import * as motion from "motion/react-client";

import LandingTitle from "@/components/features/landing/LandingTitle";
import { fadeInDownView } from "@/lib/motion-variants";

export default function SupportWhyFxeeHead() {
  return (
    <motion.div className="max-w-[700px]" {...fadeInDownView}>
      <LandingTitle className="text-center text-[56px] leading-[125%]">
        Why FXEE Beats Other Challenge Services
      </LandingTitle>
    </motion.div>
  );
}
