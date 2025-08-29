import React from "react";
import Image from "next/image";

import SupportHIWStepImage from "@/components/features/challenge-support/supportHIW/SupportHIWStepImage";

// import SupportHIWStep3Image from "@/public/images/support-step-3.png";
import SupportHIWStep3Image from "@/public/images/connect.svg";

export default function SupportHIWStep3() {
  return (
    <SupportHIWStepImage>
      {/* <div className="absolute left-0 right-0 bottom-0">
        <Image
          src={SupportHIWStep3Image}
          alt="Support HIW Step 3"
          className="w-[320px] sm:w-[425px] h-[220px] sm:h-[292px] mx-auto"
        />
      </div> */}
      <Image src={SupportHIWStep3Image} alt="Support HIW Step 3" />
    </SupportHIWStepImage>
  );
}
