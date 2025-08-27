export interface FormattedToolData {
  toolName: string;
  toolKey: string;
  icon: string;
  summary: string;
  keyPoints: string[];
  insight: string;
  confidence: number;
  fullData: any;
}

export const formatAnalysisData = {
  // Format technical field names to readable labels
  formatFieldName: (key: string): string => {
    const fieldNameMap: { [key: string]: string } = {
      // RSI Analysis
      'currentRSI': 'Current RSI Value',
      'riskLevel': 'Risk Level',
      'aiInsight': 'AI Analysis',
      'tradingRecommendation': 'Trading Recommendation',
      
      // Volatility Analysis
      'currentATR': 'Average True Range (ATR)',
      'volatilityLevel': 'Volatility Level',
      'volatilityPercentage': 'Volatility Percentage',
      'riskAssessment': 'Risk Assessment',
      'suggestedPositionSize': 'Suggested Position Size',
      'optimalStopDistance': 'Optimal Stop Distance',
      'marketCondition': 'Market Condition',
      'riskRecommendation': 'Risk Recommendation',
      'tradingAdvice': 'Trading Advice',
      
      // Fibonacci Analysis
      'swingHigh': 'Swing High',
      'swingLow': 'Swing Low',
      'currentLevel': 'Current Level',
      'nearestLevel': 'Nearest Level',
      'trendDirection': 'Trend Direction',
      'fibonacciLevels': 'Fibonacci Levels',
      'supportLevels': 'Support Levels',
      'resistanceLevels': 'Resistance Levels',
      'keyLevel': 'Key Level',
      'priceAction': 'Price Action',
      'tradingBias': 'Trading Bias',
      'nextTarget': 'Next Target',
      
      // Trend Analysis
      'currentTrend': 'Current Trend',
      'trendStrength': 'Trend Strength',
      'reversalProbability': 'Reversal Probability',
      'continuationProbability': 'Continuation Probability',
      'nextMajorMove': 'Next Major Move',
      'momentumScore': 'Momentum Score',
      'timeframeAnalysis': 'Timeframe Analysis',
      'movingAverages': 'Moving Averages',
      'confidenceLevel': 'Confidence Level',
      'timeHorizon': 'Time Horizon',
      'keyRiskFactors': 'Key Risk Factors',
      'forecastSummary': 'Forecast Summary',
      
      // Portfolio Analysis
      'portfolioStrategy': 'Portfolio Strategy',
      'riskTolerance': 'Risk Tolerance',
      'totalCapital': 'Total Capital',
      'analysisType': 'Analysis Type',
      'assetSymbol': 'Asset Symbol',
      'assetType': 'Asset Type',
      'currentPrice': 'Current Price',
      'portfolioScore': 'Portfolio Score',
      'riskScore': 'Risk Score',
      'opportunityScore': 'Opportunity Score',
      'diversificationScore': 'Diversification Score',
      'recommendedPositionSize': 'Recommended Position Size',
      'maxPositionSize': 'Maximum Position Size',
      'cashReserve': 'Cash Reserve',
      'recommendedAmount': 'Recommended Amount',
      'expectedReturn': 'Expected Return',
      'portfolioRisk': 'Portfolio Risk',
      'sharpeRatio': 'Sharpe Ratio',
      'maxDrawdown': 'Maximum Drawdown',
      'recommendedAction': 'Recommended Action',
      'allocationAdvice': 'Allocation Advice',
      'riskManagementAdvice': 'Risk Management Advice',
      'riskFactors': 'Risk Factors',
      'keyStrengths': 'Key Strengths',
      'keyRisks': 'Key Risks',
      
      // Trade Probability
      'overallProbability': 'Overall Probability',
      'riskAdjustedProbability': 'Risk Adjusted Probability',
      'confluenceScore': 'Confluence Score',
      'signalQuality': 'Signal Quality',
      'toolsAgreeing': 'Tools Agreeing',
      'totalToolsUsed': 'Total Tools Used',
      'toolContributions': 'Tool Contributions',
      'confluenceDetails': 'Confluence Details',
      'overallRecommendation': 'Overall Recommendation',
      'confidenceReason': 'Confidence Reason',
      'optimalTiming': 'Optimal Timing'
    };

    return fieldNameMap[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  },

  // Format technical values to readable text
  formatValue: (key: string, value: any): string => {
    if (value === null || value === undefined) return 'Not available';
    
    // Handle arrays
    if (Array.isArray(value)) {
      return value.map((item, index) => {
        if (typeof item === 'object') {
          return Object.entries(item)
            .map(([k, v]) => `${formatAnalysisData.formatFieldName(k)}: ${formatAnalysisData.formatValue(k, v)}`)
            .join(', ');
        }
        return String(item);
      }).join('\n• ');
    }

    // Handle specific complex objects with custom formatting
    if (typeof value === 'object') {
      // Special handling for Fibonacci levels
      if (key === 'fibonacciLevels') {
        return Object.entries(value)
          .map(([levelKey, levelData]: [string, any]) => {
            return `${levelData.percentage} (${levelData.description}): ${Number(levelData.price).toFixed(5)}`;
          })
          .join('\n• ');
      }

      // Special handling for support/resistance levels
      if (key === 'supportLevels' || key === 'resistanceLevels') {
        return value.map((level: any) => 
          `${level.percentage} (${level.description}): ${Number(level.price).toFixed(5)}`
        ).join('\n• ');
      }

      // Special handling for timeframe analysis
      if (key === 'timeframeAnalysis') {
        return Object.entries(value)
          .map(([timeframe, data]) => {
            const formattedTimeframe = timeframe.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            return `${formattedTimeframe}: ${formatAnalysisData.formatValue(timeframe, data)}`;
          })
          .join('\n• ');
      }

      // Special handling for moving averages
      if (key === 'movingAverages') {
        return Object.entries(value)
          .filter(([k]) => !['priceVsSMA10', 'priceVsSMA20', 'maAlignment'].includes(k))
          .map(([avgKey, avgValue]) => {
            const formattedKey = avgKey.toUpperCase().replace(/([0-9]+)/, ' $1');
            if (typeof avgValue === 'number') {
              return `${formattedKey}: ${Number(avgValue).toFixed(5)}`;
            }
            return `${formattedKey}: ${avgValue}`;
          })
          .join('\n• ');
      }

      // Special handling for tool contributions
      if (key === 'toolContributions') {
        return Object.entries(value)
          .map(([toolName, contribution]: [string, any]) => {
            return `${toolName}: ${contribution.contribution}% (Weight: ${contribution.weight}%, Signal: ${contribution.signal})`;
          })
          .join('\n• ');
      }

      // Special handling for confluence details
      if (key === 'confluenceDetails') {
        let result = '';
        if (value.agreements && value.agreements.length > 0) {
          result += `Agreements: ${value.agreements.join(', ')}`;
        }
        if (value.conflicts && value.conflicts.length > 0) {
          result += result ? `\nConflicts: ${value.conflicts.join(', ')}` : `Conflicts: ${value.conflicts.join(', ')}`;
        }
        return result || 'No specific agreements or conflicts found';
      }

      // Special handling for nearest level (Fibonacci)
      if (key === 'nearestLevel') {
        return `${value.percentage} (${value.description}): ${Number(value.price).toFixed(5)}`;
      }

      // Generic object handling - convert to readable format
      return Object.entries(value)
        .map(([k, v]) => {
          const formattedKey = formatAnalysisData.formatFieldName(k);
          const formattedValue = formatAnalysisData.formatValue(k, v);
          return `${formattedKey}: ${formattedValue}`;
        })
        .join('\n• ');
    }

    // Handle specific formatting cases
    switch (key) {
      case 'currentRSI':
      case 'volatilityPercentage':
      case 'trendStrength':
      case 'momentumScore':
      case 'portfolioScore':
      case 'riskScore':
      case 'opportunityScore':
      case 'diversificationScore':
      case 'expectedReturn':
      case 'portfolioRisk':
      case 'volatility':
      case 'maxDrawdown':
        return `${value}%`;
        
      case 'overallProbability':
      case 'riskAdjustedProbability':
      case 'reversalProbability':
      case 'continuationProbability':
      case 'confluenceScore':
        return `${value}%`;
        
      case 'recommendedPositionSize':
      case 'maxPositionSize':
      case 'cashReserve':
        return `${value}%`;
        
      case 'currentPrice':
      case 'swingHigh':
      case 'swingLow':
        return Number(value).toFixed(5);
        
      case 'currentATR':
        return Number(value).toFixed(6);
        
      case 'totalCapital':
      case 'recommendedAmount':
        return `$${Number(value).toLocaleString()}`;
        
      case 'sharpeRatio':
        return Number(value).toFixed(1);
        
      case 'confidence':
      case 'confidenceLevel':
        return `${value}% confidence`;
        
      // Format technical terms to readable text
      case 'signal':
      case 'strength':
      case 'recommendation':
      case 'volatilityLevel':
      case 'riskAssessment':
      case 'marketCondition':
      case 'currentTrend':
      case 'trendDirection':
      case 'signalQuality':
      case 'recommendedAction':
      case 'riskLevel':
        return String(value).toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
      case 'nextMajorMove':
        return String(value).toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
      case 'priceAction':
        return String(value).toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
      case 'timeHorizon':
        return String(value).split('|').map(term => 
          term.toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        ).join(', ');
        
      default:
        return String(value);
    }
  },

  // Format the entire fullData object for better display
  formatFullData: (fullData: any): { [key: string]: string } => {
    if (!fullData || typeof fullData !== 'object') return {};
    
    const formatted: { [key: string]: string } = {};
    
    // Skip these fields as they're already shown elsewhere or are redundant
    const skipFields = [
      'toolName', 'aiInsight', 'confidence', 'confidenceLevel',
      // Remove duplicate recommendations that are already in keyPoints or summary
      'recommendation', 'tradingRecommendation', 'recommendedAction', 'overallRecommendation',
      // Remove technical metadata 
      'timeHorizon', 'analysisType', 'assetSymbol', 'assetType',
      // Remove redundant risk info already shown
      'riskLevel', 'riskAssessment',
      // Remove duplicate signal info
      'signal', 'signalQuality', 'strength',
      // Remove confidence-related duplicates
      'confidenceReason',
      // Remove verbose advice already covered in AI insight
      'tradingAdvice', 'riskManagementAdvice', 'allocationAdvice',
      // Remove forecast summary if it duplicates AI insight
      'forecastSummary'
    ];
    
    Object.entries(fullData).forEach(([key, value]) => {
      if (skipFields.includes(key)) return;
      
      // Skip empty arrays or objects
      if (Array.isArray(value) && value.length === 0) return;
      if (typeof value === 'object' && value !== null && Object.keys(value).length === 0) return;
      
      const formattedKey = formatAnalysisData.formatFieldName(key);
      const formattedValue = formatAnalysisData.formatValue(key, value);
      
      // Only add if the formatted value has meaningful content
      if (formattedValue && formattedValue !== 'Not available' && formattedValue.trim() !== '') {
        formatted[formattedKey] = formattedValue;
      }
    });
    
    return formatted;
  },

  // Fix "undefined" values in summary and key points
  cleanDisplayText: (text: string): string => {
    return text
      .replace(/undefined%/g, 'Not available')
      .replace(/undefined/g, 'Not available')
      .replace(/null/g, 'Not available')
      .replace(/: Not available/g, ': Data not available');
  },

  // Format key points array for better readability
  formatKeyPoints: (keyPoints: string[]): string[] => {
    return keyPoints.map(point => formatAnalysisData.cleanDisplayText(point));
  }
};