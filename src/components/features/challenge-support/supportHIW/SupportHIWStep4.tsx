import React from "react";
import Image from "next/image";

import SupportHIWStepImage from "@/components/features/challenge-support/supportHIW/SupportHIWStepImage";

import SupportHIWStep4Image from "@/public/images/support-hiw-4.png";

export default function SupportHIWStep4() {
  return (
    <SupportHIWStepImage>
      <Image src={SupportHIWStep4Image} alt="Support HIW Step 4" />
    </SupportHIWStepImage>
  );
}
