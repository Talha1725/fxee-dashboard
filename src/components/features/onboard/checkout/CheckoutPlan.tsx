import OnboardSelectedPlan from "@/components/features/onboard/OnboardSelectedPlan";
import CheckoutCard from "@/components/features/onboard/checkout/CheckoutCard";
import OnboardSummary from "@/components/features/onboard/OnboardSummary";

export default function CheckoutPlan() {
  return (
    <div className="flex lg:flex-row flex-col lg:items-start gap-15 self-stretch">
      <OnboardSelectedPlan />
      <div className="flex flex-col justify-center items-start gap-5 flex-[1_0_0]">
        <CheckoutCard />
        <OnboardSummary isCrypto={true} isCheckout={true} />
      </div>
    </div>
  );
}
