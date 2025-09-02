import React from "react";

import capabilities from "@/public/images/ai-capabilities.svg";
import feeds from "@/public/images/data-feed.svg";
import guidence from "@/public/images/guidence.svg";
import Image from "next/image";

export default function LandingATIContent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <div className="flex flex-col items-start">
        <Image
          src={capabilities}
          alt="capabilities"
          className="w-full h-full hover:border hover:border-white/30 rounded-[10px] transition-all duration-300 ease-in-out hover:bg-gradient-to-b hover:from-white/5 hover:to-transparent border border-white/30 bg-gradient-to-b from-white/5 to-transparent md:bg-none md:border-white/10"
        />
        <h1 className="text-white font-satoshi-medium mt-4">
          Unique AI Capabilities
        </h1>
        <p className="text-white/50 font-satoshi mt-1">
          Monitor whale wallets and social trends for crypto market predictions
          and insights.
        </p>
      </div>
      <div className="flex flex-col items-start">
        <Image
          src={feeds}
          alt="capabilities"
          className="w-full hover:border hover:border-white/30 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-b hover:from-white/5 hover:to-transparent border border-white/30 bg-gradient-to-b from-white/5 to-transparent md:bg-none md:border-white/10"
        />
        <h1 className="text-white font-satoshi-medium mt-4">
          Real-Time Data Feeds
        </h1>
        <p className="text-white/50 font-satoshi mt-1">
          This information is sourced from the most reputable trading platforms
          available.
        </p>
      </div>
      <div className="flex flex-col items-start">
        <Image
          src={guidence}
          alt="capabilities"
          className="w-full hover:border hover:border-white/30 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-b hover:from-white/5 hover:to-transparent border border-white/30 bg-gradient-to-b from-white/5 to-transparent md:bg-none md:border-white/10"
        />
        <h1 className="text-white font-satoshi-medium mt-4">
          Personalized Guidance
        </h1>
        <p className="text-white/50 font-satoshi mt-1">
          Access strategies tailored to your challenge’s rules and timelines.{" "}
        </p>
      </div>
    </div>
  );
}
