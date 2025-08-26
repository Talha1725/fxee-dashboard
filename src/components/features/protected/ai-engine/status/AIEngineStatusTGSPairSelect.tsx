import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconBitcoin } from "@/components/ui/icon";

const tradingPairs = [
  { value: "btc-usd", label: "BTC/USD" },
  { value: "eth-usd", label: "ETH/USD" },
  { value: "ada-usd", label: "ADA/USD" },
];

export default function AIEngineStatusTGSPairSelect() {
  return (
    <Select defaultValue="btc-usd">
      <SelectTrigger className="border border-white/5 bg-gradient-to-b from-white/[0.08] to-white/[0.04] cursor-pointer w-full !text-white dark:!text-white font-medium">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="min-w-[40px] bg-gradient-to-b from-white/[0.7] to-white/[0.6] dark:bg-[#111] text-black dark:text-white border border-white/10">
        <SelectGroup>
          {tradingPairs.map((pair) => (
            <SelectItem key={pair.value} value={pair.value} className="text-black dark:text-white">
              <div className="flex items-center gap-2">
                <IconBitcoin width={16} height={16} />
                <span>{pair.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
