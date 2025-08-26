import { Text14 } from "@/components/ui/typography";
import AIEngineStatusTGSSwitch from "./AIEngineStatusTGSSwitch";
import { cn } from "@/lib/utils";

export default function AIEngineStatusTGSCheck({
  title,
  switches,
  disabled = false,
}: {
  title: string;
  switches: { label: string; id: string }[];
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col justify-center items-start gap-2 flex-[1_0_0]">
      <Text14 className={cn(
        "self-stretch text-white dark:text-white",
        disabled && "text-white/60 dark:text-white/60"
      )}>{title}</Text14>
      <div className="flex flex-col items-start gap-1 flex-[1_0_0] self-stretch">
        {switches.map(({ label, id }, index) => (
          <AIEngineStatusTGSSwitch key={index} label={label} id={id} disabled={disabled} />
        ))}
      </div>
    </div>
  );
}
