import { Text14, Text16, Text18 } from "../ui/typography";
import { RadioGroup } from "../ui/radio-group";
import { RadioGroupItem } from "../ui/radio-group";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { useGetTradingPreferencesQuery, useUpdateTradingPreferencesMutation } from "@/lib/redux/services/userApi";
import { toast } from "sonner";

export default function PreferredAssets() {
  const { theme } = useTheme();
  const [selectedAsset, setSelectedAsset] = useState("both");
  
  const { data: preferences, isLoading: isLoadingPreferences } = useGetTradingPreferencesQuery();
  const [updatePreferences, { isLoading: isUpdating }] = useUpdateTradingPreferencesMutation();

  // Set value from API data
  useEffect(() => {
    if (preferences?.result?.preferredAssets) {
      setSelectedAsset(preferences.result.preferredAssets);
    }
  }, [preferences]);

  const handleValueChange = async (value: string) => {
    setSelectedAsset(value);
    
    try {
      await updatePreferences({
        preferredAssets: value as "crypto" | "forex" | "both"
      }).unwrap();
      
      toast.success("Preferred assets updated!");
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Failed to update trading preferences";
      toast.error(errorMessage);
      // Revert on error
      setSelectedAsset(preferences?.result?.preferredAssets || "both");
    }
  };

  return (
    <div className="mt-5">
      <Text18 className="font-satoshi">Preferred asset classes</Text18>

      <RadioGroup
        value={selectedAsset}
        onValueChange={handleValueChange}
        className="mt-3 grid lg:grid-cols-3 gap-3"
      >
        {/* Crypto */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedAsset === "crypto"
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
          onClick={() => handleValueChange("crypto")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <Text16 className="font-satoshi">Crypto</Text16>
                
              </div>
            </div>
            <RadioGroupItem
              value="crypto"
              id="crypto"
              className={`dark:bg-transparent ${
                selectedAsset === "crypto" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>

        {/* Forex */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedAsset === "forex"
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
          onClick={() => handleValueChange("forex")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
             
              <div className="flex flex-col">
                <Text16 className="font-satoshi">Forex</Text16>
                
              </div>
            </div>
            <RadioGroupItem
              value="forex"
              id="forex"
              className={`dark:bg-transparent ${
                selectedAsset === "forex" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>

        {/* Both */}
        <div
          className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
            selectedAsset === "both"
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
          onClick={() => handleValueChange("both")}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
             
              <div className="flex flex-col">
                <Text16 className="font-satoshi">Both</Text16>
                
              </div>
            </div>
            <RadioGroupItem
              value="both"
              id="both"
              className={`dark:bg-transparent ${
                selectedAsset === "both" && "!border-[#3EDC81] !bg-[#3EDC81]"
              }`}
            />
          </div>
        </div>
      </RadioGroup>
    </div>
  );
}
