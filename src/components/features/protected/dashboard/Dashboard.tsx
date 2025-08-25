import React, { useState } from "react";

import ProtectedContentContainer from "@/components/features/protected/ProtectedContentContainer";
import DashboardACP from "@/components/features/protected/dashboard/ACP/DashboardACP";
import DashboardStatus from "@/components/features/protected/dashboard/status/DashboardStatus";
import DashboardWidget from "@/components/features/protected/dashboard/widget/DashboardWidget";
import HomeTrades from "../home/homeStatus/HomeTrades";
import CommonSelect from "@/components/ui/common-select";
import SymbolModal from "@/components/common/SymbolModal";
import OpenTrades from "./open-trades/OpenTrades";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
    <SymbolModal 
    isOpen={isModalOpen} 
    onClose={closeModal} 
  />
    <ProtectedContentContainer className="sm:gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <DashboardWidget currency="BTC/ETH" openModal={openModal} />
        </div>
        <div>
          <HomeTrades className="bg-card-green-gradient" />
          <div className="w-full mt-5">
            <CommonSelect
            placeholder="Select a category"
            defaultValue="Seasonal"
            options={[
              { value: "Seasonal", label: "Seasonal" },
              { value: "Trending", label: "Trending" },
              { value: "Popular", label: "Popular" }
            ]}
            className="w-full min-w-0"
          />
      
        </div>
        </div>
      </div>
      <OpenTrades />
      <DashboardStatus />
      <DashboardACP />
    </ProtectedContentContainer>
    </>
  );
}
