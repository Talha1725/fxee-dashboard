"use client";

import React from "react";

import HomeNewsSwitch from "@/components/features/protected/home/homeNewsAI/HomeNewsSwitch";

import { Input } from "@/components/ui/input";
import { Text18 } from "@/components/ui/typography";
import { IconSearch } from "@/components/ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useLocalization } from "@/components/localization-provider";

export default function HomeNewsHead() {
  const { theme } = useTheme();
  const { t } = useLocalization();
  return (
    <div className="flex flex-col 2xl:flex-row justify-center items-start 2xl:items-center gap-2.5 self-stretch">
      <Text18 className="flex-[1_0_0] shrink-0 whitespace-nowrap min-w-fit font-satoshi-medium">
        {t("news_and_market_impact")}
      </Text18>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 self-stretch">
        <HomeNewsSwitch />
        <Input
          placeholder={t("search")}
          className={`px-3 py-1 gap-1 border-none w-full sm:w-[260px] h-[36px] sm:h-full placeholder:dark:text-white/40 placeholder:!text-black ${theme === "dark" ? "bg-dark-gradient" : "bg-light-gradient"}`}
          icon={<IconSearch height={20} width={20} />}
        />
      </div>
    </div>
  );
}
