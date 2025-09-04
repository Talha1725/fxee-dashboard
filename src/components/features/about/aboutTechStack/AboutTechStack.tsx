"use client";
import React from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingTitle from "@/components/features/landing/LandingTitle";
import AboutTechStackCards from "@/components/features/about/aboutTechStack/AboutTechStackCards";
import { MaxEllipse } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AboutTechStack() {
  const router = useRouter();
  return (
    <div className="relative lg:mt-10">
      <MaxEllipse className="absolute top-0 md:top-[-40%] -right-[80%] sm:right-[20%] z-50 pointer-events-none" />
      <MaxEllipse className="absolute top-[50%] -right-[80%] sm:right-[10%] z-50 pointer-events-none hidden lg:block" />

      <LandingMax1440Container className="py-15 gap-[50px] sm:gap-[70px]">
        <LandingTitle className="text-center">
          Our Technology Stack Includes
        </LandingTitle>
        <AboutTechStackCards />
        <Button onClick={() => router.push('/home')} variant={"white"} className="font-satoshi-medium">
          See the AI in action
        </Button>
      </LandingMax1440Container>
    </div>
  );
}
