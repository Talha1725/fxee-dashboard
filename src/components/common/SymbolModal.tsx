"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import shade from "@/public/images/shade.png";
import Image from "next/image";
import { Input } from "../ui/input";
import { IconSearch } from "../ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { useState } from "react";
import five from "@/public/images/500.svg";
import dji from "@/public/images/DJI.svg";
import vix from "@/public/images/VIX.svg";
import dxy from "@/public/images/DXY.svg";
import oanda from "@/public/images/oanda.svg";
import binance from "@/public/images/Binance.svg";
import america from "@/public/images/america-circle.svg";
import CurrencyToCountryFlagConverter from "../features/CurrencyToCountryFlagConverter";
import { Plus } from "lucide-react";

// Data mapped from the images
const symbolsData = [
  {
    id: 1,
    symbol: "XAUUSD",
    name: "Gold",
    category: "commodity",
    type: "cfd",
    provider: "OANDA",
    icon: five,
    providerIcon: oanda,
    tab: "All",
  },
  {
    id: 2,
    symbol: "BTCUSD",
    name: "Bitcoin / US Dollar",
    category: "spot crypto",
    type: "crypto",
    provider: "Binance",
    icon: null,
    currency: "BTC/USD",
    providerIcon: binance,
    tab: "Crypto",
  },
  {
    id: 3,
    symbol: "DJI",
    name: "Dow Jones Industrial Average Index",
    category: "fund etf",
    type: "index",
    provider: "TVC",
    icon: dji,
    providerIcon: america,
    tab: "Indices",
  },
  {
    id: 4,
    symbol: "VIX",
    name: "US Volatility Index",
    category: "spot crypto",
    type: "index",
    provider: "Capital Com",
    icon: vix,
    providerIcon: america,
    tab: "Indices",
  },
  {
    id: 5,
    symbol: "DXY",
    name: "US Dollar Currency Index",
    category: "futures",
    type: "currency",
    provider: "TVC",
    icon: dxy,
    providerIcon: america,
    tab: "Forex",
  },
  {
    id: 6,
    symbol: "DXY",
    name: "US Dollar Currency Index",
    category: "futures",
    type: "currency",
    provider: "TVC",
    icon: dxy,
    providerIcon: america,
    tab: "Forex",
  },
  {
    id: 7,
    symbol: "DXY",
    name: "US Dollar Currency Index",
    category: "futures",
    type: "currency",
    provider: "TVC",
    icon: dxy,
    providerIcon: america,
    tab: "Forex",
  },
  {
    id: 8,
    symbol: "DXY",
    name: "US Dollar Currency Index",
    category: "futures",
    type: "currency",
    provider: "TVC",
    icon: dxy,
    providerIcon: america,
    tab: "Forex",
  },
  {
    id: 9,
    symbol: "DXY",
    name: "US Dollar Currency Index",
    category: "futures",
    type: "currency",
    provider: "TVC",
    icon: dxy,
    providerIcon: america,
    tab: "Forex",
  },
  {
    id: 10,
    symbol: "DXY",
    name: "US Dollar Currency Index",
    category: "futures",
    type: "currency",
    provider: "TVC",
    icon: dxy,
    providerIcon: america,
    tab: "Forex",
  },
  {
    id: 11,
    symbol: "DXY",
    name: "US Dollar Currency Index",
    category: "futures",
    type: "currency",
    provider: "TVC",
    icon: dxy,
    providerIcon: america,
    tab: "Forex",
  },
  {
    id: 12,
    symbol: "DXY",
    name: "US Dollar Currency Index",
    category: "futures",
    type: "currency",
    provider: "TVC",
    icon: dxy,
    providerIcon: america,
    tab: "Forex",
  },
  {
    id: 13,
    symbol: "DXY",
    name: "US Dollar Currency Index",
    category: "futures",
    type: "currency",
    provider: "TVC",
    icon: dxy,
    providerIcon: america,
    tab: "Forex",
  },
];

export default function SymbolModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { theme } = useTheme();
  const [selected, setSelected] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const tabs = [
    "All",
    "Indices",
    "Forex",
    "Crypto",
    "Stocks",
    "Funds",
    "Futures",
    "Bonds",
    "Economy",
  ];

  const handleTabClick = (tab: string) => {
    setSelected(tab);
  };

  // Filter data based on selected tab and search term
  const filteredData = symbolsData.filter((item) => {
    const matchesTab = selected === "All" || item.tab === selected;
    const matchesSearch =
      searchTerm === "" ||
      item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Function to truncate text for mobile
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="overflow-hidden !min-w-[100%] md:!min-w-[600px] lg:!min-w-[800px] !p-5 max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-satoshi-bold text-start">Add Symbol</DialogTitle>
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`px-3 gap-1 border-none w-full my-5 min-h-[36px] sm:h-full placeholder:dark:text-white/40 placeholder:!text-black ${
              theme === "dark" ? "bg-dark-gradient" : "bg-light-gradient"
            }`}
            icon={<IconSearch height={20} width={20} />}
          />
          <div
            className={`w-full min-h-[36px] md:mb-5 rounded-lg flex flex-wrap items-center gap-2 ${
              theme === "dark" ? "bg-dark-gradient" : "bg-transparent"
            }`}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`font-satoshi-medium px-3 min-h-[30px] md:min-h-[36px] rounded-md transition-colors duration-200 text-sm md:text-base ${
                  selected === tab
                    ? "text-white dark:text-black bg-black dark:bg-white"
                    : "text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <DialogDescription>
            <div
              style={{
                transform: "scaleX(-1)",
              }}
              className="pointer-events-none fixed top-0 left-0 z-50 dark:opacity-5 opacity-15"
            >
              <Image
                src={shade}
                alt="shade"
                className="w-full h-full scale-125"
              />
            </div>

            <div className="max-h-[400px] overflow-y-auto scrollbar-hide">
              <table className="w-full font-satoshi">
                <tbody>
                  {filteredData.map((item) => (
                    <tr
                      key={item.id}
                      className={`hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${item.id % 2 === 0 ? "dark:bg-gradient-to-r dark:from-white/0 dark:via-white/5 dark:to-white/0" : ""}`}
                    >
                      {/* Symbol + Icon */}
                      <td className="flex items-center gap-1 min-h-[40px] w-[80px] md:w-[100px]">
                        <div className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] flex-shrink-0">
                          {item.icon ? (
                            <Image
                              src={item.icon}
                              alt="symbol"
                              width={20}
                              height={20}
                              className="object-cover w-full h-full"
                            />
                          ) : item.currency ? (
                            <CurrencyToCountryFlagConverter
                              currency={item.currency}
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-300 rounded-full"></div>
                          )}
                        </div>
                        <p className="font-satoshi dark:text-white text-black text-xs md:text-base font-medium">
                          {truncateText(item.symbol, 6)}
                        </p>
                      </td>

                      {/* Name */}
                      <td className="hidden sm:table-cell w-[50%]">
                        <p className="dark:text-white text-black text-xs md:text-base">
                          {item.name}
                        </p>
                      </td>
                      <td className="sm:hidden w-[50%] text-start">
                        <p className="dark:text-white text-black text-xs">
                          {truncateText(item.name, 6)}
                        </p>
                      </td>

                      {/* Category */}
                      <td className="text-start w-[60px] md:w-[100px]">
                        {/* Mobile */}
                        <p className="dark:text-white text-black text-xs md:hidden">
                          {truncateText(item.category, 5)}
                        </p>
                        {/* Desktop */}
                        <p className="dark:text-white text-black text-sm hidden md:block">
                          {item.category}
                        </p>
                      </td>

                      {/* Type */}
                      <td className="text-center w-[60px] md:w-[100px]">
                        {/* Mobile */}
                        <p className="dark:text-white text-black text-xs md:hidden">
                          {truncateText(item.type, 5)}
                        </p>
                        {/* Desktop */}
                        <p className="dark:text-white text-black text-sm hidden md:block">
                          {item.type}
                        </p>
                      </td>

                      {/* Provider */}
                      <td className="text-center w-[60px] md:w-[80px]">
                        {/* Mobile */}
                        <p className="dark:text-white text-black text-xs md:hidden">
                          {truncateText(item.provider, 4)}
                        </p>
                        {/* Desktop */}
                        <p className="dark:text-white text-black text-sm hidden md:block text-nowrap">
                          {item.provider}
                        </p>
                      </td>

                      {/* Provider Icon */}
                      <td className="w-[22px] md:w-[30px]">
                        <div className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]">
                          <Image
                            src={item.providerIcon}
                            alt="provider"
                            width={22}
                            height={22}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </td>

                      {/* Add button */}
                      <td className="w-[30px]">
                        <button
                          className="hover:bg-black/10 dark:hover:bg-white/10 p-1 rounded"
                          onClick={() => {
                            console.log(`Adding symbol: ${item.symbol}`);
                          }}
                        >
                          <Plus className="w-4 h-4 text-black/50 dark:text-white/50" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredData.length === 0 && (
                <div className="text-center py-8">
                  <p className="dark:text-white/60 text-black/60 text-sm">
                    No symbols found
                  </p>
                </div>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
