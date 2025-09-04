import React from "react";
import PerformanceSettingSelect from "./PerformanceSettingSelect";
import { Button } from "@/components/ui/button";
import { IconSetting } from "@/components/ui/icon";

export default function PerformanceSetting() {
  return (
    <div className="flex sm:justify-end items-center gap-5 self-stretch">
      <div className="flex flex-col sm:flex-row items-center gap-[5px] w-full sm:w-auto">
        <PerformanceSettingSelect />
        <div className="flex justify-between sm:justify-end items-center gap-[5px] w-full sm:w-auto">
          <Button variant="danger" className="w-1/2 sm:w-30">
            Turn Off
          </Button>
          <Button className="dark:border-white/5 bg-gradient-to-b from-[#00000010] to-[#00000008] border-transparent dark:from-[#ffffff10] dark:to-[#FFFFFF08] w-[45%] sm:w-30">
            Preferences
            <IconSetting width={20} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
