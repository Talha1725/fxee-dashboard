import React from "react";

export default function LandingContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-0 m-0 box-border w-full min-h-screen bg-black overflow-hidden z-10">
      {children}
    </div>
  );
}
