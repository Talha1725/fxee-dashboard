"use client";

import Link from "next/link";
import * as React from "react";

import OnboardBreadcrumbItem from "@/components/features/onboard/OnboardBreadcrumbItem";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const items = [
  { step: 1, href: "/onboard/1", label: "Subscription Plan" },
  { step: 2, href: "/onboard/2", label: "Add-Ons" },
  { step: 3, href: "/onboard/3", label: "Checkout" },
  { step: 4, href: "/onboard/4", label: "Contract" },
  { step: 5, href: "/onboard/5", label: "Account Type" },
  { step: 6, href: "/onboard/6", label: "Payment" },
];

export default function OnboardStepIndicator({ step }: { step?: string }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 1025px)") || true;
  const ITEMS_TO_DISPLAY = isDesktop ? 6 : 3;

  return (
    <div className="flex items-center justify-center shrink-0 self-stretch flex-[1_0_0] select-none">
      <Breadcrumb>
        <BreadcrumbList>
          <OnboardBreadcrumbItem
            item={items[0]}
            length={items.length}
            currentStep={Number(step)}
          />
          {items.length > ITEMS_TO_DISPLAY ? (
            <React.Fragment>
              <BreadcrumbItem>
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {items.slice(1, -2).map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={item.href ? item.href : "#"}>
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          ) : null}
          {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
            <OnboardBreadcrumbItem
              key={index}
              item={item}
              length={items.length}
              currentStep={Number(step)}
            />
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
