"use client";

import { useOnboarding } from "@/lib/contexts/OnboardingContext";
import AddOnsItem from "@/components/features/onboard/addons/AddOnsItem";
import OnboardCardContainer from "@/components/features/onboard/OnboardCardContainer";
import { Title24 } from "@/components/ui/typography";

export default function AddOnsCard() {
  const { selectedAddOns, setSelectedAddOns } = useOnboarding();

  const addOns = [
    {
      title: "Extra MetaAPI Trade Simulation Account",
      description: "Great for those managing multiple prop firm challenges",
      price: "$29/month per account",
      value: "metaapi-monthly",
      priceValue: 29
    },
    {
      title: "Extra MetaAPI Trade Simulation Account",
      description: "Great for those managing multiple prop firm challenges",
      price: "$10/ pre reset",
      value: "metaapi-reset",
      priceValue: 10
    },
    {
      title: "Extra MetaAPI Trade Simulation Account",
      description: "Great for those managing multiple prop firm challenges",
      price: "$9.99/month per tool",
      value: "metaapi-tool",
      priceValue: 9.99
    },
    {
      title: "Extra MetaAPI Trade Simulation Account",
      description: "Great for those managing multiple prop firm challenges",
      price: "$10 for 10 additional AI uses",
      value: "ai-uses",
      priceValue: 10
    },
    {
      title: "Extra MetaAPI Trade Simulation Account",
      description: "Great for those managing multiple prop firm challenges",
      price: "$50 = 500 FXEE tokens",
      value: "fxee-tokens",
      priceValue: 50
    }
  ];

  const handleAddOnToggle = (addOnValue: string, checked: boolean) => {
    if (checked) {
      setSelectedAddOns([...selectedAddOns, addOnValue]);
    } else {
      setSelectedAddOns(selectedAddOns.filter(addOn => addOn !== addOnValue));
    }
  };

  return (
    <OnboardCardContainer className="bg-white dark:bg-white/5 z-50">
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <Title24 className="text-black dark:text-white">Add-Ons</Title24>
        <p className="dark:text-white/80 text-black/80 liga font-regular text-[14px] font-normal tracking-[-0.28px] select-none">
          Enhance, Expand, and Optimize Your Trading Experience
        </p>
      </div>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        {addOns.map((addOn) => (
          <AddOnsItem
            key={addOn.value}
            title={addOn.title}
            description={addOn.description}
            price={addOn.price}
            value={addOn.value}
            checked={selectedAddOns.includes(addOn.value)}
            onCheckedChange={(checked) => handleAddOnToggle(addOn.value, checked)}
          />
        ))}
      </div>
    </OnboardCardContainer>
  );
}
