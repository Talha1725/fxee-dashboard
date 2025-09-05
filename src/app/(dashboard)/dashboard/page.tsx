"use client";

import LimitReachModal from "@/components/common/LimitReachModal";
import Dashboard from "@/components/features/protected/dashboard/Dashboard";
import { useState, useEffect } from "react";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

export default function page() {
  const [isOpenLimitReach, setIsOpenLimitReach] = useState(true);

  const { isDemoAccountEnabled } = useAccountType();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!isDemoAccountEnabled && (
      <LimitReachModal
          isOpenLimitReach={isOpenLimitReach}
          onCloseLimitReach={() => setIsOpenLimitReach(false)}
        />
      )}
      <Dashboard />
    </>
  );
}
