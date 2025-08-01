import React from "react";
import { ReviewText } from "@/components/ui/typography";

interface LandingReviewCarouselSlideProps {
  name?: string;
  testimonial?: string;
}

export default function LandingReviewCarouselSlide({
  name = "David Kim",
  testimonial = "With the guidance I received, I finally feel confident navigating the market. The results are speaking for themselves!",
}: LandingReviewCarouselSlideProps) {
  return (
    <div className="transform-gpu flex flex-col gap-5 justify-center items-center w-full max-w-[100vw] sm:max-w-[798px] mx-auto p-[50px] self-stretch bg-landing-review-gradient border-landing-review-gradient">
      <p className="text-white/70 text-[16px] sm:text-[18px] font-satoshi font-[700] tracking-[-0.36px] uppercase">
        {name}
      </p>
      <ReviewText className="text-center self-stretch">
        {testimonial}
      </ReviewText>
    </div>
  );
}
