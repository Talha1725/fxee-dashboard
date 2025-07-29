import React from "react";

import NavbarThemeSwitch from "@/components/features/protected/navbar/NavbarThemeSwitch";
import { Button } from "@/components/ui/button";
import { IconNotification, IconSearch, IconUK } from "@/components/ui/icon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NavbarActions() {
  return (
    <div className="hidden sm:flex items-center gap-1">
      <Button variant="ghost">
        <IconSearch width={20} height={20} />
      </Button>
      <Button variant="ghost">
        <IconNotification width={20} height={20} />
      </Button>
      <Select>
        <SelectTrigger className="border-none bg-dark-gradient cursor-pointer">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="min-w-[40px]">
          <SelectGroup>
            <SelectItem value="uk">
              <IconUK width={20} height={20} />
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <NavbarThemeSwitch />
    </div>
  );
}
