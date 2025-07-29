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
    <Select>
      <SelectTrigger className="border border-white/5 bg-card-dashboard-main-gradient cursor-pointer w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="min-w-[40px]">
        <SelectGroup>
          <SelectItem value="uk"></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
