import React from "react";
import Image from "next/image";

import LandingATCContentNIPBadge from "@/components/features/landing/landingATC/LandingATCContentNIPBadge";
import { IconAIBrain, IconAsteroid, IconTime } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { IconTradeDown } from "@/components/ui/icon";

import LandingUptrendImage from "@/public/images/landing-uptrend.png";

export default function LandingATCContentNIPCard() {
  return (
    <React.Fragment>
      <p className="text-white liga text-[13px] sm:text-[14px] font-regular font-medium tracking-[-0.155px] self-stretch z-1">
        News Impact Predictor
      </p>
      <div className="flex items-start gap-2 self-stretch z-1">
        <div className="relative w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]">
          <div className="absolute inset-0 rounded-full blur-[6.15px] bg-gray-300">
            <Image
              src={LandingUptrendImage}
              alt=""
              priority
              className="w-full h-full"
            />
          </div>
          <Image
            src={LandingUptrendImage}
            alt="Fxee"
            priority
            className="relative w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
          <div className="flex justify-between items-center self-stretch h-[20px] sm:h-[30px]">
            <p className="text-white text-[13px] sm:text-[14px] font-regular font-[700]">
              BTC/USDT
            </p>
            <p className="text-white/80 text-[9px] sm:text-[10px] font-regular font-medium uppercase">
              14:03, 15 Nov
            </p>
          </div>
          <div className="flex items-start content-start gap-2 self-stretch flex-wrap">
            <LandingATCContentNIPBadge
              title="High"
              icon={<IconAsteroid width={18} height={18} />}
            />
            <LandingATCContentNIPBadge
              title="89%"
              icon={<IconAIBrain width={18} height={18} />}
            />
            <LandingATCContentNIPBadge
              title="Short-term"
              icon={<IconTime width={18} height={18} />}
            />
          </div>
          <div className="text-white text-[11px] sm:text-[12px] font-regular font-normal">
            <span className="font-medium">Reasoning:</span>
            <ul className="list-disc list-outside pl-5">
              <li>Break of $104K = psychological and technical breakout</li>
              <li>
                Trade deal optimism = macro bullish signal for risk assets
              </li>
              <li>Social media sentiment: +85% positive</li>
            </ul>
          </div>
          <p className="text-white text-[11px] sm:text-[12px] font-regular font-medium">
            Further upside movement likely
          </p>
          <div className="flex items-center justify-between self-stretch p-1 pl-3.5 rounded-[8px] bg-card-weak-gradient border border-white/8">
            <p className="text-white text-[11px] sm:text-[12px] font-regular font-[700] tracking-[-0.246px]">
              Not fully priced-in
            </p>
            <Button
              variant="danger"
              size="default"
              className="py-[7px] px-[9px] gap-1 cursor-none"
            >
              <p className="text-white text-[11px] sm:text-[12px] liga font-regular font-[700] tracking-[-0.074px]">
                Short
              </p>
              <IconTradeDown width={18} height={18} color="#FFF" />
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
