import React from "react";

import { TabsContent } from "@/components/ui/tabs";
import TradesDetailCard from "./TradesDetailCard";
import { IconDollar, IconEquity, IconLineChart2, IconFund, PieChart } from "@/components/ui/icon";

export default function TradesDetailContent() {
  const items = [
    {
      title: "Account Balance",
      icon: <IconDollar width={16} height={16} />,
      value: "99,997.49",
      isUSD: true,
      description: "Total Unrealized P&L",
      change: "0%",
      isIncreased: true,
      isBalance: true,
    },
    {
      title: "Equity",
      icon: <IconEquity width={16} height={16} />,
      value: "99,997.49",
      isUSD: true,
      description: "Total Equity Increased",
      change: "12.44%",
      isIncreased: true,
    },
    {
      title: "Realized P&L",
      icon: <IconLineChart2 width={16} height={16} />,
      value: "-2.51",
      isUSD: true,
      description: "Realized P&L Decreased",
      change: "12.44%",
      isIncreased: true,
    },
    {
      title: "Unrealized P&L",
      icon: <PieChart width={16} height={16} />,
      value: "0.00",
      isUSD: false,
      description: "Total Unrealized P&L",
      change: "0%",
      isIncreased: true,
    },
    {
      title: "Account Margin",
      icon: <PieChart width={16} height={16} />,
      value: "0.00",
      isUSD: false,
      description: "Total Account Margin",
      change: "0%",
      isIncreased: true,
    },
    {
      title: "Available Funds",
      icon: <IconFund width={16} height={16} />,
      value: "99,997.49",
      isUSD: false,
      description: "Available Funds Decreased",
      change: "-2.5%",
      isIncreased: false,
    },
  ];
  return (
    <TabsContent
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-[20px_14px] self-stretch"
      value="all"
    >
      {items.map((item, index) => (
        <TradesDetailCard
          key={index}
          icon={item.icon}
          title={item.title}
          value={item.value}
          isUSD={item.isUSD}
          description={item.description}
          change={item.change}
          isIncreased={item.isIncreased}
          isBalance={item.isBalance}
        />
      ))}
    </TabsContent>
  );
}
