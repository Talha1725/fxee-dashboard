import { Text16, Text20 } from "../ui/typography";
import TradingSize from "./trading-size";
import TradingRisk from "./trading-risk";
import AutoTrade from "./auto-trade";
import PreferredAssets from "./preferred-assets";

export default function TradingPreferenceSection() {
  return (
    <div className="w-full md:h-[81vh] overflow-y-auto scrollbar-hide scroll-smooth">
      <Text20 className="font-satoshi">Trading Preferences</Text20>
      <Text16 className="dark:opacity-70 mt-1">
        Customize how the AI trades and presents recommendations.{" "}
      </Text16>

      <TradingSize />
      <TradingRisk />
      <AutoTrade />
      <PreferredAssets />
    </div>
  );
}
