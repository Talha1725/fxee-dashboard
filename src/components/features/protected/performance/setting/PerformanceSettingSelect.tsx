import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

export default function PerformanceSettingSelect() {
  return (
    <Select>
      <SelectTrigger className="!shadow-none border border-white/5 w-full lg:w-[180px] bg-gradient-to-b from-[#00000010] to-[#00000008] dark:from-[#ffffff10] dark:to-[#FFFFFF08]">
        <SelectValue placeholder="Select Account" />
      </SelectTrigger>
      <SelectContent className="dark:bg-black bg-white text-black dark:text-white">
        <SelectItem value="account1">Account1</SelectItem>
        <SelectItem value="account2">Account2</SelectItem>
        <SelectItem value="account3">Account3</SelectItem>
      </SelectContent>
    </Select>
  );
}
