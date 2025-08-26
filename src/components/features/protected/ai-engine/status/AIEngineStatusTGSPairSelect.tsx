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
import { TRADING_SYMBOLS, FOREX_SYMBOLS, COMMODITIES_SYMBOLS, CRYPTO_SYMBOLS } from "@/lib/constants";

// Get icon based on symbol type
const getSymbolIcon = (type: string) => {
  switch (type) {
    case "Forex":
      return "💱";
    case "Commodities":
      return "🥇";
    case "Crypto":
      return <IconBitcoin width={16} height={16} />;
    default:
      return "📈";
  }
};

interface AIEngineStatusTGSPairSelectProps {
  disabled?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export default function AIEngineStatusTGSPairSelect({ 
  disabled = false, 
  value, 
  onValueChange, 
  defaultValue 
}: AIEngineStatusTGSPairSelectProps) {
  return (
    <Select 
      defaultValue={defaultValue || "USDCAD"} 
      disabled={disabled}
      value={value}
      onValueChange={onValueChange}
    >
      <SelectTrigger className={cn(
        "border border-white/5 bg-gradient-to-b from-white/[0.08] to-white/[0.04] cursor-pointer w-full !text-white dark:!text-white font-medium",
        disabled && "opacity-60 cursor-not-allowed !text-white/60 dark:!text-white/60"
      )}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="min-w-[40px] bg-white dark:bg-black border border-[#D9D9D9] dark:border-[#333333] max-h-80 overflow-y-auto">
        {/* Forex Section */}
        <SelectGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">Forex</div>
          {FOREX_SYMBOLS.map((symbol) => (
            <SelectItem 
              key={symbol.symbol} 
              value={symbol.symbol} 
              className="text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] data-[highlighted]:bg-[#EAEAEA] data-[highlighted]:text-black dark:data-[highlighted]:bg-[#333333] dark:data-[highlighted]:text-white"
            >
              <div className="flex items-center gap-2">
                <span>{getSymbolIcon(symbol.type)}</span>
                <span>{symbol.displayName}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
        
        {/* Commodities Section */}
        <SelectGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">Commodities</div>
          {COMMODITIES_SYMBOLS.map((symbol) => (
            <SelectItem 
              key={symbol.symbol} 
              value={symbol.symbol} 
              className="text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] data-[highlighted]:bg-[#EAEAEA] data-[highlighted]:text-black dark:data-[highlighted]:bg-[#333333] dark:data-[highlighted]:text-white"
            >
              <div className="flex items-center gap-2">
                <span>{getSymbolIcon(symbol.type)}</span>
                <span>{symbol.displayName}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
        
        {/* Crypto Section */}
        <SelectGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">Crypto</div>
          {CRYPTO_SYMBOLS.map((symbol) => (
            <SelectItem 
              key={symbol.symbol} 
              value={symbol.symbol} 
              className="text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] data-[highlighted]:bg-[#EAEAEA] data-[highlighted]:text-black dark:data-[highlighted]:bg-[#333333] dark:data-[highlighted]:text-white"
            >
              <div className="flex items-center gap-2">
                <span>{getSymbolIcon(symbol.type)}</span>
                <span>{symbol.displayName}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
