import React from "react";

import SignPageImage from "@/public/images/sign-page-image.jpg";
import Link from "next/link";

import { IconLogo3 } from "@/components/ui/icon";

export default function SignHeroImage() {
  return (
    <div className="hidden lg:flex flex-col items-start self-stretch flex-[1_0_0] shrink-0 p-2">
      <div className="flex justify-center items-start flex-[1_0_0] self-stretch rounded-3xl">
        <div
          className="flex justify-center items-start flex-[1_0_0] self-stretch relative rounded-3xl !bg-cover !bg-center"
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.5%, #000 88.52%), linear-gradient(28deg, #0276DB 15.5%, #3EDC81 100%), url(${SignPageImage.src}) lightgray -632.353px 0px / 255.237% 100% no-repeat`,
            backgroundBlendMode: "normal, hue, normal",
          }}
        >
          <Link
            href={"/"}
            className="absolute top-[30px] left-[30px] cursor-pointer"
          >
            <IconLogo3 width={156.608} height={40} />
          </Link>
          <div className="absolute left-[61px] right-[61px] bottom-[28px] flex flex-col items-center gap-5 pb-5">
            <h1 className="w-[500px] text-white text-center text-5xl font-bold leading-normal capitalize select-none pointer-events-none">
              AI-Driven Insights. Real-Time Execution.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
