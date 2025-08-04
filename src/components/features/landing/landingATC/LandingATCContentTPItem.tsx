import React from "react";

export default function LandingATCContentTPItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 self-stretch py-0.5 sm:py-1">
      <p className="text-[#999] text-[13px] sm:text-[14px] font-regular font-normal leading-[18px] flex-[1_0_0]">
        {title}
      </p>
      <p className="text-white text-[15px] sm:text-[16px] font-regular font-medium leading-normal tracking-[-0.32px] text-right">
        {value}
      </p>
    </div>
  );
}
