import React from "react";

import HomeNewsBodyItem from "@/components/features/protected/home/homeNewsAI/HomeNewsBodyItem";
import { Separator } from "@/components/ui/separator";

export default function HomeNewsBody() {
  return (
    <div className="flex flex-col items-start self-stretch py-2.5 gap-5 overflow-y-scroll homeNewsScrollbar overflow-x-hidden">
      <HomeNewsBodyItem
        currency="AUD/USD"
        time={5}
        readTime={2}
        source="TradingView"
      />
      <Separator className="bg-white/5" />
      <HomeNewsBodyItem
        currency="JPY/USD"
        time={5}
        readTime={2}
        source="TradingView"
      />
      <Separator className="bg-white/5" />
      <HomeNewsBodyItem
        currency="EUR/USD"
        time={5}
        readTime={2}
        source="TradingView"
      />
      <Separator className="bg-white/5" />
      <HomeNewsBodyItem
        currency="GBP/USD"
        time={5}
        readTime={2}
        source="TradingView"
      />
      <Separator className="bg-white/5" />
      <HomeNewsBodyItem
        currency="CAD/USD"
        time={5}
        readTime={2}
        source="TradingView"
      />
      <Separator className="bg-white/5" />
      <HomeNewsBodyItem
        currency="AUD/USD"
        time={5}
        readTime={2}
        source="TradingView"
      />
    </div>
  );
}
