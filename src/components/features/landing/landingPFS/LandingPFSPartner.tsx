import React from "react";

import {
  IconPartner1,
  IconPartner2,
  IconPartner3,
  IconPartner4,
  IconPartner5,
} from "@/components/ui/icon";

export default function LandingPFSPartner() {
  return (
    <div className="relative max-w-[1000px] marquee-container mask-landing-pfs-partner">
      <div className="marquee-content py-4 flex items-center">
        <div className="flex items-center gap-[40px] sm:gap-[60px]">
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
  );
}
