import React, { useMemo } from "react";

import PerformanceHistoryContentCard from "./PerformanceHistoryContentCard";
import { TabsContent } from "@/components/ui/tabs";
import { mockTrades, Trade } from "@/data/tradesData";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

interface PerformanceHistoryContentProps {
  activeTab: string;
}

export default function PerformanceHistoryContent({ activeTab }: PerformanceHistoryContentProps) {
  const { isVirtualAccount } = useAccountType();
  
  const filteredTrades = useMemo(() => {
    if (isVirtualAccount) return [];
    
    switch (activeTab) {
      case "open":
        return mockTrades.filter(trade => trade.status === "open");
      case "closed":
        return mockTrades.filter(trade => trade.status === "closed");
      default:
        return mockTrades;
    }
  }, [activeTab, isVirtualAccount]);

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
