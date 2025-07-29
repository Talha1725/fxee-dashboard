import React from "react";

import HomeTokenPair from "@/components/features/protected/home/HomeTokenPair";
import HomeTradesItemBadge from "@/components/features/protected/home/homeStatus/HomeTradesItemBadge";
import {
  IconCancel,
  IconShield,
  IconTradeDown,
  IconZap,
} from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Text18 } from "@/components/ui/typography";

export default function HomeTradesItem() {
  return (
    <div className="flex flex-col items-start gap-5 self-stretch shadow-subtle w-[280px] shrink-0">
      <HomeTokenPair token="XAU" pair="XAU/USD" iconName="IconCryptoXau" />
      <div className="flex items-start content-start gap-2.5 self-stretch flex-wrap">
        <HomeTradesItemBadge
          text="1:3 RR"
          icon={<IconShield width={20} height={20} />}
        />
        <HomeTradesItemBadge
          text="4 Minutes ago"
          icon={<IconZap width={20} height={20} />}
        />
        <HomeTradesItemBadge
          text="Short"
          icon={<IconTradeDown width={20} height={20} color="#FE5749" />}
        />
      </div>
      <Text18 className="flex-[1_0_0] self-stretch">
        Bearish outlook on gold; current market trends indicate a possible
        downturn approaching!
      </Text18>
      <div className="flex items-start self-stretch gap-2.5">
        <Button variant="danger" size="default" className="flex-[1_0_0]">
          <p>Short</p>
          <IconTradeDown width={20} height={20} color="#FFF" />
        </Button>
        <Button variant="grey" size="default" className="flex-[1_0_0]">
          <p>Skip</p>
          <IconCancel width={20} height={20} />
        </Button>
      </div>
    </div>
  );
}
