"use client";

import LimitReachModal from "@/components/common/LimitReachModal";
import Dashboard from "@/components/features/protected/dashboard/Dashboard";
import { useState, useEffect } from "react";

export default function page() {
  const [isOpenLimitReach, setIsOpenLimitReach] = useState(true);

  // Ensure page always starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LimitReachModal
        isOpenLimitReach={isOpenLimitReach}
        onCloseLimitReach={() => setIsOpenLimitReach(false)}
      />
      <Dashboard />
    </>
  );
}
