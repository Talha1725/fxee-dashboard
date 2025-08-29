import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingButton from "@/components/features/landing/LandingButton";
import AboutVisionHead from "@/components/features/about/aboutVision/AboutVisionHead";
import { IconLandingBtn1 } from "@/components/ui/icon";

import AboutVisionBg from "@/public/images/about-vision-bg.png";
import AboutVisionImage from "@/public/images/vission.svg";

export default function AboutVision() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] -z-1">
        <Image src={AboutVisionBg} alt="About Vision" fill />
      </div>
      <LandingMax1440Container className="py-25 gap-[30px] sm:gap-[50px]">
        <AboutVisionHead />
        <div className="w-[350px] h-[250px] sm:w-[600px] sm:h-[400px] md:w-[700px] md:h-[450px] lg:w-[873px] lg:h-[582px] translate-y-5">
          <Image src={AboutVisionImage} alt="About Vision" fill />
        </div>
        <LandingButton
          color="black"
          icon={
            <IconLandingBtn1 className="absolute -z-1 w-full h-full top-0 left-0" />
          }
          text="Join Now"
        />
      </LandingMax1440Container>
    </div>
  );
}
