"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectValue, SelectTrigger, SelectItem, SelectContent } from "../ui/select";
import { Text18, Text20 } from "../ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { useGetTradingPreferencesQuery, useUpdateTradingPreferencesMutation } from "@/lib/redux/services/userApi";
import { toast } from "sonner";

export default function AutoTrade() {
  const { theme } = useTheme();
  const [autoTradeEnabled, setAutoTradeEnabled] = useState(false);
  const [maxRisk, setMaxRisk] = useState("");
  const [maxConcurrentTrades, setMaxConcurrentTrades] = useState("1");
  
  const { data: preferences, isLoading: isLoadingPreferences } = useGetTradingPreferencesQuery();
  const [updatePreferences, { isLoading: isUpdating }] = useUpdateTradingPreferencesMutation();

  // Set values from API data
  useEffect(() => {
    if (preferences?.result) {
      setAutoTradeEnabled(preferences.result.autoTradeEnabled);
      setMaxRisk(preferences.result.maxRiskPerAutoTrade || "");
      setMaxConcurrentTrades(String(preferences.result.maxConcurrentAutoTrades || 1));
    }
  }, [preferences]);

  const handleToggleAutoTrade = async () => {
    const newValue = !autoTradeEnabled;
    setAutoTradeEnabled(newValue);
    
    try {
      await updatePreferences({
        autoTradeEnabled: newValue
      }).unwrap();
      
      toast.success(`Auto trade ${newValue ? "enabled" : "disabled"}!`);
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed to update trading preferences";
      toast.error(errorMessage);
      // Revert on error
      setAutoTradeEnabled(autoTradeEnabled);
    }
  };

  const handleMaxRiskChange = async (value: string) => {
    setMaxRisk(value);
    
    try {
      await updatePreferences({
        maxRiskPerAutoTrade: value || null
      }).unwrap();
      
      toast.success("Max risk per trade updated!");
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed to update trading preferences";
      toast.error(errorMessage);
    }
  };

  const handleMaxConcurrentTradesChange = async (value: string) => {
    setMaxConcurrentTrades(value);
    
    try {
      await updatePreferences({
        maxConcurrentAutoTrades: parseInt(value)
      }).unwrap();
      
      toast.success("Max concurrent trades updated!");
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed to update trading preferences";
      toast.error(errorMessage);
    }
  };
  return (
    <div className="mt-5">
      <Text20 className="font-satoshi">Enable/Disable Auto Trade</Text20>
      <Button
        variant={"black"}
        className={`w-[116px] h-[40px] mt-3 ${
          autoTradeEnabled 
            ? "bg-gradient-to-b from-[#EA4335] to-[#D62F21]" 
            : "bg-gradient-to-b from-[#3EDC81] to-[#2AB165]"
        }`}
        onClick={handleToggleAutoTrade}
        disabled={isUpdating}
      >
        {autoTradeEnabled ? "Turn Off" : "Turn On"}
      </Button>

      <div className="mt-5">
      <div>
        <Text18 className={`font-satoshi`}>Max risk per auto trade</Text18>
        <Input
          placeholder="Enter max risk"
          value={maxRisk}
          onChange={(e) => setMaxRisk(e.target.value)}
          onBlur={() => handleMaxRiskChange(maxRisk)}
          className={`mt-2 w-full h-[44px] border-black/10 dark:border-white/5 dark:text-white text-black ${
            theme === "dark"
              ? "bg-dark-gradient"
              : "bg-gradient-to-b from-[#00000004] to-[#00000003]"
          }`}
        />
      </div>
      <div className="mt-3">
        <Text18 className={`font-satoshi`}>Max concurrent auto trades</Text18>
        <Select value={maxConcurrentTrades} onValueChange={handleMaxConcurrentTradesChange}>
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
                <SelectItem value="4" className="dark:text-white text-black">4</SelectItem>
                <SelectItem value="5" className="dark:text-white text-black">5</SelectItem>
            </SelectContent>
        </Select>
      </div>
      </div>
    </div>
  );
}
