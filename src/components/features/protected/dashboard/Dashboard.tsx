"use client";
import React, { useState } from "react";
import ProtectedContentContainer from "@/components/features/protected/ProtectedContentContainer";
import DashboardACP from "@/components/features/protected/dashboard/ACP/DashboardACP";
import DashboardStatus from "@/components/features/protected/dashboard/status/DashboardStatus";
import DashboardWidget from "@/components/features/protected/dashboard/widget/DashboardWidget";
import HomeTrades from "../home/homeStatus/HomeTrades";
import CommonSelect from "@/components/ui/common-select";
import SymbolModal from "@/components/common/SymbolModal";
import OpenTrades from "./open-trades/OpenTrades";
import DashboardAIPanel from "./chatbot/DashboardAIPanel";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";
import { TRADING_SYMBOLS } from "@/lib/constants";

export default function Dashboard() {
  const { isVirtualAccount } = useAccountType();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState("EURUSD");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleSymbolSelect = (symbol: string) => {
    setSelectedSymbol(symbol);
    closeModal();
  };
  
  const getSymbolData = (symbol: string) => {
    const tradingSymbol = TRADING_SYMBOLS.find(s => s.symbol === symbol);
    return tradingSymbol || { id: 0, symbol, type: "Forex" as const, displayName: symbol };
  };
  
  return (
    <>
      <SymbolModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        onSymbolSelect={handleSymbolSelect}
      />
      <ProtectedContentContainer className={`sm:gap-10 ${isVirtualAccount ? "overflow-visible" : ""}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:items-stretch">
          <div className="lg:col-span-2">
            <DashboardWidget 
              dashboard={true} 
              symbolData={getSymbolData(selectedSymbol)} 
              openModal={openModal} 
            />
          </div>
          <div className="flex flex-col">
            <HomeTrades className="bg-card-green-gradient flex-1" />
            {/* <div className="w-full mt-5">
              <CommonSelect
              placeholder="Select a category"
              defaultValue="Seasonal"
              options={[
                { value: "Seasonal", label: "Seasonal" },
                { value: "Trending", label: "Trending" },
                { value: "Popular", label: "Popular" }
              ]}
              className="min-w-full"
            />
          </div> */}
          </div>
        </div>
        <OpenTrades />
        <DashboardStatus />
        {/* <DashboardACP /> */}
        
        {/* AI Chatbot Panel */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <DashboardAIPanel />
        </div> */}
      </ProtectedContentContainer>
    </>
  );
}