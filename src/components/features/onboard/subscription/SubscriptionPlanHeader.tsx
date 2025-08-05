import { Text14, Title32 } from "@/components/ui/typography";

export default function SubscriptionPlanHeader({
  title,
  price,
  description,
}: {
  title: string;
  price: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2.5 self-stretch">
      <Title32 className="text-center font-medium">{title}</Title32>
      <Title32>{price}</Title32>
      <Text14 className="text-center dark:text-white/80 text-black/80 font-normal md:whitespace-nowrap">
        {description}
      </Text14>
    </div>
  );
}
