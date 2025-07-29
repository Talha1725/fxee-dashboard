import { Button } from "@/components/ui/button";
import { IconCheck } from "@/components/ui/icon";
import { Text24 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function CopyTradingAccount({
  title,
  price,
  isSelected,
  onSelect,
}: {
  title: string;
  price: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center gap-4 self-stretch flex-[1_0_0] p-6 rounded-[16px] border border-white/3 bg-dark-radial-gradient transition-all duration-300",
        isSelected &&
          "border-none border-green-gradient bg-green-radial-gradient"
      )}
    >
      <div className="flex flex-col items-center justify-between gap-5 flex-[1_0_0] self-stretch">
        <div className="flex flex-col items-center gap-2.5 self-stretch">
          <Text24 className="self-stretch text-center">{title}</Text24>
          <Text24 className="self-stretch text-center">{price}</Text24>
        </div>
        <Button
          variant={isSelected ? "fancy" : "default"}
          className="w-full max-w-[420px]"
          onClick={onSelect}
        >
          {isSelected ? "Selected" : "Select"}
          {isSelected && <IconCheck width={20} height={20} />}
        </Button>
      </div>
      {isSelected && (
        <div className="absolute bottom-0">
          <div className="h-[4px] w-[240px] sm:w-[300px] rounded-r bg-popular-gradient"></div>
        </div>
      )}
    </div>
  );
}
