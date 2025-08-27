import { Text16, Text20 } from "../ui/typography";
import PlanSection from "./plan-section";
import TransactionHistorySection from "./transaction-history-section";

export default function SubscriptionSection() {
  return (
    <div className="w-full relative">
      <Text20 className="font-satoshi">Subscription & Billing</Text20>
      <Text16 className="dark:opacity-70 mt-1">
        View and manage plan, payments, usage.{" "}
      </Text16>

      <PlanSection />

      {/* Transaction History */}
      <TransactionHistorySection />
    </div>
  );
}
