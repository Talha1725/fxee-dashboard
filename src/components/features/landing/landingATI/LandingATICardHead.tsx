import React from "react";

export default function LandingATICardHead({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start gap-2.5 self-stretch">
      <p className="text-white/90 text-[18px] sm:text-[22px] font-regular font-[700] tracking-[-0.44px]">
        {title}
      </p>
      <p className="text-white/40 text-[16px] sm:text-[18px] font-regular font-normal tracking-[-0.36px]">
        {description}
      </p>
    </div>
  );
}
