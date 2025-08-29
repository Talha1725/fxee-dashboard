"use client";
// import { useTheme } from "@/lib/contexts/ThemeContext";
// import { Text12, Text14, Text24 } from "../ui/typography";
// import { Text16 } from "../ui/typography";
// import fxeePlan from "@/public/images/fxee-plan.svg";
// import Image from "next/image";
// import AnalysisProgress from "./analysis-progress";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import { useState, useEffect } from "react";

// Custom hook for window size
// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== "undefined" ? window.innerWidth : 0,
//   });

//   useEffect(() => {
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//       });
//     }

//     if (typeof window !== "undefined") {
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }
//   }, []);

//   return windowSize;
// }

export default function PlanSection() {
  // const { theme } = useTheme();
  // const { width } = useWindowSize();

  return (
    // Commented out the plan section
    null
  );

  // return (
  //   <div className="w-full relative mt-5 p-2 md:p-4 self-stretch rounded-[16px] border border-black/5 dark:border-white/5 bg-gradient-to-b from-[#00000007] to-[#00000007]  dark:backdrop-blur-[7px] overflow-y-auto scrollbar-hide scroll-smooth">
  //     <div
  //       className={`w-full xl:w-[80%] p-4 rounded-md ${
  //         theme === "dark"
  //           ? "bg-card-green-gradient"
  //           : "bg-card-green-gradient-light"
  //       }`}
  //     >
  //       <div className="flex flex-row items-center justify-between">
  //         <div className="flex flex-col">
  //           <Text14 className="font-satoshi opacity-70 !text-white">
  //             Current Plan
  //           </Text14>
  //           <Text24 className="font-satoshi-medium !text-white">
  //             Premium Plan
  //           </Text24>
  //         </div>
  //         <div className="md:w-[48px] md:h-[48px] w-[32px] h-[32px]">
  //           <Image src={fxeePlan} alt="fxee-plan" width={100} height={100} />
  //         </div>
  //       </div>
  //       <div className="xl:w-[90%] w-[100%] h-[1px] bg-white/10 my-3"></div>

  //       <div className="xl:w-[90%] w-[100%]">
  //         <div className="flex flex-row items-center justify-between">
  //           <Text14 className="!text-white opacity-70">Deep Analysis</Text14>
  //           <Text14 className="!text-white opacity-70">16/20 used</Text14>
  //         </div>

  //         {/* Progress */}
  //         <AnalysisProgress progress={60} />
  //         <div className="flex gap-[3px] items-start">
  //           <Link
  //             href={"#"}
  //             className="liga font-medium tracking-[-0.28px] sm:tracking-[-0.32px] select-none font-satoshi-medium bg-gradient-to-b from-[#15B0F8] to-[#0276DB] text-transparent bg-clip-text dark:bg-gradient-to-b dark:from-[#15B0F8] dark:to-[#0276DB] dark:text-transparent dark:bg-clip-text text-[12px] border-b border-[#0276DB]"
  //           >
  //             Upgrade
  //           </Link>
  //           <Text12 className="font-satoshi opacity-60 !text-white">
  //             to VIP Platinum Plan to get 100 Deep Analysis per day.
  //           </Text12>
  //         </div>
  //       </div>

  //       <div className="xl:w-[90%] w-[100%] h-[2px] bg-white/10 my-3 md:my-5"></div>
  //       <p className="!text-white/70 font-satoshi text-[12px] sm:text-[14px]">
  //         Your next bill is for <span className="!text-white">$99.00</span> on{" "}
  //         <span className="!text-white">29/05/2025</span>
  //       </p>
  //       <div className="flex gap-2 mt-2 sm:mt-4">
  //         <Button
  //           variant={width > 768 ? "white" : "fancy"}
  //           className="font-satoshi-medium w-[129px] h-[36px] md:h-[40px] rounded-[8px]"
  //         >
  //           Upgrade Plan
  //         </Button>
  //         <Button
  //           variant={"black"}
  //           className="font-satoshi text-white bg-white/5 w-[129px] h-[36px] md:h-[40px] border-white/15 hover:bg-white/10 hover:opacity-70 rounded-[8px]"
  //         >
  //           Cancel Plan{" "}
  //         </Button>
  //       </div>
  //     </div>
  //   </div>
  // );
}
