import React from "react";
import PerformanceSettingSelect from "./PerformanceSettingSelect";
import { Button } from "@/components/ui/button";
import { IconSetting } from "@/components/ui/icon";

export default function PerformanceSetting() {
  return (
    <div className="flex justify-end items-center gap-5 self-stretch">
      <div className="flex flex-col sm:flex-row items-center gap-[5px]">
        <PerformanceSettingSelect />
        <div className="flex items-center gap-[5px]">
          <Button variant="danger" className="w-30">
            Turn Off
          </Button>
          <Button className="border-white/5">
            Preferences
            <IconSetting width={20} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
