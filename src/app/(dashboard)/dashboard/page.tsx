"use client";

import LimitReachModal from "@/components/common/LimitReachModal";
import Dashboard from "@/components/features/protected/dashboard/Dashboard";
import { useState } from "react";

export default function page() {
  const [isOpenLimitReach, setIsOpenLimitReach] = useState(true);

  return (
    <>
      <Dashboard />
      <LimitReachModal
        isOpenLimitReach={isOpenLimitReach}
        onCloseLimitReach={() => setIsOpenLimitReach(false)}
      />
    </>
  );
}
