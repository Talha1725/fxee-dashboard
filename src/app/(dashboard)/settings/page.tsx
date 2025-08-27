"use client";

import GeneralSettings from "@/components/settings/general-settings";
import PrivacySettings from "@/components/settings/privacy-settings";
import ProfileSettings from "@/components/settings/profile-settings";
import TradingPreferenceSection from "@/components/settings/trading-prefernce-section";
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
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function page() {
  const { theme } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get initial tab from URL query param or default to "profile-settings"
  const initialTab = searchParams.get("tab") || "profile-settings";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Update URL when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Create new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    
    // Update URL without page reload
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Sync with URL changes (for browser back/forward)
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab") || "profile-settings";
    if (tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams, activeTab]);

  return (
    <div className="flex flex-col md:flex-row md:items-start w-full gap-5 relative scrollbar-hide scroll-smooth">
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
              activeTab === "profile-settings"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => handleTabChange("profile-settings")}
          >
            {activeTab === "profile-settings" ? (
              <IconUserSettingActive />
            ) : (
              <IconUserSetting />
            )}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "profile-settings"
                  ? "dark:text-white text-black"
                  : "dark:text-white/60 text-black"
              }`}
            >
              Profile
            </Text14>
          </div>

          <div
            className={`flex items-center gap-1.5 p-2 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-[8px] ${
              activeTab === "general-settings"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => handleTabChange("general-settings")}
          >
            {activeTab === "general-settings" ? <IconGlobeActive /> : <IconGlobe />}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "general-settings"
                  ? "dark:text-white text-black"
                  : "dark:text-white/60 text-black"
              }`}
            >
              General Settings
            </Text14>
          </div>

          <div
            className={`flex items-center gap-1.5 p-2 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-[8px] ${
              activeTab === "privacy-security"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => handleTabChange("privacy-security")}
          >
            {activeTab === "privacy-security" ? <IconPrivacyActive /> : <IconPrivacy />}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "privacy-security"
                  ? "dark:text-white text-black"
                  : "dark:text-white/60 text-black"
              }`}
            >
              Privacy & Security
            </Text14>
          </div>

          <div
            className={`flex items-center gap-1.5 p-2 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-[8px] ${
              activeTab === "trading-preferences"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => handleTabChange("trading-preferences")}
          >
            {activeTab === "trading-preferences" ? (
              <IconPrefernceActive />
            ) : (
              <IconPrefernce />
            )}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "trading-preferences"
                  ? "dark:text-white text-black"
                  : "dark:text-white/60 text-black"
              }`}
            >
              Trading Preferences
            </Text14>
          </div>

          <div
            className={`flex items-center gap-1.5 p-2 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-[8px] ${
              activeTab === "linked-broker-account"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => handleTabChange("linked-broker-account")}
          >
            {activeTab === "linked-broker-account" ? <LinkIconActive /> : <LinkIcon />}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "linked-broker-account"
                  ? "dark:text-white text-black"
                  : "dark:text-white/60 text-black"
              }`}
            >
              Linked Broker Account
            </Text14>
          </div>

          <div
            className={`flex items-center gap-1.5 p-2 hover:bg-white/10 cursor-pointer transition-all duration-300 rounded-[8px] ${
              activeTab === "subscription-billing"
                ? "dark:backdrop-blur-[7px] bg-gradient-to-b from-[#15b0f817] dark:from-white/10 to-[#0276db16] dark:to-white/10"
                : "dark:backdrop-blur-[7px] hover:bg-gradient-to-b hover:from-[#15b0f817] hover:dark:from-white/10 hover:to-[#0276db16] hover:dark:to-white/10"
            }`}
            onClick={() => handleTabChange("subscription-billing")}
          >
            {activeTab === "subscription-billing" ? <BillIconActive /> : <BillIcon />}
            <Text14
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              } ${
                activeTab === "subscription-billing"
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

      {activeTab === "profile-settings" && <ProfileSettings />}
      {activeTab === "general-settings" && <GeneralSettings />}
      {activeTab === "privacy-security" && <PrivacySettings />}
      {activeTab === "trading-preferences" && <TradingPreferenceSection />}
    </div>
  );
}
