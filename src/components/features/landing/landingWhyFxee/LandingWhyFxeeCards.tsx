import React from "react";

import LandingWhyFxeeCard from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCard";

import BaseChart from "@/public/images/base-chart.png";
import ProposedTrade from "@/public/images/proposed-trade.png";
import AITrend from "@/public/images/ai-trend.png";
import BuySell from "@/public/images/buy-sell.png";

export default function LandingWhyFxeeCards() {
  return (
    <div className="flex flex-col items-start self-stretch">
      <div className="flex md:flex-row flex-col items-center self-stretch">
        <LandingWhyFxeeCard
          title="AI Trade Advisor"
          description="AI suggests optimal trades or builds custom trade plans (profit target, risk limit, timeframe) - Simulated charts auto-drawn with support/resistance, patterns, indicators (MA, RSI, Fibonacci).
"
          imageUrl={ProposedTrade}
        />
        <LandingWhyFxeeCard
          title="Prop Firm Passing Tool"
          description="Simulated charts auto-drawn with support/resistance, patterns, indicators (MA, RSI, Fibonacci) helping people passs their prop firm challenges - 92% passing rate."
          imageUrl={BaseChart}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center self-stretch">
        <LandingWhyFxeeCard
          title="Simulated Trade Execution"
          description="Place and manage trades directly on our custom FXEE dashboard (no broker needed)."
          imageUrl={BuySell}
        />
        <LandingWhyFxeeCard
          title="AI-Powered Dashboard"
          description="AI tools for sentiment, news impact, portfolio balance, risk alerts (Premium upgrade). Premium ai analysis with 86% accuracy rate. "
          imageUrl={AITrend}
        />
      </div>
    </div>
  );
}
