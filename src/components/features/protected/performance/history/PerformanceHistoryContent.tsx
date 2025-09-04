import React from "react";

import PerformanceHistoryContentCard from "./PerformanceHistoryContentCard";
import { TabsContent } from "@/components/ui/tabs";
import { mockTrades, Trade } from "@/data/tradesData";

interface PerformanceHistoryContentProps {
  activeTab: string;
}

export default function PerformanceHistoryContent({ activeTab }: PerformanceHistoryContentProps) {
  // Filter trades based on active tab
  const getFilteredTrades = (): Trade[] => {
    switch (activeTab) {
      case "open":
        return mockTrades.filter(trade => trade.status === "open");
      case "closed":
        return mockTrades.filter(trade => trade.status === "closed");
      default:
        return mockTrades;
    }
  };

  const filteredTrades = getFilteredTrades();

  return (
    <TabsContent
      value={activeTab}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-[40px_20px] self-stretch lg:px-3"
    >
      {filteredTrades.map((trade, index) => (
        <PerformanceHistoryContentCard
          key={trade.id}
          trade={trade}
          borderRight={index % 3 !== 2 && filteredTrades.length !== index + 1} // Add border right for first two columns, hide on last card
        />
      ))}
    </TabsContent>
  );
}
