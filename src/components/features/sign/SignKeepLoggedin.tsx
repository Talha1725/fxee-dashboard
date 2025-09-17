import React, { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Description14 } from "@/components/ui/typography";

interface SignKeepLoggedinProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export default function SignKeepLoggedin({ 
  checked = false, 
  onCheckedChange 
}: SignKeepLoggedinProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckedChange = (newChecked: boolean) => {
    setIsChecked(newChecked);
    onCheckedChange?.(newChecked);
  };

  return (
    <Label className="flex items-center gap-2 flex-[1_0_0] cursor-pointer">
      <Checkbox 
        checked={isChecked}
        onCheckedChange={handleCheckedChange}
        className="bg-white dark:bg-black border-black dark:border-white data-[state=checked]:bg-dark-gradient data-[state=checked]:border-picton-blue" 
      />
      <Description14 className="leading-5 tracking-[-0.084px]">
        Keep me logged in
      </Description14>
    </Label>
  );
}
{
  /* <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
  <Checkbox
    id="toggle-2"
    defaultChecked
    className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
  />
  <div className="grid gap-1.5 font-normal">
    <p className="text-sm leading-none font-medium">Enable notifications</p>
    <p className="text-muted-foreground text-sm">
      You can enable or disable notifications at any time.
    </p>
  </div>
</Label>; */
}
