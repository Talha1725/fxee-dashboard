import { Text12, Text14, Text16 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function DashboardACPDetail({
  title,
  value,
  description,
  isGreen = false,
}: {
  title: string;
  value: string;
  description: string;
  isGreen?: boolean;
}) {
  return (
    <div className="flex items-center justify-center p-2.5 gap-2 self-stretch flex-[1_0_0] rounded-[10px] border border-white/2 bg-dark-gradient">
      <div className="flex flex-col items-start gap-1.5 flex-[1_0_0]">
        <Text12>{title}</Text12>
        <div className="flex items-center gap-2.5 self-stretch">
          <Text16
            className={cn(
              "",
              !isGreen
                ? "bg-picton-blue text-transparent bg-clip-text"
                : "text-green"
            )}
          >
            {value}
          </Text16>
          <Text14 className="text-white/60">{description}</Text14>
        </div>
      </div>
    </div>
  );
}
