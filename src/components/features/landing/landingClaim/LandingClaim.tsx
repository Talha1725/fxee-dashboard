"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingClaimHead from "@/components/features/landing/landingClaim/LandingClaimHead";
import LandingClaimItem from "@/components/features/landing/landingClaim/LandingClaimItem";
import {
  IconBTCShield,
  IconSecurity,
  IconZapLinear,
} from "@/components/ui/icon";


import LandingClaimCoin3 from "@/public/images/coin-big.svg";
import LandingClaimCoin3Mobile from "@/public/images/small-coin.svg";
import claim from "@/public/images/claim.svg";
import { Button } from "@/components/ui/button";

export default function LandingClaim() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return (
    <div className="relative claim-gradient overflow-hidden border-gradient-blue-green border-l-0 border-r-0">
     
      <Image
        src={isMobile ? LandingClaimCoin3Mobile : LandingClaimCoin3}
        alt="Landing Claim Coin 3"
        className="absolute right-0 md:right-[10%] lg:right-[27%] bottom-[10px] md:bottom-0 w-[120px] h-[auto] md:w-[160px] md:h-[156px] lg:w-[192px] lg:h-[161px]"
      />
     
      <LandingMax1440Container className="py-15 gap-12.5 sm:gap-[50px]">
        <LandingClaimHead />
        <div className="flex flex-col md:flex-row gap-2.5 md:gap-0 justify-center items-center w-full lg:w-[850px]">
          <LandingClaimItem
            icon={
              <IconSecurity className="shrink-0 w-[24px] h-[24px] md:w-[36px] md:h-[36px]" />
            }
            title="Verified Bonuses"
          />
          <LandingClaimItem
            icon={
              <IconBTCShield className="shrink-0 w-[24px] h-[24px] md:w-[36px] md:h-[36px]" />
            }
            title="Secure Transactions"
          />
          <LandingClaimItem
            icon={
              <IconZapLinear className="shrink-0 w-[24px] h-[24px] md:w-[36px] md:h-[36px]" />
            }
            title="Fast Activation"
          />
        </div>
        <div className="flex flex-col items-center gap-2.5">
          <Button
            variant="white"
            className="font-satoshi-medium flex items-center justify-center gap-3 px-4"
          ><Image src={claim} alt="Claim" className="w-[24px] h-[24px]" />
          <p>

          Claim Your $100          </p>
          </Button>
          <p className="text-white/40 text-center text-[14px] sm:text-[16px] font-regular font-medium tracking-[-0.32px]">
            *Terms and conditions apply
          </p>
        </div>
      </LandingMax1440Container>
    </div>
  );
}
