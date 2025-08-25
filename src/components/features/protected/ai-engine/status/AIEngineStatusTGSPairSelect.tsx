import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconBitcoin } from "@/components/ui/icon";

export default function AIEngineStatusTGSPairSelect() {
  return (
    <Select defaultValue="btc-usd">
      <SelectTrigger className="border border-white/5 bg-gradient-to-b from-white/[0.08] to-white/[0.04] cursor-pointer w-full text-white dark:text-white">
        <SelectValue placeholder={
          <div className="flex items-center gap-2">
            <IconBitcoin width={16} height={16} />
            <span className="text-white dark:text-white">BTC/USD</span>
          </div>
        } />
      </SelectTrigger>
      <SelectContent className="min-w-[40px] bg-gradient-to-b from-white/[0.08] to-white/[0.04] dark:bg-[#111] text-black dark:text-white">
        <SelectGroup>
          <SelectItem value="btc-usd">
            <div className="flex items-center gap-2">
              <IconBitcoin width={16} height={16} />
              <span className="text-white dark:text-white">BTC/USD</span>
            </div>
          </SelectItem>
          <SelectItem value="eth-usd">
            <div className="flex items-center gap-2">
              <IconBitcoin width={16} height={16} />
              <span className="text-white dark:text-white">ETH/USD</span>
            </div>
          </SelectItem>
          <SelectItem value="ada-usd">
            <div className="flex items-center gap-2">
              <IconBitcoin width={16} height={16} />
              <span className="text-white dark:text-white">ADA/USD</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
