"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { IconSquareEdit } from "@/components/ui/icon";
import { Text16, Text24 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function AIEngineToolsHead() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col items-start gap-5 self-stretch">
      <div className="flex justify-between items-center self-stretch">
        <Text24 className="flex-[1_0_0]">AI Tools</Text24>
        <Button className={theme === "dark" ? "" : "border border-[#0000001A]"}>
          <IconSquareEdit width={20} height={20} />
          <Text16>Edit AI Tools</Text16>
        </Button>
      </div>
    </div>
  );
}
