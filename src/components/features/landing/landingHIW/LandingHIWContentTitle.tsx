import React from "react";
import { Title22, Description18 } from "@/components/ui/typography";

export default function LandingHIWContentTitle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-2.5 self-stretch">
      <Title22 className="text-white/90 self-stretch">{title}</Title22>
      <Description18 className="text-[16px] lg:text-[18px]">
        {children}
      </Description18>
    </div>
  );
}
