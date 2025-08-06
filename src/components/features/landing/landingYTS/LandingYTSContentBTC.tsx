import React from "react";
import Image from "next/image";

import LandingATCContentCardContainer from "@/components/features/landing/landingATC/LandingATCContentCardContainer";
import HomeTokenPair from "@/components/features/landing/landingYTS/HomeTokenPair";
import HomeTradesItemBadge from "@/components/features/landing/landingYTS/HomeTradesItemBadge";
import { Button } from "@/components/ui/button";
import {
  IconCancel,
  IconShield,
  IconTradeDown,
  IconZap,
} from "@/components/ui/icon";

import LandingYTSImage from "@/public/images/landing-yts.png";

export default function LandingYTSContentBTC() {
  return (
    <LandingATCContentCardContainer className="gap-3 sm:gap-5 p-3 sm:p-5 h-[260px] sm:h-[420px] items-start w-[320px] sm:w-[340px]">
      <Image
        src={LandingYTSImage}
        alt="FXEE"
        className="absolute top-0 right-0 w-full h-full select-none"
      />
      <HomeTokenPair token="BTC" pair="BTC/USD" iconName="IconBitcoin" />
      <div className="flex items-start content-start gap-2.5 self-stretch flex-wrap z-1">
        <HomeTradesItemBadge
          text="1:3 RR"
          icon={<IconShield width={20} height={20} />}
        />
        <HomeTradesItemBadge
          text="4 Minutes Ago"
          icon={<IconZap width={20} height={20} />}
        />
        <HomeTradesItemBadge
          text="Short"
          icon={<IconTradeDown width={20} height={20} color="#FE5749" />}
        />
      </div>
      <p className="z-1 text-white text-[12px] sm:text-[18px] font-regular font-medium tracking-[-0.36px] flex-[1_0_0] self-stretch">
        Bearish outlook on Bitcoin; current market trends indicate a possible
        downturn approaching!
      </p>
      <div className="flex items-start self-stretch gap-2.5 z-1">
        <Button
          variant="danger"
          size="default"
          className="flex-[1_0_0] py-[7px] px-[9px] gap-1"
        >
          <p className="text-[10px] sm:text-[12px] font-regular font-[700] tracking-[-0.074px]">
            Short
          </p>
          <IconTradeDown width={20} height={20} color="#FFF" />
        </Button>
        <Button
          variant="grey"
          size="default"
          className="flex-[1_0_0] py-[7px] px-[9px] gap-1"
        >
          <p className="text-[10px] sm:text-[12px] font-regular font-[700] tracking-[-0.074px]">
            Skip
          </p>
          <IconCancel width={20} height={20} />
        </Button>
      </div>
    </LandingATCContentCardContainer>
  );
}
