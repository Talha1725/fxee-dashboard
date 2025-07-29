import { Text14 } from "@/components/ui/typography";
import { IconCircle } from "@/components/ui/icon";
import { Text24 } from "@/components/ui/typography";
import { Text16 } from "@/components/ui/typography";

export default function AIEngineToolsNIPText() {
  return (
    <div className="flex flex-col items-start gap-5 flex-[1_0_0] p-5 rounded-[16px] border border-white/5 bg-card-main-dashboard-gradient">
      <div className="flex items-center gap-[5px]">
        <Text14 className="text-white/80">May 9, 2025</Text14>
        <IconCircle width={2} height={2} />
        <Text14 className="text-white/80">13:30 GMT+</Text14>
        <IconCircle width={2} height={2} />
        <Text14 className="text-white/80">51 min read</Text14>
      </div>
      <Text24 className="self-stretch">
        BTC/USD: Bitcoin Breaks $104,000 as Crypto Gets a Boost from Trade Deal
        Optimism
      </Text24>
      <Text16 className="opacity-60 font-[400]">
        <span className="font-medium">Key points:</span>{" "}
        <ul className="list-disc list-outside ml-4">
          <li>Bitcoin crosses $104,000 threshold</li>
          <li>Traders bet China deal is coming</li>
          <li>Bitcoin up 40% since April bottom</li>
        </ul>
      </Text16>
      <Text16 className="opacity-60 font-[400]">
        <span className="font-medium">Bitcoin Clears $104,000</span>
        <ul className="list-disc list-outside ml-4">
          <li>
            Bitcoin (BTCUSD) surged past $104,000 early Friday, notching a fresh
            three-month high as the crypto market rallied on hopes that a
            broader thaw in global trade tensions is finally underway.
          </li>
          <li>
            The move came after US President Donald Trump announced a
            breakthrough trade deal with the UK, scrapping a series of
            retaliatory tariffs.
          </li>
          <li>
            What did traders do? They did what they do best — speculate. Traders
            figured China might be next. “We’re gonna have a good weekend with
            China,” Trump said, sparking hopes that the tariff war with China
            might be coming to an end.
          </li>
        </ul>
      </Text16>
    </div>
  );
}
