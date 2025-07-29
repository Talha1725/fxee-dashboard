import React from "react";

import CopyTradingHowToItem from "./CopyTradingHowToItem";
import { Text24 } from "@/components/ui/typography";

import { COPY_TRADING_HOW_TO } from "@/lib/constants";

export default function CopyTradingHowTo() {
  return (
    <div className="flex justify-center items-start gap-4 p-6 self-stretch rounded-[16px] border border-white/3 bg-dark-radial-gradient">
      <div className="flex flex-col items-center gap-5 flex-[1_0_0]">
        <Text24 className="self-stretch">
          📈 How to Use a Copy Trade Account
        </Text24>
        <ul className="list-decimal list-outside pl-6 self-stretch flex flex-col gap-5">
          {COPY_TRADING_HOW_TO.map((item, index) => (
            <CopyTradingHowToItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
