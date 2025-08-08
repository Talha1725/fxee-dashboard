import { Text12, Text14, Text16 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";

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
  const { theme } = useTheme();
  return (
    <div className={`flex items-center justify-center p-2.5 gap-2 self-stretch flex-[1_0_0] rounded-[10px] dark:border border-white/2 ${theme === "dark" ? "bg-dark-gradient" : "bg-black/5"} `}>
      <div className="flex flex-col items-start gap-1.5 flex-[1_0_0]">
        <Text12 className="font-satoshi-medium dark:text-white text-black">{title}</Text12>
        <div className="flex items-center gap-2.5 self-stretch">
          <Text16
            className={cn(
              "font-satoshi-medium",
              !isGreen
                ? "bg-picton-blue text-transparent bg-clip-text"
                : "dark:text-green text-[#079744]"
            )}
          >
            {value}
          </Text16>
          <Text14 className="dark:text-white/60 text-black/60 font-satoshi">{description}</Text14>
        </div>
      </div>
    </div>
  );
}
