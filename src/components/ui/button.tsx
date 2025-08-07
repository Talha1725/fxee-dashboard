import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap rounded-md text-sm font-regular font-medium hover:cursor-pointer transition-all shrink-0 [&_svg]:shrink-0 outline-none border disabled:opacity-20 disabled:cursor-not-allowed disabled:pointer-event-none",
  {
    variants: {
      variant: {
        default:
          "bg-dark-gradient text-foreground shadow-subtle border-white/30",
        fancy:
          "bg-picton-blue shadow-picton border-none hover:bg-picton-blue-80 text-white z-50",
        ghost: "bg-dark-gradient border-none",
        danger: "bg-danger-red border-none",
        green: "bg-green-linear border-none",
        grey: "bg-button-grey-gradient border-none",
        white: "bg-white text-[#111] border border-white/30 hover:bg-white/80",
        popular:
          "bg-popular-gradient border-transparent border-none shadow-none hover:bg-picton-blue-80",
        darkPopular:
          "bg-dark-green-gradient border-transparent border-none shadow-none hover:bg-picton-blue-80",
      },
      size: {
        default: "p-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
