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
      <SelectTrigger className="border border-white/5 w-full">
        <SelectValue placeholder="Select Account" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="account1">Account1</SelectItem>
        <SelectItem value="account2">Account2</SelectItem>
        <SelectItem value="account3">Account3</SelectItem>
      </SelectContent>
    </Select>
  );
}
