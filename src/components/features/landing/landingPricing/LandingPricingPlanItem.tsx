import React from "react";

import { IconCheckmarkCircle } from "@/components/ui/icon";

export default function LandingPricingPlanItem({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <div className="flex justify-center items-start gap-2.5 self-stretch">
      <IconCheckmarkCircle width={19} height={19} />
      <p className="flex-[1_0_0] text-white text-[12px] sm:text-[14px] font-medium leading-[120%] tracking-[-0.28px] font-satoshi">
        {lines.map((line, index) =>
          index !== 0 ? (
            <React.Fragment key={index}>
              <br />
              {line}
            </React.Fragment>
          ) : (
            line
          )
        )}
      </p>
    </div>
  );
}
