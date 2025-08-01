import React from "react";

import { Text18, Title24 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

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
  return (
    <div
      className={cn(
        "flex items-center gap-4 self-stretch rounded-[10px] border border-white/30 bg-dark-radial-gradient cursor-pointer transition-all duration-300",
        selectedPaymentMethod === title &&
          "border-none border-green-gradient bg-green-radial-gradient"
      )}
      onClick={() => setSelectedPaymentMethod(title)}
    >
      <div className="flex flex-col gap-4 flex-[1_0_0] self-stretch">
        {title === "Crypto" && selectedPaymentMethod === title && (
          <div className="w-full flex justify-center items-center gap-[5px] px-2.5 py-[5px] self-stretch bg-popular-gradient rounded-t-[10px]">
            Enjoy a 20% discount when paying with cryptocurrency
          </div>
        )}
        <div
          className={cn(
            "flex items-center gap-2.5 flex-[1_0_0] p-4",
            title === "Crypto" &&
              selectedPaymentMethod === title &&
              "px-4 pt-0 pb-4"
          )}
        >
          <div
            className={cn(
              "w-[24px] h-[24px] rounded-full border-green-gradient before:!p-[2px] transition-all duration-300",
              selectedPaymentMethod === title && "border-none before:!p-[6px]"
            )}
          ></div>
          <Text18 className="flex-[1_0_0]">Pay with {title}</Text18>
          <div className="self-stretch flex flex-col items-end">
            <Title24>
              {title === "Crypto" ? (
                <React.Fragment>
                  <span className="line-through">${price}</span>{" "}
                  <span>${Number(price) - 79.8}</span>
                </React.Fragment>
              ) : (
                `$${price}`
              )}
            </Title24>
            <Text18>/month</Text18>
          </div>
        </div>
      </div>
      {selectedPaymentMethod === title && (
        <div className="absolute bottom-0 right-[16px] left-[16px]">
          <div className="h-[4px] w-full rounded-r bg-popular-gradient"></div>
        </div>
      )}
    </div>
  );
}
