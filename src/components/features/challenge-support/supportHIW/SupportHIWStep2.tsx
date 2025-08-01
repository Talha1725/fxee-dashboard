import React from "react";
import Image from "next/image";

import SupportHIWStepImage from "@/components/features/challenge-support/supportHIW/SupportHIWStepImage";

// import SupportHIWStep2Image from "@/public/images/support-step-2.png";
import SupportHIWStep2Image from "@/public/images/support-hiw-2.png";

export default function SupportHIWStep2() {
  return (
    <SupportHIWStepImage>
      {/* <div className="absolute left-0 right-0 bottom-0">
        <Image
          src={SupportHIWStep2Image}
          alt="Support HIW Step 2"
          className="w-[320px] sm:w-[425px] h-[220px] sm:h-[292px] mx-auto"
        />
      </div> */}
      <Image src={SupportHIWStep2Image} alt="Support HIW Step 2" />
    </SupportHIWStepImage>
  );
}
