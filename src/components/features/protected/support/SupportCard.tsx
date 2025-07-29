import SupportItem from "./SupportItem";
import { Text14, Title24 } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";

export default function SupportCard({
  title,
  description,
  items,
  children,
}: {
  title: string;
  description: string;
  items: { icon: React.ReactNode; title: string }[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-[320px] flex flex-col items-start gap-2.5 p-5 self-stretch flex-[1_0_0] rounded-[16px] border border-white/10 bg-support-card-gradient">
      <Title24>{title}</Title24>
      <Text14 className="text-white/80">{description}</Text14>
      {items.map((item) => (
        <SupportItem key={item.title} icon={item.icon} title={item.title} />
      ))}
      <Separator className="bg-white/30" />
      <div className="flex items-start gap-2.5 self-stretch">{children}</div>
    </div>
  );
}
