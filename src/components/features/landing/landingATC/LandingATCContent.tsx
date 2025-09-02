import React from "react";
import TradingCompanion from "@/public/images/trading-companion.svg";
import Image from "next/image";

export default function LandingATCContent() {
  return (
    <div className="flex w-full xl:w-[84%] mx-auto flex-col md:flex-row lg:items-center justify-start lg:gap-2.5 gap-14 overflow-hidden">
      <div className="border border-white/20 w-full md:w-[550px] h-[300px] min-[405px]:h-[350px] min-[505px]:h-[400px] sm:h-[500px] md:h-[400px] lg:h-[468px] rounded-md bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden flex items-center justify-center">
        <Image src={TradingCompanion} alt="Base Chart" className="w-[92%]" />
      </div>
      <div className="lg:px-15 px-3 relative">
        <div className="absolute -bottom-10 left-0 md:left-5 w-full h-15 bg-black blur-md rounded-md z-5"></div>
        <div className="marquee-container-vertical h-[460px]">
          <div className="marquee-content-vertical gap-3">
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              RSI Analyzer
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              News Impact Predictor
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              Fibonacci Auto-Leveler
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              Trade Probability Calculator
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              Sentiment Scanner
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              Pattern Recognizer
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              Volatility Advisor
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              AI Trend Forecast
            </div>
            {/* Duplicate items for seamless loop */}
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              RSI Analyzer
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              News Impact Predictor
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              Fibonacci Auto-Leveler
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              Trade Probability Calculator
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              Sentiment Scanner
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              Pattern Recognizer
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              Volatility Advisor
            </div>
            <div className="w-fit bg-gradient-to-r from-white/10 via-white/5 to-transparent overflow-hidden hover:bg-white border hover:border-white border-white/20 hover:text-black font-satoshi px-3 py-2 rounded-md text-white transition-all duration-300">
              AI Trend Forecast
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
