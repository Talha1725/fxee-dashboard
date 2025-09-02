"use client";

import Image from "next/image";
import * as motion from "motion/react-client";

import Galaxy from "@/public/images/galaxy-tab.svg";
import { fadeInRightDelayed } from "@/lib/motion-variants";

export default function LandingHeroImage() {
  return (
    <motion.div
      {...fadeInRightDelayed}
      className="bottom-[-10%] lg:bottom-[-20%] absolute left-1/2 -translate-x-1/2 lg:w-[1200px] lg:h-[600px] min-[576px]:w-[900px] min-[576px]:h-[450px] w-[800px] h-[380px] z-50"
    >
      <Image src={Galaxy} alt="Galaxy" fill priority />
    </motion.div>
  );
}
