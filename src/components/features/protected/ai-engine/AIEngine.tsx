"use client";
import React, { useEffect } from "react";

import ProtectedContentContainer from "../ProtectedContentContainer";
import AIEngineStatus from "./status/AIEngineStatus";
import AIEngineTools from "./tools/AIEngineTools";
import { AnalysisProvider, useAnalysis } from "@/lib/contexts/AnalysisContext";
import { useGetMyAnalysesQuery } from "@/lib/redux/features/recommendations/recommendationsApi";

function AIEngineContent() {
  const { setAnalysisData, refreshTrigger } = useAnalysis();
  
  // Auto-load the latest analysis when component mounts
  const { data: analysesData, isSuccess, refetch } = useGetMyAnalysesQuery({ 
    limit: 1 // Get only the most recent analysis
  });

  // Listen for refresh trigger and refetch data
  React.useEffect(() => {
    if (refreshTrigger > 0) {
      console.log('Refresh trigger received, refetching analysis data...', refreshTrigger);
      refetch();
    }
  }, [refreshTrigger, refetch]);

  // Transform analysis data to match expected ToolResult format
  const transformAnalysisData = (rawAnalysis: any) => {
    const toolsResults = [];

    // Transform RSI Analysis
    if (rawAnalysis.rsiAnalysis) {
      toolsResults.push({
        toolName: rawAnalysis.rsiAnalysis.toolName || "AI RSI Analyzer",
        toolKey: "rsi",
        icon: "rsi",
        summary: rawAnalysis.rsiAnalysis.aiInsight || "RSI analysis completed",
        keyPoints: [
          `Current RSI: ${rawAnalysis.rsiAnalysis.currentRSI}`,
          `Signal: ${rawAnalysis.rsiAnalysis.signal}`,
          `Strength: ${rawAnalysis.rsiAnalysis.strength}`,
          `Risk Level: ${rawAnalysis.rsiAnalysis.riskLevel}`
        ],
        insight: rawAnalysis.rsiAnalysis.aiInsight || "",
        confidence: rawAnalysis.rsiAnalysis.confidence || 0,
        fullData: rawAnalysis.rsiAnalysis
      });
    }

    // Transform Volatility Analysis
    if (rawAnalysis.volatilityAnalysis) {
      toolsResults.push({
        toolName: rawAnalysis.volatilityAnalysis.toolName || "Volatility & Risk Analyzer",
        toolKey: "volatility_risk",
        icon: "volatility",
        summary: rawAnalysis.volatilityAnalysis.aiInsight || "Volatility analysis completed",
        keyPoints: [
          `Current ATR: ${rawAnalysis.volatilityAnalysis.currentATR}`,
          `Volatility Level: ${rawAnalysis.volatilityAnalysis.volatilityLevel}`,
          `Risk Assessment: ${rawAnalysis.volatilityAnalysis.riskAssessment}`,
          `Position Size: ${rawAnalysis.volatilityAnalysis.suggestedPositionSize}`
        ],
        insight: rawAnalysis.volatilityAnalysis.aiInsight || "",
        confidence: rawAnalysis.volatilityAnalysis.confidence || 0,
        fullData: rawAnalysis.volatilityAnalysis
      });
    }

    // Transform Fibonacci Analysis
    if (rawAnalysis.fibonacciAnalysis) {
      toolsResults.push({
        toolName: rawAnalysis.fibonacciAnalysis.toolName || "Fibonacci Retracement Analyzer",
        toolKey: "fibonacci_retracement",
        icon: "fibonacci",
        summary: rawAnalysis.fibonacciAnalysis.aiInsight || "Fibonacci analysis completed",
        keyPoints: [
          `Trend Direction: ${rawAnalysis.fibonacciAnalysis.trendDirection}`,
          `Current Level: ${rawAnalysis.fibonacciAnalysis.currentLevel}`,
          `Key Level: ${rawAnalysis.fibonacciAnalysis.keyLevel}`,
          `Trading Bias: ${rawAnalysis.fibonacciAnalysis.tradingBias}`
        ],
        insight: rawAnalysis.fibonacciAnalysis.aiInsight || "",
        confidence: rawAnalysis.fibonacciAnalysis.confidence || 0,
        fullData: rawAnalysis.fibonacciAnalysis
      });
    }

    // Transform Sentiment Analysis
    if (rawAnalysis.sentimentAnalysis) {
      toolsResults.push({
        toolName: rawAnalysis.sentimentAnalysis.toolName || "Market Sentiment Aggregator",
        toolKey: "market_sentiment",
        icon: "sentiment",
        summary: rawAnalysis.sentimentAnalysis.aiInsights || "Sentiment analysis completed",
        keyPoints: [
          `Overall Sentiment: ${rawAnalysis.sentimentAnalysis.overallSentiment}`,
          `Sentiment Label: ${rawAnalysis.sentimentAnalysis.sentimentLabel}`,
          `Market Phase: ${rawAnalysis.sentimentAnalysis.marketPhase}`,
          `Recommended Action: ${rawAnalysis.sentimentAnalysis.recommendedAction}`
        ],
        insight: rawAnalysis.sentimentAnalysis.aiInsights || "",
        confidence: rawAnalysis.sentimentAnalysis.confidence || 0,
        fullData: rawAnalysis.sentimentAnalysis
      });
    }

    // Add other analysis types when available
    if (rawAnalysis.patternAnalysis) {
      toolsResults.push({
        toolName: "Pattern Recognition Scanner",
        toolKey: "pattern_recognition",
        icon: "pattern",
        summary: rawAnalysis.patternAnalysis.aiInsight || "Pattern analysis completed",
        keyPoints: [],
        insight: rawAnalysis.patternAnalysis.aiInsight || "",
        confidence: rawAnalysis.patternAnalysis.confidence || 0,
        fullData: rawAnalysis.patternAnalysis
      });
    }

    if (rawAnalysis.psychologyAnalysis) {
      toolsResults.push({
        toolName: "Mass Psychology Analysis",
        toolKey: "mass_psychology",
        icon: "psychology",
        summary: rawAnalysis.psychologyAnalysis.aiInsight || "Psychology analysis completed",
        keyPoints: [],
        insight: rawAnalysis.psychologyAnalysis.aiInsight || "",
        confidence: rawAnalysis.psychologyAnalysis.confidence || 0,
        fullData: rawAnalysis.psychologyAnalysis
      });
    }

    if (rawAnalysis.trendAnalysis) {
      toolsResults.push({
        toolName: "AI Trend Forecast",
        toolKey: "ai_trend",
        icon: "trend",
        summary: rawAnalysis.trendAnalysis.aiInsight || "Trend analysis completed",
        keyPoints: [],
        insight: rawAnalysis.trendAnalysis.aiInsight || "",
        confidence: rawAnalysis.trendAnalysis.confidence || 0,
        fullData: rawAnalysis.trendAnalysis
      });
    }

    if (rawAnalysis.probabilityAnalysis) {
      toolsResults.push({
        toolName: "Trade Probability Calculator",
        toolKey: "trade_probability",
        icon: "probability",
        summary: rawAnalysis.probabilityAnalysis.aiInsight || "Probability analysis completed",
        keyPoints: [],
        insight: rawAnalysis.probabilityAnalysis.aiInsight || "",
        confidence: rawAnalysis.probabilityAnalysis.confidence || 0,
        fullData: rawAnalysis.probabilityAnalysis
      });
    }

    if (rawAnalysis.portfolioAnalysis) {
      toolsResults.push({
        toolName: "Smart Portfolio Allocator",
        toolKey: "smart_portfolio",
        icon: "portfolio",
        summary: rawAnalysis.portfolioAnalysis.aiInsight || "Portfolio analysis completed",
        keyPoints: [],
        insight: rawAnalysis.portfolioAnalysis.aiInsight || "",
        confidence: rawAnalysis.portfolioAnalysis.confidence || 0,
        fullData: rawAnalysis.portfolioAnalysis
      });
    }

    return {
      ...rawAnalysis,
      toolsResults
    };
  };

  useEffect(() => {
    if (isSuccess && analysesData?.success && analysesData.data) {
      // Handle both array format (my-analyses) and single object format (latest analysis)
      const latestAnalysis = Array.isArray(analysesData.data) 
        ? analysesData.data[0] 
        : analysesData.data;
      
      if (latestAnalysis) {
        const transformedAnalysis = transformAnalysisData(latestAnalysis);
        setAnalysisData(transformedAnalysis);
      }
    }
  }, [isSuccess, analysesData, setAnalysisData]);

  return (
    <ProtectedContentContainer className="sm:gap-10 overflow-visible">
      <AIEngineStatus />
      <AIEngineTools />
    </ProtectedContentContainer>
  );
}

export default function AIEngine() {
  return (
    <AnalysisProvider>
      <AIEngineContent />
    </AnalysisProvider>
  );
}
