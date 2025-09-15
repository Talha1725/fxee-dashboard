"use client";

// import LimitReachModal from "@/components/common/LimitReachModal";
import Dashboard from "@/components/features/protected/dashboard/Dashboard";
import { /* useState, */ useEffect } from "react";
// import { useAccountType } from "@/lib/contexts/AccountTypeContext";

export default function page() {
  // const [isOpenLimitReach, setIsOpenLimitReach] = useState(true);
  // const { isDemoAccountEnabled } = useAccountType();
  useEffect(() => {
    // Check for hash after a delay to ensure it's properly set
    setTimeout(() => {
      if (window.location.hash) {
        // If there's a hash, scroll to that element
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If no hash, scroll to top
        window.scrollTo(0, 0);
      }
    }, 100);
  }, []);

  return (
    <>
      {/* {!isDemoAccountEnabled && (
      <LimitReachModal
          isOpenLimitReach={isOpenLimitReach}
          onCloseLimitReach={() => setIsOpenLimitReach(false)}
        />
      )} */}
      <Dashboard />
    </>
  );
}
