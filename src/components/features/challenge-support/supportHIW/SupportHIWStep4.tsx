import React from "react";
import Image from "next/image";

import SupportHIWStepImage from "@/components/features/challenge-support/supportHIW/SupportHIWStepImage";

import SupportHIWStep4Image from "@/public/images/risk-managed.svg";
import SupportHIWStep4Image2 from "@/public/images/risk-managed2.svg";

export default function SupportHIWStep4() {
  return (
    <SupportHIWStepImage>
      <Image src={SupportHIWStep4Image} alt="Support HIW Step 4" />
      <Image src={SupportHIWStep4Image2} alt="Support HIW Step 4" className="absolute top-5 left-5 min-[373px]:left-0 min-[600px]:left-20 md:left-28 lg:left-5 w-[50%] h-auto min-[400px]:w-[47%] min-[600px]:w-[35%] md:w-auto sm:h-auto" />
    </SupportHIWStepImage>
  );
}
