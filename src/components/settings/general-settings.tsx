"use client";

import { useTheme } from "@/lib/contexts/ThemeContext";
import CommonSelect from "../ui/common-select";
import { IconInfoFilled, IconMoon, IconSun } from "../ui/icon";
import { Text14, Text16, Text20 } from "../ui/typography";
import SettingsLabel from "./settings-label";
import * as AllCountry from "country-flag-icons/react/1x1";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";

export default function GeneralSettings() {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<string>("light");
  const [originalTheme, setOriginalTheme] = useState<string>("light");

  // Initialize theme state
  useEffect(() => {
    if (theme) {
      setSelectedTheme(theme);
      setOriginalTheme(theme);
    } else {
      // Default to light theme if no theme is set
      setSelectedTheme("light");
      setOriginalTheme("light");
      setTheme("light");
    }
  }, [theme, setTheme]);

  // Language options with country flags
  const languageOptions = [
    {
      value: "English (US)",
      label: "English (US)",
      flag: <AllCountry.US className="w-5 h-5 rounded-full" />,
    },
    {
      value: "English (UK)",
      label: "English (UK)",
      flag: <AllCountry.GB className="w-5 h-5 rounded-full" />,
    },
    {
      value: "Spanish",
      label: "Spanish",
      flag: <AllCountry.ES className="w-5 h-5 rounded-full" />,
    },
    {
      value: "French",
      label: "French",
      flag: <AllCountry.FR className="w-5 h-5 rounded-full" />,
    },
    {
      value: "German",
      label: "German",
      flag: <AllCountry.DE className="w-5 h-5 rounded-full" />,
    },
    {
      value: "Italian",
      label: "Italian",
      flag: <AllCountry.IT className="w-5 h-5 rounded-full" />,
    },
    {
      value: "Portuguese",
      label: "Portuguese",
      flag: <AllCountry.PT className="w-5 h-5 rounded-full" />,
    },
    {
      value: "Russian",
      label: "Russian",
      flag: <AllCountry.RU className="w-5 h-5 rounded-full" />,
    },
    {
      value: "Chinese",
      label: "Chinese",
      flag: <AllCountry.CN className="w-5 h-5 rounded-full" />,
    },
  ];

  // Custom render function for options with flags
  const renderLanguageOption = (option: {
    value: string;
    label: string;
    flag?: React.ReactNode;
  }) => (
    <div className="flex items-center gap-3">
      {option.flag}
      <span className="font-satoshi">{option.label}</span>
    </div>
  );

  // Timezone options
  const timezoneOptions = [
    {
      value: "GMT-4:00 - Atlantic Standard Time (AST)",
      label: "GMT-4:00 - Atlantic Standard Time (AST)",
    },
    {
      value: "GMT-5:00 - Eastern Standard Time (EST)",
      label: "GMT-5:00 - Eastern Standard Time (EST)",
    },
    {
      value: "GMT-6:00 - Central Standard Time (CST)",
      label: "GMT-6:00 - Central Standard Time (CST)",
    },
    {
      value: "GMT-7:00 - Mountain Standard Time (MST)",
      label: "GMT-7:00 - Mountain Standard Time (MST)",
    },
    {
      value: "GMT-8:00 - Pacific Standard Time (PST)",
      label: "GMT-8:00 - Pacific Standard Time (PST)",
    },
    {
      value: "GMT-9:00 - Alaska Standard Time (AKST)",
      label: "GMT-9:00 - Alaska Standard Time (AKST)",
    },
    {
      value: "GMT-10:00 - Hawaii Standard Time (HST)",
      label: "GMT-10:00 - Hawaii Standard Time (HST)",
    },
    {
      value: "GMT-11:00 - Samoa Standard Time (SST)",
      label: "GMT-11:00 - Samoa Standard Time (SST)",
    },
    {
      value: "GMT-12:00 - International Date Line West (IDLW)",
      label: "GMT-12:00 - International Date Line West (IDLW)",
    },
  ];

  const handleApplyChanges = () => {
    // Set to selected theme
    setTheme(selectedTheme as "light" | "dark");
    setOriginalTheme(selectedTheme);
    localStorage.setItem("ai-trading-theme-preference", selectedTheme);
    // TODO: Save to backend/localStorage
  };

  const handleDiscard = () => {
    setSelectedTheme(originalTheme);
    setTheme(originalTheme as "light" | "dark");
  };

  return (
    <div className="w-full">
      <Text20 className="font-satoshi">Regional Preferences</Text20>
      <Text16 className="dark:opacity-70 mt-1">
        Select your preferences for your region.
      </Text16>

      {/* Language and Timezone Section */}
      <div className="mt-5">
        <div>
          <SettingsLabel label="Language" required />
          <CommonSelect
            placeholder="Select a language"
            defaultValue="English (US)"
            options={languageOptions}
            renderOption={renderLanguageOption}
            className="min-w-full mt-2 rounded-md font-satoshi text-sm"
          />
        </div>
        <div className="mt-3">
          <div className="flex items-center gap-1">
            <SettingsLabel label="Timezone" required />
            <IconInfoFilled
              height={16}
              width={16}
              black={theme === "dark" ? false : true}
            />
          </div>

          <CommonSelect
            placeholder="Select a timezone"
            defaultValue="GMT-4:00 - Atlantic Standard Time (AST)"
            options={timezoneOptions}
            className="min-w-full mt-2 rounded-md font-satoshi text-sm"
          />
        </div>
      </div>

      {/* Theme Section */}
      <div className="mt-5">
        <Text20 className="font-satoshi">Theme Options</Text20>
        <Text16 className="dark:opacity-70 mt-1">
          Pick theme to personalize experience.{" "}
        </Text16>

        <RadioGroup
          value={selectedTheme}
          onValueChange={setSelectedTheme}
          className="mt-5"
        >
          {/* Light Mode Option */}
          <div
            className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
              selectedTheme === "light"
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
            onClick={() => setSelectedTheme("light")}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border dark:border-white/10 border-black/10">
                  <IconSun
                    width={20}
                    height={20}
                    color={theme === "light" ? "#00000099" : "#FFFFFF99"}
                  />
                </div>
                <div className="flex flex-col">
                  <Text16 className="font-satoshi">Light Mode</Text16>
                  <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                    Pick a clean and classic light theme.
                  </Text14>
                </div>
              </div>
              <RadioGroupItem
                value="light"
                id="light"
                className={`${
                  selectedTheme === "light" && "!border-[#3EDC81] !bg-[#3EDC81]"
                }`}
              />
            </div>
          </div>

          {/* Dark Mode Option */}
          <div
            className={`p-4 border cursor-pointer transition-all duration-200 hover:border-[#3EDC81]/50 ${
              selectedTheme === "dark"
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
            onClick={() => setSelectedTheme("dark")}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border dark:border-white/10 border-black/10">
                  <IconMoon
                    width={20}
                    height={20}
                    color={theme === "dark" ? "#FFFFFF99" : "black"}
                  />
                </div>
                <div className="flex flex-col">
                  <Text16 className="font-satoshi">Dark Mode</Text16>
                  <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                    Select a sleek and modern dark theme.
                  </Text14>
                </div>
              </div>
              <RadioGroupItem
                value="dark"
                id="dark"
                className={`${
                  selectedTheme === "dark" && "!border-[#3EDC81] !bg-[#3EDC81]"
                }`}
              />
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="grid sm:grid-cols-2 gap-2 mt-5">
        <Button
          variant={"black"}
          className="h-[52px] font-satoshi w-full dark:text-white dark:bg-white/5 bg-transparent text-black border-black/15 dark:border-white/15 hover:bg-white/10 hover:opacity-70"
          onClick={handleDiscard}
        >
          Discard
        </Button>
        <Button
          variant={theme === "dark" ? "white" : "black"}
          className="h-[52px] font-satoshi-medium w-full"
          onClick={handleApplyChanges}
        >
          Apply Changes
        </Button>
      </div>
    </div>
  );
}
