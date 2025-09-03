import React from "react";
import { Title22 } from "@/components/ui/typography";

export default function LandingClaimItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex justify-center items-center gap-3 flex-[1_0_0] shrink-0">
      {icon}
      <Title22 className="!text-white text-center shrink-0 font-satoshi-medium font-medium">{title}</Title22>
    </div>
  );
}
