import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonText } from "@/components/ui/typography";

export default function LandingButton({
  className,
  icon,
  color = "black",
  text,
  onClick,
  href,
}: {
  className?: string;
  icon?: React.ReactNode;
  color?: "white" | "black";
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
}) {
  const buttonContent = (
    <>
      {icon}
      <ButtonText className={color === "white" ? "text-white" : "text-[#111]"}>
        {text}
      </ButtonText>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "flex justify-center items-center gap-2.5 px-4 py-2.5 cursor-pointer hover:opacity-80 active:scale-90 z-1 shrink-0 select-none relative border border-transparent transition-all duration-200",
          className
        )}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "flex justify-center items-center gap-2.5 px-4 py-2.5 cursor-pointer hover:opacity-80 active:scale-90 z-1 shrink-0 select-none relative border border-transparent transition-all duration-200",
        className
      )}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}
