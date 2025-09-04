"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { ProposedTrade } from '@/types/redux';

interface TradeContextType {
  selectedTrade: ProposedTrade | null;
  setSelectedTrade: (trade: ProposedTrade | null) => void;
  isTradeSelected: boolean;
}

const TradeContext = createContext<TradeContextType | undefined>(undefined);

export function TradeProvider({ children }: { children: ReactNode }) {
  const [selectedTrade, setSelectedTrade] = useState<ProposedTrade | null>(null);

  const value = {
    selectedTrade,
    setSelectedTrade,
    isTradeSelected: selectedTrade !== null,
  };

  return (
    <TradeContext.Provider value={value}>
      {children}
    </TradeContext.Provider>
  );
}

export function useTrade() {
  const context = useContext(TradeContext);
  if (context === undefined) {
    throw new Error('useTrade must be used within a TradeProvider');
  }
  return context;
}
