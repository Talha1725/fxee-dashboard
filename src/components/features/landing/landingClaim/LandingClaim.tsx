"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import LandingMax1440Container from "@/components/features/landing/LandingMax1440Container";
import LandingClaimHead from "@/components/features/landing/landingClaim/LandingClaimHead";
import LandingClaimItem from "@/components/features/landing/landingClaim/LandingClaimItem";
import LandingButton from "@/components/features/landing/LandingButton";
import {
  IconBTCShield,
  IconEthWhite,
  IconLandingBtn2,
  IconSecurity,
  IconZapLinear,
} from "@/components/ui/icon";

import LandingClaimCoin1 from "@/public/images/landing-claim-coin1.png";
import LandingClaimCoin2 from "@/public/images/landing-claim-coin2.png";
import LandingClaimCoin3 from "@/public/images/landing-claim-coin3.png";
import LandingClaimCoin3Mobile from "@/public/images/coin3-mobile.svg";
import LandingClaimCoin4 from "@/public/images/landing-claim-coin4.png";

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
    <div className="relative bg-white overflow-hidden">
      <Image
        src={LandingClaimCoin1}
        alt="Landing Claim Coin 1"
        className="absolute top-0 right-[10px] lg:right-[215px] w-[138px] h-[131px] lg:w-[244px] lg:h-[210px]"
      />
      <Image
        src={LandingClaimCoin2}
        alt="Landing Claim Coin 2"
        className="absolute left-0 top-[118px] w-[80px] h-[132px] lg:w-[160px] lg:h-[231px]"
      />
      <Image
        src={isMobile ? LandingClaimCoin3Mobile : LandingClaimCoin3}
        alt="Landing Claim Coin 3"
        className="absolute left-[0px] md:left-[10px] lg:left-[121px] bottom-[170px] md:bottom-0 w-[100px] h-[auto] md:w-[160px] md:h-[156px] lg:w-[244px] lg:h-[231px]"
      />
      <Image
        src={LandingClaimCoin4}
        alt="Landing Claim Coin 4"
        className="absolute -right-[5px] lg:right-[18px] bottom-[-30px] lg:bottom-[65px] w-[100px] h-[auto] md:w-[160px] md:h-[174px] lg:w-[244px] lg:h-[274px]"
      />
      <LandingMax1440Container className="py-25 gap-12.5 sm:gap-[50px]">
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
          <LandingButton
            color="white"
            icon={
              <React.Fragment>
                <IconLandingBtn2 className="absolute -z-1 w-full h-full top-0 left-0" />
                <IconEthWhite className="shrink-0 w-[24px] h-[32px]" />
              </React.Fragment>
            }
            text="Claim Your $100 Bonus in ETH"
          />
          <p className="text-black/40 text-center text-[14px] sm:text-[16px] font-regular font-medium tracking-[-0.32px]">
            *Terms and conditions apply
          </p>
        </div>
      </LandingMax1440Container>
    </div>
  );
}
