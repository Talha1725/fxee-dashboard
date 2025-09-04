import React from "react";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import DashboardGuard from "@/components/auth/DashboardGuard";
import { TradeProvider } from "@/lib/contexts/TradeContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardGuard>
      <TradeProvider>
        <ProtectedLayout>{children}</ProtectedLayout>
      </TradeProvider>
    </DashboardGuard>
  );
}
