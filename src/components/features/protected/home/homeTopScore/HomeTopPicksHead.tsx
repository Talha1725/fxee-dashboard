import React from "react";

import { Text16 } from "@/components/ui/typography";
import { IconAdd } from "@/components/ui/icon";

export default function HomeTopPicksHead() {
  return (
    <div className="flex justify-center items-center gap-2.5 self-stretch">
      <Text16 className="flex-[1_0_0] font-satoshi-medium">Top Picks</Text16>
      <IconAdd width={20} height={20} />
    </div>
  );
}
