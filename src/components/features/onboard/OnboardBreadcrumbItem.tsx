import React from "react";
import Link from "next/link";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

export default function OnboardBreadcrumbItem({
  item,
  length,
  currentStep,
}: {
  item: { href: string; label: string; step: number };
  length: number;
  currentStep: number;
}) {
  return (
    <React.Fragment>
      <BreadcrumbItem>
        <div className="flex items-center gap-2 shrink-0 self-stretch">
          <div
            className={cn(
              "w-5 h-5 flex flex-col items-center justify-center gap-0.5 p-0.5 bg-picton-blue rounded-full transition-all",
              item.step !== currentStep && "bg-[#0E121B] border border-white/10"
            )}
          >
            <span className="text-white text-[12px] font-regular font-medium liga leading-4">
              {item.step}
            </span>
          </div>
          <BreadcrumbLink asChild>
            <Link
              href={item.href ?? "/"}
              className={cn(
                "select-none dark:text-white/80 text-[16px] font-regular font-normal liga leading-5 tracking-[-0.096px]",
                item.step === currentStep && "dark:text-white text-black"
              )}
            >
              {item.label}
            </Link>
          </BreadcrumbLink>
        </div>
      </BreadcrumbItem>
      {item.step !== length && <BreadcrumbSeparator />}
    </React.Fragment>
  );
}
