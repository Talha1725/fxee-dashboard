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
        <HomeTrades className="bg-card-green-gradient" />
        <div className="w-full mt-5">
          <Select>
            <SelectTrigger className="w-full rounded-xl dark:!bg-white/2 !bg-black/2">
              <SelectValue placeholder="Select a currency" defaultValue="Seasonal" className="dark:text-white text-black" />
              <SelectContent className="dark:bg-black !bg-white dark:text-white text-black">
                <SelectItem value="Seasonal" className="dark:text-white text-black">Seasonal</SelectItem>
                <SelectItem value="Trending" className="dark:text-white text-black">Trending</SelectItem>
                <SelectItem value="Popular" className="dark:text-white text-black">Popular</SelectItem>
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
