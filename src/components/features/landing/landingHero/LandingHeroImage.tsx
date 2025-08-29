"use client";

import Image from "next/image";
import * as motion from "motion/react-client";

import Galaxy from "@/public/images/galaxy.png";
import { fadeInRightDelayed } from "@/lib/motion-variants";

export default function LandingHeroImage() {
  return (
    <motion.div
      {...fadeInRightDelayed}
      className="relative select-none shrink-0 mt-4 sm:mt-0 w-[500px] h-[380px] md:h-[600px] md:w-[800px] lg:w-[1030px] lg:h-[760px] xl:w-[830px] xl:h-[600px] min-[1420px]:w-[1010px] min-[1420px]:h-[760px] xl:absolute xl:top-28 min-[1420px]:top-25 xl:right-0 z-10"
    >
      <Image src={Galaxy} alt="Galaxy" fill priority />
    </motion.div>
  );
}
