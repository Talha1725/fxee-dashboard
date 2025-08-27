"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectValue, SelectTrigger, SelectItem, SelectContent } from "../ui/select";
import { Text18, Text20 } from "../ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useState } from "react";

export default function AutoTrade() {
  const { theme } = useTheme();
  const [fullName, setFullName] = useState("");
  return (
    <div className="mt-5">
      <Text20 className="font-satoshi">Enable/Disable Auto Trade</Text20>
      <Button
        variant={"black"}
        className="bg-gradient-to-b from-[#EA4335] to-[#D62F21] w-[116px] h-[40px] mt-3"
      >
        Turn Off
      </Button>

      <div className="mt-5">
      <div>
        <Text18 className={`font-satoshi`}>Max risk per auto trade</Text18>
        <Input
          placeholder="Enter max risk"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={`mt-2 w-full h-[44px] border-black/10 dark:border-white/5 dark:text-white text-black ${
            theme === "dark"
              ? "bg-dark-gradient"
              : "bg-gradient-to-b from-[#00000004] to-[#00000003]"
          }`}
        />
      </div>
      <div className="mt-3">
        <Text18 className={`font-satoshi`}>Max concurrent auto trades</Text18>
        <Select>
            <SelectTrigger className={`w-full h-[44px] border-black/10 dark:border-white/5 dark:text-white text-black mt-2  ${
            theme === "dark"
              ? "bg-dark-gradient"
              : "bg-gradient-to-b from-[#00000004] to-[#00000003]"
          }`}>
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-black">
                <SelectItem value="1" className="dark:text-white text-black">1</SelectItem>
                <SelectItem value="2" className="dark:text-white text-black">2</SelectItem>
                <SelectItem value="3" className="dark:text-white text-black">3</SelectItem>
            </SelectContent>
        </Select>
      </div>
      </div>
    </div>
  );
}
