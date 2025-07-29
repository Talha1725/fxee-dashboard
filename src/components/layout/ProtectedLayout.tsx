import React from "react";

import ProtectedContainer from "@/components/features/protected/ProtectedContainer";
import Sidebar from "@/components/features/protected/sidebar/Sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start p-2.5 w-full min-h-screen rounded-[10px] bg-center bg-cover bg-no-repeat bg-background">
      <Sidebar className="hidden xl:block" />
      <ProtectedContainer>{children}</ProtectedContainer>
    </div>
  );
}
