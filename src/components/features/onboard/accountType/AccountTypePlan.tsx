import React from "react";
import AccountTypePlanCard from "@/components/features/onboard/accountType/AccountTypePlanCard";
import { ACCOUNT_TYPES } from "@/lib/constants";

export default function AccountTypePlan() {
  return (
    <div className="flex flex-col items-center gap-5 self-stretch">
      <div className="flex justify-center items-start gap-4.5 self-stretch">
        {ACCOUNT_TYPES.map((item) => (
          <AccountTypePlanCard key={item.title} item={item} />
        ))}
      </div>
      <p className="text-[16px] text-white/80 liga font-regular font-normal">
        Prices exclude any applicable taxes.
      </p>
    </div>
  );
}
