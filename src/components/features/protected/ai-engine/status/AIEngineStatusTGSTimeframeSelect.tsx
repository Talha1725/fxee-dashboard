import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AIEngineStatusTGSTimeframeSelect() {
  return (
    <Select defaultValue="2-days">
      <SelectTrigger className="border border-white/5 bg-gradient-to-b from-white/[0.08] to-white/[0.04] cursor-pointer w-full text-white dark:text-white">
        <SelectValue placeholder="2 Days" />
      </SelectTrigger>
      <SelectContent className="min-w-[40px] bg-gradient-to-b from-white/[0.08] to-white/[0.04] dark:bg-[#111] text-black dark:text-white">
        <SelectGroup>
          <SelectItem value="2-days" className="text-white dark:text-white">2 Days</SelectItem>
          <SelectItem value="1-day" className="text-white dark:text-white">1 Day</SelectItem>
          <SelectItem value="1-week" className="text-white dark:text-white">1 Week</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
