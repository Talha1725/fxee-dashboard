"use client";
import React, { useState } from "react";

import ProtectedContentContainer from "@/components/features/protected/ProtectedContentContainer";
import HomeStatus from "@/components/features/protected/home/homeStatus/HomeStatus";
import HomeNewsAI from "@/components/features/protected/home/homeNewsAI/HomeNewsAI";
import HomeTopScore from "@/components/features/protected/home/homeTopScore/HomeTopScore";
import SymbolModal from "@/components/common/SymbolModal";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

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
      <ProtectedContentContainer className={`${isVirtualAccount ? "overflow-visible" : ""}`}>
        <HomeStatus />
        <HomeNewsAI />
        <HomeTopScore openModal={openModal} />
      </ProtectedContentContainer>
    </>
  );
}
