"use client";

import { useState, useMemo, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { IconSearch } from "../ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import CurrencyToCountryFlagConverter from "../features/CurrencyToCountryFlagConverter";
import { TRADING_SYMBOLS } from "@/lib/constants";

// Memoized symbol icon mapping
const SYMBOL_ICONS = {
  Forex: "💱",
  Commodities: "🥇", 
  Crypto: "₿",
} as const;

// Transform trading symbols data to match modal structure
const symbolsData = TRADING_SYMBOLS.map((symbol) => ({
  id: symbol.id,
  symbol: symbol.symbol,
  name: symbol.displayName,
  category: symbol.type.toLowerCase(),
  type: symbol.type.toLowerCase(),
  currency: symbol.type === "Forex" ? symbol.displayName : null,
  tab: symbol.type,
  iconEmoji: SYMBOL_ICONS[symbol.type] || "📈",
}));

export default function SymbolModal({
  isOpen,
  onClose,
  onSymbolSelect,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSymbolSelect?: (symbol: string) => void;
}) {
  const { theme } = useTheme();
  const [selected, setSelected] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const tabs = ["All", "Forex", "Commodities", "Crypto"] as const;

  // Memoized filtered data to prevent unnecessary re-filtering
  const filteredData = useMemo(() => 
    symbolsData.filter((item) => {
      const matchesTab = selected === "All" || item.tab === selected;
      const matchesSearch = searchTerm === "" || 
        item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTab && matchesSearch;
    }), [selected, searchTerm]
  );

  // Memoized event handlers
  const handleTabClick = useCallback((tab: string) => {
    setSelected(tab);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleRowClick = useCallback((item: typeof symbolsData[0], index: number) => {
    setSelectedRow(index);
    onSymbolSelect?.(item.symbol);
    onClose();
  }, [onSymbolSelect, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="overflow-hidden !min-w-[90%] md:!min-w-[600px] lg:!min-w-[600px] !p-5 max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-satoshi-bold text-start">Add Symbol</DialogTitle>
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
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
        </DialogHeader>


        <DialogDescription className="p-0">
          <div className="max-h-[400px] overflow-y-auto scrollbar-hide w-full">
              <table className="w-full font-satoshi table-fixed">
                <colgroup>
                  <col className="w-12" />
                  <col className="w-1/4" />
                  <col className="w-1/4" />
                  <col className="w-1/4" />
                </colgroup>
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/10">
                    <th className="text-center py-2 px-1 font-satoshi-medium text-sm text-black/60 dark:text-white/60">#</th>
                    <th className="text-left py-2 px-1 font-satoshi-medium text-sm text-black/60 dark:text-white/60">Symbol</th>
                    <th className="text-left py-2 px-1 font-satoshi-medium text-sm text-black/60 dark:text-white/60">Name</th>
                    <th className="text-left py-2 px-1 font-satoshi-medium text-sm text-black/60 dark:text-white/60">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer ${
                        selectedRow === index 
                          ? "bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500" 
                          : index % 2 === 1 
                            ? "bg-gradient-to-r from-black/0 via-black/5 to-black/0 dark:bg-gradient-to-r dark:from-white/0 dark:via-white/5 dark:to-white/0" 
                            : ""
                      }`}
                      onClick={() => handleRowClick(item, index)}
                    >
                      {/* Number */}
                      <td className="text-center py-2 px-1">
                        <p className="dark:text-white text-black text-xs md:text-sm font-medium">
                          {index + 1}
                        </p>
                      </td>

                      {/* Symbol + Icon */}
                      <td className="py-2 px-1">
                        <div className="flex items-center gap-2 min-h-[40px]">
                          <div className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] flex-shrink-0 flex items-center justify-center">
                            {item.type === "forex" ? (
                              <CurrencyToCountryFlagConverter
                                currency={item.currency || item.name}
                              />
                            ) : (
                              <span className="text-sm md:text-base">{item.iconEmoji}</span>
                            )}
                          </div>
                          <p className="font-satoshi dark:text-white text-black text-xs md:text-base font-medium">
                            {item.symbol}
                          </p>
                        </div>
                      </td>

                      {/* Name */}
                      <td className="py-2 px-1">
                        <p className="dark:text-white text-black text-xs md:text-base">
                          {item.name}
                        </p>
                      </td>

                      {/* Category */}
                      <td className="py-2 px-1">
                        <p className="dark:text-white text-black text-xs md:text-base">
                          {item.category}
                        </p>
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
      </DialogContent>
    </Dialog>
  );
}
