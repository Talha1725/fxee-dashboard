"use client";

import React from "react";

import AIEngineToolsNIPCardContainer from "./AIEngineToolsNIPCardContainer";
import HomeUptrendImage from "@/components/features/protected/home/HomeUptrendImage";
import AIEngineToolsNIPCardHead from "./AIEngineToolsNIPCardHead";
import AIEngineToolsNIPCardAIBadge from "./AIEngineToolsNIPCardAIBadge";
import {
  IconAIBrain,
  IconAsteroid,
  IconMic,
  IconNIP,
  IconSend,
  IconTime,
  IconTradeUp,
} from "@/components/ui/icon";
import { Text12, Text14, Text16 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function AIEngineToolsNIPCardAI() {
  const { theme } = useTheme();
  return (
    <AIEngineToolsNIPCardContainer className={`border-none border-green-gradient ${
      theme === "dark" ? "bg-green-radial-gradient" : "bg-light-green-gradient"
    }`}>
      <AIEngineToolsNIPCardHead
        title="News Impact Predictor"
        icon={<IconNIP width={20} height={20} />}
      />
      <div className="flex items-start gap-2.5 self-stretch">
        <HomeUptrendImage className="w-6 h-6" />
        <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
          <div className="flex justify-between items-center self-stretch">
            <Text16 className="font-[700]">BTC/USDT</Text16>
            <Text12 className="text-white/80">14:03, 15 Nov</Text12>
          </div>
          <div className="flex items-start align-content-start gap-2.5 flex-wrap self-stretch">
            <AIEngineToolsNIPCardAIBadge
              text="High"
              icon={<IconAsteroid width={20} height={20} />}
            />
            <AIEngineToolsNIPCardAIBadge
              text="89%"
              icon={<IconAIBrain width={20} height={20} />}
            />
            <AIEngineToolsNIPCardAIBadge
              text="4 Minutes Ago"
              icon={<IconTime width={20} height={20} />}
            />
          </div>
          <Text14 className="font-[400]">
            <span className="font-medium">Reasoning:</span>
            <ul className="list-disc list-outside pl-6">
              <li>Break of $104K = psychological and technical breakout</li>
              <li>
                Trade deal optimism = macro bullish signal for risk assets
              </li>
              <li>Social media sentiment: +85% positive</li>
            </ul>
          </Text14>
          <Text14>Further upside movement likely</Text14>
          <div className={`flex justify-between items-center self-stretch p-1 pl-4 rounded-[10px] ${
            theme === "dark" ? "bg-dark-gradient" : "bg-gradient-to-b from-black/[0.04] to-black/[0.02]"
          }`}>
            <Text14 className="font-[700]">Not fully priced-in</Text14>
            <Button
              variant="green"
              className="gap-1 py-2 px-2.5 pointer-events-none"
            >
              <Text14 className={`font-[700] ${theme === "dark" ? "text-white" : "text-white"}`}>Long</Text14>
              <IconTradeUp width={20} height={20} color="#FFF" />
            </Button>
          </div>
        </div>
      </div>
      <Input
        placeholder="Type Message"
        className={`gap-3 p-3 ${
          theme === "dark" ? "border-none" : "border border-[#0000001A]"
        }`}
        backIcon={
          <div className="flex items-center gap-3">
            <IconMic width={20} height={20} />
            <IconSend width={20} height={20} />
          </div>
        }
      />
    </AIEngineToolsNIPCardContainer>
  );
}
