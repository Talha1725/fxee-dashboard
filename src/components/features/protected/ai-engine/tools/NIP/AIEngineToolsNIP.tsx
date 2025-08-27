'use client'
import { IconAnalyse, IconBitcoin, IconBull, IconClock, IconConnect, IconNIP } from "@/components/ui/icon";
import AIEngineToolsCardHead from "../AIEngineToolsCardHead";
import AIEngineToolsCardContainer from "../AIEngineToolsCardContainer";
import DashboardWidget from "@/components/features/protected/dashboard/widget/DashboardWidget";
import AIEngineToolsNIPCardAI from "./AIEngineToolsNIPCardAI";
import AIEngineToolData from "../AIEngineToolData";
import FancyIcon from "@/components/ui/icon";
import PieIcon from "@/components/ui/icon";

export default function AIEngineToolsNIP() {
  return (
    <AIEngineToolsCardContainer>
      {/* Market Sentiment Aggregator */}
      <div className="flex flex-col gap-6 w-full">
        <AIEngineToolsCardHead
          title="Market Sentiment Aggregator"
          description="Comprehensive market sentiment analysis with multiple timeframe alignment"
          icon={<IconNIP width={14} height={14} />}
        />
        <AIEngineToolData 
          toolKey="market_sentiment" 
          fallbackTitle="Market Sentiment Aggregator"
          fallbackDescription="Comprehensive market sentiment analysis with multiple timeframe alignment"
        />
      </div>

      {/* RSI Analyzer with Chart */}
      <div className="flex flex-col gap-6 w-full mt-10">
        <AIEngineToolsCardHead
          title="RSI Analyzer"
          description="Advanced RSI analysis with AI-powered overbought/oversold signals"
          icon={<FancyIcon width={14} height={14} />}
        />
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <div className="w-full lg:w-2/3">
            <DashboardWidget 
              currency="BTC/ETH" 
              showPlusIcon={true}
              actionButton={<IconAnalyse className="text-white" width={40} height={40} />} 
            />
          </div>
          <div className="w-full lg:w-1/3">
            <AIEngineToolData 
              toolKey="rsi" 
              fallbackTitle="RSI Analyzer"
              fallbackDescription="Advanced RSI analysis with AI-powered overbought/oversold signals"
            />
          </div>
        </div>
      </div>

      {/* Fibonacci Retracement Analyzer */}
      <div className="flex flex-col gap-6 w-full mt-10">
        <AIEngineToolsCardHead
          title="Fibonacci Retracement Analyzer"
          description="Advanced Fibonacci analysis with key support and resistance levels"
          icon={<IconAnalyse width={14} height={14} />}
        />
        <AIEngineToolData 
          toolKey="fibonacci_retracement" 
          fallbackTitle="Fibonacci Retracement Analyzer"
          fallbackDescription="Advanced Fibonacci analysis with key support and resistance levels"
        />
      </div>

      {/* AI Trend Forecast */}
      <div className="flex flex-col gap-6 w-full mt-10">
        <AIEngineToolsCardHead
          title="AI Trend Forecast"
          description="Multi-timeframe trend analysis with AI-powered directional predictions"
          icon={<IconConnect width={14} height={14} />}
        />
        <AIEngineToolData 
          toolKey="ai_trend" 
          fallbackTitle="AI Trend Forecast"
          fallbackDescription="Multi-timeframe trend analysis with AI-powered directional predictions"
        />
      </div>

      {/* Volatility & Risk Analysis */}
      <div className="flex flex-col gap-6 w-full mt-10">
        <AIEngineToolsCardHead
          title="Volatility & Risk Analysis"
          description="Advanced volatility analysis with position sizing recommendations"
          icon={<IconAnalyse width={14} height={14} />}
        />
        <AIEngineToolData 
          toolKey="volatility_risk" 
          fallbackTitle="Volatility & Risk Analysis"
          fallbackDescription="Advanced volatility analysis with position sizing recommendations"
        />
      </div>

      {/* Pattern Recognition Scanner */}
      <div className="flex flex-col gap-6 w-full mt-10">
        <AIEngineToolsCardHead
          title="Pattern Recognition Scanner"
          description="Automated chart pattern detection with breakout predictions"
          icon={<IconConnect width={14} height={14} />}
        />
        <AIEngineToolData 
          toolKey="pattern_recognition" 
          fallbackTitle="Pattern Recognition Scanner"
          fallbackDescription="Automated chart pattern detection with breakout predictions"
        />
      </div>

      {/* Mass Psychology Analysis */}
      <div className="flex flex-col gap-6 w-full mt-10">
        <AIEngineToolsCardHead
          title="Mass Psychology Analysis"
          description="Market sentiment and crowd behavior analysis with contrarian opportunities"
          icon={<IconBull width={14} height={14} />}
        />
        <AIEngineToolData 
          toolKey="mass_psychology" 
          fallbackTitle="Mass Psychology Analysis"
          fallbackDescription="Market sentiment and crowd behavior analysis with contrarian opportunities"
        />
      </div>

      {/* Trade Probability Calculator */}
      <div className="flex flex-col gap-6 w-full mt-10">
        <AIEngineToolsCardHead
          title="Trade Probability Calculator"
          description="Calculate success probability based on multiple technical factors"
          icon={<IconAnalyse width={14} height={14} />}
        />
        <AIEngineToolData 
          toolKey="trade_probability" 
          fallbackTitle="Trade Probability Calculator"
          fallbackDescription="Calculate success probability based on multiple technical factors"
        />
      </div>

      {/* Smart Portfolio Allocator with AI Panel */}
      <div className="flex flex-col gap-6 w-full mt-10">
        <AIEngineToolsCardHead
          title="Smart Portfolio Allocator"
          description="AI-powered portfolio allocation and risk management with position sizing"
          icon={<PieIcon width={14} height={14} />}
        />
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <div className="w-full lg:w-1/2">
            <AIEngineToolsNIPCardAI
              title="AI Insight Panel"
              headerAlign="center"
              showHeaderIcon={false}
              showIcon={true}
              showBadges={true}
              showReasoning={true}
              showPrediction={false}
              showActionButton={false}
              isNIPVersion={true}
              badges={[
                { text: "Bullish Bias", icon: <IconBull width={20} height={20} /> },
                { text: "89%", icon: <IconConnect width={20} height={20} /> },
                { text: "Next 4 Hours ", icon: <IconClock width={20} height={20} /> }
              ]}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <AIEngineToolData 
              toolKey="smart_portfolio" 
              fallbackTitle="Smart Portfolio Allocator"
              fallbackDescription="AI-powered portfolio allocation and risk management with position sizing"
            />
          </div>
        </div>
      </div>

    </AIEngineToolsCardContainer>
  );
}