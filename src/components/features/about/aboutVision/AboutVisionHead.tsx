import React from "react";

import LandingTitle from "@/components/features/landing/LandingTitle";
import LandingDescription from "@/components/features/landing/LandingDescription";
import { Button } from "@/components/ui/button";

export default function AboutVisionHead() {
  return (
    <div className="flex flex-col items-center gap-5">
      <LandingTitle className="">Our Vision</LandingTitle>
      <LandingDescription className="max-w-[734px]">
        To lead the global shift toward automated, intelligent, simulation-based
        trading — where humans and AI work together to make smarter decisions.
      </LandingDescription>
      <Button variant={"white"} className="font-satoshi-medium">Join Now</Button>
    </div>
  );
}
