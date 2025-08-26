"use client";

import DashboardStatusDetailCardHead from "../status/detail/DashboardStatusDetailCardHead";
import DashboardStatusDetailBadge from "../status/detail/DashboardStatusDetailBadge";
import { IconAddOns, IconCheck } from "@/components/ui/icon";
import { Text14 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useAddOns } from "@/lib/contexts/AddOnsContext";
import { useUser } from "@/lib/contexts/UserContext";

export default function DashboardActiveAddons() {
  const { theme } = useTheme();
  const { pendingAddOns, toggleAddOn, saveAddOns, hasUnsavedChanges } = useAddOns();
  const { isPremium } = useUser();
  return (
    <div className="flex flex-col items-start gap-5 self-stretch px-3">
      <DashboardStatusDetailCardHead
        title="Active Add-Ons"
        icon={<IconAddOns width={14} height={14} />}
      />
      <div className="flex flex-wrap items-start content-start gap-[14px_10px] self-stretch">
      {pendingAddOns.map((addOn, index) => {
          const isVipAddOn = index >= 4; // last 4 are VIP
          const canToggle = isPremium || !isVipAddOn; // Pro can toggle all, Basic only first 4
          const showVipBadge = !isPremium && isVipAddOn;

          // Unified text colors
          const textColorClass = addOn.active
            ? (theme === "dark" ? "text-white" : "text-black")
            : (theme === "dark" ? "text-white/60" : "text-black/60");

          // Unified backgrounds
          const bgClass = addOn.active
            ? (theme === "dark"
                ? "!bg-card-weak-gradient"
                : "!bg-gradient-to-b !from-black/20 !to-black/10")
            : (theme === "dark"
                ? "!bg-card-weak-gradient !opacity-60"
                : "!bg-gradient-to-b !from-black/5 !to-black/2 !opacity-60");

          return (
            <div key={addOn.title} className="relative">
              <div
                onClick={() => canToggle && toggleAddOn(addOn.title)}
                className={`transition-all duration-200 ${
                  canToggle ? "cursor-pointer hover:scale-105" : "cursor-not-allowed"
                }`}
              >
                <DashboardStatusDetailBadge
                  title={addOn.title}
                  icon={addOn.icon}
                  isVip={showVipBadge}
                  isPro={false}
                  className={`!p-2 !rounded-[10px] ${bgClass} ${textColorClass}`}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-end self-stretch">
        <Button 
          onClick={saveAddOns}
          disabled={!hasUnsavedChanges}
          className={`w-[120px] h-[40px] rounded-[10px] border border-green-500/20 gap-1 pt-[10px] pr-[20px] pb-[10px] pl-[20px] transition-colors ${
            hasUnsavedChanges 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-green-500/90 cursor-not-allowed'
          }`}
        >
          <Text14 className="text-white font-satoshi-medium">Save</Text14>
          <IconCheck width={20} height={20} />
        </Button>
      </div>
    </div>
  );
}
