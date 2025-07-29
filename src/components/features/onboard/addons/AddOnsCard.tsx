import AddOnsItem from "@/components/features/onboard/addons/AddOnsItem";
import OnboardCardContainer from "@/components/features/onboard/OnboardCardContainer";
import { Title24 } from "@/components/ui/typography";

export default function AddOnsCard() {
  return (
    <OnboardCardContainer>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <Title24>Add-Ons</Title24>
        <p className="text-white/80 liga font-regular text-[14px] font-normal tracking-[-0.28px] select-none">
          Enhance, Expand, and Optimize Your Trading Experience
        </p>
      </div>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <AddOnsItem
          title="Extra MetaAPI Trade Simulation Account"
          description="Great for those managing multiple prop firm challenges"
          price="$29/month per account"
        />
        <AddOnsItem
          title="Extra MetaAPI Trade Simulation Account"
          description="Great for those managing multiple prop firm challenges"
          price="$10/ pre reset"
        />
        <AddOnsItem
          title="Extra MetaAPI Trade Simulation Account"
          description="Great for those managing multiple prop firm challenges"
          price="$9.99/month per tool"
        />
        <AddOnsItem
          title="Extra MetaAPI Trade Simulation Account"
          description="Great for those managing multiple prop firm challenges"
          price="$10 for 10 additional AI uses"
        />
        <AddOnsItem
          title="Extra MetaAPI Trade Simulation Account"
          description="Great for those managing multiple prop firm challenges"
          price="$50 = 500 FXEE tokens"
        />
      </div>
    </OnboardCardContainer>
  );
}
