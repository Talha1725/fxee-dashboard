import OnboardSelectedPlan from "@/components/features/onboard/OnboardSelectedPlan";
import AddOnsCard from "@/components/features/onboard/addons/AddOnsCard";
import OnboardSummary from "@/components/features/onboard/OnboardSummary";

export default function AddOnsPlan() {
  return (
    <div className="flex xl:flex-row flex-col items-center xl:items-start gap-15 self-stretch">
      <OnboardSelectedPlan />
      <div className="flex flex-col justify-center items-start gap-5 flex-[1_0_0]">
        <AddOnsCard />
        <OnboardSummary isCrypto={false} />
      </div>
    </div>
  );
}
