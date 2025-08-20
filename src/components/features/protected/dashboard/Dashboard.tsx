import React from "react";

import ProtectedContentContainer from "@/components/features/protected/ProtectedContentContainer";
import DashboardACP from "@/components/features/protected/dashboard/ACP/DashboardACP";
import DashboardStatus from "@/components/features/protected/dashboard/status/DashboardStatus";
import DashboardWidget from "@/components/features/protected/dashboard/widget/DashboardWidget";
import HomeTrades from "../home/homeStatus/HomeTrades";
import CommonSelect from "@/components/ui/common-select";

export default function Dashboard() {
  return (
    <ProtectedContentContainer className="sm:gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <DashboardWidget currency="BTC/ETH" />
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
      <DashboardStatus />
      <DashboardACP />
    </ProtectedContentContainer>
  );
}
