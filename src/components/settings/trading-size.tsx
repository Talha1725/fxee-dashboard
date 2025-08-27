import { Text14, Text16, Text18 } from "../ui/typography";
import { RadioGroup } from "../ui/radio-group";
import { RadioGroupItem } from "../ui/radio-group";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { useGetTradingPreferencesQuery, useUpdateTradingPreferencesMutation } from "@/lib/redux/services/userApi";
import { toast } from "sonner";

export default function TradingSize() {
  const { theme } = useTheme();
  const [selectedFA, setSelectedFA] = useState("fixed");
  
  const { data: preferences, isLoading: isLoadingPreferences } = useGetTradingPreferencesQuery();
  const [updatePreferences, { isLoading: isUpdating }] = useUpdateTradingPreferencesMutation();

  // Set value from API data
  useEffect(() => {
    if (preferences?.result?.tradeSizeLogic) {
      setSelectedFA(preferences.result.tradeSizeLogic);
    }
  }, [preferences]);

  const handleValueChange = async (value: string) => {
    setSelectedFA(value);
    
    try {
      await updatePreferences({
        tradeSizeLogic: value as "fixed" | "percentage"
      }).unwrap();
      
      toast.success("Trading size preference updated!");
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed to update trading preferences";
      toast.error(errorMessage);
      // Revert on error
      setSelectedFA(preferences?.result?.tradeSizeLogic || "fixed");
    }
  };

  return (
    <div className="mt-5">
      <Text18 className="font-satoshi">Default trade size logic</Text18>

      <RadioGroup
        value={selectedFA}
        onValueChange={handleValueChange}
        className="mt-3 grid lg:grid-cols-2 gap-3"
      >
        {/* Fixed Amount */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedFA === "fixed"
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
          onClick={() => handleValueChange("fixed")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <Text16 className="font-satoshi">Fixed $ Amount</Text16>
                
              </div>
            </div>
            <RadioGroupItem
              value="fixed"
              id="fixed"
              className={`dark:bg-transparent dark:border-white/80 ${
                selectedFA === "fixed" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>

        {/* Percentage of capital */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedFA === "percentage"
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
          onClick={() => handleValueChange("percentage")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
             
              <div className="flex flex-col">
                <Text16 className="font-satoshi">% of capital</Text16>
                
              </div>
            </div>
            <RadioGroupItem
              value="percentage"
              id="percentage"
              className={`dark:bg-transparent dark:border-white/80 ${
                selectedFA === "percentage" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>
      </RadioGroup>
    </div>
  );
}
