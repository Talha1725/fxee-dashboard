"use client";
import { useTheme } from "@/lib/contexts/ThemeContext";
import Image from "next/image";
import binance from "@/public/images/Binance.svg";
import { Text12, Text14, Text16 } from "../ui/typography";
import { Button } from "../ui/button";

interface LinkedCardProps {
  exchangeName: string;
  username: string;
  balanceSyncTime: string;
  isConnected: boolean;
  onDisconnect: () => void;
  logo?: string;
}

export default function LinkedCard({
  exchangeName,
  username,
  balanceSyncTime,
  isConnected,
  onDisconnect,
  logo = binance,
}: LinkedCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full p-4 rounded-md ${
        theme === "dark"
          ? "bg-card-sec-green-gradient"
          : "bg-card-sec-light-green-gradient"
      }`}
    >
      <div className="flex w-full items-start lg:justify-between">
        <div className="flex gap-2 w-full">
          <div className="w-[40px] h-[40px]">
            <Image
              src={logo}
              alt={exchangeName.toLowerCase()}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex w-full flex-col gap-1">
            <div className="flex justify-between lg:justify-start items-center lg:items-end gap-1">
              <Text14 className="font-satoshi !text-white">
                {exchangeName}
              </Text14>
              <Text12 className="font-satoshi dark:!text-white/60 !text-white/80 lg:block hidden">
                {username}
              </Text12>
              <div
                className={`text-black font-satoshi text-xs py-1 px-2 rounded-sm lg:hidden block ${
                  isConnected ? "bg-[#3EDC81]" : "bg-gray-400"
                }`}
              >
                {isConnected ? "Connected" : "Disconnected"}
              </div>
            </div>
            <Text12 className="font-satoshi dark:!text-white/60 !text-white/80 lg:hidden block">
              {username}
            </Text12>
            <Text12 className="font-satoshi dark:!text-white/60 !text-white/80">
              Balance sync time: {balanceSyncTime}
            </Text12>

            <Button
              variant={"black"}
              className="bg-gradient-to-b from-[#EA4335] to-[#D62F21] w-[116px] h-[35px] mt-1"
              onClick={onDisconnect}
            >
              Disconnect
            </Button>
          </div>
        </div>
        <div
          className={`text-black font-satoshi text-xs py-1 px-2 rounded-sm lg:block hidden ${
            isConnected ? "bg-[#3EDC81]" : "bg-gray-400"
          }`}
        >
          {isConnected ? "Connected" : "Disconnected"}
        </div>
      </div>
    </div>
  );
}
