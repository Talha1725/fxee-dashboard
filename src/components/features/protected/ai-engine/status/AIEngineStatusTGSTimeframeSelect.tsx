import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const timeframes = [
  { value: "2 Days", label: "2 Days" },
  { value: "1 Day", label: "1 Day" },
  { value: "1 Week", label: "1 Week" },
  { value: "4 Hours", label: "4 Hours" },
  { value: "1 Hour", label: "1 Hour" },
];

interface AIEngineStatusTGSTimeframeSelectProps {
  disabled?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export default function AIEngineStatusTGSTimeframeSelect({ 
  disabled = false, 
  value, 
  onValueChange, 
  defaultValue 
}: AIEngineStatusTGSTimeframeSelectProps) {
  return (
    <Select 
      defaultValue={defaultValue || "2 Days"} 
      disabled={disabled}
      value={value}
      onValueChange={onValueChange}
    >
      <SelectTrigger className={cn(
        "border border-white/5 bg-gradient-to-b from-white/[0.08] to-white/[0.04] cursor-pointer w-full text-white dark:text-white",
        disabled && "opacity-60 cursor-not-allowed text-white/60 dark:text-white/60"
      )}>
        <SelectValue placeholder="2 Days" />
      </SelectTrigger>
      <SelectContent className="min-w-[40px] bg-white dark:bg-black border border-[#D9D9D9] dark:border-[#333333]">
        <SelectGroup>
          {timeframes.map((timeframe) => (
            <SelectItem 
              key={timeframe.value} 
              value={timeframe.value} 
              className="text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] data-[highlighted]:bg-[#EAEAEA] data-[highlighted]:text-black dark:data-[highlighted]:bg-[#333333] dark:data-[highlighted]:text-white"
            >
              {timeframe.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
