import React from "react";

import { Button } from "@/components/ui/button";
import { IconArrowDown, IconArrowUp } from "@/components/ui/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label, PopularBadge } from "@/components/ui/typography";

export default function NavbarProfile() {
  return (
    <div className="flex items-center gap-1.5 p-1 rounded-[10px]">
      <Button
        variant="ghost"
        className="!text-black bg-white font-[700] hover:bg-white/80 py-2 md:flex hidden"
      >
        Upgrade
        <IconArrowUp width={20} height={20} color="black" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="flex items-center gap-2 relative">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Label>Reku</Label>
              <PopularBadge className="flex justify-center items-center gap-2.5 p-[3px] absolute left-[21px] bottom-0 rounded-[3px]">
                Pro
              </PopularBadge>
            </div>
            <IconArrowDown width={20} height={20} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="lg:hidden block">
            Demo Account
          </DropdownMenuItem>
          <DropdownMenuItem className="md:hidden block">
            <div className="flex justify-between items-center self-stretch">
              Upgrade
              <IconArrowUp width={20} height={20} color="black" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="sm:hidden block">Theme</DropdownMenuItem>
          <DropdownMenuItem className="sm:hidden block">
            Search
          </DropdownMenuItem>
          <DropdownMenuItem className="sm:hidden block">
            Notifications
          </DropdownMenuItem>
          <DropdownMenuItem className="sm:hidden block">
            Language
          </DropdownMenuItem>
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
