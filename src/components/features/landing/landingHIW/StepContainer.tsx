"use client";

import React from "react";
import * as motion from "motion/react-client";

import { cn } from "@/lib/utils";
import { fadeInLeftView, fadeInRightView } from "@/lib/motion-variants";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function StepContainer({
  children,
  className,
  reverseOnDesktop,
  onRight,
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}: {
  children?: React.ReactNode;
  className?: string;
  reverseOnDesktop?: boolean;
  onRight?: boolean;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}) {
  const motionVariant = reverseOnDesktop ? fadeInLeftView : fadeInRightView;

  return (
    <motion.div
      {...motionVariant}
      className={cn(
        "flex items-center min-[780px]:flex-row flex-col md:gap-0 gap-5 min-h-fit min-[769px]:h-[500px] min-[780px]:h-[290px] min-[900px]:h-[340px] lg:h-[372px] bg-gradient-to-r from-white/10 via-white/5 to-transparent rounded-md border border-white/20 p-5 relative xl:w-full min-[780px]:w-[90%] w-full",
        className
      )}
    >
      <div className={cn(
        "w-full min-[780px]:w-1/2 xl:px-10",
        onRight && "min-[780px]:order-2"
      )}>
        <h1 className="md:text-[26px] text-2xl font-satoshi-medium">{title}</h1>
        <p className="text-white/40 font-satoshi mt-2 sm:text-base text-sm">
          {description}
        </p>
        <Button variant={"white"} className="font-satoshi-medium mt-4">{buttonText}</Button>
      </div>
      <div className={cn(
        "w-full min-[780px]:w-1/2 h-[220px] min-[450px]:h-[250px] md:h-auto",
        onRight && "min-[780px]:order-1"
      )}>
        <Image src={imageSrc} alt={imageAlt} className={`absolute min-[780px]:relative -bottom-5 min-[780px]:bottom-0 translate-y-[0%] min-[780px]:translate-y-0 ${onRight ? "min-[780px]:translate-x-[-10%]" :"min-[780px]:translate-x-[10%]"}  min-[780px]:left-0 left-1/2 -translate-x-1/2 w-[95%] min-[420px]:w-[323px] min-[420px]:h-[270px] min-[500px]:w-[75%] min-[500px]:h-[300px] min-[781px]:w-auto min-[780px]:h-auto`} />
      </div>
      {/* {children} */}
    </motion.div>
  );
}
