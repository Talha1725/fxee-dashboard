import React from "react";

import DashboardHeadBadge from "@/components/features/protected/dashboard/DashboardHeadBadge";
import { Text16 } from "@/components/ui/typography";

export default function DashboardStatusDetailCardHead({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 self-stretch">
      <DashboardHeadBadge>{icon}</DashboardHeadBadge>
      <Text16 className="font-satoshi-medium dark:text-white text-black">{title}</Text16>
    </div>
  );
}
