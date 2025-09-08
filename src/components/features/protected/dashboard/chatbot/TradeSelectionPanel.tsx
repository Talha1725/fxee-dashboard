"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IconTradeUp, IconTradeDown, IconClose, IconTrade, IconShield } from '@/components/ui/icon';
import { Text14, Text16 } from '@/components/ui/typography';
import { useTrade } from '@/lib/contexts/TradeContext';
import { useTheme } from '@/lib/contexts/ThemeContext';
import { useGetLastProposedTradeQuery } from '@/lib/redux/features/proposed-trades/proposedTradesApi';
import type { ProposedTrade } from '@/types/redux';

interface TradeSelectionPanelProps {
  className?: string;
}

export default function TradeSelectionPanel({ className }: TradeSelectionPanelProps) {
  const { theme } = useTheme();
  const { selectedTrade, setSelectedTrade, isTradeSelected } = useTrade();
  const { data: lastTradeData, isLoading } = useGetLastProposedTradeQuery();
  const [isExpanded, setIsExpanded] = useState(false);

  const proposedTrade = lastTradeData?.data;
  
  // Mock trade data for testing when no real data is available
  const mockTradeData: ProposedTrade = {
    id: 123,
    userId: 1,
    symbol: "EURUSD",
    timeframe: "1H",
    entryPrice: "1.0850",
    targetPrice: "1.0900",
    stopLossPrice: "1.0800",
    profitTarget: "100.00",
    maximumRisk: "50.00",
    profitTargetPercentage: "5.00",
    maximumRiskPercentage: "2.50",
    potentialProfit: "100.00",
    maximumLoss: "50.00",
    riskRewardRatio: "2.00",
    riskLevel: "medium" as const,
    tradingType: "day_trade" as const,
    tradingVersion: "basic" as const,
    aiAnalysis: "Strong bullish momentum with RSI at 65, MACD showing positive divergence, and price breaking above key resistance at 1.0840.",
    confidence: 85,
    winRatePercentage: "68.5",
    totalWins: 12,
    totalLosses: 5,
    averageRr: "2.1",
    totalProfit: "1250.00",
    averagePerTrade: "73.53",
    successRate: "70.6",
    totalAnalyses: 100,
    analysesUsed: 17,
    analysesRemainingPercentage: "83",
    potentialWin: "100.00",
    maxRiskAmount: "50.00",
    accountRiskPercentage: "2.0",
    status: "active" as const,
    analysisCount: 1,
    maxAnalysisLimit: 10,
    validUntil: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    winProbability: "68.5",
    marketVolatility: "medium"
  };
  
  // Use mock data only when no real data is available and we're in mock mode
  const useMockResponses = process.env.NEXT_PUBLIC_USE_MOCK_CHATBOT_RESPONSES === 'true';
  const tradeToShow = proposedTrade || (useMockResponses ? mockTradeData : null);
  
  const handleTradeSelect = (trade: ProposedTrade) => {
    setSelectedTrade(trade);
    setIsExpanded(false);
  };

  const handleClearSelection = () => {
    setSelectedTrade(null);
  };

  const getTradeDirection = (trade: ProposedTrade): string => {
    const entry = parseFloat(trade.entryPrice);
    const target = parseFloat(trade.targetPrice);
    return target > entry ? 'long' : 'short';
  };

  const getDirectionIcon = (direction: string) => {
    return direction?.toLowerCase() === 'long' ? (
      <IconTradeUp width={16} height={16} className="text-green-500" />
    ) : (
      <IconTradeDown width={16} height={16} className="text-red-500" />
    );
  };

  const getDirectionColor = (direction: string) => {
    return direction?.toLowerCase() === 'long' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  };

  if (!tradeToShow) {
    return (
      <Card className={`w-full ${className} ${theme === "dark" ? "bg-card-main-gradient border-white/5" : "bg-white border-black/10"}`}>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <IconTrade width={20} height={20} className="text-blue-500" />
            <Text16 className="font-satoshi-medium">Trade Analysis</Text16>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <IconTrade width={32} height={32} className="mx-auto mb-2 text-gray-400" />
            <Text14 className="text-gray-500 dark:text-gray-400">
              No proposed trades available yet. Create some trades to get AI analysis.
            </Text14>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`w-full ${className} ${theme === "dark" ? "bg-card-main-gradient border-white/5" : "bg-white border-black/10"}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <IconTrade width={20} height={20} className="text-blue-500" />
            <Text16 className="font-satoshi-medium">Trade Analysis</Text16>
          </CardTitle>
          {isTradeSelected && (
            <Button
              variant="ghost"
              size="default"
              onClick={handleClearSelection}
              className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <IconClose width={14} height={14} className="mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {/* Selected Trade Display */}
        {isTradeSelected && selectedTrade && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {getDirectionIcon(getTradeDirection(selectedTrade))}
                <Text14 className="font-medium text-green-800 dark:text-green-200">
                  Selected for Analysis
                </Text14>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Symbol:</span>
                <span className="ml-1 font-medium">{selectedTrade.symbol}</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Direction:</span>
                <span className={`ml-1 font-medium ${getDirectionColor(getTradeDirection(selectedTrade))}`}>
                  {getTradeDirection(selectedTrade) === 'long' ? 'Long' : 'Short'}
                </span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Entry:</span>
                <span className="ml-1 font-medium">{selectedTrade.entryPrice}</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Target:</span>
                <span className="ml-1 font-medium">{selectedTrade.targetPrice}</span>
              </div>
            </div>
          </div>
        )}

        {/* Available Trade */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {getDirectionIcon(getTradeDirection(tradeToShow))}
              <Text14 className="font-medium">
                {tradeToShow.symbol} - {tradeToShow.timeframe}
              </Text14>
            </div>
            <div className="flex items-center gap-1">
              <IconShield width={12} height={12} className="text-gray-400" />
              <Text14 className="text-xs text-gray-500">
                {tradeToShow.riskLevel || 'Medium'} Risk
              </Text14>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-xs mb-3">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Entry:</span>
              <span className="ml-1 font-medium">{tradeToShow.entryPrice}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Target:</span>
              <span className="ml-1 font-medium">{tradeToShow.targetPrice}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Stop Loss:</span>
              <span className="ml-1 font-medium">{tradeToShow.stopLossPrice}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">R/R:</span>
              <span className="ml-1 font-medium">{tradeToShow.riskRewardRatio || '2.0'}</span>
            </div>
          </div>

          {tradeToShow.aiAnalysis && (
            <div className="mb-3">
              <Text14 className="text-xs text-gray-600 dark:text-gray-400 mb-1">AI Analysis:</Text14>
              <Text14 className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2">
                {tradeToShow.aiAnalysis}
              </Text14>
            </div>
          )}

          <Button
            onClick={() => handleTradeSelect(tradeToShow)}
            disabled={isTradeSelected && selectedTrade?.id === tradeToShow.id}
            variant={isTradeSelected && selectedTrade?.id === tradeToShow.id ? "ghost" : "default"}
            size="default"
            className="w-full"
          >
            {isTradeSelected && selectedTrade?.id === tradeToShow.id 
              ? "Currently Selected" 
              : "Analyze This Trade"
            }
          </Button>
        </div>

        {/* Quick Analysis Suggestions */}
        {isTradeSelected && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
            <Text14 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
              Suggested Questions:
            </Text14>
            <div className="space-y-1">
              <Text14 className="text-xs text-blue-700 dark:text-blue-300">
                • "Is this trade setup good?"
              </Text14>
              <Text14 className="text-xs text-blue-700 dark:text-blue-300">
                • "What are the risks with this trade?"
              </Text14>
              <Text14 className="text-xs text-blue-700 dark:text-blue-300">
                • "Should I adjust my stop loss?"
              </Text14>
              <Text14 className="text-xs text-blue-700 dark:text-blue-300">
                • "What's the probability of success?"
              </Text14>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
