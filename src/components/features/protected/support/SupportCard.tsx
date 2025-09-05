"use client";
import SupportItem from "./SupportItem";
import { Text14, Title24 } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/lib/contexts/ThemeContext";

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
  const { theme } = useTheme();
  return (
    <div className={`min-w-[320px] flex flex-col items-start gap-2.5 p-5 self-stretch flex-[1_0_0] rounded-[16px] border dark:border-white/10 border-black/10 ${theme === "dark" ? "bg-support-card-gradient" : "bg-white/50"}`}>
      <Title24>{title}</Title24>
      <Text14 className="dark:!text-white/70 !text-black/80">{description}</Text14>
      {items.map((item) => (
        <SupportItem key={item.title} icon={item.icon} title={item.title} />
      ))}
      <Separator className="bg-white/30 dark:bg-white/30" />
      <div className="flex items-start gap-2.5 self-stretch">{children}</div>
    </div>
  );
}
