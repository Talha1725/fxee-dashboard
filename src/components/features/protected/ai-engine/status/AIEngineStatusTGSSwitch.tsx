import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Text12 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function AIEngineStatusTGSSwitch({
  label,
  id,
  disabled = false,
  checked = false,
  onCheckedChange,
}: {
  label: string;
  id: string;
  disabled?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  return (
    <div 
      className={cn(
        "flex justify-center items-center gap-2 self-stretch flex-[1_0_0] p-2.5 rounded-[10px] border border-white/2 bg-gradient-to-b from-white/[0.08] to-white/[0.04] cursor-pointer",
        disabled && "cursor-not-allowed"
      )}
      onClick={() => !disabled && onCheckedChange?.(!checked)}
    >
      <div className="flex items-start justify-between gap-1.5 flex-[1_0_0]">
        <Label htmlFor={id} className="cursor-pointer">
          <Text12 className="flex-[1_0_0] text-white dark:text-white">{label}</Text12>
        </Label>
        <Switch id={id} disabled={disabled} checked={checked} onCheckedChange={onCheckedChange} />
      </div>
    </div>
  );
}
