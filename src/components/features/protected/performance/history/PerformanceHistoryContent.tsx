import React from "react";

import PerformanceHistoryContentCard from "./PerformanceHistoryContentCard";
import { TabsContent } from "@/components/ui/tabs";

export default function PerformanceHistoryContent() {
  return (
    <TabsContent
      value="all"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-[40px_20px] self-stretch lg:px-3"
    >
      <PerformanceHistoryContentCard isOpen={true} borderRight={true} />
      <PerformanceHistoryContentCard isOpen={false} borderRight={true} />
      <PerformanceHistoryContentCard isOpen={true} />
      <PerformanceHistoryContentCard isOpen={false} borderRight={true} />
      <PerformanceHistoryContentCard isOpen={true} borderRight={true} />
      <PerformanceHistoryContentCard isOpen={false} />
      <PerformanceHistoryContentCard isOpen={true} borderRight={true} />
      <PerformanceHistoryContentCard isOpen={false} />
    </TabsContent>
  );
}
