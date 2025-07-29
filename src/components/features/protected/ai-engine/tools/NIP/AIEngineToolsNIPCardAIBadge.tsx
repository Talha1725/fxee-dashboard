import React from "react";
import { Text12 } from "@/components/ui/typography";

export default function AIEngineToolsNIPCardAIBadge({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center gap-1 p-2.5 rounded-[10px] bg-card-weak-gradient">
      {icon}
      <Text12>{text}</Text12>
    </div>
  );
}
