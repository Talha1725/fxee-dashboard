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
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import {countries} from "@/lib/constants"



export default function ProfileSettings() {
  const { theme } = useTheme();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const { user } = useSelector((state: RootState) => state.auth);
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  console.log(user, "User redux data");

  // Get user initials for avatar fallback (same logic as navbar)
  const getUserInitials = () => {
    if (!user) return "U";
    const names = user.fullName?.split(" ") || [];
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return (
      user.fullName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U"
    );
  };

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle change image button click
  const handleChangeImage = () => {
    fileInputRef.current?.click();
  };

  // Handle remove image
  const handleRemoveImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle apply changes
  const handleApplyChanges = () => {
    // TODO: Implement API call to save changes
    console.log('Saving changes:', { fullName, uploadedImage, selectedCountry });
  };

  // Handle discard changes
  const handleDiscardChanges = () => {
    setFullName(user?.fullName || "");
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-3 mt-5">
        <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-full overflow-hidden">
          <Avatar className="w-full h-full">
            <AvatarImage 
              src={uploadedImage || user?.avatar} 
              alt="user avatar"
            />
            <AvatarFallback className="text-lg font-medium bg-black/10 dark:bg-white/5">
              {getUserInitials()}
            </AvatarFallback>
          </Avatar>
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
              onClick={handleChangeImage}
            >
              Change
            </Button>
            <Button
              variant={"black"}
              className="h-[39px] font-satoshi w-[105px] dark:text-white dark:bg-white/5 bg-transparent text-black border-black/15 dark:border-white/15 hover:bg-white/10 hover:opacity-70"
              onClick={handleRemoveImage}
            >
              Remove
            </Button>
          </div>
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>
      <div className="mt-5">
        <Text18 className={`font-satoshi-medium`}>Full Name</Text18>
        <Input
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
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
          value={user?.email || ""}
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
          className={`rounded-[8px] border mt-2 flex items-center p-2 w-full h-[54px] md:h-[64px] border-black/10 dark:border-white/5 dark:text-white text-black ${
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
          onClick={handleDiscardChanges}
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
