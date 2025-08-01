import React from "react";
// import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import AboutMissionHead from "@/components/features/about/aboutMission/AboutMissionHead";

// import AboutMissionImage from "@/public/images/about-mission-bg.png";

export default function AboutMission() {
  return (
    <div className="relative">
      {/* <div className="absolute bottom-0 left-0 w-[400px] h-[300px] sm:w-[500px] sm:h-[450px] md:w-[750px] md:h-[700px]">
        <Image src={AboutMissionImage} alt="About Mission" fill />
      </div> */}
      <LandingMax1440Container className="py-25 gap-[30px] sm:gap-[50px]">
        <AboutMissionHead />
      </LandingMax1440Container>
    </div>
  );
}
