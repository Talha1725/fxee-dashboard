import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Text12 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function AIEngineStatusTGSSwitch({
  label,
  id,
  disabled = false,
}: {
  label: string;
  id: string;
  disabled?: boolean;
}) {
  return (
    <div className={cn(
      "flex justify-center items-center gap-2 self-stretch flex-[1_0_0] p-2.5 rounded-[10px] border border-white/2 bg-gradient-to-b from-white/[0.08] to-white/[0.04]",
      disabled && "opacity-60 cursor-not-allowed"
    )}>
      <div className="flex items-start justify-between gap-1.5 flex-[1_0_0]">
        <Label htmlFor={id}>
          <Text12 className={cn(
            "flex-[1_0_0] text-white dark:text-white",
            disabled && "text-white/60 dark:text-white/60"
          )}>{label}</Text12>
        </Label>
        <Switch id={id} disabled={disabled} />
      </div>
    </div>
  );
}
