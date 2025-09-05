"use client";

import LimitReachModal from "@/components/common/LimitReachModal";
import Dashboard from "@/components/features/protected/dashboard/Dashboard";
import { useState, useEffect } from "react";
import { useAccountType } from "@/lib/contexts/AccountTypeContext";

export default function page() {
  const [isOpenLimitReach, setIsOpenLimitReach] = useState(true);

  const { isDemoAccountEnabled } = useAccountType();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };
    
    document.addEventListener('scroll', preventScroll, { passive: false });
    setTimeout(() => {
      document.removeEventListener('scroll', preventScroll);
    }, 1000);
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
