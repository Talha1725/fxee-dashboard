"use client";

import Image from "next/image";
import * as motion from "motion/react-client";

import Galaxy from "@/public/images/galaxy.png";
import { fadeInRightDelayed } from "@/lib/motion-variants";

export default function LandingHeroImage() {
  return (
    <motion.div
      {...fadeInRightDelayed}
      className="relative select-none shrink-0 w-[500px] h-[330px] sm:h-[600px] sm:w-[800px] lg:w-[1030px] lg:h-[760px] 2xl:absolute 2xl:top-25 2xl:right-0 z-10"
    >
      <Image src={Galaxy} alt="Galaxy" fill priority />
    </motion.div>
  );
}
