"use client";

import React from "react";
import { Text12 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function AIEngineToolsNIPCardAIBadge({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <div className={`flex justify-center items-center gap-1 p-2.5 rounded-[10px] ${
      theme === "dark" ? "bg-card-weak-gradient" : "bg-gradient-to-b from-black/[0.1] to-black/[0.05]"
    }`}>
      {icon}
      <Text12>{text}</Text12>
    </div>
  );
}
