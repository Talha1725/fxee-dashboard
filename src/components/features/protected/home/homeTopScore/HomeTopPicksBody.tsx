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
import { useGetDailyRecommendationsQuery } from "@/lib/redux/features/recommendations/recommendationsApi";
import { DailyRecommendation } from "@/types/redux";
import { useLocalization } from "@/components/localization-provider";

interface TableRowItemProps {
  currency: string;
  last: number;
  change: number;
  changePercent: number;
  isUp: boolean;
  showArrow?: boolean;
  recommendation?: DailyRecommendation;
}
const TableRowItem = ({
  currency,
  last,
  change,
  changePercent,
  isUp,
  showArrow = true,
  recommendation,
}: TableRowItemProps) => {
  const { theme } = useTheme();
  const { t } = useLocalization();

  // Function to translate currency pairs
  const translateCurrencyPair = (pair: string) => {
    const pairLower = pair.toLowerCase();
    
    // Map currency pairs to translation keys
    const pairMap: Record<string, string> = {
      'usdtry': 'usdtry',
      'usdcad': 'usdcad',
      'usdjpy': 'usdjpy',
      'usdchf': 'usdchf',
      'usdzar': 'usdzar',
      'usdgbp': 'usdgbp',
      'usdaud': 'usdaud',
      'usdeur': 'usdeur',
      'audusd': 'audusd',
      'eurusd': 'eurusd',
      'gbpusd': 'gbpusd',
      'nzdusd': 'nzdusd',
      'usd/try': 'usdtry',
      'usd/cad': 'usdcad',
      'usd/jpy': 'usdjpy',
      'usd/chf': 'usdchf',
      'usd/zar': 'usdzar',
      'usd/gbp': 'usdgbp',
      'usd/aud': 'usdaud',
      'usd/eur': 'usdeur',
      'aud/usd': 'audusd',
      'eur/usd': 'eurusd',
      'gbp/usd': 'gbpusd',
      'nzd/usd': 'nzdusd',
      'usdcad/usd': 'usdcad',
      'usdtry/usd': 'usdtry',
      'usdjpy/usd': 'usdjpy',
      'usdchf/usd': 'usdchf',
      'gbpusd/usd': 'gbpusd',
    };
    
    const translationKey = pairMap[pairLower];
    return translationKey ? t(translationKey as any) : pair;
  };

  const translatedCurrency = translateCurrencyPair(currency);

  return (
    <TableRow className="hover:bg-transparent border-none">
      <TableCell>
        <div className="flex items-center gap-1">
          <CurrencyToCountryFlagConverter currency={currency} />
          {translatedCurrency}
        </div>
      </TableCell>
      <TableCell>{recommendation ? parseFloat(recommendation.entryPrice).toFixed(5) : last}</TableCell>
      <TableCell className={`${isUp ? "text-[#079744] dark:text-green" : "text-[#FF453A] dark:text-danger"}`}>
        {recommendation ? `${recommendation.profitPercentage}%` : change}
      </TableCell>
      <TableCell className={`${isUp ? "text-[#079744] dark:text-green" : "text-[#FF453A] dark:text-danger"}`}>
        {recommendation ? `${recommendation.confidence}%` : `${changePercent}%`}
      </TableCell>
      {showArrow && (
        <TableCell className="text-right">
          {isUp ? (
            <IconTradeUp width={16} height={16} color="#3EDC81" />
          ) : (
            <IconTradeDown width={16} height={16} color="#FF453A" />
          )}
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
  const { t } = useLocalization();

  // Function to translate crypto symbols
  const translateCryptoSymbol = (symbol: string) => {
    const symbolLower = symbol.toLowerCase();
    
    // Map crypto symbols to translation keys
    const symbolMap: Record<string, string> = {
      'bitcoin': 'bitcoin',
      'ethereum': 'eth',
      'ETH': 'eth',
      'ripple': 'ripple',
      'bnb': 'bnb',
      'dogecoin': 'dogecoin',
      'solana': 'solana',
    };
    
    const translationKey = symbolMap[symbolLower];
    return translationKey ? t(translationKey as any) : symbol;
  };

  const translatedCurrency = translateCryptoSymbol(currency);

  return (
    <TableRow className="hover:bg-transparent border-none">
      <TableCell>
        <div className="flex items-center gap-1">
          <TokenIcon symbol={currency} variant="branded" size="20" />
          {translatedCurrency}
        </div>
      </TableCell>
      <TableCell>{last}</TableCell>
      <TableCell className={`${isUp ? "text-[#079744] dark:text-green" : "text-[#FF453A] dark:text-danger"}`}>
        {change}
      </TableCell>
      <TableCell className={`${isUp ? "text-[#079744] dark:text-green" : "text-[#FF453A] dark:text-danger"}`}>
        {changePercent}%
      </TableCell>
      {showArrow && (
        <TableCell className="text-right">
          {isUp ? (
            <IconTradeUp width={16} height={16} color="#3EDC81" />
          ) : (
            <IconTradeDown width={16} height={16} color="#FF453A" />
          )}
        </TableCell>
      )}
    </TableRow>
  );
};

interface HomeTopPicksBodyProps {
  showArrows?: boolean;
}

export default function HomeTopPicksBody({ showArrows = true }: HomeTopPicksBodyProps) {
  const { data: dailyRecommendations, error, isLoading } = useGetDailyRecommendationsQuery();
  const { t } = useLocalization();

  // Helper function to categorize recommendations
  const categorizeRecommendations = () => {
    if (!dailyRecommendations?.data) return { forex: [], crypto: [] };
    
    const forex: any[] = [];
    const crypto: any[] = [];
    
    dailyRecommendations.data.forEach((rec: any) => {
      if (rec.symbol.includes("USD") || rec.symbol.includes("EUR") || rec.symbol.includes("GBP") || rec.symbol.includes("JPY")) {
        forex.push(rec);
      } else {
        crypto.push(rec);
      }
    });
    
    return { forex: forex.slice(0, 4), crypto: crypto.slice(0, 2) };
  };

  const { forex, crypto } = categorizeRecommendations();

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent font-satoshi-medium">
          <TableHead className="text-[12px] font-satoshi">{t("symbols")}</TableHead>
          <TableHead className="text-[12px] font-satoshi">{t("entry")}</TableHead>
          <TableHead className="text-[12px] font-satoshi">{t("profit_percent")}</TableHead>
          <TableHead className="text-[12px] font-satoshi">{t("confidence")}</TableHead>
          {showArrows && <TableHead className="text-[12px] font-satoshi text-right"></TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody className="font-satoshi">
        <TableRow className="hover:bg-transparent border-none">
          <TableCell colSpan={showArrows ? 5 : 4}>
            <div className="flex items-center gap-1 p-1.5 opacity-60">
              <Text14 className="dark:text-white text-black">{t("forex")}</Text14>
              <IconChevronDown width={16} height={16} className="rotate-180" />
            </div>
          </TableCell>
        </TableRow>
{forex.length > 0 ? (
          forex.map((rec, index) => (
            <TableRowItem
              key={rec.id}
              currency={rec.symbol}
              last={parseFloat(rec.entryPrice)}
              change={parseFloat(rec.profitPercentage)}
              changePercent={rec.confidence}
              isUp={rec.direction === "Long"}
              showArrow={showArrows}
              recommendation={rec}
            />
          ))
        ) : (
          <>
            <TableRowItem
              currency="EUR/USD"
              last={1.2345}
              change={0.0012}
              changePercent={0.1}
              isUp={true}
              showArrow={showArrows}
            />
            <TableRowItem
              currency="GBP/USD"
              last={6.2345}
              change={-0.0012}
              changePercent={-0.12}
              isUp={false}
              showArrow={showArrows}
            />
          </>
        )}
        <TableRow className="hover:bg-transparent border-none">
          <TableCell colSpan={showArrows ? 5 : 4}>
            <div className="flex items-center gap-1 p-1.5 opacity-60">
              <Text14 className="dark:text-white text-black">{t("crypto")}</Text14>
              <IconChevronDown width={16} height={16} className="rotate-180" />
            </div>
          </TableCell>
        </TableRow>
{crypto.length > 0 ? (
          crypto.map((rec, index) => (
            <TableRowItemCrypto
              key={rec.id}
              currency={rec.symbol === "BITCOIN" ? "BTC" : rec.symbol === "ETHEREUM" ? "ETH" : rec.symbol}
              last={parseFloat(rec.entryPrice)}
              change={parseFloat(rec.profitPercentage)}
              changePercent={rec.confidence}
              isUp={rec.direction === "Long"}
              showArrow={showArrows}
            />
          ))
        ) : (
          <>
            <TableRowItemCrypto
              currency="BTC"
              last={1.2345}
              change={0.0012}
              changePercent={0.1}
              isUp={true}
              showArrow={showArrows}
            />
            <TableRowItemCrypto
              currency="ETH"
              last={1.2345}
              change={0.0012}
              changePercent={0.1}
              isUp={true}
              showArrow={showArrows}
            />
          </>
        )}
      </TableBody>
    </Table>
  );
}
