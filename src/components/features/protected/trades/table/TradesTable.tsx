"use client";
import React from "react";

import CurrencyToCryptoPairConverter from "@/components/features/CurrencyToCryptoPairConverter";
import CurrencyToCountryFlagConverter from "@/components/features/CurrencyToCountryFlagConverter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Text12, Text18 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { IconEdit } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";
import shade from "@/public/images/shade.png"
import Image from "next/image";

interface TableRowItemProps {
  type: "forex" | "crypto";
  symbol: string;
  entryPrice: string;
  currentPrice: string;
  pl: string;
  direction: "long" | "short";
  opened: string;
  executionMode: string;
  isOpen: boolean;
}

export default function TradesTable() {
  const { theme } = useTheme();
  const rowItems: TableRowItemProps[] = [
    {
      type: "forex",
      symbol: "USD/AUD",
      entryPrice: "3934.43423$",
      currentPrice: "3432.234$",
      pl: "342.4324",
      direction: "long",
      opened: "22:02",
      executionMode: "Manual",
      isOpen: true,
    },
    {
      type: "forex",
      symbol: "JPY/AUD",
      entryPrice: "3934.43423$",
      currentPrice: "3432.234$",
      pl: "342.4324",
      direction: "long",
      opened: "22:02",
      executionMode: "Manual",
      isOpen: true,
    },
    {
      type: "forex",
      symbol: "USD/HKD",
      entryPrice: "3934.43423$",
      currentPrice: "3432.234$",
      pl: "342.4324",
      direction: "long",
      opened: "22:02",
      executionMode: "Manual",
      isOpen: true,
    },
    {
      type: "crypto",
      symbol: "BTC/USD",
      entryPrice: "3934.43423$",
      currentPrice: "3432.234$",
      pl: "342.4324",
      direction: "long",
      opened: "22:02",
      executionMode: "Manual",
      isOpen: false,
    },
    {
      type: "forex",
      symbol: "USD/JPY",
      entryPrice: "3934.43423$",
      currentPrice: "3432.234$",
      pl: "342.4324",
      direction: "short",
      opened: "22:02",
      executionMode: "Manual",
      isOpen: true,
    },
    {
      type: "forex",
      symbol: "USD/AUD",
      entryPrice: "3934.43423$",
      currentPrice: "3432.234$",
      pl: "342.4324",
      direction: "long",
      opened: "22:02",
      executionMode: "Manual",
      isOpen: true,
    },
    {
      type: "forex",
      symbol: "JPY/AUD",
      entryPrice: "3934.43423$",
      currentPrice: "3432.234$",
      pl: "342.4324",
      direction: "long",
      opened: "22:02",
      executionMode: "Manual",
      isOpen: true,
    },
    {
      type: "forex",
      symbol: "USD/HKD",
      entryPrice: "3934.43423$",
      currentPrice: "3432.234$",
      pl: "342.4324",
      direction: "long",
      opened: "22:02",
      executionMode: "Manual",
      isOpen: true,
    },
    {
      type: "crypto",
      symbol: "BTC/USD",
      entryPrice: "3934.43423$",
      currentPrice: "3432.234$",
      pl: "342.4324",
      direction: "long",
      opened: "22:02",
      executionMode: "Manual",
      isOpen: false,
    },
    {
      type: "forex",
      symbol: "USD/JPY",
      entryPrice: "3934.43423$",
      currentPrice: "3432.234$",
      pl: "342.4324",
      direction: "short",
      opened: "22:02",
      executionMode: "Manual",
      isOpen: true,
    },
  ];
  return (
    <div className={`flex flex-col gap-5 self-stretch max-h-[520px] p-5 rounded-[16px] border dark:border-white/5 border-black/5 ${theme === "dark" ? "bg-card-dashboard-main-gradient" : "bg-white/80"} relative overflow-hidden`}>
       <div
          style={{
            transform: "scaleX(-1)",
          }}
          className="pointer-events-none absolute top-0 left-0 w-full h-full z-50 lg:dark:opacity-5 opacity-0"
        >
          <Image src={shade} alt="shade" className="w-full h-full scale-125" />
        </div>
      <Text18>Trades</Text18>
      <Table className="">
        <TableHeader className="dark:bg-gradient-to-b dark:from-[#ffffff03] dark:to-[#FFFFFF09] bg-gradient-to-b from-[#00000003] to-[#00000009] rounded-[16px] border-none">
          <TableRow className="border-none rounded-[16px]">
            <TableHead className="">Symbol</TableHead>
            <TableHead className="">Entry Price</TableHead>
            <TableHead className="">Current Price</TableHead>
            <TableHead className="">P&L</TableHead>
            <TableHead className="">Direction</TableHead>
            <TableHead className="">Time Opened</TableHead>
            <TableHead className="">Execution Mode</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rowItems.map((item, index) => (
            <TableRowItem {...item} key={index} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const TableRowItem = ({
  type,
  symbol,
  entryPrice,
  currentPrice,
  pl,
  direction,
  opened,
  executionMode,
  isOpen,
}: TableRowItemProps) => {
  return (
    <TableRow>
      <TableCell className="">
        <div className="flex gap-1">
          {type === "crypto" ? (
            <CurrencyToCryptoPairConverter currency={symbol} size={16} />
          ) : (
            <CurrencyToCountryFlagConverter currency={symbol} size={16} />
          )}
          <Text12 className="font-[400] capitalize dark:!text-white !text-black/60">{`${type}: ${symbol}`}</Text12>
        </div>
      </TableCell>
      <TableCell className="">
        <Text12 className="font-[400] dark:!text-white !text-black/60">{entryPrice}</Text12>
      </TableCell>
      <TableCell className="">
        <Text12 className="font-[400] dark:!text-white !text-black/60">{currentPrice}</Text12>
      </TableCell>
      <TableCell className="">
        <Text12 className="font-[400] text-green">{pl}</Text12>
      </TableCell>
      <TableCell className="">
        <div className="flex gap-1">
          <Text12
            className={cn(
              "font-[400] capitalize",
              direction === "long" ? "text-green" : "text-danger"
            )}
          >
            {direction}
            {direction === "long" ? " ↑" : " ↓"}
          </Text12>
        </div>
      </TableCell>
      <TableCell className="">
        <Text12 className="font-[400] dark:!text-white !text-black/60">{opened}</Text12>
      </TableCell>
      <TableCell className="">
        <Text12 className="font-[400] dark:!text-white !text-black/60">{executionMode}</Text12>
      </TableCell>
      <TableCell className="">
        <div className="flex items-start gap-2.5">
          <Button
            variant={isOpen === true ? "danger" : "green"}
            className="py-1.5 px-2.5 gap-1 text-white"
          >
            {isOpen === true ? "Close Trade" : "Open Trade"}
          </Button>
          <Button variant="fancy" className="p-1.5 gap-1 text-white">
            <IconEdit width={20} height={20} />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
