import { Text14, Text16, Text18 } from "../ui/typography";
import { RadioGroup } from "../ui/radio-group";
import { RadioGroupItem } from "../ui/radio-group";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { useGetTradingPreferencesQuery, useUpdateTradingPreferencesMutation } from "@/lib/redux/services/userApi";
import { toast } from "sonner";

export default function TradingRisk() {
  const { theme } = useTheme();
  const [selectedRisk, setSelectedRisk] = useState("low");
  
  const { data: preferences, isLoading: isLoadingPreferences } = useGetTradingPreferencesQuery();
  const [updatePreferences, { isLoading: isUpdating }] = useUpdateTradingPreferencesMutation();

  // Set value from API data
  useEffect(() => {
    if (preferences?.result?.riskProfile) {
      setSelectedRisk(preferences.result.riskProfile);
    }
  }, [preferences]);

  const handleValueChange = async (value: string) => {
    setSelectedRisk(value);
    
    try {
      await updatePreferences({
        riskProfile: value as "low" | "medium" | "high"
      }).unwrap();
      
      toast.success("Risk profile updated!");
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed to update trading preferences";
      toast.error(errorMessage);
      // Revert on error
      setSelectedRisk(preferences?.result?.riskProfile || "low");
    }
  };

  return (
    <div className="mt-5">
      <Text18 className="font-satoshi">Risk profile</Text18>

      <RadioGroup
        value={selectedRisk}
        onValueChange={handleValueChange}
        className="mt-3 grid lg:grid-cols-3 gap-3"
      >
        {/* Low Risk */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedRisk === "low"
              ? "border-[#3EDC81] dark:!bg-gradient-to-b dark:from-white/5 dark:to-white/2"
              : "dark:border-white/10 border-black/5"
          } rounded-lg`}
          style={{
            backgroundColor:
              theme === "light"
                ? "rgba(0, 0, 0, 0.02)"
                : "rgba(255, 255, 255, 0.02)",
            background:
              theme === "light"
                ? "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)"
                : "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)",
          }}
          onClick={() => handleValueChange("low")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <Text16 className="font-satoshi">Low</Text16>
                
              </div>
            </div>
            <RadioGroupItem
              value="low"
              id="low"
              className={`${
                selectedRisk === "low" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>

        {/* Medium Risk */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedRisk === "medium"
              ? "border-[#3EDC81] dark:!bg-gradient-to-b dark:from-white/5 dark:to-white/2"
              : "dark:border-white/10 border-black/5"
          } rounded-lg`}
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.02)"
                : "rgba(0, 0, 0, 0.02)",
            background:
              theme === "dark"
                ? "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)"
                : "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)",
          }}
          onClick={() => handleValueChange("medium")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
             
              <div className="flex flex-col">
                <Text16 className="font-satoshi">Medium</Text16>
                
              </div>
            </div>
            <RadioGroupItem
              value="medium"
              id="medium"
              className={`${
                selectedRisk === "medium" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>

        {/* High Risk */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedRisk === "high"
              ? "border-[#3EDC81] dark:!bg-gradient-to-b dark:from-white/5 dark:to-white/2"
              : "dark:border-white/10 border-black/5"
          } rounded-lg`}
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.02)"
                : "rgba(0, 0, 0, 0.02)",
            background:
              theme === "dark"
                ? "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)"
                : "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)",
          }}
          onClick={() => handleValueChange("high")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
             
              <div className="flex flex-col">
                <Text16 className="font-satoshi">High</Text16>
                
              </div>
            </div>
            <RadioGroupItem
              value="high"
              id="high"
              className={`${
                selectedRisk === "high" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>
      </RadioGroup>
    </div>
  );
}
