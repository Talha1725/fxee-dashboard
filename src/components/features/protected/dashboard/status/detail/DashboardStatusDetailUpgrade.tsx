import DashboardStatusDetailSubcardContainer from "./DashboardStatusDetailSubcardContainer";
import { IconLock, IconTradeUp } from "@/components/ui/icon";
import { Text10, Text12, Text14 } from "@/components/ui/typography";

export default function DashboardStatusDetailUpgrade({
  title,
  description,
  profitability,
}: {
  title: string;
  description: string;
  profitability: string;
}) {
  return (
    <DashboardStatusDetailSubcardContainer className="gap-2.5 justify-between bg-white/3">
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <div className="flex items-center gap-[3px] self-stretch">
          <IconLock width={14} height={14} />
          <Text14 className="font-satoshi-medium">{title}</Text14>
        </div>
        <Text12 className="font-satoshi">{description}</Text12>
      </div>
      <div className="flex justify-end items-center gap-1">
        <IconTradeUp width={16} height={16} color="var(--color-green)" />
        <Text12 className="text-green font-satoshi-medium">{profitability}</Text12>
      </div>
    </DashboardStatusDetailSubcardContainer>
  );
}
