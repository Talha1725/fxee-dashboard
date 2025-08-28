import { Text14 } from "@/components/ui/typography";
import AIEngineStatusTGSSwitch from "./AIEngineStatusTGSSwitch";
import { cn } from "@/lib/utils";

export default function AIEngineStatusTGSCheck({
  title,
  switches,
  disabled = false,
  onSwitchChange,
}: {
  title: string;
  switches: { label: string; id: string; checked?: boolean }[];
  disabled?: boolean;
  onSwitchChange?: (id: string) => void;
}) {
  return (
    <div className="flex flex-col justify-center items-start gap-2 flex-[1_0_0]">
      <Text14 className="self-stretch text-white dark:text-white">{title}</Text14>
      <div className="flex flex-col items-start gap-1 flex-[1_0_0] self-stretch">
        {switches.map(({ label, id, checked }, index) => (
          <AIEngineStatusTGSSwitch 
            key={index} 
            label={label} 
            id={id} 
            disabled={disabled} 
            checked={checked}
            onCheckedChange={() => onSwitchChange?.(id)}
          />
        ))}
      </div>
    </div>
  );
}
