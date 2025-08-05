import React from "react";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Text18 } from "@/components/ui/typography";

export default function AddOnsItem({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: string;
}) {
  return (
    <Label className="flex items-start gap-2.5 self-stretch p-3.5 bg-white/3 rounded-[10px] border-green-gradient has-[[aria-checked=true]]:bg-white/20 cursor-pointer transition-all duration-300">
      <Checkbox
        id="toggle-2"
        className="border-green-gradient before:p-[2px] border-none rounded-full data-[state=checked]:bg-transparent data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
      />
      <div className="flex items-start gap-2.5 shrink-0 flex-[1_0_0]">
        <div className="flex flex-col items-start gap-[5px] flex-[1_0_0]">
          <Text18>{title}</Text18>
          <p className="dark:text-white/80 text-black/60 text-[14px] font-regular liga font-normal">
            {description}
          </p>
        </div>
        <div className="text-right w-[160px] text-[18px] font-regular font-medium">
          {(() => {
            if (price.includes('/')) {
              const parts = price.split('/');
              return (
                <>
                  <span className="dark:text-white">{parts[0]}</span>
                  <span className="dark:text-white/80 font-normal text-[16px]">/{parts[1]}</span>
                </>
              );
              } else if (price.includes('for')) {
                const parts = price.split('for');
              return (
                <>
                  <span className="dark:text-white">{parts[0]}</span>
                  <span className="dark:text-white/80 font-normal text-[16px]">for{parts[1]}</span>
                </>
              );
            } else if (price.includes('=')) {
              const parts = price.split('=');
              return (
                <>
                  <span className="dark:text-white">{parts[0]}</span>
                  <span className="dark:text-white/80 font-normal text-[16px]">={parts[1]}</span>
                </>
              );
            } else {
              return <span className="dark:text-white">{price}</span>;
            }
          })()}
        </div>
      </div>
    </Label>
  );
}
