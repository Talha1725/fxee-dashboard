import React from "react";

import { Text18 } from "@/components/ui/typography";
import { IconAdd } from "@/components/ui/icon";

export default function HomeTopPicksHead({ openModal }: { openModal: () => void }) {
  return (
    <div className="flex justify-center items-center gap-2.5 self-stretch">
      <Text18 className="flex-[1_0_0] font-satoshi-medium">Top Picks</Text18>
      <button onClick={openModal}>
        <IconAdd width={20} height={20} />
      </button>
    </div>
  );
}
