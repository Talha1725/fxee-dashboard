"use client";
import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingPFSHead from "@/components/features/landing/landingPFS/LandingPFSHead";
import LandingPFSContent from "@/components/features/landing/landingPFS/LandingPFSContent";
import LandingPFSPartner from "@/components/features/landing/landingPFS/LandingPFSPartner";
import { LongEllipse } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LandingPFS() {
  const router = useRouter();
  return (
    <LandingMax1440Container className="pb-25 gap-12.5 sm:gap-[70px] relative">
      <LongEllipse className="absolute top-[-30%] md:top-0 -right-[60%] sm:right-[60%] sm:translate-x-1/2 opacity-70 sm:opacity-60 pointer-events-none" />

      <LandingPFSHead />
      <div className="relative w-[112.5%] min-h-[520px] sm:hidden block z-50">
        <div className="w-full h-full absolute z-50 top-0 left-1/2 -translate-x-1/2">
          <LandingPFSContent />
        </div>
      </div>

      <LandingPFSContent className="sm:block hidden" />

      <LandingPFSPartner heading={false} className="!mt-0 !-mb-5 md:!mb-0" />
      <Button onClick={()=>{router.push("/signup")}} variant="white" className="font-satoshi-medium cursor-pointer">
        Upgrade to Prop Firm Mode
      </Button>
    </LandingMax1440Container>
  );
}
