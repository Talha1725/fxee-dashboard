"use client";
import React from "react";
// import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import AboutMissionHead from "@/components/features/about/aboutMission/AboutMissionHead";

// import AboutMissionImage from "@/public/images/about-mission-bg.png";
import AboutMissionImage from "@/public/images/mission.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AboutMission() {
  const router = useRouter();
  return (
    <div className="relative mt-7 lg:mt-10">
      {/* <div className="absolute bottom-0 left-0 w-[400px] h-[300px] sm:w-[500px] sm:h-[450px] md:w-[750px] md:h-[700px]">
        <Image src={AboutMissionImage} alt="About Mission" fill />
      </div> */}
      <LandingMax1440Container className="gap-[30px] sm:gap-[50px]">
        <AboutMissionHead />
        <Image src={AboutMissionImage} alt="About Mission" />
        <Button onClick={() => router.push('/home')} variant={"white"} className="font-satoshi-medium md:hidden mt-5">See the AI in action</Button>
      </LandingMax1440Container>
    </div>
  );
}
