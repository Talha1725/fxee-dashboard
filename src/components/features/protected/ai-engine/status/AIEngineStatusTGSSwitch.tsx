import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Text12 } from "@/components/ui/typography";

export default function AIEngineStatusTGSSwitch({
  label,
  id,
}: {
  label: string;
  id: string;
}) {
  return (
    <div className="flex justify-center items-center gap-2 self-stretch flex-[1_0_0] p-2.5 rounded-[10px] border border-white/2 bg-dark-gradient">
      <div className="flex items-start justify-between gap-1.5 flex-[1_0_0]">
        <Label htmlFor={id}>
          <Text12 className="flex-[1_0_0]">{label}</Text12>
        </Label>
        <Switch id={id} />
      </div>
    </div>
  );
}
