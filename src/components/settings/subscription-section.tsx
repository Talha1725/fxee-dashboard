import { Text16 } from "../ui/typography";
import PlanSection from "./plan-section";
import TransactionHistorySection from "./transaction-history-section";
import { useGetPaymentHistoryQuery } from "@/lib/redux/features/payments/paymentsApi";

export default function SubscriptionSection() {
  // Get payment history to extract latest billing info
  const { data: paymentHistory, isLoading } = useGetPaymentHistoryQuery({ limit: 1 });

  // Get the latest active payment with next billing date
  const latestPayment = paymentHistory?.data?.payments?.find(
    payment => payment.status === 'paid' && 
               payment.subscriptionStatus === 'active' && 
               payment.nextBillingDate &&
               payment.isRecurring
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="w-full relative">
      {/* Commented out the main heading */}
      {/* <Text20 className="font-satoshi">Subscription & Billing</Text20>
      <Text16 className="dark:opacity-70 mt-1">
        View and manage plan, payments, usage.{" "}
      </Text16> */}

      <PlanSection />

      {/* Next Billing Date Section - Dynamic from API */}
      {latestPayment && (
        <div className="w-full relative mt-5 p-4 self-stretch rounded-[16px] border border-black/5 dark:border-white/5 bg-gradient-to-b from-[#00000007] to-[#00000007] dark:backdrop-blur-[7px]">
          <Text16 className="font-satoshi mb-2">Next Billing</Text16>
          <Text16 className="dark:opacity-70">
            Your next bill is for{" "}
            <span className="font-medium dark:text-white">
              ${latestPayment.amount} {latestPayment.currency}
            </span>{" "}
            on{" "}
            <span className="font-medium dark:text-white">
              {formatDate(latestPayment.nextBillingDate!)}
            </span>
          </Text16>
          <Text16 className="dark:opacity-50 text-sm mt-1">
            {latestPayment.productName} • {latestPayment.billingCycle} billing
          </Text16>
        </div>
      )}

      {/* Loading state for next billing */}
      {isLoading && (
        <div className="w-full relative mt-5 p-4 self-stretch rounded-[16px] border border-black/5 dark:border-white/5 bg-gradient-to-b from-[#00000007] to-[#00000007] dark:backdrop-blur-[7px]">
          <Text16 className="font-satoshi mb-2">Next Billing</Text16>
          <Text16 className="dark:opacity-70">Loading billing information...</Text16>
        </div>
      )}

      {/* No active subscription message */}
      {!isLoading && !latestPayment && paymentHistory?.data?.payments && (
        <div className="w-full relative mt-5 p-4 self-stretch rounded-[16px] border border-black/5 dark:border-white/5 bg-gradient-to-b from-[#00000007] to-[#00000007] dark:backdrop-blur-[7px]">
          <Text16 className="font-satoshi mb-2">Next Billing</Text16>
          <Text16 className="dark:opacity-70">No active subscription found</Text16>
        </div>
      )}

      {/* Transaction History */}
      <TransactionHistorySection />
    </div>
  );
}
