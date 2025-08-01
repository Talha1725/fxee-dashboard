import React from "react";

import HomeNewsSwitch from "@/components/features/protected/home/homeNewsAI/HomeNewsSwitch";

import { Input } from "@/components/ui/input";
import { Text18 } from "@/components/ui/typography";
import { IconSearch } from "@/components/ui/icon";

export default function HomeNewsHead() {
  return (
    <div className="flex flex-col 2xl:flex-row justify-center items-start 2xl:items-center gap-2.5 self-stretch">
      <Text18 className="flex-[1_0_0] shrink-0 whitespace-nowrap min-w-fit">
        News and Market Impact
      </Text18>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 self-stretch">
        <HomeNewsSwitch />
        <Input
          placeholder="Search..."
          className="px-3 py-1 gap-1 border-none w-full sm:w-[260px] h-[36px] sm:h-full"
          icon={<IconSearch height={20} width={20} />}
        />
      </div>
    </div>
  );
}
