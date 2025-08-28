import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import checkedIcon from "@/public/images/checked-icon.svg";

export default function OnboardBreadcrumbItem({
  item,
  length,
  currentStep,
}: {
  item: { href: string; label: string; step: number };
  length: number;
  currentStep: number;
}) {
  const isCompleted = item.step < currentStep;
  const isCurrent = item.step === currentStep;
  const isFuture = item.step > currentStep;

  return (
    <React.Fragment>
      <BreadcrumbItem>
        <div className="flex items-center gap-2 shrink-0 self-stretch">
          <div
            className={cn(
              "w-5 h-5 flex flex-col items-center justify-center gap-0.5 p-0.5 rounded-full transition-all",
              isCompleted && "bg-[#3edc81] border border-[#3edc81]", // Green background for completed
              isCurrent && "bg-picton-blue", // Blue background for current
              !isCompleted && !isCurrent && "bg-[#0E121B] border border-white/10" // Default for future steps
            )}
          >
            {isCompleted ? (
              <Image 
                src={checkedIcon} 
                alt="Completed" 
                className="w-4 h-4"
              />
            ) : (
              <span className="text-white text-[12px] font-regular font-medium liga leading-4">
                {item.step}
              </span>
            )}
          </div>
          {isFuture ? (
            // Disabled link for future steps
            <span
              className={cn(
                "select-none dark:text-white/40 text-black/40 text-[16px] font-regular font-normal liga leading-5 tracking-[-0.096px] cursor-not-allowed"
              )}
            >
              {item.label}
            </span>
          ) : (
            // Active link for completed and current steps
            <BreadcrumbLink asChild>
              <Link
                href={item.href ?? "/"}
                className={cn(
                  "select-none dark:text-white/80 text-[16px] font-regular font-normal liga leading-5 tracking-[-0.096px]",
                  isCurrent && "dark:text-white text-black",
                  isCompleted && "dark:text-white/60 text-black/60" // Muted text for completed steps
                )}
              >
                {item.label}
              </Link>
            </BreadcrumbLink>
          )}
        </div>
      </BreadcrumbItem>
      {item.step !== length && <BreadcrumbSeparator />}
    </React.Fragment>
  );
}
