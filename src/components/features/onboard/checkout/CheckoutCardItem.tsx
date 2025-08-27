import React from "react";

import { Text18, Title24 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { IconFlashlight } from "@/components/ui/icon";

export default function CheckoutCardItem({
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  title,
  price,
}: {
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: (method: string) => void;
  title: string;
  price: string;
}) {
  const { theme } = useTheme();
  const isSelected = selectedPaymentMethod === title;
  
  return (
    <div
      className={cn(
        `not-only:flex items-center gap-4 self-stretch rounded-[10px] border dark:border-white/30 border-black/30 ${
          theme === "dark" ? "bg-dark-secondary-gradient" : ""
        } cursor-pointer transition-all duration-300`,
        selectedPaymentMethod === title &&
          `border-none border-green-gradient ${
            theme === "dark"
              ? "bg-green-radial-gradient"
              : "bg-light-green-gradient"
          }`
      )}
      onClick={() => setSelectedPaymentMethod(title)}
    >
      <div className="flex flex-col gap-4 flex-[1_0_0] self-stretch">
        {title === "Crypto" && selectedPaymentMethod === title && (
          <div className="w-full flex justify-center items-center gap-[5px] px-2.5 py-[5px] self-stretch bg-popular-gradient rounded-t-[10px] xl:text-base text-xs text-white">
            <IconFlashlight width={24} height={24} />
            Enjoy a 20% discount when paying with crypto
          </div>
        )}
        <div
          className={cn(
            "flex md:flex-row flex-col md:justify-between md:items-center gap-2.5 flex-[1_0_0] p-4",
            title === "Crypto" &&
              selectedPaymentMethod === title &&
              "px-4 pt-0 pb-4"
          )}
        >
          <div className="flex items-center gap-2.5">
            <div className="relative w-6 h-6">
              <div
                className="w-6 h-6 rounded-full cursor-pointer border-2 border-transparent bg-clip-padding p-[2px]"
                style={{
                  background: isSelected 
                    ? 'linear-gradient(45deg, #4ade80, #3b82f6) padding-box, linear-gradient(45deg, #4ade80, #3b82f6) border-box'
                    : 'linear-gradient(45deg, #4ade80, #3b82f6) padding-box, transparent border-box',
                  border: '2px solid transparent',
                  borderRadius: '50%',
                  padding: '2px'
                }}
              />
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EDF2FF] dark:bg-[#191919]"
                style={{
                  width: isSelected ? '12px' : '15px',
                  height: isSelected ? '12px' : '15px',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
            <Text18 className="flex-[1_0_0]">Pay with {title}</Text18>
          </div>
          <div className="self-stretch flex md:flex-col flex-row items-end">
            <Title24 className="text-black dark:text-white xl:!text-[24px] lg:!text-[20px] !text-[24px]">
              {title === "Crypto" ? (
                <React.Fragment>
                  <span className="line-through">${price}</span>{" "}
                  <span>${Number(price) - 79.8}</span>
                </React.Fragment>
              ) : (
                `$${price}`
              )}
            </Title24>
            <Text18 className="dark:text-white/80 text-black/80 font-normal">
              /month
            </Text18>
          </div>
        </div>
      </div>
      {selectedPaymentMethod === title && (
        <div className="absolute bottom-0 right-[16px] left-[16px]">
          <div className="h-[4px] w-full rounded-tr-lg rounded-tl-lg overflow-hidden bg-popular-gradient"></div>
        </div>
      )}
    </div>
  );
}
