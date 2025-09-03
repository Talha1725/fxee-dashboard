import React from "react";

import {
  IconPartner1,
  IconPartner2,
  IconPartner3,
  IconPartner4,
  IconPartner5,
} from "@/components/ui/icon";
import { Text18 } from "@/components/ui/typography";

export default function LandingPFSPartner({ heading = true, className }: { heading?: boolean, className?: string }) {
  return (
    <div className={`mt-28 sm:mt-20 ${className}`}>
      {heading && (
        <div className="w-[60%] mx-auto sm:w-full sm:mb-10 mb-5">
        <Text18 className="!text-white text-center uppercase font-satoshi z-50">
        Your AI Advantage for Passing Challenges
        </Text18>
        </div>
      )}
      <div className="relative max-w-[1000px] mx-auto marquee-container mask-landing-pfs-partner">
      
      <div className="marquee-content py-4 flex items-center">
        <div className="flex items-center gap-[55px] sm:gap-[60px] scale-50 sm:scale-90 origin-left">
          <IconPartner1 width={207} height={37} />
          <IconPartner2 width={150} height={37} />
          <IconPartner3 width={51} height={37} />
          <IconPartner4 width={150} height={37} />
          <IconPartner5 width={198} height={37} />
          <IconPartner1 width={207} height={37} />
          <IconPartner2 width={150} height={37} />
          <IconPartner3 width={51} height={37} />
          <IconPartner4 width={150} height={37} />
          <IconPartner5 width={198} height={37} />
        </div>
      </div>
    </div>
    </div>
    
  );
}
