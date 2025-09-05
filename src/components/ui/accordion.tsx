"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon, MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "transition-all duration-300 ease-out flex flex-col items-start gap-4 p-5 border-green-gradient-0 data-[state=open]:before:opacity-100 dark:data-[state=open]:bg-[radial-gradient(126.8%_109.9%_at_95.59%_0%,rgba(0,0,0,0.63)_0%,rgba(0,0,0,0.90)_100%),linear-gradient(17deg,#0276DB_14.37%,#3EDC81_82.05%)] data-[state=open]:bg-[radial-gradient(126.8%_109.9%_at_95.59%_0%,rgba(255,255,255,0.63)_0%,rgba(255,255,255,0.90)_100%),linear-gradient(17deg,#0276DB_14.37%,#3EDC81_82.05%)]",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex flex-[1_0_0] self-stretch">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex-[1_0_0] flex items-start justify-between gap-4 rounded-md text-left text-sm font-medium transition-all outline-none hover:underline disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <div className="relative pointer-events-none shrink-0 mr-5">
          <PlusIcon
            size={24}
            className="absolute inset-0 transition-opacity duration-200 group-data-[state=open]:opacity-0"
          />
          <MinusIcon
            size={24}
            className="absolute inset-0 opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100"
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
