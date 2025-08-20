import React from "react";
import { Text16 } from "@/components/ui/typography";

export default function AIEngineToolsNIPCardHead({
  title,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 self-stretch">
      {icon}
      <Text16 className="flex-[1_0_0]">{title}</Text16>
    </div>
  );
}
