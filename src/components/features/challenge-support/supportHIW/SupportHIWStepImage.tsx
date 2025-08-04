import React from "react";

export default function SupportHIWStepImage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex-[1_0_0] self-stretch flex items-center justify-center min-w-full lg:min-w-[500px] min-h-[260px] sm:min-h-[364px] overflow-hidden select-none">
      {/* <div className="w-[170px] h-[170px] shrink-0 bg-green blur-[163.6px]"></div> */}
      {children}
    </div>
  );
}
