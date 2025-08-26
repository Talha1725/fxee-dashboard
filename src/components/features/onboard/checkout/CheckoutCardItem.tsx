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
          <div
            className={cn(
              "w-[24px] h-[24px] rounded-full border-green-gradient before:!p-[2px] transition-all duration-300",
              selectedPaymentMethod === title && "border-none before:!p-[6px]"
            )}
          ></div>
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
