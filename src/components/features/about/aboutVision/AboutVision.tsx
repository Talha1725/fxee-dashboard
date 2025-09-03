import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingButton from "@/components/features/landing/LandingButton";
import AboutVisionHead from "@/components/features/about/aboutVision/AboutVisionHead";
import { IconLandingBtn1 } from "@/components/ui/icon";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { Button } from "@/components/ui/button";

import AboutVisionBg from "@/public/images/about-vision-bg.png";
import AboutVisionImage from "@/public/images/vission.svg";

export default function AboutVision() {
  return (
    <div className="relative">
      <LandingMax1440Container className="py-25 pb-10 gap-[30px] sm:gap-[50px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center lg:w-[85%] mx-auto gap-10">
        <div className="md:w-1/2">
          <div className="flex flex-col gap-5 items-start w-full">
            <LandingTitle className="">Our Vision</LandingTitle>
            <LandingDescription className="max-w-[445px]">
              To lead the global shift toward automated, intelligent,
              simulation-based trading — where humans and AI work together to
              make smarter decisions.
            </LandingDescription>
            <Button variant={"white"} className="font-satoshi-medium">
              Join Now
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src={AboutVisionImage} alt="About Vision" />
        </div>
        </div>
      </LandingMax1440Container>
    </div>
  );
}
