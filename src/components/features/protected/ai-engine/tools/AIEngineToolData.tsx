'use client'
import React from "react";
import { Text14, Text16, Text24 } from "@/components/ui/typography";
import { IconCircle } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useAnalysis, type ToolResult } from "@/lib/contexts/AnalysisContext";
import { formatAnalysisData } from "@/utils/analysisFormatter";

interface AIEngineToolDataProps {
  toolKey: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
}

export default function AIEngineToolData({ 
  toolKey, 
  fallbackTitle = "Analysis Data", 
  fallbackDescription = "No analysis data available" 
}: AIEngineToolDataProps) {
  const { theme } = useTheme();
  const { getToolData, analysisData } = useAnalysis();
  
  const toolData: ToolResult | null = getToolData(toolKey);
  
  
  if (!toolData && !analysisData) {
    return (
      <div className={`flex flex-col items-center justify-center gap-5 w-full p-5 rounded-[16px] ${theme === "dark" ? "bg-tab-dark-gradient border border-[#FFFFFF0D]" : "border border-[#0000001A] bg-card-main-dashboard-gradient"} min-h-[400px] max-h-[800px] overflow-y-auto scrollbar-hide`}>
        <Text16 className="text-black/60 dark:text-white/60 text-center">
          Run a custom analysis to see {fallbackTitle.toLowerCase()} data
        </Text16>
      </div>
    );
  }

  if (!toolData) {
    return (
      <div className={`flex flex-col items-center justify-center gap-5 w-full p-5 rounded-[16px] ${theme === "dark" ? "bg-tab-dark-gradient border border-[#FFFFFF0D]" : "border border-[#0000001A] bg-card-main-dashboard-gradient"} min-h-[400px] max-h-[800px] overflow-y-auto scrollbar-hide`}>
        <Text16 className="text-black/60 dark:text-white/60 text-center">
          This tool was not included in the analysis
        </Text16>
      </div>
    );
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return {
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
      readTime: Math.ceil(toolData.insight.split(' ').length / 200) // Estimate reading time
    };
  };

  const timeInfo = analysisData?.createdAt ? formatTimestamp(analysisData.createdAt) : null;
  
  // Format the data for better display
  const formattedSummary = formatAnalysisData.cleanDisplayText(toolData.summary);
  const formattedKeyPoints = formatAnalysisData.formatKeyPoints(toolData.keyPoints);
  const formattedInsight = formatAnalysisData.cleanDisplayText(toolData.insight);
  const formattedFullData = formatAnalysisData.formatFullData(toolData.fullData);

  return (
    <div className={`flex flex-col items-start gap-5 w-full p-5 rounded-[16px] ${theme === "dark" ? "bg-tab-dark-gradient border border-[#FFFFFF0D]" : "border border-[#0000001A] bg-card-main-dashboard-gradient"} min-h-[400px] max-h-[800px] overflow-y-auto scrollbar-hide`}>
      
      {/* Timestamp info */}
      {timeInfo && (
        <div className="flex items-center gap-[5px]">
          <Text14 className="text-black/80 dark:text-white/80 font-satoshi-medium">{timeInfo.date}</Text14>
          <IconCircle width={2} height={2} />
          <Text14 className="text-black/80 dark:text-white/80 font-satoshi-medium">{timeInfo.time} GMT</Text14>
          <IconCircle width={2} height={2} />
          <Text14 className="text-black/80 dark:text-white/80 font-satoshi-medium">{timeInfo.readTime} min read</Text14>
        </div>
      )}

      {/* Tool Title */}
      <Text24 className="self-stretch font-satoshi-medium">
        {toolData.toolName} - {analysisData?.symbol || 'Analysis'}
      </Text24>

      {/* Summary */}
      <div className="text-black/60 dark:text-white/60 font-[400]">
        <Text16 className="font-satoshi-medium text-black/60 dark:text-white/60">Summary:</Text16>
        <Text16 className="mt-2 font-satoshi-regular text-black/60 dark:text-white/60">
          {formattedSummary}
        </Text16>
      </div>

      {/* Key Points */}
      <div className="text-black/60 dark:text-white/60 font-[400]">
        <Text16 className="font-satoshi-medium text-black/60 dark:text-white/60">Key Points:</Text16>
        <ul className="list-disc list-outside ml-4 mt-2 font-satoshi-regular">
          {formattedKeyPoints.map((point, index) => (
            <li key={index} className="mb-1">{point}</li>
          ))}
        </ul>
      </div>

      {/* AI Insight */}
      <Text16 className="self-stretch font-satoshi-regular text-black/60 dark:text-white/60">
        <span className="font-satoshi-medium">AI Insight: </span>
        {formattedInsight}
      </Text16>

      {/* Confidence Score */}
      <div className="text-black dark:text-white font-[400]">
        <Text16 className="font-satoshi-medium text-black/60 dark:text-white/60">
          Confidence Score: {toolData.confidence}%
        </Text16>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
          <div 
            className="bg-gradient-to-r from-[#0276DB] to-[#3EDC81] h-2 rounded-full transition-all duration-300"
            style={{ width: `${toolData.confidence}%` }}
          />
        </div>
      </div>

      {/* Detailed Analysis - Formatted for readability */}
      {Object.keys(formattedFullData).length > 0 && (
        <div className="text-black dark:text-white font-[400] w-full">
          <Text16 className="font-satoshi-medium text-black/60 dark:text-white/60 mb-3">
            Detailed Analysis:
          </Text16>
          <div className="space-y-3">
            {Object.entries(formattedFullData).map(([label, value]) => (
              <div key={label} className="border-l-2 border-gray-300 dark:border-gray-600 pl-3">
                <Text14 className="font-satoshi-medium text-black/80 dark:text-white/80 mb-1">
                  {label}:
                </Text14>
                <Text14 className="text-black/60 dark:text-white/60 leading-relaxed whitespace-pre-line">
                  {value}
                </Text14>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}