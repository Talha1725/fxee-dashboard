'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ToolResult {
  toolName: string;
  toolKey: string;
  icon: string;
  summary: string;
  keyPoints: string[];
  insight: string;
  confidence: number;
  fullData: any;
}

export interface AnalysisData {
  id?: number;
  symbol?: string;
  recommendation?: string;
  confidence?: number;
  entryPrice?: string;
  targetPrice?: string;
  stopLoss?: string;
  riskRewardRatio?: string;
  validFor?: string;
  createdAt?: string;
  toolsResults?: ToolResult[];
  analysisTitle?: string;
  analysisDescription?: string;
  detailedAnalysis?: string;
}

interface AnalysisContextType {
  analysisData: AnalysisData | null;
  setAnalysisData: (data: AnalysisData | null) => void;
  getToolData: (toolKey: string) => ToolResult | null;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export const AnalysisProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);

  const getToolData = (toolKey: string): ToolResult | null => {
    if (!analysisData?.toolsResults) return null;
    return analysisData.toolsResults.find(tool => tool.toolKey === toolKey) || null;
  };

  return (
    <AnalysisContext.Provider value={{
      analysisData,
      setAnalysisData,
      getToolData
    }}>
      {children}
    </AnalysisContext.Provider>
  );
};

export const useAnalysis = (): AnalysisContextType => {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
};