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
  ImageIcon,
} from "@/components/ui/icon";
import { Text12, Text14, Text16 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/lib/contexts/ThemeContext";

interface BadgeItem {
  text: string;
  icon: React.ReactNode;
}

interface AIEngineToolsNIPCardAIProps {
  showIcon?: boolean;
  showBadges?: boolean;
  showReasoning?: boolean;
  showPrediction?: boolean;
  showActionButton?: boolean;
  showInput?: boolean;
  showHeaderIcon?: boolean;
  headerAlign?: 'left' | 'center';
  title?: string;
  icon?: React.ReactNode;
  isNIPVersion?: boolean;
  fontWeight?: string;
  badges?: BadgeItem[];
}

export default function AIEngineToolsNIPCardAI({
  showIcon = true,
  showBadges = true,
  showReasoning = true,
  showPrediction = true,
  showActionButton = true,
  showInput = true,
  showHeaderIcon = true,
  headerAlign = 'left',
  title = "News Impact Predictor",
  icon = <IconNIP width={20} height={20} />,
  isNIPVersion = false,
  fontWeight = "font-satoshi-medium",
  badges = [
    { text: "High", icon: <IconAsteroid width={20} height={20} /> },
    { text: "89%", icon: <IconAIBrain width={20} height={20} /> },
    { text: "4 Minutes Ago", icon: <IconTime width={20} height={20} /> }
  ]
}: AIEngineToolsNIPCardAIProps) {
  const { theme } = useTheme();
  return (
    <AIEngineToolsNIPCardContainer className={`flex flex-col h-full ${
      theme === "dark" ? "bg-green-radial-gradient" : "bg-light-green-gradient"
    } ${isNIPVersion ? 'w-full h-full rounded-[16px] border border-[#0000001A] gap-4 pt-6 pr-5 pb-6 pl-5 flex-1 border-green-gradient' : 'border-green-gradient'}`}>
      {headerAlign === 'center' ? (
        <div className="flex justify-center">
          <AIEngineToolsNIPCardHead
            title={title}
            icon={showHeaderIcon ? icon : undefined}
            fontWeight={fontWeight}
          />
        </div>
      ) : (
        <AIEngineToolsNIPCardHead
          title={title}
          icon={showHeaderIcon ? icon : undefined}
          fontWeight={fontWeight}
        />
      )}
      <div className="flex items-start gap-2.5 self-stretch flex-1">
        {showIcon && <HomeUptrendImage className="w-6 h-6" />}
        <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
          <div className="flex justify-between items-center self-stretch">
            <Text16 className="font-[700]">BTC/USDT</Text16>
            <Text12 className="text-white/80">14:03, 15 Nov</Text12>
          </div>
          {showBadges && (
            <div className="flex items-start align-content-start gap-2.5 flex-wrap font-satoshi-bold text-[14px] self-stretch">
              {badges.map((badge, index) => (
                <AIEngineToolsNIPCardAIBadge
                  key={index}
                  text={badge.text}
                  icon={badge.icon}
                />
              ))}
            </div>
          )}
          {showReasoning && (
            <div className="font-satoshi-medium text-[14px]">
              <Text14 className="font-satoshi-medium">Reasoning:</Text14>
              <ul className="list-disc list-outside pl-6 mt-2">
                <li>Break of $104K = psychological and technical breakout</li>
                <li>
                  Trade deal optimism = macro bullish signal for risk assets
                </li>
                <li>Social media sentiment: +85% positive</li>
              </ul>
            </div>
          )}
          {showPrediction && <Text14>Further upside movement likely</Text14>}
          {showActionButton && (
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
          )}
        </div>
      </div>
      {showInput && (
        <Input
          placeholder="Type Message"
          className={`gap-3 p-3 mt-auto ${
            theme === "dark" ? "border-none" : "border border-[#0000001A]"
          }`}
          backIcon={
            <div className="flex items-center gap-3">
              <ImageIcon width={20} height={20} />
              <IconMic width={20} height={20} />
              <IconSend width={20} height={20} />
            </div>
          }
        />
      )}
    </AIEngineToolsNIPCardContainer>
  );
}
