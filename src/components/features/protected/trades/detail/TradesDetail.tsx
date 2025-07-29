import React from "react";

import TradesDetailFilter from "./TradesDetailFilter";
import TradesDetailContent from "./TradesDetailContent";
import { Tabs } from "@/components/ui/tabs";

export default function TradesDetail() {
  return (
    <Tabs
      className="flex flex-col items-start gap-7.5 self-stretch"
      defaultValue="all"
    >
      <TradesDetailFilter />
      <TradesDetailContent />
    </Tabs>
  );
}
