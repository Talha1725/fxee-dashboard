"use client";

import sophia from "@/public/images/sophia.png";
import Image from "next/image";
import { Text14, Text16, Text18, Text20 } from "../ui/typography";
import { Button } from "../ui/button";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { Input } from "../ui/input";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import * as AllCountry from "country-flag-icons/react/1x1";

// Country data with flags and phone codes
const countries = [
  { code: "US", name: "United States", phoneCode: "+1", flag: AllCountry.US },
  { code: "GB", name: "United Kingdom", phoneCode: "+44", flag: AllCountry.GB },
  { code: "CA", name: "Canada", phoneCode: "+1", flag: AllCountry.CA },
  { code: "AU", name: "Australia", phoneCode: "+61", flag: AllCountry.AU },
  { code: "DE", name: "Germany", phoneCode: "+49", flag: AllCountry.DE },
  { code: "FR", name: "France", phoneCode: "+33", flag: AllCountry.FR },
  { code: "JP", name: "Japan", phoneCode: "+81", flag: AllCountry.JP },
  { code: "IN", name: "India", phoneCode: "+91", flag: AllCountry.IN },
  { code: "BR", name: "Brazil", phoneCode: "+55", flag: AllCountry.BR },
  { code: "IT", name: "Italy", phoneCode: "+39", flag: AllCountry.IT },
  { code: "ES", name: "Spain", phoneCode: "+34", flag: AllCountry.ES },
  { code: "NL", name: "Netherlands", phoneCode: "+31", flag: AllCountry.NL },
  { code: "SE", name: "Sweden", phoneCode: "+46", flag: AllCountry.SE },
  { code: "NO", name: "Norway", phoneCode: "+47", flag: AllCountry.NO },
  { code: "DK", name: "Denmark", phoneCode: "+45", flag: AllCountry.DK },
  { code: "FI", name: "Finland", phoneCode: "+358", flag: AllCountry.FI },
  { code: "CH", name: "Switzerland", phoneCode: "+41", flag: AllCountry.CH },
  { code: "AT", name: "Austria", phoneCode: "+43", flag: AllCountry.AT },
  { code: "BE", name: "Belgium", phoneCode: "+32", flag: AllCountry.BE },
  { code: "IE", name: "Ireland", phoneCode: "+353", flag: AllCountry.IE },
];

export default function ProfileSettings() {
  const { theme } = useTheme();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="w-full">
      <div className="flex gap-3 mt-5">
        <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-full overflow-hidden">
          <Image src={sophia} alt="user" />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <Text20
              className={`${
                theme === "dark" ? "font-satoshi" : "font-satoshi-medium"
              }`}
            >
              Upload Image
            </Text20>
            <Text16 className="mt-1 font-extralight font-regular text-black/80 dark:text-white/60">
              Min 400x400px, PNG or JPEG
            </Text16>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Button
              variant={theme === "dark" ? "white" : "black"}
              className="h-[39px] font-satoshi-medium w-[105px]"
            >
              Change
            </Button>
            <Button
              variant={"black"}
              className="h-[39px] font-satoshi w-[105px] dark:text-white dark:bg-white/5 bg-transparent text-black border-black/15 dark:border-white/15 hover:bg-white/10 hover:opacity-70"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Text18 className={`font-satoshi-medium`}>Full Name</Text18>
        <Input
          placeholder="Enter your full name"
          className={`mt-2 w-full h-[44px] border-black/10 dark:border-white/5 dark:text-white text-black ${
            theme === "dark"
              ? "bg-dark-gradient"
              : "bg-gradient-to-b from-[#00000004] to-[#00000003]"
          }`}
        />
      </div>
      <div className="mt-3">
        <Text18 className={`font-satoshi-medium`}>Email</Text18>
        <Input
        disabled={true}
          placeholder="Enter your email"
          className={`mt-2 w-full h-[44px] border-black/10 dark:border-white/5 dark:text-white text-black ${
            theme === "dark"
              ? "bg-dark-gradient"
              : "bg-gradient-to-b from-[#00000004] to-[#00000003]"
          }`}
        />
      </div>
      <div className="mt-3">
        <Text18 className={`font-satoshi-medium`}>Phone Number</Text18>
        <div
          className={`rounded-[8px] border mt-2 flex items-center p-2 w-full h-[64px] border-black/10 dark:border-white/5 dark:text-white text-black ${
            theme === "dark"
              ? "bg-dark-gradient"
              : "bg-gradient-to-b from-[#00000004] to-[#00000003]"
          }`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                             <button className="flex items-center gap-2 pl-4 pr-2 dark:border-r dark:border-white/10 h-full">
                 <div className="w-[20px] h-[20px] rounded-full overflow-hidden">
                   <selectedCountry.flag 
                     className="w-full h-full rounded-full" 
                     style={{ width: '20px', height: '20px' }}
                   />
                 </div>
                <Text14 className="font-satoshi dark:text-white text-black">
                  {selectedCountry.phoneCode}
                </Text14>
                <ChevronDown className="w-4 h-4 dark:text-white text-black" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[280px] max-h-[300px] dark:bg-black bg-white overflow-y-auto scrollbar-hide">
              {countries.map((country) => (
                                 <DropdownMenuItem
                   key={country.code}
                   onClick={() => setSelectedCountry(country)}
                   className="flex items-center gap-3 py-2"
                 >
                  <div className="w-[20px] h-[20px] rounded-full overflow-hidden">
                   <country.flag 
                     className="w-full h-full rounded-full" 
                     style={{ width: '20px', height: '20px' }}
                   />
                 </div>
                   <div className="flex flex-col">
                     <Text14 className="font-satoshi dark:text-white text-black">
                       {country.name}
                     </Text14>
                     <Text14 className="font-satoshi text-gray-500 dark:text-gray-400 text-xs">
                       {country.phoneCode}
                     </Text14>
                   </div>
                 </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            placeholder="000 000 000"
            className={`shadow-none h-full w-full rounded-none border-none dark:text-white text-black dark:bg-[#56565601]`}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-2 mt-3">
        <Button
          variant={"black"}
          className="h-[52px] font-satoshi w-full dark:text-white dark:bg-white/5 bg-transparent text-black border-black/15 dark:border-white/15 hover:bg-white/10 hover:opacity-70"
        >
          Discard
        </Button>
        <Button
          variant={theme === "dark" ? "white" : "black"}
          className="h-[52px] font-satoshi-medium w-full"
        >
          Apply Changes
        </Button>
      </div>
    </div>
  );
}
