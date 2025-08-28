import React, { useState } from "react";

import LandingWhyFxeeCard from "@/components/features/landing/landingWhyFxee/LandingWhyFxeeCard";

import BaseChart from "@/public/images/base-chart.png";
import ProposedTrade from "@/public/images/proposed-trade.png";
import AITrend from "@/public/images/ai-trend.png";
import BuySell from "@/public/images/buy-sell.png";
import proposedTradeMobile from "@/public/images/proposed-trade-mobile.svg";
import propFirmMobile from "@/public/images/prop-firm-mobile.svg";
import AITrendMobile from "@/public/images/ai-trend-mobile.svg";
import simulateTradeMobile from "@/public/images/simulate-trade-mobile.svg";

export default function LandingWhyFxeeCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-start self-stretch">
      <div className="flex md:flex-row flex-col items-center self-stretch">
        <LandingWhyFxeeCard
          title="AI Trade Advisor"
          description="AI suggests optimal trades or builds custom trade plans (profit target, risk limit, timeframe) - Simulated charts auto-drawn with support/resistance, patterns, indicators (MA, RSI, Fibonacci).
"
          imageUrl={window.innerWidth < 641 ? proposedTradeMobile : ProposedTrade}
          className={`${window.innerWidth < 769 ? "border-gradient-top-left-right" : "border-gradient-right"} ${hoveredCard === 'ai-trade' ? 'border-gradient-blue-green' : ''}`}
          onMouseEnter={() => setHoveredCard('ai-trade')}
          onMouseLeave={() => setHoveredCard(null)}
        />
        <LandingWhyFxeeCard
          title="Prop Firm Passing Tool"
          description="Simulated charts auto-drawn with support/resistance, patterns, indicators (MA, RSI, Fibonacci) helping people passs their prop firm challenges - 92% passing rate."
          imageUrl={window.innerWidth < 641 ? propFirmMobile : BaseChart}
          className={`${window.innerWidth < 769 ? "border-gradient-top-left-right" : "border-gradient-right"} ${hoveredCard === 'prop-firm' ? 'border-gradient-blue-green' : ''}`}
          propFirm={true}
          onMouseEnter={() => setHoveredCard('prop-firm')}
          onMouseLeave={() => setHoveredCard(null)}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center self-stretch">
        <LandingWhyFxeeCard
          title="Simulated Trade Execution"
          description="Place and manage trades directly on our custom FXEE dashboard (no broker needed)."
          imageUrl={window.innerWidth < 641 ? simulateTradeMobile : BuySell}
          className={`${window.innerWidth < 769 ? "border-gradient-top-left-right" : "border-gradient-bottom"} ${hoveredCard === 'trade-execution' ? 'border-gradient-blue-green' : ''}`}
          onMouseEnter={() => setHoveredCard('trade-execution')}
          onMouseLeave={() => setHoveredCard(null)}
        />
        <LandingWhyFxeeCard
          title="AI-Powered Dashboard"
          description="AI tools for sentiment, news impact, portfolio balance, risk alerts (Premium upgrade). Premium ai analysis with 86% accuracy rate. "
          imageUrl={window.innerWidth < 641 ? AITrendMobile : AITrend}
          className={`${window.innerWidth < 769 ? "border-gradient-top-left-right" : "border-gradient-top"} ${window.innerWidth >769 && "bg-hero-card-sec-gradient" } ${hoveredCard === 'ai-dashboard' ? 'border-gradient-blue-green' : ''}`}
          onMouseEnter={() => setHoveredCard('ai-dashboard')}
          onMouseLeave={() => setHoveredCard(null)}
        />
      </div>
    </div>
  );
}
