import React from "react";

export default function DashboardStatusCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex h-[163px] p-4 justify-center items-center gap-2.5 flex-[1_0_0] rounded-[10px] dark:bg-white/3 bg-[#0276DB0A] border-green-gradient">
      <div className="relative flex flex-col items-start justify-between self-stretch flex-[1_0_0]">
        {children}
      </div>
    </div>
  );
}
