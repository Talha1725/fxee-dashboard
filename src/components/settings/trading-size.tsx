import { Text14, Text16, Text18 } from "../ui/typography";
import { RadioGroup } from "../ui/radio-group";
import { RadioGroupItem } from "../ui/radio-group";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useState, useEffect } from "react";

export default function TradingSize() {
  const { theme } = useTheme();
  const [selectedFA, setSelectedFA] = useState("fixed");

  // Set default value on component mount
  useEffect(() => {
    setSelectedFA("fixed");
  }, []);

  const handleValueChange = (value: string) => {
    setSelectedFA(value);
    // Here you can add additional logic like saving to localStorage or API
    console.log("Trading size logic changed to:", value);
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
