"use client";

import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import AboutOOSHead from "@/components/features/about/aboutOOS/AboutOOSHead";
import LandingYTSContent from "../../landing/landingYTS/LandingYTSContent";
import { EllipsLight } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AboutOOS() {
  const router = useRouter();
  return (
    <LandingMax1440Container className="mt-20 md:mt-0 py-25 gap-[50px] sm:gap-[70px] relative">
      <EllipsLight
        className="absolute sm:top-0 top-16 -right-[130%] sm:-right-[10%] z-50"
        opacity="0.15"
      />
      <AboutOOSHead />
      <LandingYTSContent />
      <Button onClick={() => router.push('/home')} variant="white" className="font-satoshi-medium lg:hidden">See the AI in Action</Button>
    </LandingMax1440Container>
  );
}
