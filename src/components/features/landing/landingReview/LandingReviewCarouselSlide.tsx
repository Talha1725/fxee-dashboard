import React from "react";
import { ReviewText } from "@/components/ui/typography";
import Image from "next/image";

interface LandingReviewCarouselSlideProps {
  name?: string;
  testimonial?: string;
  image?: any;
}

export default function LandingReviewCarouselSlide({
  name,
  testimonial,
  image
}: LandingReviewCarouselSlideProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-md p-5 max-w-[350px] md:max-w-[410px] hover:border-white/20 hover:bg-gradient-to-b hover:from-white/5 hover:to-transparent transition-all duration-300 flex flex-col h-[200px]">
      <p className="font-satoshi text-[20px] flex-1">"{testimonial}"</p>

      <div className="flex items-center gap-2.5 mt-auto">
        <Image src={image} alt="avatar" className="w-[40px] h-[40px] rounded-full" />
        <p className="font-satoshi text-[18px]">{name}</p>
      </div>
    </div>
  );
}
