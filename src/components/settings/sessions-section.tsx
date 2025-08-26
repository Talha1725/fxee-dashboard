"use client";

import { X } from "lucide-react";
import { Text12, Text14, Text16, Text20 } from "../ui/typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { ChromeIcon, LaptopIcon, MobileIcon, MozillaIcon } from "../ui/icon";
import { Button } from "../ui/button";

export default function SessionsSection() {
  const { theme } = useTheme();
  return (
    <div className="mt-5">
      <Text20 className="font-satoshi">Active Sessions</Text20>
      <Text16 className="dark:opacity-70 mt-1">
        Monitor and manage all your active sessions.{" "}
      </Text16>

      <div className="mt-5">
        <div
          className={`p-4 border cursor-pointer transition-all duration-200
             rounded-lg`}
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
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center dark:bg-white/10 border border-black/10">
                <LaptopIcon />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Text16
                    className={`${
                      theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
                    }`}
                  >
                    Macbook Pro
                  </Text16>
                  <Text12 className="font-satoshi dark:text-white/70 text-black/70">
                    (15 mins ago){" "}
                  </Text12>
                </div>
                <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                  London, United Kingdom{" "}
                </Text14>
              </div>
            </div>
            <X className="w-4 h-4 dark:text-white/60" />
          </div>
        </div>
        <div
          className={`p-4 mt-3 border cursor-pointer transition-all duration-200
             rounded-lg`}
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
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center dark:bg-white/10 border border-black/10">
                <MobileIcon />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Text16
                    className={`${
                      theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
                    }`}
                  >
                    iPhone X
                  </Text16>
                  <Text12 className="font-satoshi dark:text-white/70 text-black/70">
                    (30 mins ago){" "}
                  </Text12>
                </div>
                <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                  London, United Kingdom{" "}
                </Text14>
              </div>
            </div>
            <X className="w-4 h-4 dark:text-white/60" />
          </div>
        </div>
        <div
          className={`p-4 mt-3 border cursor-pointer transition-all duration-200
             rounded-lg`}
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
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center dark:bg-white/10 border border-black/10">
                <MozillaIcon />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Text16
                    className={`${
                      theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
                    }`}
                  >
                    Mozilla Firefox
                  </Text16>
                  <Text12 className="font-satoshi dark:text-white/70 text-black/70">
                    (45 mins ago){" "}
                  </Text12>
                </div>
                <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                  London, United Kingdom{" "}
                </Text14>
              </div>
            </div>
            <X className="w-4 h-4 dark:text-white/60" />
          </div>
        </div>
        <div
          className={`p-4 mt-3 border cursor-pointer transition-all duration-200
             rounded-lg`}
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
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center dark:bg-white/10 border border-black/10">
                <ChromeIcon />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Text16
                    className={`${
                      theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
                    }`}
                  >
                    Google Chrome
                  </Text16>
                  <Text12 className="font-satoshi dark:text-white/70 text-black/70">
                    (2 hour ago){" "}
                  </Text12>
                </div>
                <Text14 className="font-satoshi dark:text-white/70 text-black/70">
                  London, United Kingdom{" "}
                </Text14>
              </div>
            </div>
            <X className="w-4 h-4 dark:text-white/60" />
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
       
        <Button
          variant={"white"}
          className="h-[52px] font-satoshi-medium w-full !bg-transparent !text-[#EA4335] !border-[#EA4335] hover:opacity-70 transition-all duration-200"
          
        >
Select Devices to Log Out</Button>
      </div>
    </div>
  );
}
