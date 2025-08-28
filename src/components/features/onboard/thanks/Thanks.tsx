"use client";
import Image from "next/image";
import { ChevronRight, RefreshCcw } from "lucide-react";
import { useState, useEffect } from "react";

import OnboardNav from "@/components/features/onboard/OnboardNav";
import Thanks1 from "@/public/images/thanks1.png";
import ThanksHeader from "@/public/images/thankshead.svg";
import Thanks2 from "@/public/images/thanks2.png";
import ThanksBottom from "@/public/images/thanks-bottom.svg";
import { Button } from "@/components/ui/button";
import { DisplayMD, Body16 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useRouter } from "next/navigation";
import { useGetPaymentStatusByTrackIdQuery } from "@/lib/redux/features/payments/paymentsApi";
import { toast } from "sonner";

export default function Thanks() {
  const { theme } = useTheme();
  const router = useRouter();
  const [trackId, setTrackId] = useState<string | null>(null);
  
  // Get trackId from localStorage on component mount
  useEffect(() => {
    const storedTrackId = localStorage.getItem("paymentTrackId");
    if (storedTrackId) {
      setTrackId(storedTrackId);
    } else {
      toast.error("Payment information not found. Please try again.");
    }
  }, []);

  // Fetch payment status using trackId
  const { 
    data: paymentStatus, 
    isLoading, 
    error, 
    refetch 
  } = useGetPaymentStatusByTrackIdQuery(trackId!, {
    skip: !trackId, // Skip query if no trackId
    pollingInterval: 30000, // Poll every 30 seconds to check for status updates
  });

  const refreshPaymentStatus = async () => {
    if (trackId) {
      try {
        await refetch();
        toast.success("Payment status refreshed");
      } catch (error) {
        toast.error("Failed to refresh payment status");
      }
    }
  };

  // Clear trackId from localStorage on component unmount or when going to dashboard
  const handleGoToDashboard = () => {
    localStorage.removeItem("paymentTrackId");
    router.push("/home");
  };

  // Helper function to format payment status for display
  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'pending': return { text: 'Pending', color: 'text-yellow-600' };
      case 'paid': return { text: 'Paid', color: 'text-green-600' };
      case 'failed': return { text: 'Failed', color: 'text-red-600' };
      case 'refunded': return { text: 'Refunded', color: 'text-blue-600' };
      case 'chargeback': return { text: 'Chargeback', color: 'text-purple-600' };
      case 'trial': return { text: 'Trial', color: 'text-gray-600' };
      default: return { text: status, color: 'text-gray-600' };
    }
  };

  return (
    <div className={`flex flex-col self-stretch flex-[1_0_0] ${theme === "dark" ? "bg-dark-green-linear" : ""}`}>
      <Image
        priority
        src={theme === "dark" ? Thanks1 : ThanksHeader}
        alt="Thanks"
        className="absolute top-0 left-0 md:w-[30vw] w-[60vw] aspect-auto select-none"
      />
      <Image
        priority
        src={theme === "dark" ? Thanks2 : ThanksBottom}
        alt="Thanks"
        className="absolute bottom-0 right-0 md:w-[30vw] w-[60vw] h-auto select-none z-50"
      />
      <OnboardNav isOnboard={false} />
      <div className="flex justify-center items-center self-stretch flex-[1_0_0] gap-5 py-2">
        <div className="flex flex-col gap-2 items-center max-w-[720px] w-full">
          <div className="xl:w-[55%]">
          <DisplayMD className="text-center z-50 text-black dark:text-white">
            Thank You For Purchasing the Plan
          </DisplayMD>
          </div>
          <Body16 className="text-center z-50 text-black/60 dark:text-white">
            Your AI-powered trading journey starts now — get ready for smarter
            insights, faster execution, and real-time support designed to
            elevate your trading performance. Let&apos;s grow your portfolio
            together.
          </Body16>
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mt-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center">Payment Details</h3>
              
              {isLoading ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">Loading payment details...</p>
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-red-500">Failed to load payment details</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Please try refreshing the page</p>
                </div>
              ) : paymentStatus?.data ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Track ID</th>
                        <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Customer</th>
                        <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Amount</th>
                        <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 dark:text-white font-mono">
                          {paymentStatus.data.payment.trackId}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 dark:text-white">
                          {paymentStatus.data.user.fullName}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 dark:text-white">
                          ${paymentStatus.data.payment.amount} {paymentStatus.data.payment.currency}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">
                          <span className={`font-medium ${getStatusDisplay(paymentStatus.data.payment.status).color}`}>
                            {getStatusDisplay(paymentStatus.data.payment.status).text}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  
                  {/* Additional subscription details */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-xs sm:text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Subscription:</span>
                      <span className="ml-2 text-gray-900 dark:text-white">
                        {paymentStatus.data.subscription.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Billing Cycle:</span>
                      <span className="ml-2 text-gray-900 dark:text-white capitalize">
                        {paymentStatus.data.payment.billingCycle}
                      </span>
                    </div>
                    {paymentStatus.data.payment.nextBillingDate && (
                      <div className="text-xs sm:text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Next Billing:</span>
                        <span className="ml-2 text-gray-900 dark:text-white">
                          {new Date(paymentStatus.data.payment.nextBillingDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {paymentStatus.data.payment.paidAt && (
                      <div className="text-xs sm:text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Paid At:</span>
                        <span className="ml-2 text-gray-900 dark:text-white">
                          {new Date(paymentStatus.data.payment.paidAt).toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">No payment information available</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-4 mt-2">
          <Button
            variant={"fancy"}
            className="flex-wrap self-center px-8 py-2.5 gap-1 z-50 bg-transparent"
            onClick={refreshPaymentStatus}
            disabled={isLoading || !trackId}
          >
            {isLoading ? "Refreshing..." : "Refresh"}
            <RefreshCcw height={20} width={20} />
          </Button>
          <Button
            variant={"fancy"}
            className="flex-wrap self-center px-8 py-2.5 gap-1 z-50"
            onClick={handleGoToDashboard}
          >
            Go To Dashboard
            <ChevronRight height={20} width={20} />
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}
