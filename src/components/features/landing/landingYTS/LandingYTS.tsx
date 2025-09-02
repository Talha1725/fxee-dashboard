import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingYTSHead from "@/components/features/landing/landingYTS/LandingYTSHead";
import LandingYTSContent from "@/components/features/landing/landingYTS/LandingYTSContent";
import { EllipsLight } from "@/components/ui/icon";
import { div } from "motion/react-client";
import { Button } from "@/components/ui/button";

export default function LandingYTS() {
  return (
    <div className="relative">
        <EllipsLight className="absolute sm:top-0 top-56 -right-[92%] sm:-right-[20%] z-50" opacity="0.2" />
      <LandingMax1440Container className="py-25 gap-12.5 sm:gap-[70px] relative">
        <LandingYTSHead />
        <LandingYTSContent />
        <Button variant={"white"} className="font-satoshi-medium">See the AI in Action</Button>
      </LandingMax1440Container>
    </div>
  );
}
