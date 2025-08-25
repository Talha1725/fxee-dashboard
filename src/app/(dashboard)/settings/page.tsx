"use client";

import ProfileSettings from "@/components/settings/profile-settings";
import {
  IconUserSetting,
  IconUserSettingActive,
  IconGlobe,
  IconGlobeActive,
  IconPrivacy,
  IconPrivacyActive,
  IconPrefernce,
  IconPrefernceActive,
  LinkIcon,
  LinkIconActive,
  BillIcon,
  BillIconActive,
} from "@/components/ui/icon";
import { Text14 } from "@/components/ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import React, { useState } from "react";

export default function page() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="flex flex-col md:flex-row md:items-start w-full gap-5">
      {/* Tabs */}
      <div className="md:min-w-[335px] md:max-w-[335px] w-full">
      <div
        className={`w-full p-4 self-stretch rounded-[16px] border border-black/5 dark:border-white/5 bg-gradient-to-b from-[#00000007] to-[#00000007]  dark:backdrop-blur-[7px]`}
      >
        <div className="px-2">
          <Text14
            className={`${
              theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
            } dark:text-white/60 !tracking-[1px]`}
          >
            Choose Between Settings
          </Text14>
        </div>
        <div className="flex flex-col gap-2.5 mt-5">
          <div
            className={`flex items-center gap-1.5 p-2 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-[8px] ${
              activeTab === "profile"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            {activeTab === "profile" ? (
              <IconUserSettingActive />
            ) : (
              <IconUserSetting />
            )}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "profile"
                  ? "dark:text-white text-black"
                  : "dark:text-white/60 text-black"
              }`}
            >
              Profile
            </Text14>
          </div>

          <div
            className={`flex items-center gap-1.5 p-2 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-[8px] ${
              activeTab === "general"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => setActiveTab("general")}
          >
            {activeTab === "general" ? <IconGlobeActive /> : <IconGlobe />}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "general"
                  ? "dark:text-white text-black"
                  : "dark:text-white/60 text-black"
              }`}
            >
              General Settings
            </Text14>
          </div>

          <div
            className={`flex items-center gap-1.5 p-2 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-[8px] ${
              activeTab === "privacy"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => setActiveTab("privacy")}
          >
            {activeTab === "privacy" ? <IconPrivacyActive /> : <IconPrivacy />}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "privacy"
                  ? "dark:text-white text-black"
                  : "dark:text-white/60 text-black"
              }`}
            >
              Privacy & Security
            </Text14>
          </div>

          <div
            className={`flex items-center gap-1.5 p-2 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-[8px] ${
              activeTab === "trading"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => setActiveTab("trading")}
          >
            {activeTab === "trading" ? (
              <IconPrefernceActive />
            ) : (
              <IconPrefernce />
            )}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "trading"
                  ? "dark:text-white text-black"
                  : "dark:text-white/60 text-black"
              }`}
            >
              Trading Preferences
            </Text14>
          </div>

          <div
            className={`flex items-center gap-1.5 p-2 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-[8px] ${
              activeTab === "broker"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => setActiveTab("broker")}
          >
            {activeTab === "broker" ? <LinkIconActive /> : <LinkIcon />}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "broker"
                  ? "dark:text-white text-black"
                  : "dark:text-white/60 text-black"
              }`}
            >
              Linked Broker Account
            </Text14>
          </div>

          <div
            className={`flex items-center gap-1.5 p-2 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-[8px] ${
              activeTab === "subscription"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => setActiveTab("subscription")}
          >
            {activeTab === "subscription" ? <BillIconActive /> : <BillIcon />}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "subscription"
                  ? "dark:text-white text-black"
                  : "dark:text-white/60 text-black"
              }`}
            >
              Subscription & Billing
            </Text14>
          </div>
        </div>
      </div>
      </div>

      {activeTab === "profile" && <ProfileSettings />}
    </div>
  );
}
