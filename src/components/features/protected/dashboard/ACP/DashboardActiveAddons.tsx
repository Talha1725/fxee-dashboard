"use client";

import DashboardStatusDetailCardHead from "../status/detail/DashboardStatusDetailCardHead";
import DashboardStatusDetailBadge from "../status/detail/DashboardStatusDetailBadge";
import { IconAddOns, IconCircledEnergy, IconCheck } from "@/components/ui/icon";
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
          const canToggle = isPremium || !addOn.isVip;
          
          const showVipBadge = addOn.isVip && !isPremium;
          
          return (
            <div 
              key={index} 
              onClick={() => canToggle ? toggleAddOn(addOn.title) : null} 
              className={`transition-all duration-200 relative ${
                canToggle 
                  ? "cursor-pointer hover:scale-105" 
                  : "cursor-not-allowed"
              }`}
              style={{ 
                opacity: addOn.active && canToggle ? 1 : 0.5 
              }}
            >
              <DashboardStatusDetailBadge
                icon={addOn.icon}
                title={addOn.title}
                isVip={showVipBadge}
                className={`transition-all duration-200 ${
                  addOn.active && canToggle
                    ? (theme === "dark" 
                        ? "bg-card-weak-gradient text-white" 
                        : "bg-gradient-to-b from-black/20 to-black/10 text-black") 
                    : (theme === "dark" 
                        ? "bg-card-weak-gradient text-white/50" 
                        : "bg-gradient-to-b from-black/5 to-black/2 text-black/50")
                }`}
              />
            </div>
          );
        })}
        <div className="flex items-center gap-2 self-stretch flex-wrap">
          <Button variant={theme === "dark" ? "white" : "black"} className="w-[170px] h-[40px] rounded-[10px] border border-white/5 gap-1 pt-[10px] pr-[20px] pb-[10px] pl-[20px]">
            <Text14 className="text-white dark:text-[#111] font-satoshi-medium">Upgrade Power</Text14>
            <IconCircledEnergy width={20} height={20} />
          </Button>
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
    </div>
  );
}
