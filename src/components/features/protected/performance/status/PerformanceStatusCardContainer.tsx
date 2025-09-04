import React from "react";

export default function PerformanceStatusCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center gap-2.5 p-3.5 flex-[1_0_0] self-stretch rounded-[10px] border-green-gradient dark:bg-white/3 bg-[#0276DB0A]">
      <div className="flex flex-col items-start gap-9 shrink-0 flex-[1_0_0] self-stretch">
        {children}
      </div>
    </div>
  );
}
