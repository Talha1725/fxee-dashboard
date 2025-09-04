"use client";
import React from "react";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingATIHead from "@/components/features/landing/landingATI/LandingATIHead";
import LandingATIContent from "@/components/features/landing/landingATI/LandingATIContent";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LandingATI() {
  const router = useRouter();
  return (
    <div className="relative">
      <LandingMax1440Container className="lg:px-32 gap-12.5 sm:gap-[70px]">
        <LandingATIHead />
        <LandingATIContent />
        <Button
        onClick={() => router.push('/home')}
          variant="white"
          className="relative font-satoshi-medium"
        >Explore the Platform</Button>
      </LandingMax1440Container>
    </div>
  );
}
