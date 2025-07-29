import DashboardStatusDetailCardHead from "../status/detail/DashboardStatusDetailCardHead";
import DashboardStatusDetailBadge from "../status/detail/DashboardStatusDetailBadge";
import { IconAddOns, IconCircledEnergy } from "@/components/ui/icon";
import { addOnsData } from "@/lib/constants";
import { Text14 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function DashboardActiveAddons() {
  return (
    <div className="flex flex-col items-start gap-5 self-stretch px-3">
      <DashboardStatusDetailCardHead
        title="Active Add-Ons"
        icon={<IconAddOns width={14} height={14} />}
      />
      <div className="flex flex-col items-start gap-3.5 self-stretch">
        <div className="flex flex-wrap items-start content-start gap-[14px_10px] self-stretch">
          {addOnsData.map((addOn, index) => (
            <DashboardStatusDetailBadge
              key={index}
              icon={addOn.icon}
              title={addOn.title}
              isVip={addOn.isVip}
            />
          ))}
        </div>
        <Button variant="white" className="py-2.5 px-[25px]">
          <Text14 className="text-[#111]">Upgrade Power</Text14>
          <IconCircledEnergy width={20} height={20} />
        </Button>
      </div>
    </div>
  );
}
