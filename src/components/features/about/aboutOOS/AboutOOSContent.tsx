import React from "react";

export default function AboutOOSContent() {
  return (
    <div className="flex flex-col items-start gap-5 w-[1240px] h-[326px] pt-10 px-5 rounded-none border-green-gradient bg-landing-card-green-gradient">
      <div className="flex flex-col items-start gap-2.5 w-[450px]">
        <p className="w-[383px] text-white/90 text-[20px] font-regular font-medium tracking-[-0.4px]">
          What if traders had access to the same kind of intelligence as hedge
          funds — without the complexity?
        </p>
        <p className="text-white/40 text-[14px] sm:text-[16px] font-regular tracking-[-0.32px]">
          The answer? Build an AI engine capable of analyzing markets,
          generating real-time trade ideas, and simulating full trading sessions
          — all without connecting to a broker.
        </p>
      </div>
    </div>
  );
}
