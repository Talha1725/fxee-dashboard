import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingReviewHead from "@/components/features/landing/landingReview/LandingReviewHead";
import LandingReviewCarousel from "@/components/features/landing/landingReview/LandingReviewCarousel";

import LandingReviewBG from "@/public/images/landing-review.png";

export default function LandingReview() {
  return (
    <div className="relative">
      <LandingMax1440Container className="py-25 gap-12.5 sm:gap-[70px] z-1">
        <LandingReviewHead />
        <LandingReviewCarousel />
      </LandingMax1440Container>
      <Image
        src={LandingReviewBG}
        alt="Landing Review BG"
        className="absolute bottom-[300px] sm:bottom-0 right-0 min-w-[800px] h-[500px] sm:h-[800px] lg:w-[1400px] lg:h-[1200px]"
      />
    </div>
  );
}
