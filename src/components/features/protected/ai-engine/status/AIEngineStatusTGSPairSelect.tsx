import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconBitcoin } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const tradingPairs = [
  { value: "btc-usd", label: "BTC/USD" },
  { value: "eth-usd", label: "ETH/USD" },
  { value: "ada-usd", label: "ADA/USD" },
];

export default function AIEngineStatusTGSPairSelect({ disabled = false }: { disabled?: boolean }) {
  return (
    <Select defaultValue="btc-usd" disabled={disabled}>
      <SelectTrigger className={cn(
        "border border-white/5 bg-gradient-to-b from-white/[0.08] to-white/[0.04] cursor-pointer w-full !text-white dark:!text-white font-medium",
        disabled && "opacity-60 cursor-not-allowed !text-white/60 dark:!text-white/60"
      )}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="min-w-[40px] bg-white dark:bg-black border border-[#D9D9D9] dark:border-[#333333]">
        <SelectGroup>
          {tradingPairs.map((pair) => (
            <SelectItem 
              key={pair.value} 
              value={pair.value} 
              className="text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] data-[highlighted]:bg-[#EAEAEA] data-[highlighted]:text-black dark:data-[highlighted]:bg-[#333333] dark:data-[highlighted]:text-white"
            >
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
