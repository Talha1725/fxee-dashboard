import React from "react";

import { IconFlashlight } from "@/components/ui/icon";
import { Text18 } from "@/components/ui/typography";

export default function OnboardPopularPattern({ title }: { title: string }) {
  return (
    <div className="absolute top-[1px] left-[1px] right-[1px]">
      <div className="w-full flex px-2.5 py-[5px] items-center justify-center gap-[5px] bg-popular-gradient rounded-t-2xl">
        <IconFlashlight width={24} height={24} />
        <Text18 className="!text-white">{title}</Text18>
      </div>
    </div>
  );
}
