'use client'
import React from "react";
import { Text14, Text16, Text24 } from "@/components/ui/typography";
import { IconCircle } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useAnalysis, type ToolResult } from "@/lib/contexts/AnalysisContext";
import { formatAnalysisData } from "@/utils/analysisFormatter";
import { CheckCircle, TrendingUp, Brain, BarChart3, Clock, Target, ChevronDown, ChevronUp } from "lucide-react";

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
      <div className={`flex flex-col items-center justify-center gap-6 w-full p-8 rounded-[20px] ${theme === "dark" ? "bg-tab-dark-gradient border border-[#FFFFFF0D]" : "border border-[#0000001A] bg-card-main-dashboard-gradient"} min-h-[400px] max-h-[800px] overflow-y-auto scrollbar-hide`}>
        <div className="flex flex-col items-center gap-4">
          <div className={`p-4 rounded-full ${theme === "dark" ? "bg-white/10" : "bg-black/5"}`}>
            <BarChart3 className="w-8 h-8 text-black/40 dark:text-white/40" />
          </div>
          <Text16 className="text-black/60 dark:text-white/60 text-center max-w-sm">
            Run a custom analysis to see {fallbackTitle.toLowerCase()} data
          </Text16>
        </div>
      </div>
    );
  }

  if (!toolData) {
    return (
      <div className={`flex flex-col items-center justify-center gap-6 w-full p-8 rounded-[20px] ${theme === "dark" ? "bg-tab-dark-gradient border border-[#FFFFFF0D]" : "border border-[#0000001A] bg-card-main-dashboard-gradient"} min-h-[400px] max-h-[800px] overflow-y-auto scrollbar-hide`}>
        <div className="flex flex-col items-center gap-4">
          <div className={`p-4 rounded-full ${theme === "dark" ? "bg-white/10" : "bg-black/5"}`}>
            <Target className="w-8 h-8 text-black/40 dark:text-white/40" />
          </div>
          <Text16 className="text-black/60 dark:text-white/60 text-center max-w-sm">
            This tool was not included in the analysis
          </Text16>
        </div>
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
    <div className={`flex flex-col items-start gap-6 w-full p-8 rounded-[20px] ${theme === "dark" ? "bg-tab-dark-gradient border border-[#FFFFFF0D]" : "border border-[#0000001A] bg-card-main-dashboard-gradient"} min-h-[400px] max-h-[800px] overflow-y-auto scrollbar-hide w-full`}>
      
      {/* Header Section */}
      <div className="w-full">
        {/* Timestamp info */}
        {timeInfo && (
          <div className={`flex items-center gap-3 p-3 rounded-[12px] ${theme === "dark" ? "bg-white/5" : "bg-black/5"} mb-4`}>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-black/60 dark:text-white/60" />
              <Text14 className="text-black/80 dark:text-white/80 font-satoshi-medium">{timeInfo.date}</Text14>
            </div>
            <IconCircle width={2} height={2} />
            <Text14 className="text-black/80 dark:text-white/80 font-satoshi-medium">{timeInfo.time} GMT</Text14>
            <IconCircle width={2} height={2} />
            <Text14 className="text-black/80 dark:text-white/80 font-satoshi-medium">{timeInfo.readTime} min read</Text14>
          </div>
        )}

        {/* Tool Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className={`p-2 rounded-[8px] ${theme === "dark" ? "bg-white/10" : "bg-black/5"}`}>
            <Brain className="w-5 h-5 text-black/80 dark:text-white/80" />
          </div>
          <Text24 className="font-satoshi-medium text-black dark:text-white">
            {toolData.toolName} - {analysisData?.symbol || 'Analysis'}
          </Text24>
        </div>
      </div>

      {/* Summary */}
      <div className={`w-full p-5 rounded-[16px] ${theme === "dark" ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"}`}>
        <div className="flex items-center gap-2 mb-3">
          <div className={`p-1.5 rounded-[6px] ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
            <CheckCircle className="w-4 h-4 text-black/80 dark:text-white/80" />
          </div>
          <Text16 className="font-satoshi-medium text-black dark:text-white">Summary</Text16>
        </div>
        <Text16 className="font-satoshi-regular text-black/70 dark:text-white/70 leading-relaxed">
          {formattedSummary}
        </Text16>
      </div>

      {/* Key Points */}
      <div className={`w-full p-5 rounded-[16px] ${theme === "dark" ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"}`}>
        <div className="flex items-center gap-2 mb-3">
          <div className={`p-1.5 rounded-[6px] ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
            <TrendingUp className="w-4 h-4 text-black/80 dark:text-white/80" />
          </div>
          <Text16 className="font-satoshi-medium text-black dark:text-white">Key Points</Text16>
        </div>
        <ul className="space-y-2 font-satoshi-regular">
          {formattedKeyPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${theme === "dark" ? "bg-white/60" : "bg-black/60"}`} />
              <Text16 className="text-black/70 dark:text-white/70 leading-relaxed">{point}</Text16>
            </li>
          ))}
        </ul>
      </div>

      {/* AI Insight */}
      <div className={`w-full p-5 rounded-[16px] ${theme === "dark" ? "bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20" : "bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200"}`}>
        <div className="flex items-center gap-2 mb-3">
          <div className={`p-1.5 rounded-[6px] ${theme === "dark" ? "bg-blue-500/20" : "bg-blue-100"}`}>
            <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <Text16 className="font-satoshi-medium text-black dark:text-white">AI Insight</Text16>
        </div>
        <Text16 className="font-satoshi-regular text-black/70 dark:text-white/70 leading-relaxed">
          {formattedInsight}
        </Text16>
      </div>

      {/* Confidence Score */}
      <div className={`w-full p-5 rounded-[16px] ${theme === "dark" ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"}`}>
        <div className="flex items-center gap-2 mb-3">
          <div className={`p-1.5 rounded-[6px] ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
            <BarChart3 className="w-4 h-4 text-black/80 dark:text-white/80" />
          </div>
          <Text16 className="font-satoshi-medium text-black dark:text-white">Confidence Score</Text16>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Text16 className="font-satoshi-medium text-black/80 dark:text-white/80">
              {toolData.confidence}%
            </Text16>
            <Text14 className="text-black/60 dark:text-white/60">
              {toolData.confidence >= 80 ? 'High' : toolData.confidence >= 60 ? 'Medium' : 'Low'}
            </Text14>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ease-out ${
                toolData.confidence >= 80 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                  : toolData.confidence >= 60 
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                    : 'bg-gradient-to-r from-red-500 to-pink-500'
              }`}
              style={{ width: `${toolData.confidence}%` }}
            />
          </div>
        </div>
      </div>

      {/* Detailed Analysis - Only show if there's meaningful additional data */}
      {Object.keys(formattedFullData).length > 0 && (
        <div className={`w-full p-5 rounded-[16px] ${theme === "dark" ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"}`}>
          <div className="flex items-center gap-2 mb-4">
            <div className={`p-1.5 rounded-[6px] ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
              <BarChart3 className="w-4 h-4 text-black/80 dark:text-white/80" />
            </div>
            <Text16 className="font-satoshi-medium text-black dark:text-white">Additional Details</Text16>
          </div>
          <div className="space-y-4">
            {Object.entries(formattedFullData)
              .filter(([label, value]) => value && value.trim() !== '')
              .map(([label, value]) => (
              <div key={label} className={`p-4 rounded-[12px] ${theme === "dark" ? "bg-white/5 border-l-4 border-blue-500/30" : "bg-black/5 border-l-4 border-blue-300"}`}>
                <Text14 className="font-satoshi-medium text-black/90 dark:text-white/90 mb-2 capitalize">
                  {label.replace(/([A-Z])/g, ' $1').trim()}:
                </Text14>
                <Text14 className="text-black/70 dark:text-white/70 leading-relaxed whitespace-pre-line">
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