import React from "react";

export default function OnboardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center shrink-0 self-stretch">
      {children}
    </div>
  );
}
