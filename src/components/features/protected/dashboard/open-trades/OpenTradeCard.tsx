"use client";
import CurrencyToCountryFlagConverter from "@/components/features/CurrencyToCountryFlagConverter";
import { IconTradeDown, IconTradeUp } from "@/components/ui/icon";
import { Text16, Text24 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import DashboardHeadBadge from "../DashboardHeadBadge";

export default function OpenTradeCard({ value = 24.8 }: { value?: number }) {
  const { theme } = useTheme();
  return (
    <div>
      <div className="flex items-center gap-2">
        <CurrencyToCountryFlagConverter currency="BTC/USD" />
        <Text16 className="font-satoshi-medium dark:text-white text-black">
          BTC/USD
        </Text16>
      </div>
      <div className="my-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Text24 className="font-satoshi-medium dark:text-white text-black">
            +$5,432
          </Text24>
          <div className="flex gap-1 items-center">
            {value && value > 0 ? (
              <IconTradeUp
                width={18}
                height={18}
                color={theme === "dark" ? "var(--green)" : "#079744"}
              />
            ) : (
              <IconTradeDown
                width={18}
                height={18}
                color={theme === "dark" ? "var(--danger)" : "#EA4335"}
              />
            )}
            <p className="text-sm text-green font-satoshi">24.80%</p>
          </div>
        </div>
        <DashboardHeadBadge className="font-satoshi dark:text-white text-black flex items-center gap-1 px-3 !border-none dark:!border rounded-lg">
          <p>Long</p>
          {value && value > 0 ? (
            <IconTradeUp
              width={18}
              height={18}
              color={theme === "dark" ? "var(--green)" : "#079744"}
            />
          ) : (
            <IconTradeDown
              width={18}
              height={18}
              color={theme === "dark" ? "var(--danger)" : "#EA4335"}
            />
          )}
        </DashboardHeadBadge>
      </div>
    </div>
  );
}
