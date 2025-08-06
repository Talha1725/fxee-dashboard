"use client";

import React from "react";
import CurrencyToCountryFlagConverter from "@/components/features/CurrencyToCountryFlagConverter";
import { TokenIcon } from "@web3icons/react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Text14 } from "@/components/ui/typography";
import {
  IconChevronDown,
  IconTradeDown,
  IconTradeUp,
} from "@/components/ui/icon";

interface TableRowItemProps {
  currency: string;
  last: number;
  change: number;
  changePercent: number;
  isUp: boolean;
}
const TableRowItem = ({
  currency,
  last,
  change,
  changePercent,
  isUp,
}: TableRowItemProps) => {
  return (
    <TableRow className="hover:bg-transparent border-none">
      <TableCell>
        <div className="flex items-center gap-1">
          <CurrencyToCountryFlagConverter currency={currency} />
          {currency}
        </div>
      </TableCell>
      <TableCell>{last}</TableCell>
      <TableCell className={`${isUp ? "text-green" : "text-danger"}`}>
        {change}
      </TableCell>
      <TableCell className={`${isUp ? "text-green" : "text-danger"}`}>
        {changePercent}%
      </TableCell>
      <TableCell className="text-right">
        {isUp ? (
          <IconTradeUp width={16} height={16} color="#3EDC81" />
        ) : (
          <IconTradeDown width={16} height={16} color="#FF453A" />
        )}
      </TableCell>
    </TableRow>
  );
};

const TableRowItemCrypto = ({
  currency,
  last,
  change,
  changePercent,
  isUp,
}: TableRowItemProps) => {
  return (
    <TableRow className="hover:bg-transparent border-none">
      <TableCell>
        <div className="flex items-center gap-1">
          <TokenIcon symbol={currency} variant="branded" size="20" />
          {currency}
        </div>
      </TableCell>
      <TableCell>{last}</TableCell>
      <TableCell className={`${isUp ? "text-green" : "text-danger"}`}>
        {change}
      </TableCell>
      <TableCell className={`${isUp ? "text-green" : "text-danger"}`}>
        {changePercent}%
      </TableCell>
      <TableCell className="text-right">
        {isUp ? (
          <IconTradeUp width={16} height={16} color="#3EDC81" />
        ) : (
          <IconTradeDown width={16} height={16} color="#FF453A" />
        )}
      </TableCell>
    </TableRow>
  );
};

export default function HomeTopPicksBody() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent font-satoshi-medium">
          <TableHead>Symbol</TableHead>
          <TableHead>Last</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>Change %</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="font-satoshi">
        <TableRow className="hover:bg-transparent border-none">
          <TableCell colSpan={5}>
            <div className="flex items-center gap-1 p-1.5 opacity-60">
              <Text14>Forex</Text14>
              <IconChevronDown width={16} height={16} />
            </div>
          </TableCell>
        </TableRow>
        <TableRowItem
          currency="EUR/USD"
          last={1.2345}
          change={0.0012}
          changePercent={0.1}
          isUp={true}
        />
        <TableRowItem
          currency="GBP/USD"
          last={6.2345}
          change={-0.0012}
          changePercent={-0.12}
          isUp={false}
        />
        <TableRowItem
          currency="EUR/USD"
          last={1.2345}
          change={0.0012}
          changePercent={0.1}
          isUp={true}
        />
        <TableRowItem
          currency="GBP/USD"
          last={6.2345}
          change={-0.0012}
          changePercent={-0.12}
          isUp={false}
        />
        <TableRow className="hover:bg-transparent border-none">
          <TableCell colSpan={5}>
            <div className="flex items-center gap-1 p-1.5 opacity-60">
              <Text14>Crypto</Text14>
              <IconChevronDown width={16} height={16} />
            </div>
          </TableCell>
        </TableRow>
        <TableRowItemCrypto
          currency="BTC"
          last={1.2345}
          change={0.0012}
          changePercent={0.1}
          isUp={true}
        />
        <TableRowItemCrypto
          currency="ETH"
          last={1.2345}
          change={0.0012}
          changePercent={0.1}
          isUp={true}
        />
      </TableBody>
    </Table>
  );
}
