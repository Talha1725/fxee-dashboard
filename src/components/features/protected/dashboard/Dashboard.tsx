import React from "react";

import ProtectedContentContainer from "@/components/features/protected/ProtectedContentContainer";
import DashboardACP from "@/components/features/protected/dashboard/ACP/DashboardACP";
import DashboardStatus from "@/components/features/protected/dashboard/status/DashboardStatus";
import DashboardWidget from "@/components/features/protected/dashboard/widget/DashboardWidget";
import HomeTrades from "../home/homeStatus/HomeTrades";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

export default function Dashboard() {
  return (
    <ProtectedContentContainer className="sm:gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <DashboardWidget currency="BTC/ETH" />
        </div>
        <div>
        <HomeTrades />
        <div className="w-full mt-5">
          <Select>
            <SelectTrigger className="w-full rounded-xl !bg-white/2">
              <SelectValue placeholder="Select a currency" />
              <SelectContent>
                <SelectItem value="BTC/ETH">BTC/ETH</SelectItem>
                <SelectItem value="BTC/USDT">BTC/USDT</SelectItem>
                <SelectItem value="BTC/USDC">BTC/USDC</SelectItem>
              </SelectContent>
            </SelectTrigger>
          </Select>
        </div>
        </div>
      </div>
      <DashboardStatus />
      <DashboardACP />
    </ProtectedContentContainer>
  );
}
