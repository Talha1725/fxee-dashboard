"use client";
import React, { useState } from "react";

import ProtectedContentContainer from "@/components/features/protected/ProtectedContentContainer";
import HomeStatus from "@/components/features/protected/home/homeStatus/HomeStatus";
import HomeTopScore from "@/components/features/protected/home/homeTopScore/HomeTopScore";
import SymbolModal from "@/components/common/SymbolModal";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";
import HomeNewsAI from "./homeNewsAI/HomeNewsAI";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isVirtualAccount } = useAccountType();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
     <SymbolModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
      <ProtectedContentContainer className={`sm:gap-10 ${isVirtualAccount ? "overflow-visible" : ""}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-3 space-y-5">
            <HomeStatus />
            <HomeNewsAI/>
          </div>
          {/* <div className="lg:col-span-1 [&_.dashboard-chatbot-card]:!h-[500px] [&_.dashboard-chatbot-card]:sm:!h-[550px] [&_.dashboard-chatbot-card]:md:!h-[500px] [&_.dashboard-chatbot-card]:lg:!h-[500px] [&_.dashboard-chatbot-card]:xl:!h-[500px] [&_.dashboard-chatbot-card]:!overflow-hidden [&_.dashboard-chatbot-card_.flex-1]:!overflow-y-auto [&_.dashboard-chatbot-card_.flex-1]:!scrollbar-hide [&_.dashboard-chatbot-card_.flex-1]:!min-h-0 [&_.dashboard-chatbot-card_.flex-1]:!max-h-none">
            <DashboardChatbot />
          </div> */}
        </div>
        <HomeTopScore openModal={openModal} />
      </ProtectedContentContainer>
    </>
  );
}
