"use client";
import Image from "next/image";
import { ChevronRight, RefreshCcw } from "lucide-react";
import { useState } from "react";

import OnboardNav from "@/components/features/onboard/OnboardNav";
import Thanks1 from "@/public/images/thanks1.png";
import ThanksHeader from "@/public/images/thankshead.svg";
import Thanks2 from "@/public/images/thanks2.png";
import ThanksBottom from "@/public/images/thanks-bottom.svg";
import { Button } from "@/components/ui/button";
import { DisplayMD, Body16 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useRouter } from "next/navigation";

export default function Thanks() {
  const { theme } = useTheme();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Sample payment data - in real app this would come from API
  const [paymentData, setPaymentData] = useState([
    { id: "#PAY-2024-001", name: "John Doe", amount: "$99.00" },
    { id: "#PAY-2024-002", name: "Jane Smith", amount: "$149.00" },
    { id: "#PAY-2024-003", name: "Mike Johnson", amount: "$199.00" },
  ]);

  const refreshTable = async () => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In real app, fetch fresh data here
    // const newData = await fetchPaymentData();
    // setPaymentData(newData);
    
    setIsLoading(false);
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
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Payment ID</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Name</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 dark:text-white">{item.id}</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 dark:text-white">{item.name}</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-900 dark:text-white">{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-4 mt-2">
          <Button
            variant={"fancy"}
            className="flex-wrap self-center px-8 py-2.5 gap-1 z-50 bg-transparent"
            onClick={refreshTable}
            disabled={isLoading}
          >
            {isLoading ? "Refreshing..." : "Refresh"}
            <RefreshCcw height={20} width={20} />
          </Button>
          <Button
            variant={"fancy"}
            className="flex-wrap self-center px-8 py-2.5 gap-1 z-50"
            onClick={() => router.push("/home")}
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
