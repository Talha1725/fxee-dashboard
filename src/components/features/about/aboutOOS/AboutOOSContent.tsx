import Image from "next/image";
import React from "react";
import AboutOOSImage from "@/public/images/origin-story.svg";
import AboutOOSImageMobile from "@/public/images/origin-story-mobile.svg";

export default function AboutOOSContent() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-5 w-full pt-10 md:pb-2 px-0 md:px-5 rounded-none border-green-gradient bg-landing-card-green-gradient">
      <div className="flex flex-col items-start gap-2.5 md:w-[450px] px-5 md:px-0">
        <p className="md:w-[383px] text-white/90 text-[20px] font-regular font-medium tracking-[-0.4px]">
          What if traders had access to the same kind of intelligence as hedge
          funds — without the complexity?
        </p>
        <p className="text-white/40 text-[14px] sm:text-[16px] font-regular tracking-[-0.32px]">
          The answer? Build an AI engine capable of analyzing markets,
          generating real-time trade ideas, and simulating full trading sessions
          — all without connecting to a broker.
        </p>
      </div>
      <div>
        <Image src={AboutOOSImage} alt="About OOS" className="w-full h-full hidden md:block" />
        <Image src={AboutOOSImageMobile} alt="About OOS" className="w-full h-full block md:hidden" />
      </div>
    </div>
  );
}
