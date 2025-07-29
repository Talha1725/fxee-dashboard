import React from "react";

import { Text14 } from "@/components/ui/typography";

interface SupportItemProps {
  icon: React.ReactNode;
  title: string;
}

export default function SupportItem({ icon, title }: SupportItemProps) {
  return (
    <div className="flex items-center gap-[5px] self-stretch">
      {icon}
      <Text14 className="font-[400]">{title}</Text14>
    </div>
  );
}
