import React from "react";

import { IconLogo2 } from "@/components/ui/icon";
import { Text18, Title32 } from "@/components/ui/typography";

export default function OnboardContentHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-5 shrink-0 self-stretch">
      <div className="flex jsutify-center items-center gap-2 p-2.5 bg-dark-gradient rounded-[10px] border border-white/30 dark:bg-white/5 bg-[#7474741A]">
        <IconLogo2 />
        <Text18>{title}</Text18>
      </div>
      <div className="flex flex-col items-center gap-1 self-stretch">
        <Title32>{description}</Title32>
      </div>
    </div>
  );
}
