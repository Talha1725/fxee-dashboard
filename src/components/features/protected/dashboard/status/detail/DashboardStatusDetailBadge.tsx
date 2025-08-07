import React from "react";

import { Text10, Text12 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function DashboardStatusDetailBadge({
  icon,
  title,
  isVip,
  isPro,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  isVip?: boolean;
  isPro?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1 p-2 rounded-[10px] bg-card-weak-gradient",
        (isVip || isPro) && "opacity-50",
        className
      )}
    >
      {icon}
      <Text12 className="font-satoshi-medium">{title}</Text12>
      {isVip && (
        <div className="flex justify-center items-center py-0.5 px-1.5 gap-2.5 rounded-[2px] bg-green/10">
          <Text10 className="text-green font-[700]">VIP</Text10>
        </div>
      )}
      {isPro && (
        <div className="flex justify-center items-center py-0.5 px-1.5 gap-2.5 rounded-[2px] bg-green/10">
          <Text10 className="text-green font-[700]">PRO</Text10>
        </div>
      )}
    </div>
  );
}
