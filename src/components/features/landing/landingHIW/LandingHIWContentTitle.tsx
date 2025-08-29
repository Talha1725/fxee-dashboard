import React from "react";
import { Title22, Description18 } from "@/components/ui/typography";

export default function LandingHIWContentTitle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  // Check if children contains a ul element
  const hasList = React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.type === 'ul'
  );

  return (
    <div className="flex flex-col items-start gap-2.5 self-stretch">
      <Title22 className="text-white/90 self-stretch">{title}</Title22>
      {hasList ? (
        <div className="text-black/40 dark:text-white/40 text-[16px] lg:text-[18px] font-regular font-normal tracking-[-0.32px] sm:tracking-[-0.36px] select-none">
          {children}
        </div>
      ) : (
        <Description18 className="text-[16px] lg:text-[18px]">
          {children}
        </Description18>
      )}
    </div>
  );
}
