import { Text14 } from "@/components/ui/typography";
import React from "react";

export default function PerformanceHistoryContentCardItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-center self-stretch">
      <Text14 className="font-[400]">{title}</Text14>
      <Text14 className="font-[400]">{value}</Text14>
    </div>
  );
}
