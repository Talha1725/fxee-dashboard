import React from "react";

export default function OnboardSelectedPlanContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-5 p-5 sm:p-6 rounded-[10px] bg-white/3 border border-white/30 relative">
      {children}
    </div>
  );
}
