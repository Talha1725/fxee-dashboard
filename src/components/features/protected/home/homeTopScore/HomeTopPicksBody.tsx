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
import { useTheme } from "@/lib/contexts/ThemeContext";

// Constants for repeated values
const TABLE_HEAD_CLASSES = "text-[12px] font-satoshi";
const CHANGE_COLOR_CLASSES = "text-[#079744] dark:text-green";
const CHANGE_NEGATIVE_COLOR_CLASSES = "text-[#FF453A] dark:text-danger";

// Helper functions
const getChangeColorClasses = (isUp: boolean) =>
  isUp ? CHANGE_COLOR_CLASSES : CHANGE_NEGATIVE_COLOR_CLASSES;

const ChangeIcon = ({ isUp }: { isUp: boolean }) =>
  isUp ? (
    <IconTradeUp width={16} height={16} color="#3EDC81" />
  ) : (
    <IconTradeDown width={16} height={16} color="#FF453A" />
  );

// Data constants
const FOREX_DATA = [
  { currency: "EUR/USD", last: 1.2345, change: 0.0012, changePercent: 0.1, isUp: true },
  { currency: "GBP/USD", last: 6.2345, change: -0.0012, changePercent: -0.12, isUp: false },
  { currency: "EUR/USD", last: 1.2345, change: 0.0012, changePercent: 0.1, isUp: true },
  { currency: "GBP/USD", last: 6.2345, change: -0.0012, changePercent: -0.12, isUp: false },
];

const CRYPTO_DATA = [
  { currency: "BTC", last: 1.2345, change: 0.0012, changePercent: 0.1, isUp: true },
  { currency: "ETH", last: 1.2345, change: 0.0012, changePercent: 0.1, isUp: true },
];

interface TableRowItemProps {
  currency: string;
  last: number;
  change: number;
  changePercent: number;
  isUp: boolean;
  showArrow?: boolean;
}
const TableRowItem = ({
  currency,
  last,
  change,
  changePercent,
  isUp,
  showArrow = true,
}: TableRowItemProps) => {
  const { theme } = useTheme();
  return (
    <TableRow className="hover:bg-transparent border-none">
      <TableCell>
        <div className="flex items-center gap-1">
          <CurrencyToCountryFlagConverter currency={currency} />
          {currency}
        </div>
      </TableCell>
      <TableCell>{last}</TableCell>
      <TableCell className={getChangeColorClasses(isUp)}>
        {change}
      </TableCell>
      <TableCell className={getChangeColorClasses(isUp)}>
        {changePercent}%
      </TableCell>
      {showArrow && (
        <TableCell className="text-right">
          <ChangeIcon isUp={isUp} />
        </TableCell>
      )}
    </TableRow>
  );
};

const TableRowItemCrypto = ({
  currency,
  last,
  change,
  changePercent,
  isUp,
  showArrow = true,
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
      <TableCell className={getChangeColorClasses(isUp)}>
        {change}
      </TableCell>
      <TableCell className={getChangeColorClasses(isUp)}>
        {changePercent}%
      </TableCell>
      {showArrow && (
        <TableCell className="text-right">
          <ChangeIcon isUp={isUp} />
        </TableCell>
      )}
    </TableRow>
  );
};

interface HomeTopPicksBodyProps {
  showArrows?: boolean;
}

export default function HomeTopPicksBody({ showArrows = true }: HomeTopPicksBodyProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent font-satoshi-medium">
          <TableHead className={TABLE_HEAD_CLASSES}>Symbols</TableHead>
          <TableHead className={TABLE_HEAD_CLASSES}>Last</TableHead>
          <TableHead className={TABLE_HEAD_CLASSES}>Chang</TableHead>
          <TableHead className={TABLE_HEAD_CLASSES}>Chang %</TableHead>
          {showArrows && <TableHead className={`${TABLE_HEAD_CLASSES} text-right`}></TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody className="font-satoshi">
        <TableRow className="hover:bg-transparent border-none">
          <TableCell colSpan={showArrows ? 5 : 4}>
            <div className="flex items-center gap-1 p-1.5 opacity-60">
              <Text14 className="dark:text-white text-black">Forex</Text14>
              <IconChevronDown width={16} height={16} className="rotate-180" />
            </div>
          </TableCell>
        </TableRow>
        {FOREX_DATA.map((item, index) => (
          <TableRowItem
            key={`forex-${index}`}
            {...item}
            showArrow={showArrows}
          />
        ))}
        <TableRow className="hover:bg-transparent border-none">
          <TableCell colSpan={showArrows ? 5 : 4}>
            <div className="flex items-center gap-1 p-1.5 opacity-60">
              <Text14 className="dark:text-white text-black">Crypto</Text14>
              <IconChevronDown width={16} height={16} className="rotate-180" />
            </div>
          </TableCell>
        </TableRow>
        {CRYPTO_DATA.map((item, index) => (
          <TableRowItemCrypto
            key={`crypto-${index}`}
            {...item}
            showArrow={showArrows}
          />
        ))}
      </TableBody>
    </Table>
  );
}
