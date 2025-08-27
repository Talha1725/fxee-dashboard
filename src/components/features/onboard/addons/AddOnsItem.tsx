import React from "react";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Text16, Text18 } from "@/components/ui/typography";

export default function AddOnsItem({
  title,
  description,
  price,
  value,
  checked,
  onCheckedChange,
}: {
  title: string;
  description: string;
  price: string;
  value: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <Label className="flex items-start gap-2.5 self-stretch p-3.5 bg-white/3 rounded-[10px] border-green-gradient has-[[aria-checked=true]]:bg-white/20 cursor-pointer transition-all duration-300">
      <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
        <div className="relative w-5 h-5">
          <Checkbox
            checked={checked}
            onCheckedChange={onCheckedChange}
            className="rounded-full cursor-pointer border-2 border-transparent bg-clip-padding p-[2px] data-[state=checked]:bg-black data-[state=checked]:p-[2px] w-5 h-5"
            style={{
              background: checked 
                ? 'linear-gradient(45deg, #4ade80, #3b82f6) padding-box, linear-gradient(45deg, #4ade80, #3b82f6) border-box'
                : 'linear-gradient(45deg, #4ade80, #3b82f6) padding-box, transparent border-box',
              border: '2px solid transparent',
              borderRadius: '50%',
              padding: '2px',
              position: 'relative'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full dark:bg-[#191919] bg-[#EDF2FF]"
            style={{
              width: checked ? '10px' : '13px',
              height: checked ? '10px' : '13px',
              transition: 'all 0.3s ease'
            }}
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-start gap-3 md:gap-2.5 shrink-0 flex-[1_0_0]">
        <div className="flex flex-col items-start gap-[5px] flex-[1_0_0]">
          <Text16>{title}</Text16>
          <p className="dark:text-white/50 mt-1 text-black/60 text-[12px] font-regular liga font-normal">
            {description}
          </p>
        </div>
        <div className="text-right md:w-[160px] text-[18px] font-regular font-medium">
          {(() => {
            if (price.includes('/')) {
              const parts = price.split('/');
              return (
                <>
                  <span className="dark:text-white">{parts[0]}</span>
                  <span className="dark:text-white/80 font-normal text-[14px]">/{parts[1]}</span>
                </>
              );
              } else if (price.includes('for')) {
                const parts = price.split('for');
              return (
                <>
                  <span className="dark:text-white">{parts[0]}</span>
                  <span className="dark:text-white/80 font-normal text-[14px]">for{parts[1]}</span>
                </>
              );
            } else if (price.includes('=')) {
              const parts = price.split('=');
              return (
                <>
                  <span className="dark:text-white">{parts[0]}</span>
                  <span className="dark:text-white/80 font-normal text-[14px]">={parts[1]}</span>
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
