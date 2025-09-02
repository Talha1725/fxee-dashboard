import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingReviewHead from "@/components/features/landing/landingReview/LandingReviewHead";
import LandingReviewCarousel from "@/components/features/landing/landingReview/LandingReviewCarousel";
import trustpilot from "@/public/images/trustpilot.svg";
import google from "@/public/images/google-rating.svg";
import trustadvisor from "@/public/images/trustadvisor.svg";
import { Separator } from "@radix-ui/react-separator";

export default function LandingReview() {
  return (
    <div className="relative">
      
      <LandingMax1440Container className="pt-20 gap-12.5 sm:gap-[70px] z-1">
        <LandingReviewHead />
        <LandingReviewCarousel />
      </LandingMax1440Container>

      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-15"></div>


      <div className="flex flex-wrap justify-center items-center mb-15 mt-5 md:mt-1">
        <Image src={trustpilot} alt="trustpilot" />
        <Image src={trustadvisor} alt="trustadvisor" />
        <Image src={google} alt="google" />
      </div>
    
    </div>
  );
}
