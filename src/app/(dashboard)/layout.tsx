import React from "react";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import DashboardGuard from "@/components/auth/DashboardGuard";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardGuard>
      <ProtectedLayout>{children}</ProtectedLayout>
    </DashboardGuard>
  );
}
