import React from "react";

import { LinearGradientPattern } from "@/components/ui/icon";

export default function OnboardPattern() {
  return (
    <div className="absolute top-0 w-full z-10">
      <LinearGradientPattern
        width={964}
        height={456}
        className="absolute translate left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
