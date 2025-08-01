import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingTitle from "@/components/features/landing/LandingTitle";
import AboutTechStackCards from "@/components/features/about/aboutTechStack/AboutTechStackCards";

import AboutTechStackImage from "@/public/images/about-tech-stack-bg.png";

export default function AboutTechStack() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[750px] md:w-[700px] md:h-[950px]">
        <Image src={AboutTechStackImage} alt="About Tech Stack" fill />
      </div>
      <LandingMax1440Container className="py-25 gap-[50px] sm:gap-[70px]">
        <LandingTitle className="text-center">
          Our Technology Stack Includes
        </LandingTitle>
        <AboutTechStackCards />
      </LandingMax1440Container>
    </div>
  );
}
