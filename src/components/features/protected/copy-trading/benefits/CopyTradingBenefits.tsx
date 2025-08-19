"use client"

import React from "react";

import { Text16, Text24 } from "@/components/ui/typography";
import { IconCheckCircle } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { ACCOUNT_TYPES } from "@/lib/constants";

import BrokerBenefitImage from "@/public/images/broker-benefit.png";
import Image from "next/image";

export default function CopyTradingBenefits() {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-4 p-6 self-stretch rounded-[16px] border border-white/3 ${theme==="dark" ? "bg-dark-radial-gradient" : "bg-white"}`}>
      <div className="flex flex-col items-center gap-5 flex-[1_0_0]">
        <Text24 className="self-stretch font-satoshi-medium text-black dark:text-white">
          Benefits of Broker Backed Simulation Account
        </Text24>
        <div className="flex flex-col items-start gap-2.5 self-stretch">
          {ACCOUNT_TYPES[1].items.map((item, index) => (
            <div className="flex items-start gap-2.5 self-stretch" key={index}>
              <IconCheckCircle width={22} height={22} />
              <Text16 className="font-[400] flex-[1_0_0] text-black dark:text-white font-satoshi whitespace-pre-line">{item}</Text16>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[400px] h-[300px] sm:w-[560px] sm:h-[460px] relative">
        <div className="absolute inset-0 ">
          <Image
            src={BrokerBenefitImage}
            alt="Broker Benefit Image"
            fill
            className="blur-[87px]"
          />
        </div>
        <Image src={BrokerBenefitImage} alt="Broker Benefit Image" fill />
      </div>
    </div>
  );
}
