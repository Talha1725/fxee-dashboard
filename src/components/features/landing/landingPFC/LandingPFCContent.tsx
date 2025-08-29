"use client";

import React, { useState, useEffect } from "react";
import PFCImagesContainer from "./PFCImagesContainer";
import Image from "next/image";
import rsiAnalyzer from "@/public/images/rsi-anaylzer.svg"
import predicto from "@/public/images/impact-predictor.svg"
import autoLeveler from "@/public/images/auto-leveler.svg"
import tradeCalculator from "@/public/images/trade-calculator.svg"
import sentimentScanner from "@/public/images/sentiment-scanner.svg"
import recognizer from "@/public/images/recognizer.svg"
import advisor from "@/public/images/advisor.svg"
import forecast from "@/public/images/forcast.svg"
import allocator from "@/public/images/allocator.svg"
import optimizer from "@/public/images/optimizer.svg"

export default function LandingPFCContent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-0 justify-center self-stretch">
        <PFCImagesContainer className={`${isMobile ? "border-gradient-top-left-right" : "border-gradient-right"}`}>
          <Image src={rsiAnalyzer} alt="RSI Analyzer" className="absolute top-0 right-0" />
          <p className="text-white font-satoshi text-center md:text-lg">RSI Analyzer</p>
        </PFCImagesContainer>
        <PFCImagesContainer className={`${isMobile ? "border-gradient-top-left-right" : "border-gradient-top"}`}>
          <div className="absolute top-5 right-0">
            <Image src={predicto} alt="RSI Analyzer" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
  
          <p className="text-white font-satoshi text-center md:text-lg">News Impact Predictor</p>
        </PFCImagesContainer>
        <PFCImagesContainer className={`${isMobile ? "border-gradient-top-left-right" : "border-gradient-right"}`}>
          <Image src={autoLeveler} alt="Auto Leveler" className="absolute top-0 right-0" />
          <p className="text-white font-satoshi text-center text-base sm:text-lg">Fibonacci Auto-Leveler</p>
        </PFCImagesContainer>
        <PFCImagesContainer className={`${isMobile ? "border-gradient-top-left-right" : "border-gradient-left"}`}>
          <Image src={tradeCalculator} alt="Trade Calculator" className="absolute top-0 right-0" />
          <p className="text-white font-satoshi text-center md:text-lg">Trade Probability Calculator</p>
        </PFCImagesContainer>
        <PFCImagesContainer className={`${isMobile ? "border-gradient-top-left-right" : "border-gradient-right"}`}>
          <Image src={sentimentScanner} alt="Trade Calculator" className="absolute top-0 right-0" />
          <p className="text-white font-satoshi text-center md:text-lg">Sentiment Scanner</p>
        </PFCImagesContainer>
        <PFCImagesContainer className={`${isMobile ? "border-gradient-top-left-right" : "border-gradient-right"}`}>
          <Image src={recognizer} alt="Recognizer" className="absolute top-0 right-0" />
          <p className="text-white font-satoshi text-center md:text-lg">Pattern Recognizer</p>
        </PFCImagesContainer>
        <PFCImagesContainer className={`${isMobile ? "border-gradient-top-left-right" : "border-gradient-right"}`}>
          <Image src={advisor} alt="Recognizer" className="absolute top-0 right-0" />
          <p className="text-white font-satoshi text-center md:text-lg">Volatility Advisor</p>
        </PFCImagesContainer>
        <PFCImagesContainer className={`${isMobile ? "border-gradient-top-left-right" : "border-gradient-left"}`}>
          <Image src={forecast} alt="Recognizer" className="absolute top-0 right-0" />
          <p className="text-white font-satoshi text-center md:text-lg">AI Trend Forecast</p>
        </PFCImagesContainer>
        <div className="xl:block hidden"></div>
        <PFCImagesContainer className={`border-gradient-top-left-right`}>
          <Image src={allocator} alt="Recognizer" className="absolute top-0 right-0" />
          <p className="text-white font-satoshi text-center md:text-lg">Smart Portfolio Allocator</p>
        </PFCImagesContainer>
        <div className="md:block hidden xl:hidden"></div>

        <PFCImagesContainer className={`border-gradient-top-left-right`}>
          <Image src={optimizer} alt="Recognizer" className="absolute top-0 right-0" />
          <p className="text-white font-satoshi text-center md:text-lg">Stop-Loss Optimizer</p>
        </PFCImagesContainer>
    </div>
  );
}
