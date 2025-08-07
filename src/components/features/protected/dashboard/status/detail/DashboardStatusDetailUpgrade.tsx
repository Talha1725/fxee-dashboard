"use client";
import DashboardStatusDetailSubcardContainer from "./DashboardStatusDetailSubcardContainer";
import { IconLock, IconTradeUp } from "@/components/ui/icon";
import { Text12, Text14 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function DashboardStatusDetailUpgrade({
  title,
  description,
  profitability,
}: {
  title: string;
  description: string;
  profitability: string;
}) {
  const { theme } = useTheme();
  return (
    <DashboardStatusDetailSubcardContainer className="gap-2.5 justify-between">
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <div className="flex items-center gap-[3px] self-stretch">
          <IconLock width={14} height={14} />
          <Text14 className="font-satoshi-medium dark:text-white text-black">{title}</Text14>
        </div>
        <Text12 className="font-satoshi dark:text-white text-black">{description}</Text12>
      </div>
      <div className="flex justify-end items-center gap-1">
        <IconTradeUp width={16} height={16} color={theme === "dark" ? "var(--color-green)" : "#079744"} />
        <Text12 className="dark:text-green text-[#079744] font-satoshi-medium">{profitability}</Text12>
      </div>
    </DashboardStatusDetailSubcardContainer>
  );
}
