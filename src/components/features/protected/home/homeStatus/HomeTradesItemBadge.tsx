import React from "react";
import { Text14 } from "@/components/ui/typography";

export default function HomeTradesItemBadge({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center gap-1 p-1.5 sm:p-2.5 bg-card-weak-gradient rounded-[10px]">
      {icon}
      <Text14 className="font-satoshi-medium text-white">{text}</Text14>
    </div>
  );
}
