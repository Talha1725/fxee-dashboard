"use client";

import DashboardStatusDetailCardHead from "../status/detail/DashboardStatusDetailCardHead";
import DashboardStatusDetailBadge from "../status/detail/DashboardStatusDetailBadge";
import { IconAddOns, IconCircledEnergy } from "@/components/ui/icon";
import { addOnsData } from "@/lib/constants";
import { Text14 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function DashboardActiveAddons() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col items-start gap-5 self-stretch px-3">
      <DashboardStatusDetailCardHead
        title="Active Add-Ons"
        icon={<IconAddOns width={14} height={14} />}
      />
      <div className="flex flex-wrap items-start content-start gap-[14px_10px] self-stretch">
        {addOnsData.map((addOn, index) => (
          <DashboardStatusDetailBadge
            key={index}
            icon={addOn.icon}
            title={addOn.title}
            isVip={addOn.isVip}
            className={`${theme === "dark" ? "bg-card-weak-gradient" : "bg-gradient-to-b from-black/10 to-black/5"}`}
          />
        ))}
        <Button variant={theme === "dark" ? "white" : "black"} className="w-[170px] h-[40px] rounded-[10px] border border-white/5 gap-1 pt-[10px] pr-[20px] pb-[10px] pl-[20px]">
          <Text14 className="text-white dark:text-[#111] font-satoshi-medium">Upgrade Power</Text14>
          <IconCircledEnergy width={20} height={20} />
        </Button>
      </div>
    </div>
  );
}
