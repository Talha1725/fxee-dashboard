"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import {  PlanPoints } from "../ui/icon";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { X } from "lucide-react";
import { Text14 } from "../ui/typography";
import { Button } from "../ui/button";
import chartBlack from "@/public/images/modal-chart-black.svg";
import chartWhite from "@/public/images/modal-chart-white.svg";

export default function LimitReachModal({
  isOpenLimitReach,
  onCloseLimitReach,
}: {
  isOpenLimitReach: boolean;
  onCloseLimitReach: () => void;
}) {
  const { theme } = useTheme();

  return (
    <Dialog open={isOpenLimitReach} onOpenChange={onCloseLimitReach}>
      <DialogContent showCloseButton={false} className="overflow-auto scrollbar-hide !min-w-[95%] md:!min-w-[600px] lg:!min-w-[800px] !p-5 max-h-[90vh] dark:bg-[#1C1C1C]">
        <DialogHeader>
            <div className="modal-gradient rounded-xl w-full min-h-[228px] relative mb-5 overflow-hidden border-0">
                <button  onClick={onCloseLimitReach} className="cursor-pointer">
                    <X className="w-6 h-6 text-white absolute top-4 left-4" />
                </button>
                
                <div className="flex items-end justify-end h-full absolute bottom-[-10px] sm:bottom-0 -right-[210px] sm:right-0">
                <Image src={theme === "dark" ? chartBlack : chartWhite} alt="logo" className="z-50" />
            </div>
            </div>
           
          <DialogTitle className="font-satoshi-bold text-start">
            Limit Reached
          </DialogTitle>

          <DialogDescription>
            <p className="font-satoshi-medium dark:text-white/50 text-black/60 text-start">
              You’ve reached the maximum number of uses for this AI tool on your
              current plan. To continue using the AI Trend Forecast, you can
              purchase:
            </p>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <div
                className={`dark:bg-[#ffffff05] bg-gradient-to-b from-[#00000004] to-[#00000011] p-6 md:p-7 border dark:border-white/5 rounded-xl`}
              >
                <h1 className="font-satoshi-bold text-md md:text-lg dark:text-white/50 text-black/40 uppercase text-start">
                  Premium Plan
                </h1>
                <h1 className="font-satoshi-bold text-2xl md:text-4xl dark:text-white text-black mt-2 text-start">
                  $99/mo
                </h1>
                <div className="mt-3">
                  <div
                    className={`flex items-center gap-2 ${
                      theme === "dark"
                        ? "bottom-border-dark"
                        : "bottom-border-light"
                    } py-2`}
                  >
                    <PlanPoints />
                    <Text14 className="font-satoshi-medium dark:text-white text-black text-start">
                      Analyze 20 times everyday{" "}
                    </Text14>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      theme === "dark"
                        ? "bottom-border-dark"
                        : "bottom-border-light"
                    } py-2`}
                  >
                    <PlanPoints />
                    <Text14 className="font-satoshi-medium dark:text-white text-black text-start">
                      Access to 3 AI Tools{" "}
                    </Text14>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <PlanPoints />
                    <Text14 className="font-satoshi-medium dark:text-white text-black text-start">
                      Set Custom Goal{" "}
                    </Text14>
                  </div>
                </div>
              </div>
              <div
                className={`bg-gradient-to-b from-[#00000004] dark:from-[#ffffff05] to-[#00000011] dark:to-[#ffffff13] p-5 md:p-7 border dark:border-white/5 rounded-xl relative overflow-hidden`}
              >
                <div className="h-[4px] w-full md:w-[80%] left-1/2 -translate-x-1/2 absolute bottom-0 mx-auto rounded-tr-lg rounded-tl-lg overflow-hidden bg-popular-gradient"></div>
                <h1 className="font-satoshi-bold text-md md:text-lg dark:text-white/50 text-black/40 uppercase text-start">
                  VIP Platinum Plan
                </h1>
                <h1 className="font-satoshi-bold text-2xl md:text-4xl dark:text-white text-black mt-2 text-start">
                  $199/mo
                </h1>
                <div className="mt-3">
                  <div
                    className={`flex items-center gap-2 ${
                      theme === "dark"
                        ? "bottom-border-dark"
                        : "bottom-border-light"
                    } py-2`}
                  >
                    <PlanPoints />
                    <Text14 className="font-satoshi-medium dark:text-white text-black text-start">
                      Analyze 100 times everyday{" "}
                    </Text14>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      theme === "dark"
                        ? "bottom-border-dark"
                        : "bottom-border-light"
                    } py-2`}
                  >
                    <PlanPoints />
                    <Text14 className="font-satoshi-medium dark:text-white text-black text-start">
                      Access to All Tools{" "}
                    </Text14>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <PlanPoints />
                    <Text14 className="font-satoshi-medium dark:text-white text-black text-start">
                      Set Custom Goal{" "}
                    </Text14>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant={theme === "dark" ? "white" : "black"}
              className="font-satoshi-bold w-full mt-5 btn-shadow text-base"
            >
              Upgrade Plan
            </Button>{" "}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
