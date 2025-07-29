import React from "react";

import ProtectedContentContainer from "@/components/features/protected/ProtectedContentContainer";
import DashboardACP from "@/components/features/protected/dashboard/ACP/DashboardACP";
import DashboardStatus from "@/components/features/protected/dashboard/status/DashboardStatus";
import DashboardWidget from "@/components/features/protected/dashboard/widget/DashboardWidget";

export default function Dashboard() {
  return (
    <ProtectedContentContainer className="sm:gap-10">
      <DashboardWidget currency="BTC/ETH" />
      <DashboardStatus />
      <DashboardACP />
    </ProtectedContentContainer>
  );
}
