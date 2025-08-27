import React from "react";
import Image from "next/image";

import AISupportImage from "@/public/images/ai-support.png";
import { cn } from "@/lib/utils";

export default function SupportAIImage({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-11 h-11 cursor-pointer", className)}>
      <div className="absolute inset-0 blur-[6px]">
        <Image src={AISupportImage} alt="AI Support" fill sizes="44px" />
      </div>
      <Image src={AISupportImage} alt="AI Support" fill sizes="44px" />
    </div>
  );
}
