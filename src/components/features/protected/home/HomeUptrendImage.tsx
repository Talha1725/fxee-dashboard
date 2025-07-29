import React from "react";
import Image from "next/image";

import LandingUptrendImage from "@/public/images/landing-uptrend.png";
import { cn } from "@/lib/utils";

export default function HomeUptrendImage({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("relative w-10 h-10", className)}>
      <div className="absolute inset-0 rounded-full blur-[6.15px] bg-gray-300">
        <Image src={LandingUptrendImage} alt="" priority fill />
      </div>
      <Image
        src={LandingUptrendImage}
        alt="Fxee"
        priority
        className="relative rounded-full"
      />
    </div>
  );
}
