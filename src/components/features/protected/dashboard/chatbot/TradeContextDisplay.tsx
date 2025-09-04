import React from 'react';
import { Text14 } from '@/components/ui/typography';

interface TradeContextDisplayProps {
  tradeToUse: any;
  useMockResponses: boolean;
  latestTrade: any;
  selectedTrade: any;
}

export default function TradeContextDisplay({ 
  tradeToUse, 
  useMockResponses, 
  latestTrade, 
  selectedTrade 
}: TradeContextDisplayProps) {
  if (!tradeToUse) return null;

  const tradeFields = [
    { label: 'Symbol', value: tradeToUse.symbol },
    { label: 'Timeframe', value: tradeToUse.timeframe },
    { label: 'Entry', value: tradeToUse.entryPrice },
    { label: 'Target', value: tradeToUse.targetPrice }
  ];

  return (
    <div className="bg-[#0276DB0A] dark:bg-white/3 border border-[#3edc81] dark:border-[#3edc81] rounded-lg p-2 sm:p-3 flex-shrink-0">
      <Text14 className="text-xs sm:text-sm font-medium text-[#079744] dark:text-[#3edc81] mb-1">
        Auto Trade Context:
      </Text14>
      <div className="flex flex-wrap gap-1 sm:gap-2 text-xs">
        {tradeFields.map((field, index) => (
          <div key={index} className="flex-1 min-w-[45%]">
            <span className="text-gray-600 dark:text-gray-400">{field.label}:</span>
            <span className="ml-1 font-medium break-all">{field.value}</span>
          </div>
        ))}
      </div>
      <Text14 className="text-xs text-[#079744] dark:text-[#3edc81] mt-1 sm:mt-2">
        💡 AI automatically considers this trade data in all responses
        {useMockResponses && !latestTrade && !selectedTrade && (
          <span className="text-orange-600 dark:text-orange-400"> (Using mock data for testing)</span>
        )}
      </Text14>
    </div>
  );
}
