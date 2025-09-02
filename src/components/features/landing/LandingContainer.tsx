import React from "react";

export default function LandingContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-0 m-0 box-border w-full min-h-screen overflow-hidden z-10 bg-[#0A0A0A]">
      {children}
    </div>
  );
}
