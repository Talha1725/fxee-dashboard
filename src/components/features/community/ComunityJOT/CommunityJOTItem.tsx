import React from "react";
import { Title22 } from "@/components/ui/typography";

export default function CommunityJOTItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center shrink-0 gap-3">
      {icon}
      <Title22 className="text-white/90 text-center shrink-0">{title}</Title22>
    </div>
  );
}
